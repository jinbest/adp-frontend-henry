import React from 'react'
import {Section1} from './'
import { Container } from '@material-ui/core';

type Props = {
  subDomain: string;
}

const Home = ({subDomain}: Props) => {

  return (
    <Container className="Homepage">
      <Section1 subDomain={subDomain}/>
    </Container>
  )
}

export default Home
