import React from 'react'

/* eslint-disable */
type Props = {
  subDomain?: string;
}

const Shape = ({subDomain}: Props) => {
  const data = require(`../../assets/${subDomain}/Database`);
  return (
    <div className='shape-div'>
      <img src={data.shapeData.cornerShape} />
    </div>
  )
}

export default Shape
