import React from 'react'
import { CardMobile } from '../../components'
import { Grid, Box, Typography } from '@material-ui/core'
import { Search } from '../../components';

/* eslint-disable */
type Props = {
  subDomain?: string;
}

const Section1 = ({subDomain}: Props) => {
  const data = require(`../../assets/${subDomain}/Database`);

  return (
    <section>
      <Grid container item xs={12} className="section1-top">
        <Typography className="section1-title">
          Trade, repair, buy or sell <br/>
          your mobile device
        </Typography>
        <Typography className="section1-subtitle">
          Winnipeg's mobile device specialists
        </Typography>
        <Search color='white' bgcolor='#054DFA' />
      </Grid>
      <Grid container item xs={12} className="mobile-container">
        {data.cardMobileData.map((item:any, index:number) => {
          return (
            <Grid item xs={6} sm={3}>
              <Box className="cart-mobile-container">
                <CardMobile title={item.title} img={item.img} btnTitle={item.btnTitle} color={data.colorPalle.orange} key={index}/>
              </Box>
            </Grid>
          )
        })}
      </Grid>
    </section>
  )
}

export default Section1
