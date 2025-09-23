import React from "react";

function Cell({value, onClick}) {
  // new Element("canvas")
  return (
    <div
        className={'cell cell-' + value}
        onClick={onClick}
        // style={{backgroundImage: ""}}
    >
      {value}
    </div>
  );
}

export default Cell;