import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import { Link, graphql } from "gatsby";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import ProdCanvas from "../components/prodCanvas";
import Star from "../components/star";
import DeliveryDetails from "../components/deivery-details";
import MainLayout from "../layout";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import CartControl from "../components/cartControl";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import storeContext from "../layout/context";

/* eslint no-undef: "off" */

const Breadcrumb = styled(Link)`
  &:hover {
    color: var(--primary);
  }
`;

const ProducPage = ({ data, pageContext, location }) => {
  const { setVisible } = useContext(storeContext);
  setVisible(false);

  const product = data.product.product;
  const { slug } = pageContext;
  return (
    <MainLayout>
      <div className="px-4 pt-2 md:px-8 lg:px-16">
        <Helmet>
          <title>{`${product.name} | ${config.siteTitle}`}</title>
        </Helmet>
        <SEO productPath={slug} productSeo={product} />
        <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
          <div className="md:col-span-5 md:flex md:gap-4 md:py-6 md:bg-white">
            <div className="-mx-4 md:mx-0 md:px-6 flex-1 grid ">
              <Carousel>
                {product.galleryImages.nodes.map((image, key) => (
                  <div key={key} className="h-full">
                    <img src={image.sourceUrl} className="h-full" />
                  </div>
                ))}
              </Carousel>
            </div>
            <div className="flex-1">
              <ul className="list-none flex mt-2 md:my-0 gap-1">
                <li>
                  <Breadcrumb to="/">Home</Breadcrumb>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 206.089 206.089"
                    className="fill-current h-4 w-4"
                  >
                    <path d="M161.812 147.323l-10.607-10.606 33.672-33.672-33.672-33.671 10.607-10.606 44.277 44.278-44.277 44.277zm1.851-44.279l-19.208-19.208H0v38.25h144.621l19.042-19.042z" />
                  </svg>
                </li>
                <li>
                  <Breadcrumb
                    to={`/category/${product.productCategories.nodes[0].slug}`}
                  >
                    {product.productCategories.nodes[0].name}
                  </Breadcrumb>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 206.089 206.089"
                    className="fill-current h-4 w-4"
                  >
                    <path d="M161.812 147.323l-10.607-10.606 33.672-33.672-33.672-33.671 10.607-10.606 44.277 44.278-44.277 44.277zm1.851-44.279l-19.208-19.208H0v38.25h144.621l19.042-19.042z" />
                  </svg>
                </li>
                <li className="flex items-center">
                  <Breadcrumb
                    to={`/${product.slug}`}
                    css={css`
                      width: 215px;
                      white-space: nowrap;
                      overflow: hidden;
                      text-overflow: ellipsis;
                      display: block;
                    `}
                  >
                    {product.name}
                  </Breadcrumb>
                </li>
              </ul>
              <h1 className="my-2">{product.name}</h1>
              <div className="flex items-center mt-2">
                <Star star={product.averageRating} />{" "}
                <small className="ml-2">{product.reviewCount} reviews</small>
              </div>
              <div className="my-2">
                <small className="font-bold mr-1">{product.salePrice}</small>
                <small className="line-through text-xs">
                  {product.regularPrice}
                </small>
              </div>
              <div
                dangerouslySetInnerHTML={{ __html: product.shortDescription }}
              />
              <CartControl productId={product.productId} />
            </div>
          </div>
          <div className="md:col-span-2 bg-white">
            <DeliveryDetails />
          </div>
        </div>
        <div className="mb-4">
          <h3 className="my-2">Product Description</h3>
          <div dangerouslySetInnerHTML={{ __html: product.description }} />
        </div>
        <div className="mb-10">
          <h3>Related Products</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 overflow-auto mt-4">
            {product.related.nodes
              .filter((item) => item.slug)
              .map((item) => (
                <ProdCanvas product={item} key={item.id} />
              ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ProducPage;

export const pageQuery = graphql`
  query ProductById($id: ID!) {
    product: beaf {
      product(id: $id, idType: ID) {
        ... on BEAF_SimpleProduct {
          id
          name
          slug
          averageRating
          reviewCount
          description
          shortDescription
          salePrice
          regularPrice
          onSale
          productId
          productCategories {
            nodes {
              name
              slug
            }
          }
          image {
            sourceUrl
          }
          description
          link
          sku
          galleryImages {
            nodes {
              sourceUrl
            }
          }
          related {
            nodes {
              ...ProductDetails
            }
          }
        }
      }
    }
  }
`;
