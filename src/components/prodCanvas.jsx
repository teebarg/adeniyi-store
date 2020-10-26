import React from "react";
import { device } from "../css/device";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { rhythm, scale } from "../utils/typography";
import { Link } from "gatsby";
import { translate, translateXY, shadow } from "../css/mixins";
import Star from "./star";
import Badge from "./badge";

const Card = styled.div`
  position: relative;
  &:hover {
    ul li {
      transform: translateX(0);
    }
    ul li a:hover {
      color: #fff;
      background-color: #ff7315;
      box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
    }
    .cartbtn {
      bottom: 0;
    }
  }
`;

const Social = styled.ul`
  padding: 0;
  margin: 0;
  position: absolute;
  bottom: 50px;
  right: 25px;
  z-index: 1;
  li {
    margin: 0 0 10px;
    display: block;
    transform: translateX(100px);
    transition: all 0.5s;
  }
  @media ${device.tablet} {
    right: 15px;
  }
`;

const SocialLink = styled(Link)`
  color: #232020;
  background-color: #fff;
  height: 45px;
  width: 45px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease 0s;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  @media ${device.tablet} {
    height: 30px;
    width: 30px;
  }
`;

const AddCartBtn = styled(Link)`
  color: #fff;
  background-color: #232020;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  width: 100%;
  padding: 10px 10px;
  display: block;
  position: absolute;
  left: 0;
  bottom: -100%;
  transition: all 0.3s;
  cursor: pointer;
`;

const ProdCanvas = ({ product }) => {
  return (
    <>
      <Card className="relative flex flex-col">
        <div className="overflow-hidden relative">
          {product.onSale && <Badge />}
          <Link to={`/${product.slug}`} className="block">
            <img
              className="rounded-md w-full"
              src={product.image && product.image.sourceUrl}
              css={css`
                height: 285px;
                @media ${device.tablet} {
                  height: 200px;
                }
              `}
            />
          </Link>
          <Social>
            <li>
              <SocialLink to={`/${product.slug}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 278 278"
                  className="w-3 h-3 md:h-5 md:w-5 fill-current"
                >
                  <path d="M205.333 65H179.5V28.167C179.5 12.636 167.198 0 151.667 0H127c-15.531 0-28.5 12.636-28.5 28.167V65H73.333c-4.142 0-7.833 3.358-7.833 7.5v198c0 4.142 3.691 7.5 7.833 7.5h132c4.142 0 7.167-3.358 7.167-7.5v-198c0-4.142-3.025-7.5-7.167-7.5zM113.5 28.167C113.5 20.906 119.739 15 127 15h24.667c7.26 0 12.833 5.906 12.833 13.167V65h-51V28.167z" />
                </svg>
              </SocialLink>
            </li>

            <li>
              <SocialLink to={`/${product.slug}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 485 485"
                  className="w-3 h-3 md:h-5 md:w-5 fill-current"
                >
                  <path d="M348.629 11.209c-41.588 0-80.489 19.029-106.129 50.852-25.641-31.823-64.541-50.852-106.129-50.852C61.176 11.209 0 72.385 0 147.579c0 59.064 35.289 127.458 104.885 203.28 53.64 58.438 111.995 103.687 128.602 116.164l9.01 6.769 9.009-6.768c16.608-12.477 74.964-57.725 128.605-116.162C449.71 275.04 485 206.646 485 147.579c0-75.194-61.176-136.37-136.371-136.37z" />
                </svg>
              </SocialLink>
            </li>
          </Social>
          <div className="transmitv single-item">
            <AddCartBtn to={`/${product.slug}`} className="cartbtn">
              Add to Cart
            </AddCartBtn>
          </div>
        </div>
        <div className="p-4 text-center flex-1 flex flex-col">
          <h4
            css={css`
              &:hover {
                color: var(--primary);
              }
            `}
            className="title font-bold text-gray-800 mb-2 capitalize"
          >
            <Link
              to={`/${product.slug}`}
              style={{ fontSize: "inherit" }}
              href="#"
            >
              {product.name}{" "}
            </Link>
          </h4>
          <span className="text-gray-900 font-bold text-xs mt-auto">
            <del className="mr-2 text-gray-600 font-normal">
              {product.regularPrice}
            </del>
            {product.salePrice}
          </span>
        </div>
      </Card>
    </>
  );
};

export default ProdCanvas;
