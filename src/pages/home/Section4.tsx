import React from 'react';
import {DeviceListComponent} from '../../components'
import {Button} from '../../components'
import { Typography, Grid, Box } from '@material-ui/core';
/* eslint-disable */
type Props = {
  subDomain?: string;
}

const Section4 = ({subDomain}: Props) => {
  const data = require(`../../assets/${subDomain}/Database`);

  return (
    <section className='mg-t-7 Container'>
      <Grid container item xs={12}>
        <Grid item xs={6}>
          <Typography className='f22'>
            Welcome to DeviceList, Canada’s mobile device marketplace
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Grid item container xs={12}>
            {data.devicelistData.slice(0,2).map((item:any, index:number) => {
              return (
                <Grid item xs={6}>
                  <Box className='cart-device-list'>
                    <DeviceListComponent img={item.img} title={item.title} content={item.content} key={index} />
                  </Box>
                </Grid>
              )
            })}
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Box className='section4-button'>
            <Button title='Our quality charter' bgcolor='#054DFA' borderR='20px'/>
          </Box>
        </Grid>
      </Grid>
    </section>
  )
}

export default Section4;
