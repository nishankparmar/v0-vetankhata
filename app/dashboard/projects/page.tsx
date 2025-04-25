"use client"

import Link from "next/link"
import { Calendar, ChevronRight, Clock, IndianRupee, MoreHorizontal, Plus, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const projects = [
  {
    id: "1",
    name: "Pune City Mall",
    location: "Pune Central",
    startDate: "15 Jan 2024",
    progress: 45,
    employees: 18,
    dailyWage: "₹9,000",
    status: "active",
  },
  {
    id: "2",
    name: "Green Valley Apartments",
    location: "Kothrud, Pune",
    startDate: "03 Mar 2024",
    progress: 72,
    employees: 15,
    dailyWage: "₹7,500",
    status: "active",
  },
  {
    id: "3",
    name: "Highway Extension",
    location: "Mumbai-Pune Highway",
    startDate: "22 Feb 2024",
    progress: 25,
    employees: 15,
    dailyWage: "₹7,500",
    status: "active",
  },
  {
    id: "4",
    name: "City Park Renovation",
    location: "Aundh, Pune",
    startDate: "10 Nov 2023",
    progress: 100,
    employees: 0,
    dailyWage: "₹0",
    status: "completed",
  },
  {
    id: "5",
    name: "Metro Station",
    location: "Shivaji Nagar, Pune",
    startDate: "05 Dec 2023",
    progress: 100,
    employees: 0,
    dailyWage: "₹0",
    status: "completed",
  },
]

export default function ProjectsPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
          <p className="text-muted-foreground">Manage your construction projects</p>
        </div>
        <div className="flex items-center gap-2">
          <Button asChild>
            <Link href="/dashboard/projects/new">
              <Plus className="mr-2 h-4 w-4" />
              New Project
            </Link>
          </Button>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Input placeholder="Search projects..." className="max-w-sm" />
        <Button variant="outline">Search</Button>
      </div>
      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Projects</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden">
                <CardHeader className="flex flex-row items-start justify-between space-y-0">
                  <div>
                    <CardTitle>{project.name}</CardTitle>
                    <CardDescription>{project.location}</CardDescription>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem>View Project</DropdownMenuItem>
                      <DropdownMenuItem>Add Employee</DropdownMenuItem>
                      <DropdownMenuItem>Record Wages</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Edit Project</DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">Delete Project</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </CardHeader>
                <CardContent className="grid gap-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>Started: {project.startDate}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span>{project.employees} employees</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <IndianRupee className="h-4 w-4 text-muted-foreground" />
                    <span>Daily wages: {project.dailyWage}</span>
                  </div>
                  <div className="mt-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Progress</span>
                      <span>{project.progress}%</span>
                    </div>
                    <Progress value={project.progress} className="h-2 mt-1" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="ghost" className="w-full">
                    <Link href={`/dashboard/projects/${project.id}`}>
                      View Details
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="active" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {projects
              .filter((project) => project.status === "active")
              .map((project) => (
                <Card key={project.id} className="overflow-hidden">
                  <CardHeader className="flex flex-row items-start justify-between space-y-0">
                    <div>
                      <CardTitle>{project.name}</CardTitle>
                      <CardDescription>{project.location}</CardDescription>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>View Project</DropdownMenuItem>
                        <DropdownMenuItem>Add Employee</DropdownMenuItem>
                        <DropdownMenuItem>Record Wages</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Edit Project</DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">Delete Project</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </CardHeader>
                  <CardContent className="grid gap-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>Started: {project.startDate}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span>{project.employees} employees</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <IndianRupee className="h-4 w-4 text-muted-foreground" />
                      <span>Daily wages: {project.dailyWage}</span>
                    </div>
                    <div className="mt-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>Progress</span>
                        <span>{project.progress}%</span>
                      </div>
                      <Progress value={project.progress} className="h-2 mt-1" />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="ghost" className="w-full">
                      <Link href={`/dashboard/projects/${project.id}`}>
                        View Details
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </TabsContent>
        <TabsContent value="completed" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {projects
              .filter((project) => project.status === "completed")
              .map((project) => (
                <Card key={project.id} className="overflow-hidden">
                  <CardHeader className="flex flex-row items-start justify-between space-y-0">
                    <div>
                      <CardTitle>{project.name}</CardTitle>
                      <CardDescription>{project.location}</CardDescription>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>View Project</DropdownMenuItem>
                        <DropdownMenuItem>Generate Report</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Archive Project</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </CardHeader>
                  <CardContent className="grid gap-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>Started: {project.startDate}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>Status: Completed</span>
                    </div>
                    <div className="mt-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>Progress</span>
                        <span>{project.progress}%</span>
                      </div>
                      <Progress value={project.progress} className="h-2 mt-1" />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="ghost" className="w-full">
                      <Link href={`/dashboard/projects/${project.id}`}>
                        View Details
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
