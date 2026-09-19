import React from 'react'
import './styles.css'

import { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google';

export const metadata: Metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  display: 'swap',
});

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body className=
      {`
        ${jetbrainsMono.className} antialiased
        bg-white dark:bg-black
      `}
      >

        <div className="fixed inset-0 z-[-1] bg-grid-pattern pointer-events-none" />

        <main>{children}</main>
      </body>
    </html>
  )
}
