import React from 'react';
import { Typography, Grid, Box } from '@material-ui/core'
import { CardPopular } from '../../components'

/* eslint-disable */
type Props = {
  subDomain?: string;
}

const Section3 = ({subDomain}: Props) => {
  const data = require(`../../assets/${subDomain}/Database`);
  const deviceCard = require(`../../assets/${subDomain}/img/device-card.png`)
  return (
    <section>
      <div className='Container'>
        <Typography className='section-title'>
          Popular Devices
        </Typography>
      </div>
      <div className='section3-back'>
        <div className='Container'>
          <Grid container item xs={12} spacing={3}>
            {data.popularCardData.map((item:any, index:number) => {
              return (
                <Grid item xs={6} sm={3}>
                  <CardPopular title={item.title} subtitle={item.subtitle} price={item.price} img={item.img} key={index} />
                </Grid>
              )
            })}
          </Grid>
          <Box className='pd-t-4'>
            <Grid container item xs={12} spacing={3}>
              <Grid item sm={12} md={7}>
                <Typography className='section-title white'>
                  Buy now. Pay later. <br/>
                  Whatever works for you.
                </Typography>
                <Typography className='white f24'>
                We’ve partnered with Flexiti to offer 0% financing on repairs, devices, and accessories.
                </Typography>
              </Grid>
              <Grid item sm={12} md={5}>
                <img src={deviceCard.default} alt='device-list' className='card-img'/>
              </Grid>
            </Grid>
          </Box>
        </div>
      </div>
    </section>
  )
}

export default Section3;
