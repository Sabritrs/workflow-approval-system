"use client"

import { motion } from "framer-motion"
import { MoreHorizontal, Check, X, Eye } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Table,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { vacationRequests } from "@/lib/dashboard-data"

const statusStyles: Record<string, string> = {
  pending: "bg-amber-50 text-amber-700 border-amber-200",
  approved: "bg-emerald-50 text-emerald-700 border-emerald-200",
  rejected: "bg-red-50 text-red-700 border-red-200",
}

const avatarColors: Record<string, string> = {
  SC: "bg-sky-100 text-sky-700",
  JW: "bg-emerald-100 text-emerald-700",
  MG: "bg-rose-100 text-rose-700",
  DK: "bg-amber-100 text-amber-700",
  EJ: "bg-violet-100 text-violet-700",
  AT: "bg-teal-100 text-teal-700",
  LP: "bg-fuchsia-100 text-fuchsia-700",
}

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.04 },
  },
}

const row = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.3 } },
}

export function RequestsTable() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
    >
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Vacation Requests</CardTitle>
          <CardDescription>
            Manage and review team vacation requests
          </CardDescription>
        </CardHeader>
        <CardContent className="px-0 sm:px-6">
          {/* Mobile card view */}
          <div className="flex flex-col gap-3 px-4 sm:hidden">
            {vacationRequests.map((req) => (
              <div
                key={req.id}
                className="flex items-start justify-between rounded-xl border border-border p-3"
              >
                <div className="flex items-start gap-3">
                  <Avatar className="size-8 shrink-0">
                    <AvatarFallback
                      className={`text-xs font-semibold ${avatarColors[req.employeeInitials] ?? "bg-primary/10 text-primary"}`}
                    >
                      {req.employeeInitials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-foreground">{req.employeeName}</p>
                    <p className="text-xs text-muted-foreground">{req.team}</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {req.startDate} - {req.endDate} ({req.days}d)
                    </p>
                    <Badge className={`mt-2 border capitalize ${statusStyles[req.status]}`}>
                      {req.status}
                    </Badge>
                  </div>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="size-8 shrink-0" aria-label={`Actions for ${req.employeeName}`}>
                      <MoreHorizontal className="size-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <Eye className="size-4" />
                      View Details
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <Check className="size-4" />
                      Approve
                    </DropdownMenuItem>
                    <DropdownMenuItem variant="destructive">
                      <X className="size-4" />
                      Reject
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ))}
          </div>

          {/* Desktop table view */}
          <div className="hidden overflow-x-auto sm:block">
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent">
                  <TableHead>Employee</TableHead>
                  <TableHead className="hidden md:table-cell">Team</TableHead>
                  <TableHead>Start Date</TableHead>
                  <TableHead className="hidden lg:table-cell">End Date</TableHead>
                  <TableHead className="text-center">Days</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <motion.tbody
                variants={container}
                initial="hidden"
                animate="show"
              >
                {vacationRequests.map((req) => (
                  <motion.tr
                    key={req.id}
                    variants={row}
                    className="border-b transition-colors hover:bg-muted/50"
                  >
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar className="size-8">
                          <AvatarFallback
                            className={`text-xs font-semibold ${avatarColors[req.employeeInitials] ?? "bg-primary/10 text-primary"}`}
                          >
                            {req.employeeInitials}
                          </AvatarFallback>
                        </Avatar>
                        <div className="min-w-0">
                          <p className="truncate text-sm font-medium text-foreground">{req.employeeName}</p>
                          <p className="text-xs text-muted-foreground">{req.type}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="hidden text-sm text-muted-foreground md:table-cell">{req.team}</TableCell>
                    <TableCell className="text-sm text-foreground">{req.startDate}</TableCell>
                    <TableCell className="hidden text-sm text-foreground lg:table-cell">{req.endDate}</TableCell>
                    <TableCell className="text-center text-sm font-medium text-foreground">{req.days}</TableCell>
                    <TableCell>
                      <Badge className={`border capitalize ${statusStyles[req.status]}`}>
                        {req.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="size-8" aria-label={`Actions for ${req.employeeName}`}>
                            <MoreHorizontal className="size-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Eye className="size-4" />
                            View Details
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>
                            <Check className="size-4" />
                            Approve
                          </DropdownMenuItem>
                          <DropdownMenuItem variant="destructive">
                            <X className="size-4" />
                            Reject
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </motion.tr>
                ))}
              </motion.tbody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
