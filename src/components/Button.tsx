import React from 'react'

/* eslint-disable */
type Props = {
  title: string;
  bgcolor?: string;
  txcolor?: string;
  borderR?: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

const Button  = ({title, bgcolor, txcolor, borderR, onClick}: Props) => {
  return (
    <button onClick={onClick} style={{backgroundColor: bgcolor, color: txcolor, borderRadius: borderR}} className='button'>
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
