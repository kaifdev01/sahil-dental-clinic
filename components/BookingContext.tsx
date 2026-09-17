'use client'

import { createContext, useContext, useState } from 'react'

const BookingContext = createContext<{
  open: boolean
  openModal: () => void
  closeModal: () => void
}>({ open: false, openModal: () => {}, closeModal: () => {} })

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  return (
    <BookingContext.Provider value={{ open, openModal: () => setOpen(true), closeModal: () => setOpen(false) }}>
      {children}
    </BookingContext.Provider>
  )
}

export function useBooking() {
  return useContext(BookingContext)
}
