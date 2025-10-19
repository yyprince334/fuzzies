'use client'

import { Modal } from "@uploadcare/file-uploader"
import { useState, useEffect, useContext, createContext, Children } from "react"
import { set } from "zod"

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
    const [data, setData] = useState<ModalData | null>(null)
    const [showingModal, setShowingModal] = useState<React.ReactNode>(null)
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    const setOpen = async (modal: React.ReactNode, fetchData?: () => Promise<any>) => {
        if (modal) {
            if (fetchData) {
                setData({ ...data, ...(await fetchData()) })
            }
            setShowingModal(modal)
            setIsOpen(true)
        }
    }

    const setClose = () => {
        setIsOpen(false)
        setData({})
    }

    if (!isMounted) return null
    return (
        <ModalContext.Provider value={{ data, isOpen, setOpen, setClose }}>
        {children}
        {showingModal}
        </ModalContext.Provider>
    )
}

export const useModal = () => {
        const context = useContext(ModalContext)
        if (!context) {
            throw new Error("useModal must be used within a ModalProvider")
        }
        return context
    }


export default ModalProvider
