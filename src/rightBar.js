import React from "react";

function RightBar({reset, theme, setTheme}) {
  return (
    <div className="aside aside-right">
        <div class="themes">
          <div class="row">
            <input id="check-0" type="radio" checked={theme===0} onChange={_=>setTheme(0)} />
            <label for="check-0" class="cell theme-0"></label>
            
            <input id="check-1" type="radio" checked={theme===1} onChange={_=>setTheme(1)} />
            <label for="check-1" class="cell theme-1"></label>
          </div>
          <div class="row">
            <input id="check-2" type="radio" checked={theme===2} onChange={_=>setTheme(2)} />
            <label for="check-2" class="cell theme-2"></label>
            
            <input id="check-3" type="radio" checked={theme===3} onChange={_=>setTheme(3)} />
            <label for="check-3" class="cell theme-3"></label>
          </div>
        </div>

        <button onClick={reset}>
            Почати заново
        </button>  
    </div>
  );
}

export default RightBar;