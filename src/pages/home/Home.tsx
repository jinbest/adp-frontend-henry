import React from 'react'
import {Section1} from './'

type Props = {
  subDomain: string;
}

const Home: React.FC<Props> = ({subDomain}) => {
  
  return (
    <div className='homepage'>
      Homepage
      <div style={{padding: '0 20px'}}>
        <Section1 subDomain={subDomain}/>
      </div>
    </div>
  )
}

export default Home
