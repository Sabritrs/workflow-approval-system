import type { Metadata } from "next"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"

export const metadata: Metadata = {
  title: "Dashboard - VacayFlow",
  description: "Manage vacation requests, teams, and approvals for your organization.",
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (<DashboardShell>{children}</DashboardShell>)
}

