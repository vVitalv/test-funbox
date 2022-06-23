import React from 'react'

import Head from './head'
import Section2 from './section2/section2'
import bg from '../assets/images/fone.png'

const Home = () => {
  return (
    <div className="flex flex-col h-screen w-full justify-center bg-repeat" style={{ 'backgroundImage': `url(${bg})` }}>
      <Head title="Main" />
      <Section2 />
    </div>
  )
}

export default Home
