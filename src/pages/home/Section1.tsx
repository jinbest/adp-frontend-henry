import React from 'react'
import {CardMobile} from '../../components'

type Props = {
  subDomain?: string;
}

const Section1: React.FC<Props> = ({subDomain}) => {
  const cardMobileData = require(`../../assets/${subDomain}/Database`);
  console.log('cardMobileData', cardMobileData);
  
  return (
    <section>
      <div>section1</div>
    </section>
  )
}

export default Section1
