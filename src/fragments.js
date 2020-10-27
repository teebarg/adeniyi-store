import { graphql } from "gatsby";

export const fragments = graphql`
  fragment ProductDetails on WpProduct {
    ... on WpSimpleProduct {
      id
      name
      slug
      averageRating
      reviewCount
      salePrice
      regularPrice
      onSale
      productCategories {
        nodes {
          name
        }
      }
      image {
        sourceUrl
      }
      description
      link
      sku
    }
  }
`;
