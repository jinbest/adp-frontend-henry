import React from 'react'
import {Section1} from './'
import { Container } from '@material-ui/core';

type Props = {
  subDomain: string;
}

const Home = ({subDomain}: Props) => {

  return (
    <Container className="Homepage">
    <div className='homepage'>
      <div style={{padding: '0 20px'}}>
        <Section1 subDomain={subDomain}/>
      </div>
    </div>
    </Container>
  )
}

export default Home
