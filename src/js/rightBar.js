import React from "react";

function RightBar({reset, theme, setTheme}) {
  return (
    <div className="aside aside-right">
        <div className="themes">
          <div className="row">
            <input id="check-0" type="radio" checked={theme===0} onChange={_=>setTheme(0)} />
            <label htmlFor="check-0" className="cell theme-0"></label>
            
            <input id="check-1" type="radio" checked={theme===1} onChange={_=>setTheme(1)} />
            <label htmlFor="check-1" className="cell theme-1"></label>
          </div>
          <div className="row">
            <input id="check-2" type="radio" checked={theme===2} onChange={_=>setTheme(2)} />
            <label htmlFor="check-2" className="cell theme-2"></label>
            
            <input id="check-3" type="radio" checked={theme===3} onChange={_=>setTheme(3)} />
            <label htmlFor="check-3" className="cell theme-3"></label>
          </div>
        </div>
          <div>
            <button onClick={reset}>
              Почати заново
          </button>  
        </div>
    </div>
  );
}

export default RightBar;