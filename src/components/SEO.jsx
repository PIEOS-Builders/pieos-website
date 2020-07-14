/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const SEO = ({ lang, title, keywords, description, url, image, author, twitterUsername, meta }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            url
            image
            author
            twitterUsername
          }
        }
      }
    `,
  );

  const metaTitle = title || site.siteMetadata.title;
  const metaDescription = description || site.siteMetadata.description;
  const metaUrl = url || site.siteMetadata.url;
  const metaImage = image || site.siteMetadata.image;
  const metaAuthor = author || site.siteMetadata.author;
  const metaTwitterUsername = twitterUsername || site.siteMetadata.twitterUsername;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      // title={title}
      // titleTemplate={`%s | ${site.siteMetadata.title}`}
      title={metaTitle}
      titleTemplate={metaTitle}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:url`,
          content: metaUrl,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:title`,
          content: metaTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:image`,
          content: metaImage,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:site`,
          content: metaTwitterUsername,
        },
        {
          name: `twitter:creator`,
          content: metaAuthor,
        },
        {
          name: `twitter:title`,
          content: metaTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:image`,
          content: metaImage,
        },
      ]
        .concat(
          keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords.join(`, `),
              }
            : [],
        )
        .concat(meta)}
    />
  );
};

SEO.propTypes = {
  lang: PropTypes.string,
  title: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
  description: PropTypes.string,
  url: PropTypes.string,
  image: PropTypes.string,
  author: PropTypes.string,
  twitterUsername: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
};

SEO.defaultProps = {
  lang: "en",
  title: "",
  keywords: [],
  description: "",
  url: "",
  image: "",
  author: "",
  twitterUsername: "",
  meta: [],
};

export default SEO;
