import React from 'react'
import NormalRow from '../../common/NormalRow'
import NormalCol from '../../common/NormalCol'

const RowLayout = ({
  children
}) => {
  return (
    <NormalRow>
      <div style={{ margin: "0 auto" }}>
        <NormalCol span={20}>
          {children}      
        </NormalCol>
      </div>
    </NormalRow> 
  )
}

export default RowLayout
