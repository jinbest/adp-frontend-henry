import React from 'react'
import Button from './Button'

type Props = {
  title: string;
  img: string;
  btnTitle: string;
}

const CardMobile = ({title, img, btnTitle}: Props) => {
  
  return (
    <div className='card-mobile'>
      <p>{title}</p>
      <img src={img} />
      <Button title={btnTitle} bgcolor='#F36B26'/>
    </div>
  )
}

CardMobile.defaultProps = {
  title: 'TRADE',
  img: '',
  btnTitle: 'Trade my Device'
}

export default CardMobile;
