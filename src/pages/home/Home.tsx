import React from 'react'
import {Section1} from './'

type Props = {
  subDomain: string;
}

const Home = ({subDomain}: Props) => {
  
  return (
    <div className='homepage'>
      <div style={{padding: '0 20px'}}>
        <Section1 subDomain={subDomain}/>
      </div>
    </div>
  )
}

export default Home
