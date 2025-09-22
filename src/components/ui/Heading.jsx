import React from 'react'
const colorClasses = {
  'white':'text-white',
  'black':'text-black',
}
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
  const lineHeightClasses = {
    tight: "leading-tight",
    normal: "leading-normal",
    relaxed: "leading-relaxed",
    loose: "leading-loose",
  };
const fontWeightClasses = {
  'semibold': 'font-semibold',
  'bold': 'font-bold',
  'extrabold': 'font-extrabold',
  'black': 'font-black'
}
  const alignClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
    justify: "text-justify",
  };

export default function Heading({children, className, fontSize = "default",lineHeight="normal",color="black", align="left", fontWeight = "bold"}) {
  return (
    <h1 className={`uppercase font-heading ${fontSizeClasses[fontSize]} ${fontWeightClasses[fontWeight]} ${lineHeightClasses[lineHeight]} ${colorClasses[color]} ${alignClasses[align]}  + ${(className || '')}`}>
      {children}
    </h1>
  )
}