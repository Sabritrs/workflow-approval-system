"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Building2, CheckSquare, BarChart3, Zap } from "lucide-react"

const features = [
  {
    icon: CheckSquare,
    title: "Team-Based Approvals",
    description:
      "Assign approvers per team and automate vacation request routing. Managers get instant notifications to approve or decline.",
  },
  {
    icon: Building2,
    title: "Multi-Organization Support",
    description:
      "Manage multiple departments or subsidiaries from a single platform. Each organization has isolated settings and policies.",
  },
  {
    icon: BarChart3,
    title: "Vacation Balance Tracking",
    description:
      "Real-time visibility into remaining vacation days, sick leave, and custom leave types. Automatic accrual calculations.",
  },
  {
    icon: Zap,
    title: "Real-Time Workflow",
    description:
      "Instant status updates for every request. Team calendars sync automatically so you always know who is available.",
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export function FeaturesSection() {
  return (
    <section id="features" className="bg-muted/30 py-12 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
            Features
          </p>
          <h2
            className="mx-auto max-w-2xl text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Everything you need to manage time off
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            From request to approval, VacayFlow handles every step of your
            vacation management workflow.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4"
        >
          {features.map((feature) => (
            <motion.div key={feature.title} variants={itemVariants}>
              <Card className="group h-full cursor-default rounded-2xl border-border/50 bg-card transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/4">
                <CardContent className="flex flex-col gap-4 p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/15">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
