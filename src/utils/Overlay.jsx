import React from 'react'

export default function Overlay({heading,paragraph}) {
  return (
    <div className="absolute inset-0 bg-black/50 text-center rounded-xl sm:rounded-l-xl
                    flex flex-col items-center justify-center
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="font-heading text-white text-lg sm:text-xl md:text-2xl">{heading}</h3>
        <p className="font-text text-md text-gray-300">{paragraph}</p>
    </div>
  )
}
