import React, { useContext, useState, useEffect } from "react";
import storeContext from "../layout/context";
import Input from "./input";
import { css } from "@emotion/core";
import { device } from "../css/device";
import Currency from "../utils/naira";

const CartItem = ({ item, index }) => {
  const { updateCart } = useContext(storeContext);

  const [count, setCount] = useState(item.quantity);

  return (
    <React.Fragment>
      <div className="mb-4 bg-white p-4 relative md:flex md:gap-4 md:items-start">
        <h4
          css={css`
            position: absolute;
            top: 5px;
            left: 5px;
          `}
        >
          {index}
        </h4>
        <div className="flex flex-1 gap-2">
          <img
            src={item.images[0].src}
            srcSet={item.images[0].srcset}
            alt={item.images[0].alt}
            sizes={item.images[0].sizes}
            css={css`
              height: 150px;
              width: 150px;
              @media ${device.tablet} {
                height: 100px;
                width: 100px;
              }
            `}
          />
          <div>
            <h3 className="mb-1">{item.name}</h3>
            <span
              dangerouslySetInnerHTML={{ __html: item.short_description }}
            />
          </div>
        </div>
        <div className="flex items-center mt-2 md:mt-0">
          <div className="block">
            <Input
              name="quantity"
              value={count}
              onChange={(e) => setCount(e.target.value)}
            />
          </div>
          <span className="mx-4 text-gray-500">x</span>
          <h4 className="text-gray-700">{Currency(item.prices.sale_price)}</h4>
          <div
            css={css`
              border-left: 1px solid #ccc;
              padding-left: 15px;
              margin-left: 15px;
            `}
          >
            <h3 className="text-gray-800">
              {Currency(item.totals.line_total)}
            </h3>
          </div>
        </div>
        <div className="flex gap-4 items-center justify-between mt-4 md:mt-0">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
            onClick={() => updateCart(item.key, count)}
          >
            Update
          </button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 354.319 354.319"
            className="fill-current h-6 w-6 text-red-600 hover:text-red-700 cursor-pointer"
            onClick={() => updateCart(item.key, count)}
          >
            <path d="M293.765 125.461l-41.574-17.221 17.221-41.574c3.17-7.654-.464-16.428-8.118-19.599L150.428 1.146c-7.653-3.17-16.428.464-19.598 8.118l-17.221 41.574-41.574-17.221c-7.654-3.17-16.428.464-19.599 8.118-3.17 7.654.464 16.428 8.118 19.599l55.433 22.961 96.628 40.024H87.16c-8.284 0-15 6.716-15 15v200c0 8.284 6.716 15 15 15h180c8.284 0 15-6.716 15-15V153.126l.125.052a14.962 14.962 0 005.734 1.146c5.886 0 11.472-3.487 13.864-9.264 3.17-7.654-.464-16.429-8.118-19.599zM141.326 62.318l11.48-27.716 83.148 34.441-11.48 27.716-41.574-17.22-41.574-17.221z" />
          </svg>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CartItem;
