import { Card } from '@material-ui/core';
import React from 'react'
import {CardMobile} from '../../components'

type Props = {
  subDomain?: string;
}

const Section1 = ({subDomain}: Props) => {
  const data = require(`../../assets/${subDomain}/Database`);

  return (
    <section>
      <div>section1</div>
      <div>
        {data.cardMobileData.map((item:any, index:number) => {
          return (
            <CardMobile title={item.title} img={item.img} btnTitle={item.btnTitle} key={index}/>
          )
        })}
      </div>
      
    </section>
  )
}

export default Section1
