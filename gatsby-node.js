/* eslint "no-console": "off" */

const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const productListingPage = path.resolve(
    "./src/templates/product-listing.jsx"
  );
  const productPage = path.resolve("./src/templates/product-page.jsx");
  const catPage = path.resolve("./src/templates/category-page.jsx");

  const test = await graphql(`
    {
      allWcProducts {
        nodes {
          id
          name
          slug
        }
      }
    }
  `);

  const getCategories = await graphql(`
    {
      allWcProductsCategories {
        nodes {
          slug
        }
      }
    }
  `);

  const categories = getCategories.data.allWcProductsCategories.nodes;
  const productsEdges = test.data.allWcProducts.nodes;

  // Product page creating
  productsEdges.forEach((edge, index) => {
    if (edge.slug) {
      createPage({
        path: edge.slug,
        component: productPage,
        context: {
          slug: edge.slug,
          id: edge.id,
          categories,
        },
      });
    }
  });

  // Paging
  createPage({
    path: `/`,
    component: productListingPage
  });

  // Create category pages
  categories.forEach(({ slug: category }) => {
    createPage({
      path: `/category/${category}`,
      component: catPage,
      context: { category },
    });
  });
};


exports.onCreateWebpackConfig = ({ stage, actions }) => {
  if (stage.startsWith("develop")) {
    actions.setWebpackConfig({
      resolve: {
        alias: {
          "react-dom": "@hot-loader/react-dom",
        },
      },
    })
  }
}
