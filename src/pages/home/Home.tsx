import React from 'react'
import {Section1, Section2, Section3, Section4, Section5, Section6} from './'

/* eslint-disable */
type Props = {
  subDomain: string;
}

const Home = ({subDomain}: Props) => {

  return (
    <div className='homepage'>
      <Section1 subDomain={subDomain}/>
      <Section2 subDomain={subDomain}/>
      <Section3 subDomain={subDomain}/>
      <Section4 subDomain={subDomain}/>
      <Section5 subDomain={subDomain}/>
      <Section6 subDomain={subDomain}/>
    </div>
  )
}

export default Home
