"use client"

import { easeOut, motion } from "framer-motion"
import { Users, AlertCircle } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import { teams } from "@/lib/dashboard-data"

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06 },
  },
}

const item = {
  hidden: { opacity: 0, scale: 0.96 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: easeOut } },
}

const approverColors: Record<string, string> = {
  MS: "bg-sky-100 text-sky-700",
  RG: "bg-emerald-100 text-emerald-700",
  TH: "bg-amber-100 text-amber-700",
  NP: "bg-violet-100 text-violet-700",
  CL: "bg-rose-100 text-rose-700",
  AZ: "bg-teal-100 text-teal-700",
}

export function TeamOverview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.3 }}
    >
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Team Overview</CardTitle>
          <CardDescription>
            Teams, approvers, and pending request counts
          </CardDescription>
        </CardHeader>
        <CardContent>
          <motion.div
            className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {teams.map((team) => (
              <motion.div key={team.id} variants={item}>
                <div className="flex flex-col gap-3 rounded-xl border border-border bg-background p-4 transition-shadow hover:shadow-sm">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-semibold text-foreground">{team.name}</h4>
                    {team.pendingRequests > 0 && (
                      <Badge className="border border-amber-200 bg-amber-50 text-amber-700 text-[10px]">
                        <AlertCircle className="mr-0.5 size-3" />
                        {team.pendingRequests} pending
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <Avatar className="size-6">
                      <AvatarFallback
                        className={`text-[10px] font-semibold ${approverColors[team.approverInitials] ?? "bg-primary/10 text-primary"}`}
                      >
                        {team.approverInitials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-xs text-muted-foreground">Approver</p>
                      <p className="text-sm font-medium text-foreground">{team.approver}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Users className="size-3.5" />
                    <span>{team.membersCount} members</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
