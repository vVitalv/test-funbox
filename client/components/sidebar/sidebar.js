import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="fixed left-0 top-10 flex flex-col text-white">
      <div className="w-fit h-fit py-1 rounded-r-md bg-purple-300 bg-opacity-50  hover:text-yellow-200 transition-colors">
        <NavLink to="/level1">
          <p className="[writing-mode:vertical-rl]">Level1</p>
        </NavLink>
      </div>
      <div className="w-fit h-fit py-1 mt-1 rounded-r-md bg-purple-300 bg-opacity-50 hover:text-yellow-200 transition-colors">
        <NavLink to="/level2">
          <p className="[writing-mode:vertical-rl]">Level2</p>
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar
