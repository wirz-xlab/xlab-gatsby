// Index

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Primary from "../layouts/primary"
import Metadata from "../components/metadata"
import SplashScreens from "../components/splashscreens"

export default function Index() {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )

  return (
    <Primary>
      <Metadata />
      <SplashScreens />
      <h1 className="font-size-xxl text-align-center">{site.siteMetadata.title}</h1>
    </Primary>
  )
}
