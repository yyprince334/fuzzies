import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
// @ts-ignore
import './globals.css'
import { ThemeProvider } from '@/providers/theme-provider'
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import ModalProvider from '@/providers/modal-provider'

const font = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fuzzie.',
  description: 'Automate Your Work With Fuzzie.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={font.className}>
        
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
          <ModalProvider>
            {children}
          </ModalProvider>
          </ThemeProvider>
        </body>
      </html>
      </ClerkProvider>
  )
}