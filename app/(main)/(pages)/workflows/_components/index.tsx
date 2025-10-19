import React from 'react'
import Workflow from './workflow'

type Props = {}

const Workflows = (props: Props) => {
  return (
    <div className="relative flex flex-col p-2">
      <section className="flex flex-col">
          <div className="flex items-center justify-center">
            <Workflow description='desc' name='name' id='34jkfnas' publish={false}/>
          </div>
      </section>
    </div>
  )
}

export default Workflows