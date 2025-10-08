import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ConnectionTypes } from '@/lib/type'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
  type: ConnectionTypes
  description: string
  icon: string  
  title: ConnectionTypes
  connected: {} & any
  callback?: () => void
}

const ConnectionCard = ({
  type, description, icon, title, connected, callback
}: Props) => {
  return (
    <Card
      className="
        flex flex-col sm:flex-row items-center justify-between
        p-4 gap-4 w-full
        border border-border/40
        rounded-xl
        bg-card
        shadow-sm
        hover:shadow-md hover:-translate-y-1 transition-all duration-200
      "
    >
      {/* Left Section - Image, Title & Description */}
      <div className="flex flex-row items-center gap-4 p-0 w-full sm:w-auto">
        <Image 
          src={icon}
          alt={title}
          width={40}
          height={40}
          className="object-contain"
        />
        <div>
          <CardTitle className="text-lg font-semibold text-foreground">{title}</CardTitle>
          <CardDescription className="text-sm text-muted-foreground">
            {description}
          </CardDescription>
        </div>
      </div>

      {/* Right Section - Connect Button */}
      <div className="flex justify-end w-full sm:w-auto">
        <Link
          href={
            title === 'Discord'
              ? process.env.NEXT_PUBLIC_DISCORD_REDIRECT!
              : title === 'Notion'
              ? process.env.NEXT_PUBLIC_NOTION_AUTH_URL!
              : title === 'Slack'
              ? process.env.NEXT_PUBLIC_SLACK_REDIRECT!
              : '#'
          }
          className="
            rounded-md bg-primary px-4 py-2
            font-medium text-primary-foreground
            hover:bg-primary/90
            transition-colors
          "
        >
          Connect
        </Link>
      </div>
    </Card>
  )
}

export default ConnectionCard
