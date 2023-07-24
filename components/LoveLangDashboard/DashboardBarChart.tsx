import React from 'react'
import { Card, Title, BarChart} from "@tremor/react";

const chartdata = [
    {
      name: "Acts of Service",
      "Count": 8,
    },
    {
      name: "Gift",
      "Count": 5,
    },
    {
      name: "Physical Touch",
      "Count": 0,
    },
    {
      name: "Quality Time",
      "Count": 7,
    },
    {
      name: "Words of Affirmation",
      "Count": 10,
    },
  ];
  
function DashboardBarChart({title}) {
  return (
    <Card className='my-6'>
    <Title>{title}</Title>
    <BarChart
      className="mt-6"
      data={chartdata}
      index="name"
      categories={["Count"]}
      colors={["blue"]}
      yAxisWidth={48}
    />
  </Card>
  )
}

export default DashboardBarChart
