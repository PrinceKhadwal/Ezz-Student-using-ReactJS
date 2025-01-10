import React from 'react'
import Navbar from './components/Navbar'
import {Outlet} from 'react-router-dom'
import Hero from './components/hero'
import Tabs from './components/Tabs'
import LowerSection from './components/LowerSection'

function Layout() {
  return (
    <>
    <Navbar/>
    <Hero />
    <Tabs />
    <Outlet/>
    <LowerSection />
    </>
  )
}

export default Layout