import React, { useState } from 'react'

import cote_def from '../../assets/images/cote-def.png'
import cote_check from '../../assets/images/cote-check.png'
import cote_out from '../../assets/images/cote-out.png'

const Cote = ({ flavor, portion, inStock }) => {
  const [isChecked, checkToggle] = useState(false)
  const mouses = {
    10: <p>мышь в подарок</p>,
    40: <p className="first-letter:font-bold">2 мыши в подарок</p>,
    100: <p className="first-letter:font-bold">5 мышей в подарок</p>
  }
  const weight = { 10: '0,5', 40: '2', 100: '5' }
  const coteImgSrc = () => {
    if (!inStock) return cote_out
    if (isChecked) return cote_check
    return cote_def
  }
  const ovalBg = () => {
    if (inStock) return 'bg-[#1698D9]'
    if (isChecked) return 'bg-[#D91667]'
    return 'bg-[#B3B3B3]'
  }
  const underLine = () => {
    const checkedUnderlines = {
      10: <p>мышь в подарок</p>,
      40: <p className="first-letter:font-bold">2 мыши в подарок</p>,
      100: <p className="first-letter:font-bold">5 мышей в подарок</p>
    }
    if (!inStock) {
      return (
        <p className="text-[13px] pt-3 font-normal text-[#FFFF66] text-center">
          Печалька, с {flavor} закончился
        </p>
      )
    }
    if (isChecked) return checkedUnderlines[portion]
    return (
      <p className="text-[13px] pt-3 font-normal text-white text-center">
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
    <div className="flex flex-col w-fit font-trebuchet">
      <div
        className={`relative flex flex-col w-[320px] h-[509px] ${
          inStock ? 'cursor-pointer' : null
        }`}
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
        <img className="h-full w-full" alt="cote" src={coteImgSrc()} />
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
        <p
          className={`absolute top-[143px] left-[51px] text-sm [line-height:1.2] ${
            inStock ? 'text-[#666666]' : 'opacity-50 text-[#B3B3B3]'
          }`}
        >
          <span className="font-bold">{portion}</span> порций
          <br />
          {mouses[portion]}
          {portion === 100 ? 'заказчик доволен' : null}
        </p>
        <div className={`absolute right-[16px] bottom-[16px] w-20 h-20 ${ovalBg()} rounded-full`}>
          <div className="h-full w-full [line-height:22px] font-normal text-white text-center">
            <p className="text-[42px] pt-[20px]">{weight[portion]}</p>
            <p className="text-[21px] pt-2 ">кг</p>
          </div>
        </div>
      </div>
      {underLine()}
    </div>
  )
}

export default Cote
