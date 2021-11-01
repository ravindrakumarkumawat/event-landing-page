import React from 'react'
import styles from './NormalRow.module.css'

const NormalRow = ({
  classNames,
  children
}) => {
  return (
    <div className={`${styles.row} ${classNames ? styles[classNames] : ''}`}>
      {children}
    </div>
  )
}

export default NormalRow
