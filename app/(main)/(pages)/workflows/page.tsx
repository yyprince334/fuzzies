import React from "react";
import WorkflowButton from "./_components/workflow_button";
import Workflows from "./_components";

const WorkflowPage = () => {
  return (
    <div className="flex flex-col relative">
      <h1 className="text-4xl sticky top-0 z-[10] p-6 bg-background/50 backdrop-blur-lg flex flex-row items-center justify-between border-b">
         WorkFlow
         <WorkflowButton />
      </h1>
      <Workflows/>
      <Workflows/>
      <Workflows/>
      <Workflows/>
      <Workflows/>
      <Workflows/>
    </div>
  );
};

export default WorkflowPage;
