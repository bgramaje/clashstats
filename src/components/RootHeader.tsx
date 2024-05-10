import React from 'react'
import { ModeToggle } from "@/components/theme/ModeToggle";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge"

const RootHeader = () => {
  return (
    <header className="flex flex-col h-fit" >
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center gap-1">
          <img src="/image.webp" style={{
            color: 'white',
            outline: 'white', width: '35px',
            marginRight: 4,
          }} />
          <p className="text-md font-semibold">clashstats</p>
          <Badge variant="secondary">v0.0.1</Badge>
        </div>
        <ModeToggle />
      </div>
      <Separator />
    </header>)
}

export default RootHeader