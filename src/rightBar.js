import React from "react";

function RightBar({reset}) {
  return (
    <div className="aside aside-right">
        <button onClick={reset}>
            Почати заново
        </button>  
    </div>
  );
}

export default RightBar;