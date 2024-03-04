import React, {useEffect, useState} from 'react'
import Checkbox from './components/Checkbox'

const countries = [
  {
    id: '1',
    name: 'India'
  },
  {
    id: '2',
    name: 'USA'
  },
  {
    id: '3',
    name: 'France'
  },
]

const App = () => {

  /* useState */
  const [isCheckAll, setIsCheckAll] = useState(false)
  const [isCheck, setIsCheck] = useState<string[]>([])

  /* useEffect */
  useEffect(() => {
    isCheck.length === countries.length ?
      setIsCheckAll(true) : 
      setIsCheckAll(false)
  
    return
  }, [isCheck])
  
  
  /* handles */
  const handleSelectAll = ():void => {
    setIsCheckAll(!isCheckAll)
    setIsCheck(countries.map(li => li.id))
    isCheckAll && setIsCheck([])
  }
  const handleClick = (event: any):void => {
    const {id, checked} = event.target
    setIsCheck([...isCheck, id])
    !checked && setIsCheck(isCheck.filter(item => item !== id))   
  }


  /* subComponents */
  const listCountries = countries.map(
    ({id, name}) => (
      <>
        <Checkbox 
          key={id}
          name={name}
          id={id}
          handleClick={handleClick}
          isChecked={isCheck.includes(id)}
        />
        {name}
      </>
    )
  )

  return(
    <>
      <Checkbox 
      name={'SelectAll'}
      id={'selectAll'}
      handleClick={handleSelectAll}
      isChecked={isCheckAll}
      />
      Select All
      {listCountries}
    </>
  )

}

export default App