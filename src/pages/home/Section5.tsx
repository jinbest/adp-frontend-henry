import React from 'react';
import {Button} from '../../components'

/* eslint-disable */
type Props = {
  subDomain?: string;
}

const Section5 = ({subDomain}: Props) => {
  const data = require(`../../assets/${subDomain}/Database`);
  const bounceData = data.bounceData;
  
  return (
    <section className='Container'>      
      <div style={{color: 'black', textAlign: 'center'}}>
        {/* <Button title='Our quality charter' bgcolor='#054DFA' borderR='20px'/> */}
        <p>{bounceData.title}</p>
        <p>{bounceData.content}</p>
        <img src={bounceData.img} />
        <p>{bounceData.subtitle}</p>
        <div style={{display: 'flex'}}>
          <p>{bounceData.subcontent}</p>
          <ul style={{display: 'flex'}}>
            {bounceData.subcontentData.map((item, index) => {
              return (
                <li key={index} style={{margin: '0 20px'}}>{item}</li>
              )
            })}
          </ul>
        </div>
        <Button title={bounceData.btnTitle} bgcolor='#054DFA' borderR='20px'/>
      </div>
    </section>
  )
}

export default Section5;
