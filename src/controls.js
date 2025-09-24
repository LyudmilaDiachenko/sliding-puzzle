import React from "react";

function Controls({resolution, setResolution}) {
  return (
    <div>
        <h2>Вибір гри</h2>
         <p>Зараз вибрано: {resolution}x{resolution}</p>
        <label>
            <input type="radio" checked={resolution===3} onChange={_=>setResolution(3)}/>
            Гра 3x3
        </label>
        <label> 
            <input type="radio" checked={resolution===4} onChange={_=>setResolution(4)}/>
            Гра 4x4
        </label>
        <label>
            <input type="radio" checked={resolution===5} onChange={_=>setResolution(5)}/>
            Гра 5x5
        </label>
    </div>
  );
}

export default Controls;