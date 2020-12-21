import React from 'react';
import { Grid, Box } from '@material-ui/core';
import {Logo} from '../components'

/* eslint-disable */
type Props = {
  subDomain?: string;
}

const Footer = ({subDomain}: Props) => {
  const data = require(`../assets/${subDomain}/Database`);
  const footerLink = data.footerLink
  return (
    <footer className='footer'>
      <Box className='footer-container'>
        <Grid container item xs={12}>
          <Grid xs={12} md={4}>
            <Logo subDomain={subDomain} type='footer' />
            <div style={{marginTop: '20px'}}>
              Canada's mibile device marketplace <br/>
              (204) 221-5898 | sales@devicelist.co <br/>
              2020 Corydon Ave, Unit F Winnipe, MB
            </div>
          </Grid>
          <Grid xs={12} md={8}>
            <Grid item container xs={12}>
              {
                footerLink.map((links:any, index:number) => 
                  <Grid item xs={6} sm={3} key={index}>
                    <ul className='footer_link'>
                      <li className='link_name'>{links.name}</li>
                      {
                        links.lists.map((link:any, i:number) => 
                        <li key={i} className='links'>
                          <a href={link.href}>{link.text}</a>
                        </li>
                        )
                      }
                    </ul>
                  </Grid>     
                )
              }
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </footer>
  )
}

export default Footer;
