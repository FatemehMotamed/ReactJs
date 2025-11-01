import {memo} from 'react'

function ChildComponent({number, clickHandler}) {
  return (
   <>
     {console.log("ChildComponent Rendered")}
     Number in child {number}
   </>
  )
}

export default memo(ChildComponent)