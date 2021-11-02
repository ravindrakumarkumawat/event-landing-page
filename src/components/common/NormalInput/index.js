import React from 'react'
import './NormalInput.css'

const NormalInput = ({
  id,
  classNames,
  value,
  onChange,
  type="text",
  placeholder,
  required=false,
  name=""
}) => {
  return (
    <input
      className={`input border ${classNames}`}
      value={value}
      id={id}
      type={type}
      placeholder={placeholder}
      onChange={(e) => onChange(e)}
      required={required}
      name={name}
    />
  )
}

export default NormalInput
