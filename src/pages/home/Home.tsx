import React from 'react'
import {Section1, Section2} from './'
import { Container } from '@material-ui/core';

/* eslint-disable */
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
      <div style={{padding: '0 20px'}}>
        <Section2 subDomain={subDomain}/>
      </div>
    </div>
    </Container>
  )
}

export default Home
