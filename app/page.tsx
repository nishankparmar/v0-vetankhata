import Link from "next/link"
import {
  ArrowRight,
  IndianRupee,
  BarChart3,
  Calendar,
  CheckCircle,
  FileText,
  Landmark,
  Shield,
  Smartphone,
  Users,
} from "lucide-react"

import { Button } from "@/components/ui/button"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <IndianRupee className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">Vetankhata</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-primary">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium hover:text-primary">
              How It Works
            </Link>
            <Link href="#benefits" className="text-sm font-medium hover:text-primary">
              Benefits
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" asChild className="hidden md:flex">
              <Link href="/login">Log In</Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/login">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section
          className="py-12 md:py-24 lg:py-32 relative"
          style={{
            background: "linear-gradient(90deg, #FF5F00 0%, #FF2D00 100%)",
          }}
        >
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-6xl">
                    Digital Payroll for Unorganized Sector
                  </h1>
                  <p className="max-w-[600px] text-white/80 md:text-xl">
                    Prevent disputes, ensure compliance, and manage your workforce with ease. Designed for contractors
                    in India.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="gap-1 bg-white text-primary hover:bg-white/90" asChild>
                    <Link href="/login">
                      Start Free Trial <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                    <Link href="#how-it-works">Learn More</Link>
                  </Button>
                </div>
                <div className="flex items-center gap-2 text-sm text-white">
                  <CheckCircle className="h-4 w-4 text-white" />
                  <span>No credit card required</span>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[350px] w-full md:h-[420px] lg:h-[450px] overflow-hidden rounded-lg bg-white/10 backdrop-blur-sm shadow-xl">
                  <div className="absolute inset-0 p-6">
                    <div className="space-y-4 rounded-lg bg-white p-4">
                      <div className="text-lg font-bold">Vetankhata Dashboard</div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="rounded-lg bg-gray-50 p-3">
                          <div className="text-sm font-medium">Active Projects</div>
                          <div className="text-2xl font-bold">5</div>
                        </div>
                        <div className="rounded-lg bg-gray-50 p-3">
                          <div className="text-sm font-medium">Total Employees</div>
                          <div className="text-2xl font-bold">48</div>
                        </div>
                        <div className="rounded-lg bg-gray-50 p-3">
                          <div className="text-sm font-medium">Today's Wages</div>
                          <div className="text-2xl font-bold">₹24,000</div>
                        </div>
                        <div className="rounded-lg bg-gray-50 p-3">
                          <div className="text-sm font-medium">Pending Reports</div>
                          <div className="text-2xl font-bold">2</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Everything you need to manage payroll
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Vetankhata provides a complete solution for contractors to manage their workforce and payroll
                  digitally.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-start space-y-4 rounded-lg border p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Employee Management</h3>
                  <p className="text-muted-foreground">
                    Create and manage employee profiles with unique identification keys.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-start space-y-4 rounded-lg border p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <IndianRupee className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Daily Wages</h3>
                  <p className="text-muted-foreground">Record daily wages, advances, and overtime for each employee.</p>
                </div>
              </div>
              <div className="flex flex-col items-start space-y-4 rounded-lg border p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Compliance Reports</h3>
                  <p className="text-muted-foreground">Generate payslips and compliance reports for PF and ESI.</p>
                </div>
              </div>
              <div className="flex flex-col items-start space-y-4 rounded-lg border p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Balance Tracking</h3>
                  <p className="text-muted-foreground">Track daily balances for each employee to prevent disputes.</p>
                </div>
              </div>
              <div className="flex flex-col items-start space-y-4 rounded-lg border p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Audit Trail</h3>
                  <p className="text-muted-foreground">Log all changes with timestamps for dispute resolution.</p>
                </div>
              </div>
              <div className="flex flex-col items-start space-y-4 rounded-lg border p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Smartphone className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Multilingual Support</h3>
                  <p className="text-muted-foreground">Available in English, Hindi, and Marathi with voice guidance.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  How It Works
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Simple workflow for busy contractors
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Vetankhata is designed to be simple and intuitive, even for users with limited technical experience.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 rounded-lg bg-background p-6 text-center shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  1
                </div>
                <h3 className="text-xl font-bold">Create Project</h3>
                <p className="text-muted-foreground">
                  Add your construction sites or projects with details like name, location, and start date.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg bg-background p-6 text-center shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  2
                </div>
                <h3 className="text-xl font-bold">Add Employees</h3>
                <p className="text-muted-foreground">
                  Create employee profiles with unique 5-digit keys for easy identification.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg bg-background p-6 text-center shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  3
                </div>
                <h3 className="text-xl font-bold">Record Wages</h3>
                <p className="text-muted-foreground">
                  Log daily wages, advances, and overtime for each employee or apply the same wage to all.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="benefits" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                    Benefits
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Why choose Vetankhata?</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Our solution is specifically designed for the unorganized sector in India, addressing unique
                    challenges faced by contractors.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Landmark className="h-5 w-5 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold">Prevent Litigation</h3>
                      <p className="text-muted-foreground">
                        Avoid costly disputes (₹20,000-2 lakh) with proper documentation and audit trails.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Shield className="h-5 w-5 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold">Ensure Compliance</h3>
                      <p className="text-muted-foreground">
                        Meet requirements for Payment of Wages Act, PF, ESI, and DPDP Act.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Calendar className="h-5 w-5 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold">Save Time</h3>
                      <p className="text-muted-foreground">
                        Add wages for all employees in under 5 minutes, even with limited technical knowledge.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[350px] w-full md:h-[420px] lg:h-[450px] overflow-hidden rounded-lg border bg-background shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-muted to-background p-6">
                    <div className="space-y-2 rounded-lg bg-primary/5 p-4 backdrop-blur">
                      <div className="text-lg font-bold">Dispute Prevention</div>
                      <div className="flex items-center justify-between rounded-lg bg-background p-3">
                        <div className="text-sm">
                          <span className="font-medium">Employee:</span> Rajesh K.
                        </div>
                        <div className="text-sm">
                          <span className="font-medium">ID:</span> 48392
                        </div>
                      </div>
                      <div className="grid grid-cols-5 gap-2 rounded-lg bg-background p-3 text-sm">
                        <div className="font-medium">Date</div>
                        <div className="font-medium">Wage</div>
                        <div className="font-medium">Advance</div>
                        <div className="font-medium">OT</div>
                        <div className="font-medium">Balance</div>
                        <div>01/05</div>
                        <div>₹500</div>
                        <div>₹0</div>
                        <div>₹100</div>
                        <div>₹600</div>
                        <div>02/05</div>
                        <div>₹500</div>
                        <div>₹200</div>
                        <div>₹0</div>
                        <div>₹900</div>
                      </div>
                    </div>
                    <div className="mt-4 space-y-2 rounded-lg bg-primary/5 p-4 backdrop-blur">
                      <div className="text-lg font-bold">Compliance Reports</div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="rounded-lg bg-background p-3">
                          <div className="flex items-center gap-2">
                            <FileText className="h-4 w-4 text-primary" />
                            <div className="text-sm font-medium">PF Report - May 2024</div>
                          </div>
                        </div>
                        <div className="rounded-lg bg-background p-3">
                          <div className="flex items-center gap-2">
                            <FileText className="h-4 w-4 text-primary" />
                            <div className="text-sm font-medium">ESI Report - May 2024</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="cta"
          className="py-12 md:py-24 lg:py-32 text-white"
          style={{
            background: "linear-gradient(90deg, #FF5F00 0%, #FF2D00 100%)",
          }}
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Ready to digitize your payroll?
                </h2>
                <p className="max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of contractors who are saving time and preventing disputes with Vetankhata.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" variant="secondary" className="gap-1 bg-white text-primary hover:bg-white/90">
                  Start Free Trial <ArrowRight className="h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Need help?</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our team is ready to assist you with any questions you may have.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <Button className="w-full" variant="outline">
                  <Link href="https://wa.me/919876543210" className="flex items-center justify-center gap-2 w-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                      <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                      <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                      <path d="M9.5 13.5c.5 1 1.5 1 2 1s1.5 0 2-1" />
                    </svg>
                    Chat on WhatsApp
                  </Link>
                </Button>
                <p className="text-xs text-muted-foreground">Available in English, Hindi, and Marathi</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <IndianRupee className="h-5 w-5 text-primary" />
            <span className="text-lg font-bold">Vetankhata</span>
          </div>
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Vetankhata. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
