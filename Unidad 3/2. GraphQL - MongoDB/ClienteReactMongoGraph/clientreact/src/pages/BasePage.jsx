import React from 'react'
import { NavBar } from './components/NavBar'

export const BasePage = ({children}) => {
  return (
    <>
        <NavBar/>
        <div className='content'>
            {children}  
        </div>
    </>
  )
}
