import React from "react";
import { Helmet } from "react-helmet";
import config from "../../data/SiteConfig";
import styled from "@emotion/styled";
import { Global, css } from "@emotion/core";
import { scale, rhythm } from "../utils/typography";
import Header from "../components/header";
import Foot from "../components/foot";

const Body = styled.div`
  color: var(--textNormal);
  transition: color 0.2s ease-out, background 0.2s ease-out;
`;

const MainLayout = ({ location, children }) => {

  return (
    <>
      <Helmet>
        <meta name="description" content={config.siteDescription} />
        <html lang="en" />
      </Helmet>
      <Global
        styles={css`
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            margin-bottom: 0;
            margin-top: 0;
            font-family: "Montserrat, sans-serif";
          }
          a {
            background-image: none;
            text-shadow: none;
            color: inherit;
            ${{ ...scale(-0.2) }};
            line-height: ${rhythm(0.7)};
          }
          p {
            margin-bottom: 0;
            ${{ ...scale(-0.2) }};
            line-height: ${rhythm(0.8)};
          }
        `}
      />
      <div>
        <Header />
        <Body>{children}</Body>
        <Foot />
      </div>
    </>
  );
};

export default MainLayout;
