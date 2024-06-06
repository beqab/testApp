import React from 'react'
import './button.scss'

const ButtonComponent = ({className = '',   btnText,}: any) => {
  return (
    <>
    <button className={className}>
      {btnText}
      </button>
    </>
  )
}

export default ButtonComponent