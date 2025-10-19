import React, { use } from 'react'
import { ReactFlow, applyNodeChanges, applyEdgeChanges, addEdge } from '@xyflow/react';
// @ts-ignore
import '@xyflow/react/dist/style.css';
import { EditorNodeType } from '@/lib/type';
import { useEditor } from '@/providers/editor-provider';

type Props = {}

const intitialNodes: EditorNodeType[] = []
const intitialEdges: { id: string, source: string, target: string }[] = []

const EditorCanvas = (props: Props) => {
    const {dispatch, state} = useEditor()
  return (
    <div>EditorCanvas</div>
  )
}

export default EditorCanvas