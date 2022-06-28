import React from 'react'

const Greet = () => {
  return (
    <div className="text-yellow-200 px-12 pt-6 text-xl">
      <div className="">
        <br />
        {'\uD83D\uDC48'}
        <br />
        Тестовое там
        <br />
        {'\uD83D\uDC48'}
      </div>
      <p className="absolute top-48">
        Резюме{' '}
        <a
          className="text-purple-300 hover:text-purple-200 transition-colors"
          href="https://ivanovo.hh.ru/resume/ba5ffdc1ff02760a2e0039ed1f3546616b6a35?hhtmFrom=resume_list"
        >
          здесь
        </a>
      </p>
    </div>
  )
}

export default Greet
