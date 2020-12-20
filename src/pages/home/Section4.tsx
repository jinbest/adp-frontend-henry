import React from 'react';
import {DeviceListComponent} from '../../components'
import {Button} from '../../components'

/* eslint-disable */
type Props = {
  subDomain?: string;
}

const Section4 = ({subDomain}: Props) => {
  const data = require(`../../assets/${subDomain}/Database`);

  return (
    <section className='Container'>
      <Button title='Our quality charter' bgcolor='#054DFA' borderR='20px'/>
      {data.devicelistData.map((item:any, index:number) => {
        return (
          <DeviceListComponent img={item.img} title={item.title} content={item.content} key={index} />
        )
      })}
    </section>
  )
}

export default Section4;
