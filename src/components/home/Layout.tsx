import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Layout({ children }: any) {
  return (
    <div className="max-w-[1280px] mx-auto">
        <Header />
          {children}
        <Footer /> 
    </div>
  )
}
