import React from 'react'
const colorClasses = {
  'white':'text-white',
  'black':'text-black',
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

export default function Heading({children, className,lineHeight="normal",color="black", align="left", fontWeight = "bold"}) {
  return (
    <h1 className={`uppercase max-w-2xl font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl ${fontWeightClasses[fontWeight]} ${lineHeightClasses[lineHeight]} ${colorClasses[color]} ${alignClasses[align]}  + ${(className || '')}`}>
      {children}
    </h1>
  )
}