import React, { useContext, useState, useEffect } from "react";
import storeContext from "../layout/context";
import styled from "@emotion/styled";

const Button = styled.button`
  display: inline-block;
  outline: none;
  border: none;
  font-weight: 600;
  padding: 10px 26px;
  font-size: 16px;
  background-color: var(--color-black);
  color: var(--color-white);
  border-radius: 25px;
  &:hover {
    background: var(--primary);
    color: var(--color-white);
  }
`;

const CartControl = ({ productId }) => {
  const { cart, addCart, updateCart } = useContext(storeContext);

  const [count, setCount] = useState(0);
  const [itemKey, setItemKey] = useState(null);

  useEffect(() => {
    let temp = 0;
    const item =
      cart &&
      cart.items &&
      cart.items.filter((item) => item.id == productId)[0];
    setCount((item && item.quantity) || 0);
    setItemKey((item && item.key) || "");
  }, [productId, cart]);

  return (
    <React.Fragment>
      {count ? (
        <div className="flex mt-3">
          <input
            type="number"
            name="quantity"
            value={count}
            className="text-center w-12"
            onChange={(e) => setCount(e.target.value)}
          />
          <Button className="ml-2" onClick={() => updateCart(itemKey, count)}>
            Update cart
          </Button>
        </div>
      ) : (
        <Button className="mt-3" onClick={() => addCart(productId, 1)}>Add cart</Button>
      )}
    </React.Fragment>
  );
};

export default CartControl;
