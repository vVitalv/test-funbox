import React from 'react'
import { Outlet, useParams } from 'react-router-dom'

import Head from './head'
import Sidebar from './sidebar/sidebar'
import bg from '../assets/images/fone.png'

const Home = () => {
  const location = useParams()
  return (
    <div
      className="flex flex-col min-h-screen min-w-[375px] justify-center bg-repeat"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Head title={location} />
      <Sidebar />
      <Outlet />
    </div>
  )
}

export default Home
