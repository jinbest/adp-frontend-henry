import React from 'react'
import {Section1, Section2, Section3} from './'
import { Container } from '@material-ui/core';

/* eslint-disable */
type Props = {
  subDomain: string;
}

const Home = ({subDomain}: Props) => {

  return (
    <Container className="Homepage">
    <div className='homepage'>
      <Section1 subDomain={subDomain}/>
      <Section2 subDomain={subDomain}/>
      <Section3 subDomain={subDomain}/>
    </div>
    </Container>
  )
}

export default Home
