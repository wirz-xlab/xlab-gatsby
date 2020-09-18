// Metadata

import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

import ogImage from "../assets/images/og.png"
import ms1 from "../assets/images/ms/mstile144px144px.png"
import ms2 from "../assets/images/ms/mstile70px70px.png"
import ms3 from "../assets/images/ms/mstile150px150px.png"
import ms4 from "../assets/images/ms/mstile310px150px.png"
import ms5 from "../assets/images/ms/mstile310px310px.png"

export default function Metadata({ description, image, lang, url, tags, title, type }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            description
            image
            lang
            url
            tags
            title
            type
          }
        }
      }
    `
  )

  const meta = site.siteMetadata

  return (
    <Helmet>
      {/* Languages */}
      <html lang={meta.lang} />
      <link rel="alternate" hrefLang="x-default" href={meta.url} />
      {/* PWA */}
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="mobile-web-app-capable" content="yes" />
      <style type="text/css">
        {`
          html,
          body {
            background: #000;
          }
        `}
      </style>
      {/* Base */}
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta name="keywords" content={meta.tags} />
      <meta name="application-name" content={meta.title} />
      <link rel="canonical" href={meta.url} />
      {/* Open Graph */}
      <meta property="og:locale" content={meta.lang} />
      <meta property="og:type" content={meta.type} />
      <meta property="og:url" content={meta.url} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={meta.title} />
      <meta property="og:image:width" content="512" />
      <meta property="og:image:height" content="512" />
      {/* Windows */}
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-TileImage" content={ms1} />
      <meta name="msapplication-square70x70logo" content={ms2} />
      <meta name="msapplication-square150x150logo" content={ms3} />
      <meta name="msapplication-wide310x150logo" content={ms4} />
      <meta name="msapplication-square310x310logo" content={ms5} />
      <meta name="msapplication-config" content="none" />
    </Helmet>
  )
}
