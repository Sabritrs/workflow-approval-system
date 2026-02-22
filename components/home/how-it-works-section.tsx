"use client"

import { motion } from "framer-motion"
import { UserPlus, Send, CalendarCheck } from "lucide-react"

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Set Up Your Teams",
    description:
      "Create your organization, invite team members, and assign approvers. Setup takes less than 5 minutes.",
  },
  {
    icon: Send,
    step: "02",
    title: "Submit Requests",
    description:
      "Employees submit vacation requests with just a few clicks. Select dates, leave type, and add optional notes.",
  },
  {
    icon: CalendarCheck,
    step: "03",
    title: "Approve & Track",
    description:
      "Approvers review and respond instantly. The team calendar updates in real time so everyone stays in sync.",
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
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

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-12 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
            How It Works
          </p>
          <h2
            className="mx-auto max-w-2xl text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Up and running in minutes
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Three simple steps to transform how your company handles vacation
            requests.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="relative mt-10 grid gap-8 sm:mt-16 md:grid-cols-3"
        >
          {/* Connector line */}
          <div className="pointer-events-none absolute left-0 right-0 top-12 hidden h-px bg-border md:block" />

          {steps.map((step, i) => (
            <motion.div key={step.step} variants={itemVariants} className="relative">
              <div className="flex flex-col items-center text-center">
                {/* Step circle */}
                <div className="relative z-10 mb-6 flex h-24 w-24 flex-col items-center justify-center rounded-2xl border border-border/60 bg-card shadow-sm">
                  <step.icon className="mb-1 h-6 w-6 text-primary" />
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Step {step.step}
                  </span>
                </div>

                {/* Connector dots for mobile */}
                {i < steps.length - 1 && (
                  <div className="my-2 flex flex-col items-center gap-1 md:hidden">
                    <div className="h-2 w-px bg-border" />
                    <div className="h-1.5 w-1.5 rounded-full bg-primary/30" />
                    <div className="h-2 w-px bg-border" />
                  </div>
                )}

                <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
