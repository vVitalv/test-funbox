import React from 'react'

import back_fua from '../assets/images/Back_fua.png'

const Cotes = () => {
  return (
    <div className="relative" style={{ width: 320, height: 509 }}>
      <div className="relative" style={{ width: 320, height: 509 }}>
        <p className="absolute text-xs text-center" style={{ left: 55.5, top: 494 }}>
          Чего сидишь? Порадуй котэ, купи.
        </p>
        <div className="w-80 absolute left-0 top-0">
          <div className="relative w-full">
            <div className="w-96 h-3/4">
              <img className="flex-1 h-full" alt="rjnt" src={back_fua} />
            </div>
          </div>
        </div>
        <div
          className="w-20 h-20 absolute bg-blue-500 rounded-full"
          style={{ left: 224, top: 384 }}
        >
          {' '}
          <p
            className="absolute text-5xl leading-snug text-center text-white"
            style={{ left: 234.5, top: 404 }}
          >
            0,5
          </p>
          <p
            className="absolute leading-snug text-center text-white"
            style={{ left: 254.5, top: 404 }}
          >
            {' '}
            <br />
            кг
          </p>
        </div>
        <p className="absolute text-2xl font-bold" style={{ left: 51, top: 100 }}>
          с фуа-гра
        </p>
        <p className="absolute text-5xl font-bold" style={{ left: 48, top: 45 }}>
          Нямушка
        </p>
        <p className="absolute text-base text-gray-500" style={{ left: 51, top: 21 }}>
          Сказочное заморское яство
        </p>
      </div>
      <p className="absolute text-sm leading-none text-gray-500" style={{ left: 51, top: 143 }}>
        10 порций
        <br />
        мышь в подарок
      </p>
    </div>
  )
}

export default Cotes
