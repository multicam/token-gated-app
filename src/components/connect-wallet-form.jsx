"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { Button } from "@/registry/new-york/ui/button"

export function ConnectWalletForm({ className, ...props }) {
    const [isLoading, setIsLoading] = React.useState(false)

    async function onSubmit(event) {
        event.preventDefault()
        setIsLoading(true)

        setTimeout(() => {
            setIsLoading(false)
        }, 3000)
    }

    return (
        <div className={cn("grid gap-6", className)} {...props}>
            <Button variant="outline" type="button" disabled={isLoading} size='lg'>
                {isLoading ? (
                    <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                    <span className='mr-2 h-6 w-6'><Icons.metamask className="" /></span>
                )}{" "}
                <span className="font-bold">Metamask</span>
            </Button>
        </div>
    )
}