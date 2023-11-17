import Link from "next/link"

import { cn } from "@/lib/utils"

export function MainNav({
                            className,
                            ...props
                        }) {
    return (
        <nav
            className={cn("flex items-center space-x-4 lg:space-x-6", className)}
            {...props}
        >
            <Link
                href="/_sampling/dashboard"
                className="text-sm font-medium transition-colors hover:text-primary"
            >
                Overview
            </Link>
            <Link
                href="/_sampling/dashboard"
                className="text-sm font-medium  transition-colors hover:text-primary"
            >
                Customers
            </Link>
            <Link
                href="/_sampling/dashboard"
                className="text-sm font-medium  transition-colors hover:text-primary"
            >
                Products
            </Link>
            <Link
                href="/_sampling/dashboard"
                className="text-sm font-medium  transition-colors hover:text-primary"
            >
                Settings
            </Link>
        </nav>
    )
}