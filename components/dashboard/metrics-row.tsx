"use client"

import { useEffect, useState } from "react"
import { motion, easeOut } from "framer-motion"
import { Clock, CheckCircle2, Users, Layers } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { metrics } from "@/lib/dashboard-data"

interface AnimatedNumberProps {
  target: number
  duration?: number
}

function AnimatedNumber({ target, duration = 1000 }: AnimatedNumberProps) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const startTime = Date.now()
    const tick = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCurrent(Math.round(eased * target))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [target, duration])

  return <span>{current}</span>
}

const cards = [
  {
    label: "Pending Requests",
    value: metrics.pendingRequests,
    icon: Clock,
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
    change: "+2 since yesterday",
  },
  {
    label: "Approved This Month",
    value: metrics.approvedThisMonth,
    icon: CheckCircle2,
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    change: "+5 from last month",
  },
  {
    label: "Total Employees",
    value: metrics.totalEmployees,
    icon: Users,
    iconBg: "bg-sky-100",
    iconColor: "text-sky-600",
    change: "Across all teams",
  },
  {
    label: "Teams",
    value: metrics.teamsCount,
    icon: Layers,
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
    change: "All fully staffed",
  },
]

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
}

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: easeOut } },
}

export function MetricsRow() {
  return (
    <motion.div
      className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {cards.map((card) => (
        <motion.div key={card.label} variants={item}>
          <Card className="gap-4 py-5 transition-shadow hover:shadow-md">
            <CardContent className="flex items-center gap-4">
              <div className={`flex size-11 shrink-0 items-center justify-center rounded-xl ${card.iconBg}`}>
                <card.icon className={`size-5 ${card.iconColor}`} />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-muted-foreground">{card.label}</p>
                <p className="text-2xl font-bold text-foreground">
                  <AnimatedNumber target={card.value} />
                </p>
              </div>
            </CardContent>
            <div className="px-6">
              <p className="text-xs text-muted-foreground">{card.change}</p>
            </div>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  )
}
