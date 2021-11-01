import React from 'react'
import NormalRow from '../../common/NormalRow'
import NormalCol from '../../common/NormalCol'

const RowLayout = ({
  children
}) => {
  return (
    <NormalRow classNames={"justifyCenter"}>
        <NormalCol span={15}>
          {children}      
        </NormalCol>
    </NormalRow> 
  )
}

export default RowLayout
