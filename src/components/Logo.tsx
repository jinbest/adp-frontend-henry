import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

type Props = {
  subDomain?: string;
}

const Logo = ({subDomain}: Props) => {
  const logoImg = require(`../assets/${subDomain}/img/logo.png`);

  return (
    <Router>
      <Link to='/'>
        <img style={{zIndex: 11}} src={logoImg.default} alt='logo'/>
      </Link>
    </Router>
  )
}

export default Logo;
