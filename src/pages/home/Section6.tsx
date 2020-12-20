import React from 'react';
import {CardWhyCustomer} from '../../components'
import { Typography, Grid, Box } from '@material-ui/core'

/* eslint-disable */
type Props = {
  subDomain?: string;
}

const Section6 = ({subDomain}: Props) => {
  const data = require(`../../assets/${subDomain}/Database`);
  
  return (
    <section className='Container center sec6-container'>      
      <Typography className='f40 bold mg-t-1'>
        See Why Customers Love DeviceList
      </Typography>
      <Typography className='f24'>
        View More
      </Typography>
      <Grid container item xs={12} spacing={3} className='sec6-card'>
        {data.whyCustomersData.map((item:any, index:number) => {
          return (
            <Grid item xs={12} sm={6} md={4}>
              <Box className=''>
                <CardWhyCustomer key={index} score={item.score} days={item.days} content={item.content} reviewer={item.reviewer} />
              </Box>
            </Grid>
          )
        })}
      </Grid>
    </section>
  )
}

export default Section6;
