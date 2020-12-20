import React from 'react';
import { Typography, Grid } from '@material-ui/core'
import { CardFix } from '../../components'

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
      {data.cardFixData.map((item, index) => {
        return (
          <CardFix title={item.title} img={item.img} key={index} />
        )
      })}
    </section>
  )
}

export default Section2;
