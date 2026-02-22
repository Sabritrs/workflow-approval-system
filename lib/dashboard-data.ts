export interface VacationRequest {
  id: string
  employeeName: string
  employeeInitials: string
  employeeAvatar?: string
  team: string
  startDate: string
  endDate: string
  days: number
  status: "pending" | "approved" | "rejected"
  type: string
}

export interface TeamOverview {
  id: string
  name: string
  approver: string
  approverInitials: string
  membersCount: number
  pendingRequests: number
}

export interface ActivityItem {
  id: string
  user: string
  userInitials: string
  action: string
  target: string
  timestamp: string
}

export const vacationRequests: VacationRequest[] = [
  {
    id: "VR-001",
    employeeName: "Sarah Chen",
    employeeInitials: "SC",
    team: "Engineering",
    startDate: "Mar 10, 2026",
    endDate: "Mar 14, 2026",
    days: 5,
    status: "pending",
    type: "Annual Leave",
  },
  {
    id: "VR-002",
    employeeName: "James Wilson",
    employeeInitials: "JW",
    team: "Design",
    startDate: "Mar 17, 2026",
    endDate: "Mar 21, 2026",
    days: 5,
    status: "approved",
    type: "Annual Leave",
  },
  {
    id: "VR-003",
    employeeName: "Maria Garcia",
    employeeInitials: "MG",
    team: "Marketing",
    startDate: "Mar 3, 2026",
    endDate: "Mar 4, 2026",
    days: 2,
    status: "rejected",
    type: "Personal Day",
  },
  {
    id: "VR-004",
    employeeName: "David Kim",
    employeeInitials: "DK",
    team: "Engineering",
    startDate: "Mar 24, 2026",
    endDate: "Mar 28, 2026",
    days: 5,
    status: "pending",
    type: "Annual Leave",
  },
  {
    id: "VR-005",
    employeeName: "Emily Johnson",
    employeeInitials: "EJ",
    team: "Sales",
    startDate: "Apr 1, 2026",
    endDate: "Apr 3, 2026",
    days: 3,
    status: "approved",
    type: "Sick Leave",
  },
  {
    id: "VR-006",
    employeeName: "Alex Turner",
    employeeInitials: "AT",
    team: "Product",
    startDate: "Apr 6, 2026",
    endDate: "Apr 10, 2026",
    days: 5,
    status: "pending",
    type: "Annual Leave",
  },
  {
    id: "VR-007",
    employeeName: "Lisa Park",
    employeeInitials: "LP",
    team: "Design",
    startDate: "Mar 12, 2026",
    endDate: "Mar 13, 2026",
    days: 2,
    status: "approved",
    type: "Personal Day",
  },
]

export const teams: TeamOverview[] = [
  {
    id: "T-001",
    name: "Engineering",
    approver: "Michael Scott",
    approverInitials: "MS",
    membersCount: 12,
    pendingRequests: 3,
  },
  {
    id: "T-002",
    name: "Design",
    approver: "Rachel Green",
    approverInitials: "RG",
    membersCount: 6,
    pendingRequests: 1,
  },
  {
    id: "T-003",
    name: "Marketing",
    approver: "Tom Harris",
    approverInitials: "TH",
    membersCount: 8,
    pendingRequests: 0,
  },
  {
    id: "T-004",
    name: "Sales",
    approver: "Nina Patel",
    approverInitials: "NP",
    membersCount: 10,
    pendingRequests: 2,
  },
  {
    id: "T-005",
    name: "Product",
    approver: "Chris Lee",
    approverInitials: "CL",
    membersCount: 5,
    pendingRequests: 1,
  },
  {
    id: "T-006",
    name: "Support",
    approver: "Amy Zhang",
    approverInitials: "AZ",
    membersCount: 9,
    pendingRequests: 0,
  },
]

export const recentActivity: ActivityItem[] = [
  {
    id: "A-001",
    user: "Michael Scott",
    userInitials: "MS",
    action: "approved",
    target: "James Wilson's vacation request",
    timestamp: "2 minutes ago",
  },
  {
    id: "A-002",
    user: "Sarah Chen",
    userInitials: "SC",
    action: "submitted",
    target: "a vacation request for Mar 10-14",
    timestamp: "15 minutes ago",
  },
  {
    id: "A-003",
    user: "Tom Harris",
    userInitials: "TH",
    action: "rejected",
    target: "Maria Garcia's vacation request",
    timestamp: "1 hour ago",
  },
  {
    id: "A-004",
    user: "David Kim",
    userInitials: "DK",
    action: "submitted",
    target: "a vacation request for Mar 24-28",
    timestamp: "2 hours ago",
  },
  {
    id: "A-005",
    user: "Rachel Green",
    userInitials: "RG",
    action: "approved",
    target: "Lisa Park's vacation request",
    timestamp: "3 hours ago",
  },
  {
    id: "A-006",
    user: "Nina Patel",
    userInitials: "NP",
    action: "approved",
    target: "Emily Johnson's sick leave request",
    timestamp: "5 hours ago",
  },
]

export const metrics = {
  pendingRequests: 7,
  approvedThisMonth: 18,
  totalEmployees: 50,
  teamsCount: 6,
}
