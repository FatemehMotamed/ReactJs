import React from 'react'
import StyledDiv from './StyledDiv'

function ChildA({counter, incHandler}) {
  return (
    <StyledDiv>
    <div>ChildA</div>
      {counter}
    <button onClick={incHandler}>+</button>
    
    </ StyledDiv>

  )
}

export default ChildA