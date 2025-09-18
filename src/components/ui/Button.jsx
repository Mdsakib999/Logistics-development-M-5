import React from 'react'

export default function Button({children,bgColor,color}) {
  return (
    <button className={`flex items-center text-normal justify-center w-42 h-13 rounded-md py-5 px-10 ${bgColor} text-${color}`}>{children}</button>
  )
}
