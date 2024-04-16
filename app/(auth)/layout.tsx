import React from 'react'
import { Logo } from './_components/logo'

const Authlayout = ({
    children
}:{
    children: React.ReactNode
}) => {
  return (
    <div className='h-screen flex flex-col items-center justify-center space-y-6'>
        <Logo />
        {children}
    </div>
  )
}

export default Authlayout