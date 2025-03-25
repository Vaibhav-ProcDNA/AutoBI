import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Zap, RefreshCw, BarChart3 } from "lucide-react"

import AutomationOptions from "@/components/automation-options"

export const metadata: Metadata = {
  title: "Automate Your BI Workflow",
  description:
    "Seamlessly convert Figma designs to Power BI or migrate from Tableau to Power BI with our powerful automation tools.",
  keywords: "Power BI automation, Figma to Power BI, Tableau to Power BI, BI migration, data visualization",
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-blue-50">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <Zap className="h-5 w-5 text-primary" />
            <span>AutoBI Pro</span>
          </div>
          <nav className="hidden md:flex gap-6">
           
            <Link href="#how-it-works" className="text-sm font-medium hover:text-primary transition-colors">
              How It Works
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">
              Pricing
            </Link>
          </nav>
          <div>
            <Link
              href="#get-started"
              className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Automate Your BI Workflow
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Seamlessly convert Figma designs to Power BI or migrate from Tableau to Power BI with our powerful
                    automation tools.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#get-started"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                  <Link
                    href="#how-it-works"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative  w-full overflow-hidden rounded-xl bg-muted ">
                  <Image
                    src="https://neuroncomputers.com/wp-content/uploads/2019/11/bigstock-Automation-Software-Technology-258588526.jpg"
                    width={600}
                    height={50}
                    alt="Dashboard visualization showing the transformation from Figma/Tableau to Power BI"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>


        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  How It Works
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Simple, Fast, Effective</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Our automation process is designed to be straightforward and efficient, saving you time and resources.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold">Choose Your Tool</h3>
                <p className="text-muted-foreground">
                  Select whether you're starting with a Figma design or a Tableau workbook.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold">Upload Your File</h3>
                <p className="text-muted-foreground">
                  Provide your Figma link or upload your Tableau TWB file to our secure platform.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold">Get Your Power BI File</h3>
                <p className="text-muted-foreground">
                  Our system processes your input and delivers a ready-to-use Power BI dashboard.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="get-started" className="w-full py-12 md:py-24 lg:py-32 ">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Get Started
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Choose Your Automation</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Select the automation tool that fits your needs and start transforming your visualizations today.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl py-12">
              <AutomationOptions />
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex items-center gap-2 font-semibold">
            <Zap className="h-5 w-5 text-primary" />
            <span>AutoBI Pro</span>
          </div>
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} ProcDNA All rights reserved.
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

