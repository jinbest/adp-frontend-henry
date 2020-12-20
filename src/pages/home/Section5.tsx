import React from 'react';
import {Button} from '../../components'
import { Typography, Box } from '@material-ui/core';

/* eslint-disable */
type Props = {
  subDomain?: string;
}

const Section5 = ({subDomain}: Props) => {
  const data = require(`../../assets/${subDomain}/Database`);
  const bounceData = data.bounceData;
  
  return (
    <section className='Container'>      
      <div style={{color: 'black', textAlign: 'center'}}>
        {/* <Button title='Our quality charter' bgcolor='#054DFA' borderR='20px'/> */}
        <Typography className='f40'>{bounceData.title}</Typography>
        <Typography>{bounceData.content}</Typography>
        <img src={bounceData.img} />
        <Typography>{bounceData.subtitle}</Typography>
        <Box style={{display: 'flex'}}>
          <Typography>{bounceData.subcontent}</Typography>
          <ul style={{display: 'flex'}}>
            {bounceData.subcontentData.map((item:any, index:number) => {
              return (
                <li key={index} style={{margin: '0 20px'}}>{item}</li>
              )
            })}
          </ul>
        </Box>
        <Button title={bounceData.btnTitle} bgcolor='#054DFA' borderR='20px'/>
      </div>
    </section>
  )
}

export default Section5;
