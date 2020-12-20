import React from 'react';
import { Typography, Grid, Box } from '@material-ui/core'
import { CardPopular } from '../../components'

/* eslint-disable */
type Props = {
  subDomain?: string;
}

const Section3 = ({subDomain}: Props) => {
  const data = require(`../../assets/${subDomain}/Database`);

  return (
    <section>
      <Typography>
        Popular Devices
      </Typography>
      <Grid container item xs={12}>
        {data.popularCardData.map((item:any, index:number) => {
          return (
            <Grid item xs={6} sm={3} spacing={2}>
              <Box className="">
                <CardPopular title={item.title} subtitle={item.subtitle} price={item.price} img={item.img} key={index} />
              </Box>
            </Grid>
          )
        })}
      </Grid>
    </section>
  )
}

export default Section3;
