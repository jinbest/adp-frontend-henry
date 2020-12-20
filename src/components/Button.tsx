import React from 'react'

type Props = {
  title: string;
  bgcolor?: string;
  txcolor?: string;
}

const Button: React.FC<Props> = ({ title, bgcolor, txcolor }) => {
  return (
    <button style={{backgroundColor: bgcolor, color: txcolor}}>
      {title}
    </button>
  )
}

Button.defaultProps = {
  title: '',
  bgcolor: '#F36B26',
  txcolor: 'white'
}

export default Button;
