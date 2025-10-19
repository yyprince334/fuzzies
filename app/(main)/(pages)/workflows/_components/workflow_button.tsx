'use client'
import Workflowform from '@/components/form/workflow-form'
import CustomModal from '@/components/global/custom-modal'
import { Button } from '@/components/ui/button'
import { WorkflowFormSchema } from '@/lib/type'
import { useModal } from '@/providers/modal-provider'
import { Plus } from 'lucide-react'
import React from 'react'

type Props = {}

const WorkflowButton = (props: Props) => {

  const {setOpen, setClose} = useModal()

  const handleClick = () => {
    setOpen(
      <CustomModal
        title=" Create a workflow automation"
        subheading="Workflow are powerful tools that can help you automate your tasks and save time."
      >
        <Workflowform/>
      </CustomModal>
    )
  }

  return (

    <Button
      size={'icon'}
      onClick={handleClick}>
        <Plus/>
      </Button>
  )
}

export default WorkflowButton