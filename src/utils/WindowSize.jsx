// src/hooks/useWindowSize.js
import { useState, useEffect } from 'react'

export default function useWindowSize() {
  const isClient = typeof window === 'object'
  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined,
    }
  }

  const [windowSize, setWindowSize] = useState(getSize)

  useEffect(() => {
    if (!isClient) return
    function handleResize() {
      setWindowSize(getSize())
    }
    window.addEventListener('resize', handleResize)
    // set initial size in case it changed between render and effect
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [isClient])

  return windowSize
}
