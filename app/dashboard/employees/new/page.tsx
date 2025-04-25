"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Check, ChevronsUpDown, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { useToast } from "@/components/ui/use-toast"
import { cn } from "@/lib/utils"

const projects = [
  {
    value: "pune-city-mall",
    label: "Pune City Mall",
  },
  {
    value: "green-valley-apartments",
    label: "Green Valley Apartments",
  },
  {
    value: "highway-extension",
    label: "Highway Extension",
  },
]

export default function NewEmployeePage() {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [employeeKey, setEmployeeKey] = useState("")
  const router = useRouter()
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Generate a random 5-digit key
    const key = Math.floor(10000 + Math.random() * 90000).toString()
    setEmployeeKey(key)

    // Simulate employee creation
    setTimeout(() => {
      setIsLoading(false)
      toast({
        title: "Employee added",
        description: `Employee has been added with ID key: ${key}`,
      })
    }, 1500)
  }

  const handleFinish = () => {
    router.push("/dashboard/employees")
  }

  return (
    <div className="flex flex-col gap-4">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Add New Employee</h1>
        <p className="text-muted-foreground">Add a new employee to your project</p>
      </div>
      {!employeeKey ? (
        <Card className="max-w-2xl">
          <form onSubmit={handleSubmit}>
            <CardHeader>
              <CardTitle>Employee Details</CardTitle>
              <CardDescription>Enter the details of the new employee</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="Enter employee name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact">Contact Number</Label>
                <Input id="contact" type="tel" placeholder="Enter 10-digit mobile number" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="project">Project</Label>
                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild>
                    <Button variant="outline" role="combobox" aria-expanded={open} className="w-full justify-between">
                      {value ? projects.find((project) => project.value === value)?.label : "Select project..."}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-full p-0">
                    <Command>
                      <CommandInput placeholder="Search project..." />
                      <CommandList>
                        <CommandEmpty>No project found.</CommandEmpty>
                        <CommandGroup>
                          {projects.map((project) => (
                            <CommandItem
                              key={project.value}
                              value={project.value}
                              onSelect={(currentValue) => {
                                setValue(currentValue === value ? "" : currentValue)
                                setOpen(false)
                              }}
                            >
                              <Check
                                className={cn("mr-2 h-4 w-4", value === project.value ? "opacity-100" : "opacity-0")}
                              />
                              {project.label}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
              </div>
              <div className="space-y-2">
                <Label htmlFor="aadhaar">Aadhaar Number (Optional)</Label>
                <Input id="aadhaar" placeholder="Enter 12-digit Aadhaar number" />
              </div>
              <div className="flex items-start space-x-2 pt-2">
                <Checkbox id="consent" />
                <div className="grid gap-1.5 leading-none">
                  <label
                    htmlFor="consent"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    DPDP Act Consent
                  </label>
                  <p className="text-sm text-muted-foreground">
                    I have obtained consent from the employee to store their personal data as per the Digital Personal
                    Data Protection Act.
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" type="button" onClick={() => router.back()}>
                Cancel
              </Button>
              <Button type="submit" disabled={isLoading}>
                {isLoading ? "Adding..." : "Add Employee"}
              </Button>
            </CardFooter>
          </form>
        </Card>
      ) : (
        <Card className="max-w-2xl">
          <CardHeader>
            <CardTitle>Employee Added Successfully</CardTitle>
            <CardDescription>The employee has been added to your project</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-lg border p-6 text-center">
              <User className="mx-auto h-12 w-12 text-primary" />
              <h3 className="mt-4 text-lg font-semibold">Employee ID Key Generated</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Please note down this unique 5-digit key for the employee
              </p>
              <div className="mt-4 text-3xl font-bold">{employeeKey}</div>
              <p className="mt-2 text-sm text-muted-foreground">
                This key will be used to identify the employee when recording wages
              </p>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={() => router.push("/dashboard/employees/new")}>
              Add Another Employee
            </Button>
            <Button onClick={handleFinish}>Finish</Button>
          </CardFooter>
        </Card>
      )}
    </div>
  )
}
