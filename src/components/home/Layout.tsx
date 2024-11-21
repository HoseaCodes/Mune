import React from 'react'
import Header from '../Header'
import Footer from '../Footer/Footer'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Layout({ children }: any) {
  return (
    <div>
        <Header />
          {children}
        <Footer /> 
    </div>
  )
}
