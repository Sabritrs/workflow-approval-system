import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { TeamOverview } from "@/components/dashboard/team-overview"

export default function TeamsPage() {
  return (
    <>
      <DashboardHeader
        title="Teams"
        description="Manage teams, approvers, and pending vacation requests"
      />
      <TeamOverview />
    </>
  )
}
