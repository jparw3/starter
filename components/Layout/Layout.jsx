import React from "react"
import { GlobalStyle } from "../styles/GlobalStyles"
import "./layout.css"

function Layout({ children }) {
  return (
    <>
        <GlobalStyle/>
        {/* header goes here */}
        <main>{children}</main>
        {/* footer goes here */}
    </>
  )
}

export default Layout
