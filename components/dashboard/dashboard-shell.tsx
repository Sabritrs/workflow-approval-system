"use client"

import { useState, type ReactNode } from "react"
import { SidebarNav } from "@/components/dashboard/sidebar-nav"
import { TopNavbar } from "@/components/dashboard/top-navbar"
import { ScrollArea } from "@/components/ui/scroll-area"

interface DashboardShellProps {
  children: ReactNode
}

export function DashboardShell({ children }: DashboardShellProps) {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen bg-background">
      <SidebarNav
        mobileOpen={mobileSidebarOpen}
        onMobileClose={() => setMobileSidebarOpen(false)}
      />

      <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
        <TopNavbar onMobileMenuToggle={() => setMobileSidebarOpen((prev) => !prev)} />

        <ScrollArea className="min-h-0 flex-1">
          <main className="flex flex-col gap-4 p-4 sm:gap-6 sm:p-6">{children}</main>
        </ScrollArea>
      </div>
    </div>
  )
}
