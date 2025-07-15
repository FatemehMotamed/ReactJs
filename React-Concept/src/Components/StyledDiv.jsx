import React from 'react'

function StyledDiv({children}) {
  const styles = {
    border: "1px solid black",
    margin: "20px",
    padding: "10px"
  }
  return (
    <div style={styles}>{children}</div>
  )
}

export default StyledDiv