import React from 'react'
import { Card, Title, BarChart} from "@tremor/react";

  
function DashboardBarChart({title, chartData}) {
  return (
    <Card className='my-6 bg-sky-100'>
    <Title>{title}</Title>
    <BarChart
      className="mt-6"
      data={chartData}
      index="name"
      categories={["Count"]}
      colors={["zinc"]}
      yAxisWidth={48}
    />
  </Card>
  )
}

export default DashboardBarChart
