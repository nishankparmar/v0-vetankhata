"use client"

import Link from "next/link"
import { Copy, Download, MoreHorizontal, Plus, Search, Send, Trash, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const employees = [
  {
    id: "1",
    name: "Rajesh Kumar",
    key: "48392",
    project: "Pune City Mall",
    contact: "9876543210",
    dailyWage: "₹500",
    balance: "₹3,500",
  },
  {
    id: "2",
    name: "Sunil Patil",
    key: "27584",
    project: "Pune City Mall",
    contact: "9876543211",
    dailyWage: "₹500",
    balance: "₹2,000",
  },
  {
    id: "3",
    name: "Amit Singh",
    key: "36925",
    project: "Pune City Mall",
    contact: "9876543212",
    dailyWage: "₹500",
    balance: "₹4,500",
  },
  {
    id: "4",
    name: "Priya Sharma",
    key: "14785",
    project: "Green Valley Apartments",
    contact: "9876543213",
    dailyWage: "₹500",
    balance: "₹3,000",
  },
  {
    id: "5",
    name: "Rahul Deshmukh",
    key: "95123",
    project: "Green Valley Apartments",
    contact: "9876543214",
    dailyWage: "₹500",
    balance: "₹2,500",
  },
  {
    id: "6",
    name: "Sanjay Jadhav",
    key: "78456",
    project: "Highway Extension",
    contact: "9876543215",
    dailyWage: "₹500",
    balance: "₹1,500",
  },
  {
    id: "7",
    name: "Manoj Patel",
    key: "36147",
    project: "Highway Extension",
    contact: "9876543216",
    dailyWage: "₹500",
    balance: "₹2,000",
  },
]

export default function EmployeesPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Employees</h1>
          <p className="text-muted-foreground">Manage your workforce across all projects</p>
        </div>
        <div className="flex items-center gap-2">
          <Button asChild>
            <Link href="/dashboard/employees/new">
              <Plus className="mr-2 h-4 w-4" />
              Add Employee
            </Link>
          </Button>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search employees..." className="pl-8" />
        </div>
        <Button variant="outline">Search</Button>
      </div>
      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Employees</TabsTrigger>
          <TabsTrigger value="pune-mall">Pune City Mall</TabsTrigger>
          <TabsTrigger value="green-valley">Green Valley Apartments</TabsTrigger>
          <TabsTrigger value="highway">Highway Extension</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="space-y-4">
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>ID Key</TableHead>
                  <TableHead>Project</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead>Daily Wage</TableHead>
                  <TableHead>Balance</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {employees.map((employee) => (
                  <TableRow key={employee.id}>
                    <TableCell className="font-medium">{employee.name}</TableCell>
                    <TableCell>{employee.key}</TableCell>
                    <TableCell>{employee.project}</TableCell>
                    <TableCell>{employee.contact}</TableCell>
                    <TableCell>{employee.dailyWage}</TableCell>
                    <TableCell>{employee.balance}</TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Open menu</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem>
                            <User className="mr-2 h-4 w-4" />
                            View Details
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Copy className="mr-2 h-4 w-4" />
                            Copy ID Key
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>
                            <Send className="mr-2 h-4 w-4" />
                            Send via WhatsApp
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Download className="mr-2 h-4 w-4" />
                            Export Details
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-destructive">
                            <Trash className="mr-2 h-4 w-4" />
                            Delete Employee
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>
        <TabsContent value="pune-mall" className="space-y-4">
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>ID Key</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead>Daily Wage</TableHead>
                  <TableHead>Balance</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {employees
                  .filter((employee) => employee.project === "Pune City Mall")
                  .map((employee) => (
                    <TableRow key={employee.id}>
                      <TableCell className="font-medium">{employee.name}</TableCell>
                      <TableCell>{employee.key}</TableCell>
                      <TableCell>{employee.contact}</TableCell>
                      <TableCell>{employee.dailyWage}</TableCell>
                      <TableCell>{employee.balance}</TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">Open menu</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem>
                              <User className="mr-2 h-4 w-4" />
                              View Details
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Copy className="mr-2 h-4 w-4" />
                              Copy ID Key
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                              <Send className="mr-2 h-4 w-4" />
                              Send via WhatsApp
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Download className="mr-2 h-4 w-4" />
                              Export Details
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-destructive">
                              <Trash className="mr-2 h-4 w-4" />
                              Delete Employee
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>
        {/* Similar TabsContent for other projects */}
      </Tabs>
    </div>
  )
}
