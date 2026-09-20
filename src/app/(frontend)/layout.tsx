import React from 'react'
import './styles.css'

import { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google';

export const metadata: Metadata = {
  description: 'random\'s blog',
  title: '.\'-.; rnd \'°*',
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

        <main>{children}</main>
      </body>
    </html>
  )
}
