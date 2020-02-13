import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => {
  const nodes = data.allUndefinedrecords.nodes
  console.log(nodes)
  return (
    <Layout>
      <SEO title="BE" />
      <h1>Data for BE</h1>
      <p>This market data was found in the csv</p>
      <table>
        <thead>
          <th>Dates</th>
          <th>Values</th>
        </thead>
        <tbody>
          {nodes.map(({ id, BE, Dates }) => (
            <tr key={id}>
              <th>{Dates}</th>
              <th>{BE}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  )
}

export const query = graphql`
  {
    allUndefinedrecords {
      nodes {
        BE
        Dates
      }
    }
  }
`
