"use client"
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Table,TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";

export default function QuadrantCard() {
    const invoices = [
        {
          invoice: "INV001",
          paymentStatus: "Paid",
          totalAmount: "$250.00",
          paymentMethod: "Credit Card",
        },
        {
          invoice: "INV002",
          paymentStatus: "Pending",
          totalAmount: "$150.00",
          paymentMethod: "PayPal",
        },
        {
          invoice: "INV003",
          paymentStatus: "Unpaid",
          totalAmount: "$350.00",
          paymentMethod: "Bank Transfer",
        },
        {
          invoice: "INV004",
          paymentStatus: "Paid",
          totalAmount: "$450.00",
          paymentMethod: "Credit Card",
        },
      ]
    return (
        <ScrollArea className="w-4/5 md:w-[300px] h-[300px] md:h-[400px] rounded-md border border-slate-500 mx-2 mb-2">
            <Card>
            <CardHeader>
                <CardTitle>Quadrant X</CardTitle>
                <CardDescription>Urgent and Important</CardDescription>
            </CardHeader>
            <CardContent>
                <Input
                    maxLength={45}
                    className="my-1"
                    placeholder={"placeholder here"}
                />
            </CardContent>
            <Table className="px-40">
                <TableCaption className="mx-10">Priotise these tasks before they become a headache</TableCaption>
                <TableHeader>
                    <TableRow>
                    <TableHead className="w-[20px]">Task</TableHead>
                    <TableHead className="w-[10px]">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {invoices.map((invoice) => (
                    <TableRow key={invoice.invoice} className="mt-2">
                        <TableCell className="font-medium">{invoice.invoice}</TableCell>
                        <Button className="bg-pink-200">Delete</Button>
                    </TableRow>
                    ))}
                </TableBody>
            </Table>
            </Card>
        </ScrollArea>
  )
};
