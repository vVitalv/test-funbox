import React from 'react'

import back_fua from '../../assets/images/Back_fua.png'

const Cote = () => {
  return (
    <div className="flex flex-col w-fit font-trebuchet">
      <div className="relative flex flex-col w-[320px] h-[509px] ">
        <img className="absolute h-full w-full" alt="rjnt" src={back_fua} />
        <p className="absolute top-[21px] left-[51px] font-normal text-base text-[#666666]">
          Сказочное заморское яство
        </p>
        <p className="absolute top-[45px] left-[51px] text-5xl font-bold">Нямушка</p>
        <p className="absolute top-[100px] left-[51px] text-2xl font-bold">с фуа-гра</p>
        <p className="absolute top-[143px] left-[51px] text-sm leading-none text-[#666666]">
          10 порций
          <br />
          мышь в подарок
        </p>
        <div className="absolute right-[16px] bottom-[16px] w-20 h-20 bg-blue-500 rounded-full">
          <div className="h-full w-full [line-height:22px] font-normal text-white text-center">
            <p className="text-[42px] pt-[20px]">0,5</p>
            <p className="text-[21px] pt-2 ">кг</p>
          </div>
        </div>
      </div>
      <p className="text-[13px] pt-3 font-normal text-white text-center">
        Чего сидишь? Порадуй котэ, купи.
      </p>
    </div>
  )
}

export default Cote
