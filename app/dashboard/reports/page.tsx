"use client"

import { useState } from "react"
import { CalendarIcon, Download, FileText, Mail, Share, PhoneIcon as WhatsappIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

export default function ReportsPage() {
  const [date, setDate] = useState<Date>()
  const [month, setMonth] = useState<string>("")
  const [project, setProject] = useState<string>("")
  const [reportType, setReportType] = useState<string>("")

  return (
    <div className="flex flex-col gap-4">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Reports</h1>
        <p className="text-muted-foreground">Generate and export reports for your projects</p>
      </div>
      <Tabs defaultValue="payslips" className="space-y-4">
        <TabsList>
          <TabsTrigger value="payslips">Payslips</TabsTrigger>
          <TabsTrigger value="pf-esi">PF & ESI Reports</TabsTrigger>
          <TabsTrigger value="summary">Summary Reports</TabsTrigger>
        </TabsList>
        <TabsContent value="payslips" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Generate Payslips</CardTitle>
              <CardDescription>Create payslips for employees</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="project">Project</Label>
                  <Select onValueChange={setProject}>
                    <SelectTrigger id="project">
                      <SelectValue placeholder="Select project" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pune-city-mall">Pune City Mall</SelectItem>
                      <SelectItem value="green-valley">Green Valley Apartments</SelectItem>
                      <SelectItem value="highway">Highway Extension</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="month">Month</Label>
                  <Select onValueChange={setMonth}>
                    <SelectTrigger id="month">
                      <SelectValue placeholder="Select month" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="april">April 2024</SelectItem>
                      <SelectItem value="may">May 2024</SelectItem>
                      <SelectItem value="june">June 2024</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="flex gap-2">
                <Button variant="outline" className="gap-2">
                  <WhatsappIcon className="h-4 w-4" />
                  WhatsApp
                </Button>
                <Button variant="outline" className="gap-2">
                  <Mail className="h-4 w-4" />
                  Email
                </Button>
              </div>
              <Button className="gap-2">
                <Download className="h-4 w-4" />
                Generate Payslips
              </Button>
            </CardFooter>
          </Card>
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Individual Payslip</CardTitle>
                <CardDescription>Generate for a single employee</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex h-32 items-center justify-center rounded-md border-2 border-dashed">
                  <FileText className="h-10 w-10 text-muted-foreground" />
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Generate
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Bulk Payslips</CardTitle>
                <CardDescription>Generate for all employees</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex h-32 items-center justify-center rounded-md border-2 border-dashed">
                  <FileText className="h-10 w-10 text-muted-foreground" />
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Generate
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Custom Payslip</CardTitle>
                <CardDescription>Generate with custom fields</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex h-32 items-center justify-center rounded-md border-2 border-dashed">
                  <FileText className="h-10 w-10 text-muted-foreground" />
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Generate
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="pf-esi" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>PF & ESI Reports</CardTitle>
              <CardDescription>Generate compliance reports</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="report-type">Report Type</Label>
                  <Select onValueChange={setReportType}>
                    <SelectTrigger id="report-type">
                      <SelectValue placeholder="Select report type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pf">PF Report</SelectItem>
                      <SelectItem value="esi">ESI Report</SelectItem>
                      <SelectItem value="combined">Combined Report</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="report-month">Month</Label>
                  <Select onValueChange={setMonth}>
                    <SelectTrigger id="report-month">
                      <SelectValue placeholder="Select month" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="april">April 2024</SelectItem>
                      <SelectItem value="may">May 2024</SelectItem>
                      <SelectItem value="june">June 2024</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button className="gap-2">
                <Download className="h-4 w-4" />
                Generate Report
              </Button>
            </CardFooter>
          </Card>
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>PF Report</CardTitle>
                <CardDescription>Provident Fund compliance report</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex h-48 items-center justify-center rounded-md border-2 border-dashed">
                  <div className="text-center">
                    <FileText className="mx-auto h-10 w-10 text-muted-foreground" />
                    <p className="mt-2 text-sm text-muted-foreground">PF Report Template</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" className="gap-2">
                  <Share className="h-4 w-4" />
                  Share
                </Button>
                <Button className="gap-2">
                  <Download className="h-4 w-4" />
                  Download
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>ESI Report</CardTitle>
                <CardDescription>Employee State Insurance compliance report</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex h-48 items-center justify-center rounded-md border-2 border-dashed">
                  <div className="text-center">
                    <FileText className="mx-auto h-10 w-10 text-muted-foreground" />
                    <p className="mt-2 text-sm text-muted-foreground">ESI Report Template</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" className="gap-2">
                  <Share className="h-4 w-4" />
                  Share
                </Button>
                <Button className="gap-2">
                  <Download className="h-4 w-4" />
                  Download
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="summary" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Summary Reports</CardTitle>
              <CardDescription>Generate project and wage summary reports</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="summary-project">Project</Label>
                  <Select onValueChange={setProject}>
                    <SelectTrigger id="summary-project">
                      <SelectValue placeholder="Select project" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Projects</SelectItem>
                      <SelectItem value="pune-city-mall">Pune City Mall</SelectItem>
                      <SelectItem value="green-valley">Green Valley Apartments</SelectItem>
                      <SelectItem value="highway">Highway Extension</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="date-range">Date Range</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? date.toLocaleDateString() : "Select date range"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button className="gap-2">
                <Download className="h-4 w-4" />
                Generate Summary
              </Button>
            </CardFooter>
          </Card>
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Wage Summary</CardTitle>
                <CardDescription>Total wages paid</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex h-32 items-center justify-center rounded-md border-2 border-dashed">
                  <FileText className="h-10 w-10 text-muted-foreground" />
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Generate
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Employee Summary</CardTitle>
                <CardDescription>Employee attendance and wages</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex h-32 items-center justify-center rounded-md border-2 border-dashed">
                  <FileText className="h-10 w-10 text-muted-foreground" />
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Generate
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Project Summary</CardTitle>
                <CardDescription>Project-wise expense breakdown</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex h-32 items-center justify-center rounded-md border-2 border-dashed">
                  <FileText className="h-10 w-10 text-muted-foreground" />
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Generate
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
