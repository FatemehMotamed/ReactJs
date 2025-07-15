import { useState } from "react"
import "./CourseCard.css"
function CourseCard({data:{name, description}}) {
  const [selected, setSelected] = useState(true)
  const hstyle = {
    color:"blue", 
    border: "2px solid gray", 
    backgroundColor: "pink"
  }
  const hstyle2 = {

    backgroundColor: "orange"
  }
  return (
    
        // <li className={selected ? "selecteClass" : ""}>
        <li className={`container ${selected && `selecteClass`}`}>
            <h4 style={selected ? hstyle : hstyle2}>{name}</h4>
            <p style={{border: "1px solid red", backgroundColor: "yellow"}}>{description}</p>
            <button onClick={()=> setSelected((selected)=>!selected)}>change</button>
        </li>
   
  )
}

export default CourseCard