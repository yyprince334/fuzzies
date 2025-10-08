'use client'
import { Button } from '@/components/ui/button'
import React from 'react'

type Props = {}

const WorkflowButton = (props: Props) => {

  const handleClick = () => {
    console.log("Workflow Button Clicked")
  }

  return (

    <Button className='rounded-full'
      size={'icon'}
      onClick={handleClick}>
      </Button>
  )
}

export default WorkflowButton