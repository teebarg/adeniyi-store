import React, { Component } from "react";
import { Helmet } from "react-helmet";
import urljoin from "url-join";
import config from "../../../data/SiteConfig";

class SEO extends Component {
  render() {
    const {
      productSeo,
      productListingSeo,
      category,
    } = this.props;
    let title;
    let description;
    let image;

    if (productSeo) {
      description = productSeo.description;
      title = productSeo.name;
      image = productSeo.image && productSeo.image.sourceUrl;
    } else {
      title = config.siteDescription;
      description = config.description;
      image = config.siteLogo;
    }

    const items = () => {
      let result = new Set();
      for (let i = 0; i < productListingSeo.length && i < 4; i++) {
        result.add({
          "@type": "ListItem",
          position: i + 1,
          url: `${config.siteUrl}/${productListingSeo[i].slug}`,
        });
      }
      return result;
    };

    const getImagePath = (imageURI) => {
      if (!imageURI) return null
      if (
        !imageURI.match(
          `(https?|ftp|file)://[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]`
        )
      )
        return urljoin(config.siteUrl, config.pathPrefix, imageURI);

      return imageURI;
    };

    image = getImagePath(image);

    const schemaOrgJSONLD = [
      {
        "@context": "http://schema.org",
        "@type": "WebSite",
        url: config.siteUrl,
        name: title,
        alternateName: config.siteTitleAlt,
      },
    ];

    if (productSeo) {
      schemaOrgJSONLD.push({
        "@context": "http://schema.org",
        "@type": "Product",
        name: title,
        image: { "@type": "ImageObject", url: image },
        description,
        sku: productSeo.sku,
        offers: {
          "@type": "Offer",
          url: productSeo.url,
          priceCurrency: "NGN",
          price: productSeo.salePrice,
          priceValidUntil: "2020-11-21",
          availability: "https://schema.org/InStock",
          seller: {
            "@type": "Organization",
            name: config.siteTitle,
          },
        },
      });
    }

    if (productListingSeo) {
      schemaOrgJSONLD.push(
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: config.siteUrl,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: category,
              item: `${config.siteUrl}/category`,
            },
          ],
        },
        {
          "@context": "http://schema.org",
          "@type": "CollectionPage",
          name: category,
          url: `${config.siteUrl}/category`,
          description: `Choose from the widest collections of ${category} items in Lagos Nigeria`,
          mainEntity: {
            "@type": "ItemList",
            itemListElement: [...items()],
          },
        }
      );
    }

    return (
      <Helmet>
        {/* General tags */}
        <meta name="description" content={description} />
        <meta name="image" content={image} />

        {/* Schema.org tags */}
        <script type="application/ld+json">
          {JSON.stringify(schemaOrgJSONLD)}
        </script>

        {/* OpenGraph tags */}
        <meta
          property="og:url"
          content={productSeo ? productSeo.url : config.siteUrl}
        />
        <meta property="og:type" content="product" />
        <meta property="og:title" content={`${title} | ${config.siteTitle}`} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta
          property="fb:app_id"
          content={config.siteFBAppID ? config.siteFBAppID : ""}
        />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:creator"
          content={config.userTwitter ? config.userTwitter : ""}
        />
        <meta name="twitter:title" content={`${title} | ${config.siteTitle}`} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Helmet>
    );
  }
}

export default SEO;
