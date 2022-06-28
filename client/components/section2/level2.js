import React from 'react'

import Cote from './cote'

const Level2 = () => {
  const flavor1 = 'фуа-гра'
  const flavor2 = 'рыбой'
  const flavor3 = 'курой'
  const portion1 = 10
  const portion2 = 40
  const portion3 = 100
  const inStockfromDB1 = 51
  const inStockfromDB2 = 26
  const inStockfromDB3 = 0
  return (
    <div className="flex items-center justify-center flex-col w-full h-full">
      <p className="font-exo text-2xl sm:text-4xl mt-3 sm:mt-1 mb-4 text-white">Ты сегодня покормил кота?</p>
      <div className="flex justify-evenly items-center flex-wrap w-full h-full">
        <Cote flavor={flavor1} portion={portion1} inStock={inStockfromDB1} />
        <Cote flavor={flavor2} portion={portion2} inStock={inStockfromDB2} />
        <Cote flavor={flavor3} portion={portion3} inStock={inStockfromDB3} />
      </div>
    </div>
  )
}

export default Level2
