import React from 'react'

import Cote from './cote'

const Cotes = () => {
  return (
    <div className="flex items-center justify-center flex-col w-full h-full">
      <p className="font-exo text-4xl text-white">Ты сегодня покормил кота?</p>
      <div className="flex justify-around items-center w-full h-full">
        <Cote />
        <Cote />
        <Cote />
      </div>
    </div>
  )
}

export default Cotes
