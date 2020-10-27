import React, { useContext } from "react";
import MainLayout from "../layout";
import storeContext from "../layout/context";
import styled from "@emotion/styled";
import Currency from "../utils/naira";
import { device } from "../css/device";

const Button = styled.button`
  display: inline-block;
  padding: 5px 15px;
  background: #ffc21d;
  color: #232323;
  font-weight: 900;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 2px;
  line-height: inherit;
`;

const FormGroup = styled.div`
  display: block;
  label {
    display: block;
    font-size: 70%;
    color: var(--color-black-light);
  }
  input {
    font-size: 16px;
    border-radius: 0;
    outline: none;
    border: 1px solid #ccc;
    height: 35px;
    width: 80%;
    vertical-align: middle;
    color: #555;
    display: block;
    margin-bottom: 10px;
    @media ${device.tablet} {
      width: 100%;
    }
  }
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
  @media ${device.tablet} {
    display: block;
  }
`;

const Checkout = () => {
  const { cart, setVisible } = useContext(storeContext);
  setVisible(false);
  return (
    <MainLayout>
      <div className="p-4 md:px-8 lg:px-16 gap-4 grid-cols-1 grid md:grid-cols-5">
        <div className="col-span-3 bg-white p-4 rounded">
          <h3 className="mb-3">Address</h3>
          <form name="Contact Form" method="POST" data-netlify="true">
            <input type="hidden" name="checkoutForm" value="Contact Form" />
            <FormRow>
              <FormGroup>
                <label htmlFor="firstname">FirstName</label>
                <input type="text" name="firstname" id="firstname" />
              </FormGroup>
              <FormGroup>
                <label htmlFor="lastname">LastName</label>
                <input type="text" name="lastname" id="lastname" />
              </FormGroup>
            </FormRow>
            <FormRow>
              <FormGroup>
                <label htmlFor="address">Address</label>
                <input type="text" name="address" id="address" />
              </FormGroup>
              <FormGroup>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" />
              </FormGroup>
            </FormRow>
            <FormRow>
              <FormGroup>
                <label htmlFor="phone">Phone</label>
                <input type="number" name="phone" id="phone" />
              </FormGroup>
            </FormRow>
            <Button type="submit">Submit</Button>
          </form>
        </div>
        <div className="col-span-2 py-4 px-4 md:px-0">
          <h3 className="mb-3">Summary</h3>
          {cart && (<ul className="bg-white rounded-sm">
            {cart.items &&
              cart.items.map((item) => (
                <li key={item.key} className="grid grid-cols-3">
                  <div className="flex items-center col-span-2">
                    <p className="mb-0">{item.name}</p>
                    <span className="mx-4 text-gray-500">x</span>{" "}
                    <p className="mb-0">{item.quantity}</p>{" "}
                  </div>
                  <div>
                    <h4 className="text-gray-800 text-right">
                      {Currency(item.totals.line_total)}
                    </h4>
                  </div>
                </li>
              ))}
            <li className="grid grid-cols-3 border-0 border-gray-500 border-solid -mx-2 px-2 mt-2 py-2 border-t">
              <h3 className="uppercase text-gray-700 col-span-2">Total:</h3>
              <h3 className="text-right">{Currency(cart.totals && cart.totals.total_price)}</h3>
            </li>
          </ul>)}
        </div>
      </div>
    </MainLayout>
  );
};

export default Checkout;
