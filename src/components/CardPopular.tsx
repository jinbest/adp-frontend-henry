import React from 'react'

/* eslint-disable */
type Props = {
  img: string;
  title: string;
  subtitle: string;
  price: string;
}

const CardPopular = ({title, img, price, subtitle}: Props) => {
  
  return (
    <div className='card-popular'>
      <img src={img} />
      <p className='title'>{title}</p>
      <div className='price-div'>
        <p className='subtitle'>{subtitle}</p>
        <p className='price'>{price}</p>
      </div>
    </div>
  )
}

CardPopular.defaultProps = {
  title: 'iPhone 11 Pro',
  img: '',
  subtitle: 'As low as /',
  price: '$897'
}

export default CardPopular;
