import React from 'react'
import {CardMobile} from '../../components'

type Props = {
  subDomain?: string;
}

const Section1: React.FC<Props> = ({subDomain}) => {
  console.log('section1', subDomain)
  return (
    <section>
      <div>section1</div>
    </section>
  )
}

export default Section1
