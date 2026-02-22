"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { CalendarDays, TrendingUp, Users, CheckCircle2 } from "lucide-react"

const requests = [
  {
    name: "Anna Schmidt",
    initials: "AS",
    type: "Annual Leave",
    dates: "Mar 15 - Mar 22",
    days: 5,
    status: "Approved",
  },
  {
    name: "Tom Baker",
    initials: "TB",
    type: "Sick Leave",
    dates: "Mar 18",
    days: 1,
    status: "Approved",
  },
  {
    name: "Priya Patel",
    initials: "PP",
    type: "Annual Leave",
    dates: "Apr 1 - Apr 5",
    days: 5,
    status: "Pending",
  },
  {
    name: "James Lee",
    initials: "JL",
    type: "Remote Work",
    dates: "Mar 25 - Mar 26",
    days: 2,
    status: "Pending",
  },
  {
    name: "Maria Garcia",
    initials: "MG",
    type: "Annual Leave",
    dates: "Apr 10 - Apr 14",
    days: 5,
    status: "Declined",
  },
]

const stats = [
  {
    label: "Total Employees",
    value: "124",
    change: "+8 this month",
    icon: Users,
  },
  {
    label: "Pending Requests",
    value: "18",
    change: "3 urgent",
    icon: CalendarDays,
  },
  {
    label: "Approved Today",
    value: "7",
    change: "+12% vs avg",
    icon: CheckCircle2,
  },
  {
    label: "Utilization Rate",
    value: "68%",
    change: "On track",
    icon: TrendingUp,
  },
]

const teamBalances = [
  { name: "Engineering", used: 72, total: 100 },
  { name: "Design", used: 45, total: 60 },
  { name: "Marketing", used: 30, total: 50 },
  { name: "Sales", used: 55, total: 80 },
]

export function DashboardPreviewSection() {
  return (
    <section id="dashboard" className="bg-muted/30 py-12 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
            Dashboard Preview
          </p>
          <h2
            className="mx-auto max-w-2xl text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            A powerful admin dashboard at your fingertips
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Everything HR managers and team leads need to stay on top of
            vacation requests and team availability.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-14"
        >
          <Card className="overflow-hidden rounded-2xl border-border/50 bg-card shadow-xl">
            {/* Dashboard top bar */}
            <div className="flex items-center justify-between border-b border-border/60 bg-muted/30 px-3 py-2 sm:px-6 sm:py-3">
              <div className="flex items-center gap-3">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary">
                  <span className="text-xs font-bold text-primary-foreground">V</span>
                </div>
                <span className="text-sm font-semibold text-foreground">Admin Dashboard</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="rounded-lg text-xs">
                  Acme Corp
                </Badge>
                <Avatar className="h-7 w-7">
                  <AvatarFallback className="bg-primary/10 text-xs text-primary">
                    AD
                  </AvatarFallback>
                </Avatar>
              </div>
            </div>

            <div className="p-3 sm:p-6">
              {/* Stats grid */}
              <div className="mb-6 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
                {stats.map((stat) => (
                  <Card key={stat.label} className="rounded-xl border-border/40 bg-muted/20">
                    <CardContent className="flex items-start justify-between p-4">
                      <div>
                        <p className="text-xs font-medium text-muted-foreground">{stat.label}</p>
                        <p className="mt-1 text-2xl font-bold text-foreground">{stat.value}</p>
                        <p className="mt-0.5 text-xs text-muted-foreground">{stat.change}</p>
                      </div>
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                        <stat.icon className="h-4 w-4 text-primary" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="grid gap-4 sm:gap-6 lg:grid-cols-3">
                {/* Table */}
                <Card className="rounded-xl border-border/40 lg:col-span-2">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base">Recent Requests</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow className="hover:bg-transparent">
                          <TableHead className="text-xs">Employee</TableHead>
                          <TableHead className="text-xs">Type</TableHead>
                          <TableHead className="hidden text-xs sm:table-cell">Dates</TableHead>
                          <TableHead className="text-right text-xs">Status</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {requests.map((req) => (
                          <TableRow key={req.name} className="hover:bg-muted/30">
                            <TableCell>
                              <div className="flex items-center gap-2">
                                <Avatar className="h-7 w-7">
                                  <AvatarFallback className="bg-primary/10 text-xs text-primary">
                                    {req.initials}
                                  </AvatarFallback>
                                </Avatar>
                                <span className="text-sm font-medium text-foreground">{req.name}</span>
                              </div>
                            </TableCell>
                            <TableCell className="text-sm text-muted-foreground">
                              {req.type}
                            </TableCell>
                            <TableCell className="hidden text-sm text-muted-foreground sm:table-cell">
                              {req.dates}
                            </TableCell>
                            <TableCell className="text-right">
                              <Badge
                                variant={
                                  req.status === "Approved"
                                    ? "default"
                                    : req.status === "Pending"
                                      ? "secondary"
                                      : "destructive"
                                }
                                className="rounded-lg text-xs"
                              >
                                {req.status}
                              </Badge>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                    </div>
                  </CardContent>
                </Card>

                {/* Team balances */}
                <Card className="rounded-xl border-border/40">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base">Team Vacation Budget</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-5">
                      {teamBalances.map((team) => (
                        <div key={team.name} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-foreground">
                              {team.name}
                            </span>
                            <span className="text-xs text-muted-foreground">
                              {team.used}/{team.total} days
                            </span>
                          </div>
                          <Progress
                            value={(team.used / team.total) * 100}
                            className="h-2"
                          />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
