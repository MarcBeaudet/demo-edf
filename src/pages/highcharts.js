import React from "react"
import HighCharts from "highcharts/highstock"
import HighChartsReact from "highcharts-react-official"
import HC_exporting from "highcharts/modules/exporting"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

if (typeof Highcharts === "object") {
  HC_exporting(Highcharts)
}

export default ({ data }) => {
  const edges = data.allUndefinedrecords.edges
  const headers = edges.map(e => Object.keys(e.node))[0]
  const filteredHeaders = headers.filter(h => h !== "id")
  let properties = []
  let dates = edges.map(e => e.node[`Dates`])
  dates.sort()
  filteredHeaders.forEach(h => {
    if (h !== "Dates") {
      let hData = edges.map(e => e.node[`${h}`])
      let propertiesData = dates.map(function(e, i) {
        return [e, hData[i]]
      })
      propertiesData.pop()
      properties.push({
        name: h,
        data: propertiesData,
      })
    }
  })
  const options = {
    title: {
      text: "Highcharts example using data from REST API Endpoint",
    },
    xAxis: {
      type: "datetime",
    },
    series: properties,
    rangeSelector: {
      selected: 4,
    },

    yAxis: {
      labels: {
        formatter: function() {
          return (this.value > 0 ? " + " : "") + this.value + "%"
        },
      },
      plotLines: [
        {
          value: 0,
          width: 2,
          color: "silver",
        },
      ],
    },
    plotOptions: {
      series: {
        compare: "percent",
        showInNavigator: true,
      },
    },
    tooltip: {
      pointFormat:
        '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.change}%)<br/>',
      valueDecimals: 2,
      split: true,
    },
    legend: {
      enabled: true,
    },
  }
  return (
    <Layout>
      <SEO title="Highcharts demo" />
      <HighChartsReact
        highcharts={HighCharts}
        options={options}
        constructorType={"stockChart"}
      />
    </Layout>
  )
}

export const query = graphql`
  {
    allUndefinedrecords {
      edges {
        node {
          Dates
          BE
          CH
          CZ
          DE_AT
          DK1
          DK2
          ES
          FR
          NL
        }
      }
    }
  }
`
