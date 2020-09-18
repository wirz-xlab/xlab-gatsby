// Metadata

import React from "react"
import { Helmet } from "react-helmet"

import ss1 from "../assets/images/splashscreens/iphone1242px2688px.png"
import ss2 from "../assets/images/splashscreens/iphone1242px2208px.png"
import ss3 from "../assets/images/splashscreens/iphone1125px2436px.png"
import ss4 from "../assets/images/splashscreens/iphone828px1792px.png"
import ss5 from "../assets/images/splashscreens/iphone750px1334px.png"
import ss6 from "../assets/images/splashscreens/iphone640px1136px.png"
import ss7 from "../assets/images/splashscreens/iphone2688px1242px.png"
import ss8 from "../assets/images/splashscreens/iphone2208px1242px.png"
import ss9 from "../assets/images/splashscreens/iphone2436px1125px.png"
import ss10 from "../assets/images/splashscreens/iphone1792px828px.png"
import ss11 from "../assets/images/splashscreens/iphone1334px750px.png"
import ss12 from "../assets/images/splashscreens/iphone1136px640px.png"
import ss13 from "../assets/images/splashscreens/ipad2048px2732px.png"
import ss14 from "../assets/images/splashscreens/ipad1668px2388px.png"
import ss15 from "../assets/images/splashscreens/ipad1668px2224px.png"
import ss16 from "../assets/images/splashscreens/ipad1536px2048px.png"
import ss17 from "../assets/images/splashscreens/ipad2732px2048px.png"
import ss18 from "../assets/images/splashscreens/ipad2388px1668px.png"
import ss19 from "../assets/images/splashscreens/ipad2224px1668px.png"
import ss20 from "../assets/images/splashscreens/ipad2048px1536px.png"

export default function SplashScreens() {
  return (
    <Helmet>
      {/* Apple Splash screens */}
      <link
        rel="apple-touch-startup-image"
        href={ss1}
        media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
      />
      <link
        rel="apple-touch-startup-image"
        href={ss2}
        media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
      />
      <link
        rel="apple-touch-startup-image"
        href={ss3}
        media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
      />
      <link
        rel="apple-touch-startup-image"
        href={ss4}
        media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
      />
      <link
        rel="apple-touch-startup-image"
        href={ss5}
        media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
      />
      <link
        rel="apple-touch-startup-image"
        href={ss6}
        media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
      />
      <link
        rel="apple-touch-startup-image"
        href={ss7}
        media="(device-width: 896px) and (device-height: 414px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
      />
      <link
        rel="apple-touch-startup-image"
        href={ss8}
        media="(device-width: 736px) and (device-height: 414px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
      />
      <link
        rel="apple-touch-startup-image"
        href={ss9}
        media="(device-width: 812px) and (device-height: 375px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
      />
      <link
        rel="apple-touch-startup-image"
        href={ss10}
        media="(device-width: 896px) and (device-height: 414px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
      />
      <link
        rel="apple-touch-startup-image"
        href={ss11}
        media="(device-width: 667px) and (device-height: 375px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
      />
      <link
        rel="apple-touch-startup-image"
        href={ss12}
        media="(device-width: 568px) and (device-height: 320px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
      />
      <link
        rel="apple-touch-startup-image"
        href={ss13}
        media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
      />
      <link
        rel="apple-touch-startup-image"
        href={ss14}
        media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
      />
      <link
        rel="apple-touch-startup-image"
        href={ss15}
        media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
      />
      <link
        rel="apple-touch-startup-image"
        href={ss16}
        media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
      />
      <link
        rel="apple-touch-startup-image"
        href={ss17}
        media="(device-width: 1366px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
      />
      <link
        rel="apple-touch-startup-image"
        href={ss18}
        media="(device-width: 1194px) and (device-height: 834px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
      />
      <link
        rel="apple-touch-startup-image"
        href={ss19}
        media="(device-width: 1112px) and (device-height: 834px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
      />
      <link
        rel="apple-touch-startup-image"
        href={ss20}
        media="(device-width: 1024px) and (device-height: 768px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
      />
    </Helmet>
  )
}
