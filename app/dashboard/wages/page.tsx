"use client"

import { useState } from "react"
import Link from "next/link"
import { CalendarIcon, Download, MoreHorizontal, Search, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { cn } from "@/lib/utils"

const projects = [
  { id: "1", name: "Pune City Mall" },
  { id: "2", name: "Green Valley Apartments" },
  { id: "3", name: "Highway Extension" },
]

const employees = [
  {
    id: "1",
    name: "Rajesh Kumar",
    key: "48392",
    project: "Pune City Mall",
    dailyWage: 500,
    advance: 0,
    overtime: 0,
    balance: 3500,
  },
  {
    id: "2",
    name: "Sunil Patil",
    key: "27584",
    project: "Pune City Mall",
    dailyWage: 500,
    advance: 200,
    overtime: 0,
    balance: 2000,
  },
  {
    id: "3",
    name: "Amit Singh",
    key: "36925",
    project: "Pune City Mall",
    dailyWage: 500,
    advance: 0,
    overtime: 100,
    balance: 4500,
  },
  {
    id: "4",
    name: "Priya Sharma",
    key: "14785",
    project: "Green Valley Apartments",
    dailyWage: 500,
    advance: 0,
    overtime: 0,
    balance: 3000,
  },
  {
    id: "5",
    name: "Rahul Deshmukh",
    key: "95123",
    project: "Green Valley Apartments",
    dailyWage: 500,
    advance: 0,
    overtime: 0,
    balance: 2500,
  },
]

export default function WagesPage() {
  const [date, setDate] = useState<Date>()
  const [selectedProject, setSelectedProject] = useState<string>("")
  const [sameWage, setSameWage] = useState(false)
  const [wageAmount, setWageAmount] = useState<number>(500)
  const [employeeWages, setEmployeeWages] = useState<
    Array<{
      id: string
      wage: number
      advance: number
      overtime: number
    }>
  >([])

  const handleProjectChange = (value: string) => {
    setSelectedProject(value)
    // Initialize employee wages for the selected project
    const projectEmployees = employees.filter((emp) => projects.find((p) => p.id === value)?.name === emp.project)
    setEmployeeWages(
      projectEmployees.map((emp) => ({
        id: emp.id,
        wage: emp.dailyWage,
        advance: 0,
        overtime: 0,
      })),
    )
  }

  const handleSameWageChange = (checked: boolean) => {
    setSameWage(checked)
    if (checked) {
      // Apply the same wage to all employees
      setEmployeeWages((prev) =>
        prev.map((emp) => ({
          ...emp,
          wage: wageAmount,
        })),
      )
    }
  }

  const handleWageAmountChange = (value: string) => {
    const amount = Number.parseInt(value, 10)
    setWageAmount(amount)
    if (sameWage) {
      // Update all employee wages with the new amount
      setEmployeeWages((prev) =>
        prev.map((emp) => ({
          ...emp,
          wage: amount,
        })),
      )
    }
  }

  const handleEmployeeWageChange = (id: string, field: "wage" | "advance" | "overtime", value: string) => {
    const amount = Number.parseInt(value, 10) || 0
    setEmployeeWages((prev) => prev.map((emp) => (emp.id === id ? { ...emp, [field]: amount } : emp)))
  }

  const getFilteredEmployees = () => {
    if (!selectedProject) return []
    return employees.filter((emp) => projects.find((p) => p.id === selectedProject)?.name === emp.project)
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Wages</h1>
          <p className="text-muted-foreground">Record and manage daily wages for your employees</p>
        </div>
        <div className="flex items-center gap-2">
          <Button asChild>
            <Link href="/dashboard/wages/history">
              <Search className="mr-2 h-4 w-4" />
              View History
            </Link>
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Record Daily Wages</CardTitle>
            <CardDescription>Enter wages for employees on a specific date</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="date">Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? date.toLocaleDateString() : "Select date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                </PopoverContent>
              </Popover>
            </div>
            <div className="space-y-2">
              <Label htmlFor="project">Project</Label>
              <Select onValueChange={handleProjectChange}>
                <SelectTrigger id="project">
                  <SelectValue placeholder="Select project" />
                </SelectTrigger>
                <SelectContent>
                  {projects.map((project) => (
                    <SelectItem key={project.id} value={project.id}>
                      {project.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            {selectedProject && (
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox id="same-wage" checked={sameWage} onCheckedChange={handleSameWageChange} />
                  <div className="grid gap-1.5 leading-none">
                    <label
                      htmlFor="same-wage"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Apply same wage to all employees
                    </label>
                  </div>
                </div>
                {sameWage && (
                  <div className="space-y-2">
                    <Label htmlFor="wage-amount">Wage Amount (₹)</Label>
                    <Input
                      id="wage-amount"
                      type="number"
                      value={wageAmount}
                      onChange={(e) => handleWageAmountChange(e.target.value)}
                    />
                  </div>
                )}
              </div>
            )}
          </CardContent>
        </Card>

        {selectedProject && getFilteredEmployees().length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>Employee Balances</CardTitle>
              <CardDescription>Current balance for each employee</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>ID Key</TableHead>
                      <TableHead className="text-right">Balance</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {getFilteredEmployees().map((employee) => (
                      <TableRow key={employee.id}>
                        <TableCell className="font-medium">{employee.name}</TableCell>
                        <TableCell>{employee.key}</TableCell>
                        <TableCell className="text-right">₹{employee.balance.toLocaleString()}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      {selectedProject && getFilteredEmployees().length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Enter Wages</CardTitle>
            <CardDescription>Record daily wages, advances, and overtime for each employee</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>ID Key</TableHead>
                    <TableHead>Wage (₹)</TableHead>
                    <TableHead>Advance (₹)</TableHead>
                    <TableHead>Overtime (₹)</TableHead>
                    <TableHead>Total</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {getFilteredEmployees().map((employee) => {
                    const employeeWage = employeeWages.find((ew) => ew.id === employee.id) || {
                      wage: employee.dailyWage,
                      advance: 0,
                      overtime: 0,
                    }
                    const total = employeeWage.wage + employeeWage.overtime - employeeWage.advance

                    return (
                      <TableRow key={employee.id}>
                        <TableCell className="font-medium">{employee.name}</TableCell>
                        <TableCell>{employee.key}</TableCell>
                        <TableCell>
                          <Input
                            type="number"
                            value={employeeWage.wage}
                            onChange={(e) => handleEmployeeWageChange(employee.id, "wage", e.target.value)}
                            disabled={sameWage}
                            className="w-20"
                          />
                        </TableCell>
                        <TableCell>
                          <Input
                            type="number"
                            value={employeeWage.advance}
                            onChange={(e) => handleEmployeeWageChange(employee.id, "advance", e.target.value)}
                            className="w-20"
                          />
                        </TableCell>
                        <TableCell>
                          <Input
                            type="number"
                            value={employeeWage.overtime}
                            onChange={(e) => handleEmployeeWageChange(employee.id, "overtime", e.target.value)}
                            className="w-20"
                          />
                        </TableCell>
                        <TableCell className="font-medium">₹{total}</TableCell>
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
                                <Send className="mr-2 h-4 w-4" />
                                Send via WhatsApp
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem>
                                <Download className="mr-2 h-4 w-4" />
                                Generate Receipt
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    )
                  })}
                </TableBody>
              </Table>
            </div>
            <div className="mt-4 flex justify-end">
              <Button>Save Wages</Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
