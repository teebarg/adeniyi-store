import { graphql } from "gatsby";

export const fragments = graphql`
  fragment ProductDetails on BEAF_Product {
    ... on BEAF_SimpleProduct {
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
