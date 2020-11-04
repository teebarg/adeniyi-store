import { graphql } from "gatsby";

export const fragments = graphql`
  fragment ProductDetails on wcProducts {
    id
    name
    slug
    average_rating
    rating_count
    sale_price
    regular_price
    on_sale
    categories {
      name
    }
    description
    sku
    permalink
    images {
      alt
      src
    }
  }
`;
