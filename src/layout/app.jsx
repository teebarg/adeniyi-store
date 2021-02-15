import React, { useState, useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { StoreProvider } from "./context";
import http from "../utils/http";

const AppProvider = ({ location, children }) => {
  const [cart, setCart] = useState([]);
  const [visible, setVisible] = useState(true);

  const data = useStaticQuery(graphql`
    query GlobalQuery1 {
      allWcProductsCategories {
        nodes {
          name
          slug
          count
          image {
            src
          }
        }
      }
    }
  `);
  const categories = data.allWcProductsCategories.nodes;

  useEffect(() => {
    async function getData() {
      try {
        const { data } = await http.get("/cart");
        setCart(data);
      } catch (error) {
        console.error(error);
      }
    }
    getData();
  }, []);

  const addCart = async (id, quantity) => {
    try {
      const { data } = await http.post("/cart/add-item", {
        id,
        quantity,
      });
      setCart(data);
    } catch (error) {
      console.error(error);
    }
  };

  const updateCart = async (key, quantity) => {
    try {
      const { data } = await http.post("/cart/update-item", {
        key,
        quantity,
      });
      setCart(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <StoreProvider value={{ categories, cart, addCart, updateCart, visible, setVisible }}>
      {children}
    </StoreProvider>
  );
};

export default AppProvider;
