import React from 'react'
import { CardMobile } from '../../components'
import { Grid, Box } from '@material-ui/core'
/* eslint-disable */
type Props = {
  subDomain?: string;
}

const Section1 = ({subDomain}: Props) => {
  const data = require(`../../assets/${subDomain}/Database`);

  return (
    <section>
      <Grid container item xs={12}>
        {data.cardMobileData.map((item:any, index:number) => {
          return (
            <Grid item xs={6} sm={3} spacing={2}>
              <Box className="cart-mobile-container">
                <CardMobile title={item.title} img={item.img} btnTitle={item.btnTitle} key={index}/>
              </Box>
            </Grid>
          )
        })}
      </Grid>
    </section>
  )
}

export default Section1
