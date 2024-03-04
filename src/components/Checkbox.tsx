import React from 'react'

type typeCheckbox = {
  id: string,
  name: string,
  handleClick: any,
  isChecked: any
}

const Checkbox = ({id, name, handleClick, isChecked}: typeCheckbox) => {
  return (
    <input
        id={id}
        name={name}
        type='checkbox'
        onChange={handleClick}
        checked={isChecked}
    />
  )
}

export default Checkbox