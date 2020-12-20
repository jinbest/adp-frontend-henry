import React from 'react';
import { Typography, Grid } from '@material-ui/core'
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
      {/* <Grid container item xs={12}>

      </Grid> */}
    </section>
  )
}

export default Section2;
