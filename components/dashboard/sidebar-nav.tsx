"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  Users,
  UserCircle,
  CalendarDays,
  CheckSquare,
  BarChart3,
  Settings,
  ChevronLeft,
  Palmtree,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

type NavItem = {
  label: string
  icon: (typeof LayoutDashboard)
  href?: string
}

const navItems: NavItem[] = [
  { label: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
  { label: "Teams", icon: Users, href: "/dashboard/teams" },
  { label: "Employees", icon: UserCircle },
  { label: "Vacation Requests", icon: CalendarDays },
  { label: "Approvals", icon: CheckSquare },
  { label: "Vacation Balances", icon: BarChart3 },
]

const bottomItems: NavItem[] = [{ label: "Settings", icon: Settings, href: "/dashboard/settings" }]

interface SidebarNavProps {
  mobileOpen: boolean
  onMobileClose: () => void
}

function isItemActive(pathname: string, href?: string) {
  if (!href) return false
  if (href === "/dashboard") return pathname === href
  return pathname === href || pathname.startsWith(`${href}/`)
}

function NavItemContent({
  item,
  collapsed,
  active,
  onClick,
}: {
  item: NavItem
  collapsed: boolean
  active: boolean
  onClick?: () => void
}) {
  const classes = cn(
    "group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
    active
      ? "bg-primary/10 text-primary"
      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
  )

  const iconClasses = cn(
    "size-5 shrink-0 transition-colors",
    active
      ? "text-primary"
      : "text-muted-foreground group-hover:text-accent-foreground"
  )

  const label = (
    <>
      <item.icon className={iconClasses} />
      <AnimatePresence>
        {!collapsed && (
          <motion.span
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "auto" }}
            exit={{ opacity: 0, width: 0 }}
            transition={{ duration: 0.15 }}
            className="overflow-hidden whitespace-nowrap"
          >
            {item.label}
          </motion.span>
        )}
      </AnimatePresence>
      {active && !collapsed && (
        <motion.div
          layoutId="sidebar-active"
          className="ml-auto size-1.5 rounded-full bg-primary"
        />
      )}
    </>
  )

  if (item.href) {
    return (
      <Link
        href={item.href}
        className={classes}
        aria-current={active ? "page" : undefined}
        onClick={onClick}
      >
        {label}
      </Link>
    )
  }

  return (
    <button
      type="button"
      className={classes}
      aria-current={active ? "page" : undefined}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

function SidebarContent({
  collapsed,
  setCollapsed,
  onMobileClose,
  isMobile,
  pathname,
}: {
  collapsed: boolean
  setCollapsed: (v: boolean) => void
  onMobileClose?: () => void
  isMobile: boolean
  pathname: string
}) {
  const effectiveCollapsed = isMobile ? false : collapsed

  return (
    <TooltipProvider delayDuration={0}>
      <div className="relative flex h-full flex-col">
        {/* Logo area */}
        <div className="flex h-16 items-center justify-between gap-3 px-4">
          <div className="flex items-center gap-3">
            <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary">
              <Palmtree className="size-5 text-primary-foreground" />
            </div>
            <AnimatePresence>
              {!effectiveCollapsed && (
                <motion.span
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "auto" }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ duration: 0.15 }}
                  className="overflow-hidden whitespace-nowrap  text-lg font-bold text-foreground"
                >
                  VacayFlow
                </motion.span>
              )}
            </AnimatePresence>
          </div>
          {isMobile && (
            <Button
              variant="ghost"
              size="icon"
              className="size-8 lg:hidden"
              onClick={onMobileClose}
              aria-label="Close sidebar"
            >
              <X className="size-4" />
            </Button>
          )}
        </div>

        <Separator />

        {/* Main nav */}
        <nav
          className="flex-1 space-y-1 px-3 py-4"
          role="navigation"
          aria-label="Main navigation"
        >
          {navItems.map((item) => {
            const active = isItemActive(pathname, item.href)
            const content = (
              <NavItemContent
                key={item.label}
                item={item}
                collapsed={effectiveCollapsed}
                active={active}
                onClick={isMobile ? onMobileClose : undefined}
              />
            )

            if (effectiveCollapsed) {
              return (
                <Tooltip key={item.label}>
                  <TooltipTrigger asChild>{content}</TooltipTrigger>
                  <TooltipContent side="right" sideOffset={8}>
                    {item.label}
                  </TooltipContent>
                </Tooltip>
              )
            }

            return <div key={item.label}>{content}</div>
          })}
        </nav>

        <Separator />

        {/* Bottom items */}
        <div className="space-y-1 px-3 py-4">
          {bottomItems.map((item) => {
            const active = isItemActive(pathname, item.href)
            const content = (
              <NavItemContent
                key={item.label}
                item={item}
                collapsed={effectiveCollapsed}
                active={active}
                onClick={isMobile ? onMobileClose : undefined}
              />
            )

            if (effectiveCollapsed) {
              return (
                <Tooltip key={item.label}>
                  <TooltipTrigger asChild>{content}</TooltipTrigger>
                  <TooltipContent side="right" sideOffset={8}>
                    {item.label}
                  </TooltipContent>
                </Tooltip>
              )
            }

            return <div key={item.label}>{content}</div>
          })}
        </div>

        {/* Collapse toggle - desktop only */}
        {!isMobile && (
          <div className="absolute -right-3 top-20">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setCollapsed(!collapsed)}
              className="size-6 rounded-full border bg-card shadow-sm"
              aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            >
              <motion.div
                animate={{ rotate: collapsed ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronLeft className="size-3" />
              </motion.div>
            </Button>
          </div>
        )}
      </div>
    </TooltipProvider>
  )
}

export function SidebarNav({ mobileOpen, onMobileClose }: SidebarNavProps) {
  const [collapsed, setCollapsed] = useState(false)
  const pathname = usePathname()

  return (
    <>
      {/* Desktop sidebar */}
      <motion.aside
        animate={{ width: collapsed ? 72 : 260 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className="relative hidden h-screen flex-col border-r border-border bg-card lg:flex"
      >
        <SidebarContent
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          isMobile={false}
          pathname={pathname}
        />
      </motion.aside>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-foreground/20 backdrop-blur-sm lg:hidden"
              onClick={onMobileClose}
              aria-hidden="true"
            />
            <motion.aside
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="fixed inset-y-0 left-0 z-50 w-70 bg-card shadow-xl lg:hidden"
            >
              <SidebarContent
                collapsed={false}
                setCollapsed={() => {}}
                onMobileClose={onMobileClose}
                isMobile={true}
                pathname={pathname}
              />
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
