"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { IndianRupee, Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/components/ui/use-toast"

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()
  const router = useRouter()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate login process
    setTimeout(() => {
      setIsLoading(false)
      toast({
        title: "Login successful",
        description: "Welcome back to Vetankhata!",
      })
      router.push("/dashboard")
    }, 1500)
  }

  const handleOtpRequest = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate OTP sending
    setTimeout(() => {
      setIsLoading(false)
      toast({
        title: "OTP sent",
        description: "Please check your phone for the verification code",
      })
    }, 1500)
  }

  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <Link href="/" className="absolute left-4 top-4 md:left-8 md:top-8 flex items-center gap-2">
        <IndianRupee className="h-6 w-6 text-primary" />
        <span className="text-xl font-bold">Vetankhata</span>
      </Link>
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
          <p className="text-sm text-muted-foreground">Sign in to your account to continue</p>
        </div>
        <Tabs defaultValue="phone" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="phone">Phone</TabsTrigger>
            <TabsTrigger value="email">Email</TabsTrigger>
          </TabsList>
          <TabsContent value="phone">
            <Card>
              <CardHeader>
                <CardTitle>Login with Phone</CardTitle>
                <CardDescription>Enter your phone number to receive an OTP</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="Enter your 10-digit number" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="otp">OTP</Label>
                  <Input id="otp" type="text" placeholder="Enter OTP" />
                </div>
              </CardContent>
              <CardFooter className="flex flex-col space-y-2">
                <Button onClick={handleOtpRequest} className="w-full" disabled={isLoading}>
                  {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Request OTP
                </Button>
                <Button onClick={handleLogin} className="w-full" disabled={isLoading}>
                  {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Login
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="email">
            <Card>
              <CardHeader>
                <CardTitle>Login with Email</CardTitle>
                <CardDescription>Enter your email and password to login</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="m@example.com" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <Link href="#" className="text-xs text-primary hover:underline">
                      Forgot password?
                    </Link>
                  </div>
                  <Input id="password" type="password" />
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={handleLogin} className="w-full" disabled={isLoading}>
                  {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Login
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
        <div className="text-center text-sm text-muted-foreground">
          Don&apos;t have an account?{" "}
          <Link href="#" className="text-primary underline-offset-4 hover:underline">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  )
}
