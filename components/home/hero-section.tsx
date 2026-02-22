"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { ArrowRight, Calendar, CheckCircle2, Clock, Users } from "lucide-react"

function DashboardMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="relative"
    >
      <div className="absolute -inset-4 rounded-3xl bg-primary/5 blur-2xl" />
      <Card className="relative overflow-hidden rounded-2xl border border-border/60 bg-card p-0 shadow-xl">
        {/* Fake browser bar */}
        <div className="flex items-center gap-2 border-b border-border/60 bg-muted/50 px-4 py-3">
          <div className="flex gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-destructive/40" />
            <div className="h-2.5 w-2.5 rounded-full bg-chart-4/60" />
            <div className="h-2.5 w-2.5 rounded-full bg-chart-3/60" />
          </div>
          <div className="ml-4 flex-1 rounded-md bg-background px-3 py-1">
            <span className="text-xs text-muted-foreground">app.vacayflow.com/dashboard</span>
          </div>
        </div>

        <div className="p-5">
          {/* Stats row */}
          <div className="mb-4 grid grid-cols-3 gap-2 sm:gap-3">
            {[
              { label: "Pending", value: "12", icon: Clock, color: "text-chart-4" },
              { label: "Approved", value: "48", icon: CheckCircle2, color: "text-chart-3" },
              { label: "Team", value: "24", icon: Users, color: "text-primary" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center gap-1 rounded-xl bg-muted/50 p-3"
              >
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
                <span className="text-lg font-bold text-foreground">{stat.value}</span>
                <span className="text-xs text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* Request list */}
          <div className="space-y-2.5">
            {[
              { name: "Sarah K.", days: "Dec 23 - 27", status: "Approved", initials: "SK" },
              { name: "Mike R.", days: "Jan 2 - 6", status: "Pending", initials: "MR" },
              { name: "Lisa T.", days: "Jan 10 - 12", status: "Pending", initials: "LT" },
            ].map((req) => (
              <div
                key={req.name}
                className="flex items-center justify-between rounded-xl bg-muted/30 px-3 py-2.5"
              >
                <div className="flex items-center gap-2.5">
                  <Avatar className="h-7 w-7">
                    <AvatarFallback className="bg-primary/10 text-xs text-primary">
                      {req.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium text-foreground">{req.name}</p>
                    <p className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {req.days}
                    </p>
                  </div>
                </div>
                <Badge
                  variant={req.status === "Approved" ? "default" : "secondary"}
                  className="rounded-lg text-xs"
                >
                  {req.status}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  )
}

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pb-12 pt-10 sm:pb-20 sm:pt-16 lg:pb-28 lg:pt-24">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-150 w-200 -translate-x-1/2 rounded-full bg-primary/4 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start"
          >
            <Badge
              variant="secondary"
              className="mb-6 rounded-full px-4 py-1.5 text-xs font-medium"
            >
              <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-primary" />
              Now available for teams of all sizes
            </Badge>

            <h1
              className="text-balance text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Simplify Vacation Management for Your Company
            </h1>

            <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg">
              Streamline approval workflows, track vacation balances, and empower
              team leads with a platform built for modern organizations.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button size="lg" className="rounded-xl px-6 text-base" asChild>
                <Link href="/dashboard">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-xl px-6 text-base"
              >
                Book a Demo
              </Button>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <div className="flex -space-x-2">
                {["JD", "AM", "SK", "RT"].map((initials) => (
                  <Avatar key={initials} className="h-8 w-8 border-2 border-background">
                    <AvatarFallback className="bg-primary/10 text-xs text-primary">
                      {initials}
                    </AvatarFallback>
                  </Avatar>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">500+</span> companies trust VacayFlow
              </p>
            </div>
          </motion.div>

          {/* Right side - Dashboard mockup */}
          <DashboardMockup />
        </div>
      </div>
    </section>
  )
}
