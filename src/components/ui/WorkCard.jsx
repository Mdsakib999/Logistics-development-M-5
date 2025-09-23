import React from 'react'
import packageIcon from '../../assets/package.png'
import Heading from './Heading'
import Paragraph from '../ui/Paragraph';
export default function WorkCard({step}) {
  return (
    <div>
        <p>Step {step}</p>
        <div className="bg-secondary">
            <img className="" src={packageIcon} alt="package icon" />
        </div>
        <Heading>Request a Quote</Heading>
        <Paragraph>
            At FastGo, we believe in providing our clients with personalized and efficient logistics solutions that meet their unique needs. 
        </Paragraph>
            </div>
  )
}
