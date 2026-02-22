import { ActivityFeed } from "@/components/dashboard/activity-feed"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { MetricsRow } from "@/components/dashboard/metrics-row"
import { RequestsTable } from "@/components/dashboard/requests-table"
import { TeamOverview } from "@/components/dashboard/team-overview"

export default function DashboardPage() {
  return (
    <>
      <DashboardHeader
        title="Dashboard"
        description="Overview of vacation requests and team activity"
      />

      <MetricsRow />

      <RequestsTable />

      <div className="grid grid-cols-1 gap-4 sm:gap-6 xl:grid-cols-5">
        <div className="xl:col-span-3">
          <TeamOverview />
        </div>
        <div className="xl:col-span-2">
          <ActivityFeed />
        </div>
      </div>
    </>
  )
}
