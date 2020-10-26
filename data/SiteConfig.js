const siteUrl = () => process.env.SITE_URL || 'http://localhost:8000';
const siteName = () => process.env.SITE_NAME || 'Online Store';

const config = {
  siteTitle: siteName(), // Site title.
  siteTitleShort: siteName(), // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "GatsbyJS Advanced Starter", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: siteUrl(), // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "Online Shopping for Bags, Wallets, Smart Watches & More!", // Website description used for RSS feeds/meta description tag.
  description: `${siteName()} the #1 Onlinestore in Nigeria - Shop Online for All Kinds of Products & Enjoy Great Prices And Offers | Secure Payments - Fast Delivery - Free Returns`,
  siteRss: "/rss.xml", // Path to the RSS file.
  siteRssTitle: "Gatsby Advanced Starter RSS feed", // Title of the RSS feed
  siteFBAppID: process.env.FB_ID, // FB Application ID for using app insights
  googleAnalyticsID: process.env.GOOGLE_ANALYTICS, // GA tracking ID.// Disqus shortname.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  userName: process.env.OWNER_NAME, // Username to display in the author segment.
  userEmail: process.env.OWNER_EMAIL, // Email used for RSS feed's author segment
  userTwitter: "", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "North Pole, Earth", // User location to display in the author segment.
  userAvatar: "https://api.adorable.io/avatars/150/test.png", // User avatar to display in the author segment.
  store: {
    name: siteName(),
    about: `Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi optio consectetur.Vivamus a ligula quam. Ut blandit eu leo non suscipit.`,
    address: "no 5, Mary Slessor way, Banana Island",
    phone: process.env.OWNER_PHONE,
    bannersAd: `${siteName()} for your Quality Fashions`,
    sideAd: `MEN'S FASHION 60% OFF`,
    footerAd: `Women's Day Special Offer All Branded Sandals are Flat 50% Discount`,
  },
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/teebarg",
      iconClassName: "fa fa-github",
    },
    {
      label: "Twitter",
      url: "https://twitter.com/neyostica",
      iconClassName: "fa fa-twitter",
    },
    {
      label: "Email",
      url: "mailto:teebarg01@gmail.com",
      iconClassName: "fa fa-envelope",
    },
  ],
  copyright: `Copyright © 2020. ${siteName()}`, // Copyright string for the footer of the website and RSS feed.
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0", // Used for setting manifest background color.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
