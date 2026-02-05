"use client";

import Link, { LinkProps, useLinkStatus } from "next/link";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";

interface NavLinkProps extends LinkProps {
    children: React.ReactNode;
    className?: string;
    activeClassName?: string;
    isActive?: boolean;
}

export function NavLink({
    children,
    className,
    isActive,
    ...props
}: NavLinkProps) {
    // React 19 / Next.js 16: useLinkStatus provides prefetch and navigation status
    const { pending } = useLinkStatus();

    return (
        <Link {...props} className={cn(className, "relative flex items-center justify-center gap-2")}>
            {children}
            {pending && (
                <Loader2 className="h-3 w-3 animate-spin text-primary absolute -right-4" />
            )}
            {isActive && (
                <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-primary/10 rounded-xl -z-10 border border-primary/20"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
            )}
        </Link>
    );
}
