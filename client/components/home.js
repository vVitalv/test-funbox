import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'

import Head from './head'
import Sidebar from './sidebar/sidebar'
// import bg from '../assets/images/fone.png'

const Home = () => {
  const { pathname } = useLocation()
  return (
    <div className="relative min-h-screen min-w-[375px] bg-[url(../images/fone.png)] bg-repeat">
      <Head title={pathname} />
      <Sidebar />
      <Outlet />
    </div>
  )
}

export default Home
