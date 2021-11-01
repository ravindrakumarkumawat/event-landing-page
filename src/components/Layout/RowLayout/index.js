import React from 'react'
import NormalRow from '../../common/NormalRow'
import NormalCol from '../../common/NormalCol'

const RowLayout = ({
  children
}) => {
  return (
    <NormalRow>
        <NormalCol span={20}>
          {children}      
        </NormalCol>
    </NormalRow> 
  )
}

export default RowLayout
