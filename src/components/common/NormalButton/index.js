import React from 'react'
import styles from './NormalButton.module.css'

const NormalButton = ({
  name,
  btntype="btn",
  handleAction
}) => {
  return (
    <button className={`${styles[btntype]}`} onClick={() => handleAction()}>{name}</button>
  )
}

export default NormalButton
