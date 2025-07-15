import { useState } from 'react';
import styled from 'styled-components';

const Div = styled.div`
    color: ${(props)=> props.selected ? "blue" : "orange"};
    background-color: silver;
    &:hover{ 
      background-color: yellow;
    } 
    @media (max-width: 1200px) {
        background-color: green;
    }    
  `
  
function Banner({title, description, number, name}) {
    // const {title, description} = props
    const [selected, setSelected] = useState(true) 
  
  return (
    <Div selected={selected}>
        
        <hr />
        <button onClick={()=> setSelected((selected)=>!selected)}>change</button>
        <h4>title: {title}</h4>
        <h4>description: {description}</h4>
        <h4>number: {number}</h4>
        <h4>name: {name}</h4>

        {/* <h4>title: {props.title}</h4>
        <h4>description: {props.description}</h4> */}

        <hr />

    </Div>
  )
}

export default Banner