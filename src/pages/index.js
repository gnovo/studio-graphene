import React from "react"

import About from '../components/About'
import Community from '../components/Community'
import Location from '../components/Location'
import Navbar from '../components/Navbar'
import OurMenu from '../components/OurMenu'
import Recipes from '../components/Recipes'

import { colors, GlobalStyle } from '../styles'

const pageStyles = {
  color: colors.almostWhite,
  padding: 0,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const IndexPage = () => {
  return (
    <>
      <GlobalStyle />

      <main style={pageStyles}>
        <title>Home Page</title>
        <Navbar />
        <About />
        <Community />
        <Location />
        <OurMenu />
        <Recipes />
      </main>
    </>
  )
}

export default IndexPage
