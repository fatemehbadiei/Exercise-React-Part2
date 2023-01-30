//memo component

import React from "react";

const MemoComponent = (props) => {
    console.log("memo...")
  return(
      <div>Memo component - {props.name}</div>
  )
}

export default React.memo(MemoComponent);