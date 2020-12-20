import React from 'react'
import Button from './Button'

type Props = {
  title: string;
  img: string;
  btnTitle: string;
}

const CardMobile: React.FC<Props> = ({title, img, btnTitle}) => {
  
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
