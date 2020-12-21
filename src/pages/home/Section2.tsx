import React from 'react';
import { Typography, Grid, Box } from '@material-ui/core'
import { CardFix, ContentFix } from '../../components'

/* eslint-disable */
type Props = {
  subDomain?: string;
}

const Section2 = ({subDomain}: Props) => {
  const data = require(`../../assets/${subDomain}/Database`);

  return (
    <section className='Container'>
      <Typography className='section-title'>
          What can we fix for you today
      </Typography>
      <Grid container item xs={12}>
        <Box className="cartfix-container">
          {data.cardFixData.map((item:any, index:number) => {
            return (
              <Grid item xs={6} sm={2}>
                <Box className="cart-fix-container">
                  <CardFix title={item.title} img={item.img} key={index} />
                </Box>
              </Grid>
            )
          })}
          </Box>
        </Grid>
        <Grid container item xs={12} spacing={2}>
          {
            data.contentFixData.map((item:any, index:number) => {
              return (
                <Grid item xs={12} sm={6} md={3}>
                  <Box className='cart-contentfix-container'>
                    <ContentFix title={item.title} content={item.content} key={index} />
                  </Box>
                </Grid>
              )
            })
          }
      </Grid>
    </section>
  )
}

export default Section2;
