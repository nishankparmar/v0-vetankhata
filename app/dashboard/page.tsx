"use client"

import Link from "next/link"
import {
  BarChart3,
  Building2,
  Calendar,
  ChevronRight,
  IndianRupee,
  Plus,
  Users,
  FileText,
  TrendingUp,
  Clock,
  AlertCircle,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Quick Actions */}
      <div className="flex flex-wrap gap-3">
        <Button asChild className="bg-primary/10 text-primary hover:bg-primary/20">
          <Link href="/dashboard/projects/new">
            <Plus className="mr-2 h-4 w-4" />
            New Project
          </Link>
        </Button>
        <Button asChild className="bg-primary/10 text-primary hover:bg-primary/20">
          <Link href="/dashboard/employees/new">
            <Plus className="mr-2 h-4 w-4" />
            Add Employee
          </Link>
        </Button>
        <Button asChild className="bg-primary/10 text-primary hover:bg-primary/20">
          <Link href="/dashboard/wages">
            <IndianRupee className="mr-2 h-4 w-4" />
            Record Wages
          </Link>
        </Button>
      </div>

      {/* Stats Overview */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="border-l-4 border-l-primary">
          <CardContent className="flex flex-row items-center justify-between pt-6">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Total Projects</p>
              <h3 className="text-2xl font-bold">5</h3>
              <p className="text-xs text-muted-foreground">3 active, 2 completed</p>
            </div>
            <div className="rounded-full bg-primary/10 p-3">
              <Building2 className="h-5 w-5 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-primary">
          <CardContent className="flex flex-row items-center justify-between pt-6">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Total Employees</p>
              <h3 className="text-2xl font-bold">48</h3>
              <p className="text-xs text-muted-foreground">+5 from last month</p>
            </div>
            <div className="rounded-full bg-primary/10 p-3">
              <Users className="h-5 w-5 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-primary">
          <CardContent className="flex flex-row items-center justify-between pt-6">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Today's Wages</p>
              <h3 className="text-2xl font-bold">₹24,000</h3>
              <p className="text-xs text-muted-foreground">+₹2,500 from yesterday</p>
            </div>
            <div className="rounded-full bg-primary/10 p-3">
              <IndianRupee className="h-5 w-5 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-primary">
          <CardContent className="flex flex-row items-center justify-between pt-6">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Monthly Expenses</p>
              <h3 className="text-2xl font-bold">₹5,20,000</h3>
              <p className="text-xs text-muted-foreground">+12% from last month</p>
            </div>
            <div className="rounded-full bg-primary/10 p-3">
              <BarChart3 className="h-5 w-5 text-primary" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Active Projects */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <div>
            <CardTitle>Active Projects</CardTitle>
            <CardDescription>Overview of your ongoing projects</CardDescription>
          </div>
          <Button asChild variant="ghost" size="sm">
            <Link href="/dashboard/projects">
              View All
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {[
              { name: "Pune City Mall", progress: 45, employees: 18, daily: "₹9,000" },
              { name: "Green Valley Apartments", progress: 72, employees: 15, daily: "₹7,500" },
              { name: "Highway Extension", progress: 25, employees: 15, daily: "₹7,500" },
            ].map((project) => (
              <div key={project.name} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="font-medium">{project.name}</div>
                  <div className="text-sm text-muted-foreground">{project.progress}%</div>
                </div>
                <Progress value={project.progress} className="h-2" />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Users className="mr-1 h-3 w-3" />
                    {project.employees} workers
                  </div>
                  <div className="flex items-center">
                    <IndianRupee className="mr-1 h-3 w-3" />
                    {project.daily}/day
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Activity and Alerts */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest updates across your projects</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  icon: Users,
                  description: "Added 2 new workers to Pune City Mall",
                  timestamp: "2 hours ago",
                },
                {
                  icon: IndianRupee,
                  description: "Recorded wages for Highway Extension",
                  timestamp: "4 hours ago",
                },
                {
                  icon: Calendar,
                  description: "Generated PF report for April",
                  timestamp: "Yesterday",
                },
                {
                  icon: Building2,
                  description: "Created new project: Highway Extension",
                  timestamp: "2 days ago",
                },
              ].map((activity, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-2">
                    <activity.icon className="h-4 w-4 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">{activity.description}</p>
                    <p className="text-xs text-muted-foreground">{activity.timestamp}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upcoming Tasks</CardTitle>
            <CardDescription>Tasks that need your attention</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-orange-100 p-2">
                  <AlertCircle className="h-4 w-4 text-orange-500" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">PF submission due</p>
                  <p className="text-xs text-muted-foreground">Due in 3 days</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-2">
                  <FileText className="h-4 w-4 text-primary" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">Generate monthly payslips</p>
                  <p className="text-xs text-muted-foreground">Due in 5 days</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-2">
                  <Clock className="h-4 w-4 text-primary" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">Project milestone: Green Valley</p>
                  <p className="text-xs text-muted-foreground">Due in 1 week</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-2">
                  <TrendingUp className="h-4 w-4 text-primary" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">Quarterly tax filing</p>
                  <p className="text-xs text-muted-foreground">Due in 2 weeks</p>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              View All Tasks
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
