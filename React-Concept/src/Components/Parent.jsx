import React, { useState } from 'react'
import ChaildA from './ChildA'
import ChildB from './ChildB'
import Button from './Button'
import StyledDiv from './StyledDiv'

const Parent = () => {
    const [counter, setCounter] = useState(0)
    const incHandler = () => {
        setCounter((counter) => counter+1)
    }

  return (
    <StyledDiv>
        {counter}
        <button onClick={incHandler}>+</button>
        <ChaildA counter = {counter} incHandler={incHandler}  />
        <ChildB counter = {counter} incHandler={incHandler} btn ={<Button incHandler={incHandler} />}  />
    </StyledDiv>

  )
}

export default Parent