import React from 'react'
import StyledDiv from './StyledDiv'

function ChildB({counter, incHandler, btn}) {
  return (
    <StyledDiv>
    
    <div>ChildB</div>
    {counter}
    <button onClick={incHandler}>+</button>
    <br />
    btn component sent as a props{btn}
    </ StyledDiv>
  )
}

export default ChildB