import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { MainPage } from './pages/MainPage'

export const Router = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<MainPage></MainPage>}/>
    </Routes>
    </>
  )
}
