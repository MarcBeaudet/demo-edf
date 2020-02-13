import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default () => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Using a CSV as data source in Gatsby</h1>
      <p>This market data was found in the csv</p>
      <Link to="/highcharts">Highcharts example</Link>
      <br />
      <br />
      <br />
      <br />
    </Layout>
  )
}
