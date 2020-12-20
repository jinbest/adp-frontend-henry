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
    <section className='Container'>      
      <div style={{color: 'black', textAlign: 'center', marginBottom: '20px'}}>
        <Typography className='section-title'>
          See Why Customers Love DeviceList
        </Typography>
        <Typography>
          View More
        </Typography>
        <Grid container item xs={12}>
          {data.whyCustomersData.map((item:any, index:number) => {
            return (
              <Grid item xs={6} sm={4} spacing={2}>
                <Box className=''>
                  <CardWhyCustomer key={index} score={item.score} days={item.days} content={item.content} reviewer={item.reviewer} />
                </Box>
              </Grid>
            )
          })}
        </Grid>
      </div>
    </section>
  )
}

export default Section6;
