"use client"

import { motion, easeOut } from "framer-motion"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { recentActivity } from "@/lib/dashboard-data"

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, x: -12 },
  show: { opacity: 1, x: 0, transition: { duration: 0.3, ease: easeOut } },
}

const actionColors: Record<string, string> = {
  approved: "text-emerald-600",
  submitted: "text-primary",
  rejected: "text-red-600",
}

const avatarColors: Record<string, string> = {
  MS: "bg-sky-100 text-sky-700",
  SC: "bg-emerald-100 text-emerald-700",
  TH: "bg-amber-100 text-amber-700",
  DK: "bg-violet-100 text-violet-700",
  RG: "bg-rose-100 text-rose-700",
  NP: "bg-teal-100 text-teal-700",
}

export function ActivityFeed() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.35 }}
    >
      <Card className="h-full">
        <CardHeader>
          <CardTitle className="text-base">Recent Activity</CardTitle>
          <CardDescription>Latest actions across the organization</CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-85W pr-3">
            <motion.div
              className="flex flex-col gap-4"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {recentActivity.map((activity) => (
                <motion.div
                  key={activity.id}
                  variants={item}
                  className="flex items-start gap-3"
                >
                  <Avatar className="size-8 shrink-0">
                    <AvatarFallback
                      className={`text-xs font-semibold ${avatarColors[activity.userInitials] ?? "bg-primary/10 text-primary"}`}
                    >
                      {activity.userInitials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="text-sm text-foreground">
                      <span className="font-medium">{activity.user}</span>{" "}
                      <span className={`font-medium ${actionColors[activity.action] ?? "text-foreground"}`}>
                        {activity.action}
                      </span>{" "}
                      <span className="text-muted-foreground">{activity.target}</span>
                    </p>
                    <p className="mt-0.5 text-xs text-muted-foreground">{activity.timestamp}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </ScrollArea>
        </CardContent>
      </Card>
    </motion.div>
  )
}
