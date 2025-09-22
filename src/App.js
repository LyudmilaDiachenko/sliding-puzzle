import React, { useState } from "react";
import Grid from './js/grid'
import Error from './js/error'

function App() {
  const [win, setWin] = useState(false)
  const [error, setError] = useState(false)
  const [grid, setGrid] = useState(
        [
            ['','',''], 
            ['','',''], 
            ['','',''], 
        ]
  )

  function reset(){
    setGrid(
      [
        ['','',''], 
        ['','',''], 
        ['','',''], 
      ]
    )
    setWin(false)
  }

  function showError() {
      setError(true)
      setTimeout(() => setError(false), 1000);
  }
  
  return (
    <div className="App">
      <div className="App-header">
        <Grid {...{grid, setGrid, win, setWin, showError}} />
        <Error error={error} />          
      </div>
    </div>
  );
}

export default App;
