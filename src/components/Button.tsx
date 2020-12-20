import { isWidthDown } from '@material-ui/core'
import React from 'react'

/* eslint-disable */
type Props = {
  title: string;
  bgcolor?: string;
  txcolor?: string;
  borderR?: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  width?: string;
  height?: string;
  margin?: string;
}

const Button  = ({title, bgcolor, txcolor, borderR, onClick, width, height, margin}: Props) => {
  return (
    <button 
      onClick={onClick}  
      className='button'
      style={{
        backgroundColor: bgcolor, 
        color: txcolor, 
        borderRadius: borderR,
        width: width,
        height: height,
        margin: margin
      }}
    >
      {title}
    </button>
  )
}

Button.defaultProps = {
  title: '',
  bgcolor: '#F36B26',
  txcolor: 'white',
  borderR: '10px'
}

export default Button;
