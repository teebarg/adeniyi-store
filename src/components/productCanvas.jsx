import React from "react";
import { device } from "../css/device";
import styled from "@emotion/styled";
import { rhythm, scale } from "../utils/typography";
import { Link } from "gatsby";
import { translate, translateXY, shadow } from "../css/mixins";
import Star from "./star";
import Badge from "./badge";
import AddCartBtn from "./AddCartBtn";

const Card = styled.div`
  background-color: var(--color-white);
  padding: 15px;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  position: relative;
  margin: 20px auto;
  width: 100%;
  &:hover {
    & > div:first-of-type {
      top: -40px;
    }
    div img {
      ${shadow}
    }
    .category > span {
      border-color: #ddd;
      box-shadow: none;
      padding: 5px 28px;
    }
  }
`;

const ImageContainer = styled.div`
  position: absolute;
  top: 5px;
  left: 50%;
  ${translate("-50%")}
  width: 100%;
  padding: 15px;
  transition: all 0.2s ease-in-out;
  img {
    transition: all 0.2s ease-in-out;
    border-radius: 6px;
  }
  @media ${device.tablet} {
    top: -40px;
  }
`;

const Content = styled.div`
  margin-top: 220px;
  .category {
    text-align: center;
    font-weight: bold;
    padding: 5px;
    position: relative;
    transition: all 0.2s ease-in-out;
  }
  .category > * {
    position: absolute;
    top: 50%;
    left: 50%;
    ${translateXY("-50%", "-50%")}
  }
  .category > span {
    padding: 7px 30px;
    border: 1px solid #313131;
    background: #212121;
    color: var(--color-white);
    ${shadow}
    border-radius: 27px;
    transition: all 0.05s ease-in-out;
    @media ${device.tablet} {
      border-color: #ddd;
      box-shadow: none;
      padding: 5px 28px;
    }
  }
`;

const ProductTitle = styled.div`
  h6 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

const ProductCanvas = ({ product }) => {
  return (
    <>
      <Card>
        <ImageContainer>
          <img src={product.image.sourceUrl} style={{ height: "220px" }} />
        </ImageContainer>
        {product.onSale && <Badge />}
        <Content>
          <div className="category">
            <span className="text-xs">
              {product.productCategories.nodes[0].name}
            </span>
          </div>
          <ProductTitle>
            <h6 className="font-semibold mb-2 mt-4">{product.name}</h6>
          </ProductTitle>
          <div className="flex items-center justify-between">
            <div>
              <small className="font-bold mr-1">{product.salePrice}</small>
              <small className="line-through text-xs">
                {product.regularPrice}
              </small>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 485 485"
              className="h-5 w-5 fill-current text-red-600"
            >
              <path d="M348.629 11.209c-41.588 0-80.489 19.029-106.129 50.852-25.641-31.823-64.541-50.852-106.129-50.852C61.176 11.209 0 72.385 0 147.579c0 59.064 35.289 127.458 104.885 203.28 53.64 58.438 111.995 103.687 128.602 116.164l9.01 6.769 9.009-6.768c16.608-12.477 74.964-57.725 128.605-116.162C449.71 275.04 485 206.646 485 147.579c0-75.194-61.176-136.37-136.371-136.37z" />
            </svg>
          </div>
          <div className="flex items-center my-1">
            <Star star={product.averageRating} />{" "}
            <small className="ml-2" style={{ fontSize: "80%" }}>
              {product.reviewCount} reviews
            </small>
          </div>
          <div className="card-footer pt-2 mt-2 px-2">
            <AddCartBtn to={`/${product.slug}`}>Add to Cart</AddCartBtn>
          </div>
        </Content>
      </Card>
    </>
  );
};

export default ProductCanvas;
