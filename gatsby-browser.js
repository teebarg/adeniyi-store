import "./src/css/index.scss"
import React from "react"

import AppProvider from "./src/layout/app"

export const wrapRootElement = ({ element }) => (
  <AppProvider>{element}</AppProvider>
)