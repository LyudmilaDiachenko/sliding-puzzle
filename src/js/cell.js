import React from "react";

function Cell({value, onClick}) {
  // new Element("canvas")
  return (
    <div
        className={'cell cell-' + value}
        onClick={onClick}
        // style={{backgroundImage: ""}}
    >
      {value!==null?value+1:value}
    </div>
  );
}

export default Cell;