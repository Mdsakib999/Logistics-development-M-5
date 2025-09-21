import React from 'react'

const fontSizeClasses = {
  'default': 'text-[40px]',
  'lg': 'text-lg',
  'xl': 'text-xl',
  '2xl': 'text-2xl',
  '3xl': 'text-3xl',
  '4xl': 'text-4xl',
  '5xl': 'text-5xl',
  '6xl': 'text-6xl',
  '7xl': 'text-7xl',
}

const fontWeightClasses = {
  'semibold': 'font-semibold',
  'bold': 'font-bold',
  'extrabold': 'font-extrabold',
  'black': 'font-black'
}

export default function Heading({children, fontSize = "default", fontWeight = "bold"}) {
  return (
    <h1 className={`${fontSizeClasses[fontSize]} ${fontWeightClasses[fontWeight]}`}>
      {children}
    </h1>
  )
}