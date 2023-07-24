"use client";

import DashboardBarChart from "@/components/LoveLangDashboard/DashboardBarChart";
import DashboardCard from "@/components/LoveLangDashboard/DashboardCard";
import { fetcher } from "@/utils/fetcher";
import {
    Card,
    Grid,
    Title,
    Text,
    Tab,
    TabList,
    TabGroup,
    TabPanel,
    TabPanels,
} from "@tremor/react";
import { useSession } from "next-auth/react";
import useSWR from 'swr'

export default function LoveLangDashboardPage() {

    // fetch data from db
    // filter last 7 days result
    // filter last 30 days result

    const { data: session, status } = useSession()

    const { data, error, isLoading } = useSWR(`/api/relationship/get/?params=${session?.user?.email}`, fetcher)

    // const lastSevenDays = data.filter

    const cardInfo = [
        {id: 1, name: "Last 7 days", value:7},
        {id: 2, name: "Last 8 days", value:8},
        {id: 3, name: "Last 9 days", value:9},
        {id: 4, name: "Last 10 days", value:10},
    ] 

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
                        {cardInfo.map((card) => <DashboardCard key={card.id} title={card.name} value={card.value}/>)}
                    </Grid>
                    <div className="mt-6">
                        <DashboardBarChart title="Last 30 Days by Category"/>    
                        <DashboardBarChart title="Last 12 Months"/>    
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