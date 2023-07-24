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

    // filter last 30 days result
    const today = new Date()
    today.setHours(0, 0, 0, 0); // Set time to midnight

    const sevenDaysBeforeToday = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);

    const { data: session, status } = useSession()

    const { data, error, isLoading } = useSWR(`/api/relationship/get/?params=${session?.user?.email}`, fetcher)

    const daysBeforeToday = (day) => {
        const daysBefore = new Date(Date.now() - day * 24 * 60 * 60 * 1000);
        return new Date(daysBefore.setHours(0, 0, 0, 0))
    }

    const calculateAggregateRecord = (days) => {
        const lastSevenDaysAggregateRecord = data?.entries?.filter(record => new Date(record.todayDate) >= daysBeforeToday(7) && new Date(record.todayDate) <= today)
        const lastThirtyDaysAggregateRecord = data?.entries?.filter(record => new Date(record.todayDate) >= daysBeforeToday(30) && new Date(record.todayDate) <= today)
        let record;

        switch (days) {
            case 7:
              record = lastSevenDaysAggregateRecord;
              break;
            case 30:
              record = lastThirtyDaysAggregateRecord;
              break;

            default:
              record = data?.entries
          }


        const sumNumberValues = (obj) => {
            return Object.values(obj)?.reduce((sum:number, value:number) => sum + (typeof value === 'number' ? value : 0), 0);
          }

        return record?.reduce((sum, obj) => sum + sumNumberValues(obj), 0);
    } 

    const countByCategory = (category) => {
        let sum = 0
        const lastThirtyDaysAggregateRecord = data?.entries?.filter(record => 
                new Date(record.todayDate) >= daysBeforeToday(30) && 
                new Date(record.todayDate) <= today
                )
        console.log("lastThirtyDaysAggregateRecord: ", lastThirtyDaysAggregateRecord)
        lastThirtyDaysAggregateRecord?.forEach((record)=>{
            sum += record[category]
        })
        return sum
    }

    const cardInfo = [
        {id: 1, name: "Last 7 Days", value:calculateAggregateRecord(7) || "calculating.."},
        {id: 2, name: "Last 30 Days", value:calculateAggregateRecord(30) || "calculating.."},
        {id: 3, name: "Last 7d Avg", value:calculateAggregateRecord(7) ? (calculateAggregateRecord(7) / 7).toFixed(1) : "calculating.."},
        {id: 4, name: "All Time Avg", value:calculateAggregateRecord(999) ? (calculateAggregateRecord(999) / data.entries.length).toFixed(1) : "calculating.."},
    ] 

    const monthlyChartData = [
        {
          name: "Acts of Service",
          "Count": countByCategory("service"),
        },
        {
          name: "Gift",
          "Count": countByCategory("gift"),
        },
        {
          name: "Physical Touch",
          "Count": countByCategory("touch"),
        },
        {
          name: "Quality Time",
          "Count": countByCategory("time"),
        },
        {
          name: "Words of Affirmation",
          "Count": countByCategory("words"),
        },
    ];

    const annualChartData = [
        {
          name: "Jan",
          "Count": 1,
        },
        {
          name: "Feb",
          "Count": 2,
        },
        {
          name: "Mar",
          "Count": 3,
        },
        {
          name: "Apr",
          "Count": 4,
        },
        {
          name: "May",
          "Count": 5,
        },
        {
          name: "Jun",
          "Count": 6,
        },
        {
          name: "Jul",
          "Count": 8,
        },
        {
          name: "Aug",
          "Count": 9,
        },
        {
          name: "Sep",
          "Count": 10,
        },
        {
          name: "Oct",
          "Count": 11,
        },
        {
          name: "Nov",
          "Count": 32,
        },
        {
          name: "Dec",
          "Count": 8,
        },

    ];

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
                        <DashboardBarChart title="Last 30 Days" chartData={monthlyChartData}/>    
                        <DashboardBarChart title="Last 12 Months" chartData={annualChartData}/>    
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