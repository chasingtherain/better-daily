"use client";

import DashboardCard from "@/components/LoveLangDashboard/DashboardCard";
import {
  Card,
  Grid,
  Metric,
  Title,
  Text,
  Tab,
  TabList,
  TabGroup,
  TabPanel,
  TabPanels,
} from "@tremor/react";

export default function LoveLangDashboardPage() {
  return (
    <main className="px-12 py-12">
      <Title>Love Language Dashboard</Title>
      <Text>A quick glance at how you're expressing your love</Text>

      <TabGroup className="mt-6">
        <TabList>
          <Tab>Overview</Tab>
          <Tab>Detail</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Grid numItemsMd={2} numItemsLg={4} className="gap-6 mt-6">
              <DashboardCard title="Last 7 days" value="7"/>
            </Grid>
            <div className="mt-6">
              <Card>
                <div className="h-80" />
              </Card>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="mt-6">
              <Card>
                <div className="h-96" />
              </Card>
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </main>
  );
}