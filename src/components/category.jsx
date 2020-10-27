import React, { useContext } from "react";
import storeContext from "../layout/context";
import { Link } from "gatsby";
import { css } from "@emotion/core";

const Category = () => {
  const { categories } = useContext(storeContext);

  return (
    <div className="h-full">
      <ul className="list-none">
        {categories && categories
          .filter((item) => item.slug != "uncategorized")
          .map((category, key) => (
            <li
              key={key}
              className="hover:bg-gray-100 py-1 flex justify-between items-center mt-2"
              css={css`
                border-bottom: 1px solid rgba(0, 0, 0, 0.125);
              `}
            >
              <Link
                to={`/category/${category.slug}`}
                className="no-underline text-gray-600"
              >
                {category.name}
              </Link>
              <span className="rounded-full text-xs bg-gray-900 text-white inline-block px-2">
                {category.count}
              </span>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Category;
