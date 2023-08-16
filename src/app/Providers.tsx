'use client'

import { ThemeProvider } from 'next-themes'
import React, { ReactNode } from 'react'

function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider enableSystem={true} attribute='class'>
      <div className='min-h-screen dark:bg-gray-700 dark:text-gray-200 text-gray-700 transition-colors duration-300 select-none'>
        {children}
      </div>
    </ThemeProvider>
  )
}

export default Providers