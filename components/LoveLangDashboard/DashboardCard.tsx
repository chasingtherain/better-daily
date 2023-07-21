import {
    Card,
    Metric,
    Text,
  } from "@tremor/react";
function DashboardCard({title, value}) {
  return (
    <Card className="max-w-xs mx-auto" decoration="top" decorationColor="blue">
        <Text className="text-lg">{title ? title : "Last 7 days"}</Text>
        <Metric className="text-lg">{value ? value : 7}</Metric>
    </Card>
  )
}

export default DashboardCard