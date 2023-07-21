import React from 'react'
import { Card, Title, BarChart} from "@tremor/react";

const chartdata = [
    {
      name: "Acts of Service",
      "Number of Happenstance": 8,
    },
    {
      name: "Gift",
      "Number of Happenstance": 5,
    },
    {
      name: "Physical Touch",
      "Number of Happenstance": 0,
    },
    {
      name: "Quality Time",
      "Number of Happenstance": 7,
    },
    {
      name: "Words of Affirmation",
      "Number of Happenstance": 10,
    },
  ];
  
function DashboardBarChart() {
  return (
    <Card>
    <Title>Last 30 Days by Category</Title>
    <BarChart
      className="mt-6"
      data={chartdata}
      index="name"
      categories={["Number of Happenstance"]}
      colors={["blue"]}
      yAxisWidth={48}
    />
  </Card>
  )
}

export default DashboardBarChart
