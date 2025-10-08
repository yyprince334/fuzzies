'use client'

import { Modal } from "@uploadcare/file-uploader"
import { useState, useEffect, useContext, createContext } from "react"

interface ModalProviderProps {
    children: React.ReactNode
}

export type ModalData = {}

type ModalContextType = {
    data: ModalData | null
    isOpen: boolean
    setOpen: (modal: React.ReactNode, fetchData?: () => Promise<any>) => void
    setClose: () => void
}

export const ModalContext = createContext<ModalContextType>({
    data: null,
    isOpen: false,
    setOpen: (modal: React.ReactNode, fetchData?: () => Promise<any>) => { },
    setClose: () => {}
})

const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [data, setData] = useState<ModalData>()
    const [showingModal, setShowingModal] = useState<React.ReactNode>(null)
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    return <></>

    
}
