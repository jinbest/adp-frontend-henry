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
    <section>
      <Typography>
          What can we fix for you today
      </Typography>
      <Grid container item xs={12}>
        {data.cardFixData.map((item:any, index:number) => {
          return (
            <Grid item xs={6} sm={2} spacing={2}>
              <Box className="cart-mobile-container">
                <CardFix title={item.title} img={item.img} key={index} />
              </Box>
            </Grid>
          )
        })}
        {
          data.contentFixData.map((item:any, index:number) => {
            return (
              <ContentFix title={item.title} content={item.content} key={index} />
            )
          })
        }
      </Grid>
    </section>
  )
}

export default Section2;
