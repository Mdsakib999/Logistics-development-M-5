import React from 'react'
import Social from '../components/contact/Social'
import Form from '../components/contact/Form'
import Info from '../components/contact/Info'

export default function Contact() {
  return (
    <div className="md:mt-16">
      <Social />
      <Form />
      <Info />
    </div>
  )
}
