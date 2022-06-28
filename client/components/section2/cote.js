import React, { useState } from 'react'

import cote from '../../assets/images/cote.png'

const Cote = ({ flavor, portion, inStock }) => {
  const [isChecked, checkToggle] = useState(false)
  const mouses = {
    10: <p>мышь в подарок</p>,
    40: <p className="first-letter:font-bold">2 мыши в подарок</p>,
    100: <p className="first-letter:font-bold">5 мышей в подарок</p>
  }
  const weight = { 10: '0,5', 40: '2', 100: '5' }
  const ovalBg = () => {
    if (!inStock) return 'bg-[#B3B3B3]'
    if (isChecked) return 'bg-[#D91667]'
    return 'bg-[#1698D9]'
  }
  const ovalHover = () => {
    if (inStock) {
      return isChecked ? 'group-hover:bg-[#E52E7A]' : 'group-hover:bg-[#2EA8E6]'
    }
    return null
  }
  const underLine = () => {
    const checkedUnderlines = {
      10: <p>Печень утки разварная с артишоками.</p>,
      40: <p>Головы щучьи с чесноком да свежайшая сёмгушка.</p>,
      100: <p>Филе из цыплят с трюфелями в бульоне.</p>
    }
    if (!inStock) {
      return <p className="text-[#FFFF66]">Печалька, с {flavor} закончился</p>
    }
    if (isChecked) return checkedUnderlines[portion]
    return (
      <p>
        Чего сидишь? Порадуй котэ,{' '}
        <button
          className="underline decoration-dashed font-bold text-[#22A7E9]"
          type="button"
          onClick={() => {
            if (inStock) checkToggle(!isChecked)
          }}
        >
          купи.
        </button>
      </p>
    )
  }
  return (
    <div className="flex flex-col w-fit font-trebuchet mb-4">
      <div className="group w-fit h-fit [clip-path:polygon(14.2%_0,100%_0,100%_100%,0_100%,0_9.47%)]">
        <div
          className={`rounded-xl p-1 w-[320px] h-[480px] [clip-path:polygon(14.2%_0,100%_0,100%_100%,0_100%,0_9.47%)] ${ovalBg()} ${ovalHover()} ${
            inStock && 'cursor-pointer'
          }`}
        >
          <div
            className="relative rounded-xl bg-white w-full h-full [clip-path:url(#cote-mask)]"
            role="checkbox"
            aria-checked={isChecked}
            tabIndex="0"
            onClick={() => {
              if (inStock) checkToggle(!isChecked)
            }}
            onKeyDown={(e) => {
              if (inStock) {
                if (e.code === 'Space') checkToggle(!isChecked)
              }
            }}
          >
            <p
              className={`absolute top-[21px] left-[51px] font-normal text-base ${
                inStock ? 'text-[#666666]' : 'opacity-50 text-[#B3B3B3]'
              }`}
            >
              Сказочное заморское яство
            </p>
            <p
              className={`absolute top-[45px] left-[51px] text-5xl font-bold ${
                inStock ? 'text-black' : 'opacity-50 text-[#B3B3B3]'
              }`}
            >
              Нямушка
            </p>
            <p
              className={`absolute top-[100px] left-[51px] text-2xl font-bold ${
                inStock ? 'text-black' : 'opacity-50 text-[#B3B3B3]'
              }`}
            >
              с {flavor}
            </p>
            <div
              className={`absolute top-[143px] left-[51px] text-sm [line-height:1.2] ${
                inStock ? 'text-[#666666]' : 'opacity-50 text-[#B3B3B3]'
              }`}
            >
              <span className="font-bold">{portion}</span> порций
              <br />
              {mouses[portion]}
              {portion === 100 && 'заказчик доволен'}
            </div>
            <img
              className={`absolute bottom-0 h-[268px] w-full ${!inStock && 'opacity-50'}`}
              alt="cote"
              src={cote}
            />
            <div
              className={`absolute right-[16px] bottom-[16px] w-20 h-20 ${ovalBg()} ${ovalHover()} rounded-full`}
            >
              <div className="h-full w-full [line-height:22px] font-normal text-white text-center">
                <p className="text-[42px] pt-[20px]">{weight[portion]}</p>
                <p className="text-[21px] pt-2 ">кг</p>
              </div>
            </div>
            <svg viewBox="0 0 312 472" xmlns="http://www.w3.org/2000/svg" className="absolute">
              <defs>
                <clipPath id="cote-mask">
                  <path d="M0,45.5 v414.5 q 0,12 12,12 h288 q 12,0 12,-12 v-448 q 0,-12 -12,-12 h-254.5 z" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <div className="text-[13px] pt-3 font-normal text-white text-center">{underLine()}</div>
    </div>
  )
}

export default Cote
