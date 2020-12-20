import { Card } from '@material-ui/core';
import React from 'react'
import {CardMobile} from '../../components'

/*eslint-disable*/

type Props = {
  subDomain?: string;
}

const Section1 = ({subDomain}: Props) => {
  const data = require(`../../assets/${subDomain}/Database`);

  return (
    <section>
      <div>
        {data.cardMobileData.map((item:any, index:number) => {
          return (
            <CardMobile title={item.title} img={item.img} btnTitle={item.btnTitle} color={data.colorPalle.orange} key={index}/>
          )
        })}
      </div>
      
    </section>
  )
}

export default Section1
