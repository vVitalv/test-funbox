import React from 'react'

import cote_def from '../../assets/images/cote-def.png'
// import cote_check from '../../assets/images/cote-check.png'
import cote_out from '../../assets/images/cote-out.png'

const Cote = ({ flavor, portion, inStock }) => {
  const mouses = {
    10: 'мышь в подарок',
    40: '2 мыши в подарок',
    100: '5 мышей в подарок'
  }
  const weight = { 10: '0,5', 40: '2', 100: '5' }
  const coteImgSrc = !inStock ? cote_out : cote_def
  return (
    <div className="flex flex-col w-fit font-trebuchet">
      <button
        className="relative flex flex-col w-[320px] h-[509px]"
        type="button"
        disabled={!inStock}
      >
        <img className="absolute h-full w-full" alt="cote" src={coteImgSrc} />
        <p className="absolute top-[21px] left-[51px] font-normal text-base text-[#666666]">
          Сказочное заморское яство
        </p>
        <p className="absolute top-[45px] left-[51px] text-5xl font-bold">Нямушка</p>
        <p className="absolute top-[100px] left-[51px] text-2xl font-bold">с {flavor}</p>
        <p className="absolute top-[143px] left-[51px] text-sm [line-height:1.2] text-[#666666]">
          <span className="font-bold">{portion}</span> порций
          <br />
          {mouses[portion]}
          <br />
          {portion === 100 ? 'заказчик доволен' : null}
        </p>
        <div
          className={`absolute right-[16px] bottom-[16px] w-20 h-20 ${
            inStock ? 'bg-blue-500' : 'bg-[#B3B3B3]'
          } rounded-full`}
        >
          <div className="h-full w-full [line-height:22px] font-normal text-white text-center">
            <p className="text-[42px] pt-[20px]">{weight[portion]}</p>
            <p className="text-[21px] pt-2 ">кг</p>
          </div>
        </div>
      </button>
      <p className="text-[13px] pt-3 font-normal text-white text-center">
        Чего сидишь? Порадуй котэ,{' '}
        <button className="underline decoration-dashed font-bold text-[#22A7E9]" type="button">
          купи.
        </button>
      </p>
    </div>
  )
}

export default Cote
