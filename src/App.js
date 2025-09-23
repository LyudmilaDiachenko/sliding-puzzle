import React, { useState } from "react";
import Grid from './js/grid'
import Error from './js/error'

function App() {
  const [resolution, setResolution] = useState(3)
  const [win, setWin] = useState(false)
  const [error, setError] = useState(false)
  const [grid, setGrid] = useState([])

  useState(_=>reset(), [])

  function reset(){
    setGrid(fillGrid())
    setWin(false)
  }

  function fillGrid(){
    // створюємо квадратний масив з resolution^2 чисел 1 з яких порожня
    const numbers = [...Array(resolution * resolution - 1).keys(), null].sort(_ => Math.random() > 0.5 ? 1 : -1);

    return isValid(numbers) ? numbers.reduce((acc, n, i) => {
        if (i % resolution === 0) acc.push([])
        acc[acc.length - 1].push(n)
        return acc
    }, []) : fillGrid()
  }

  function isValid(numbers){
    const [inversions, _] = numbers.reduce(([acc, prev], elem) => [(elem !== null && prev !== null && elem < prev) ? ++acc : acc, elem], [0, 0])
    const emptyRowNumber = Math.trunc(numbers.findIndex(e=>e===null) / resolution)
    return (even(resolution) && odd(inversions)) || 
      (
        odd(resolution) && 
        (
          (even(emptyRowNumber) && even(inversions)) || 
          (odd(emptyRowNumber) && odd(inversions))
        )
      )
  }

  function odd(i){ return !(i % 2); }
  function even(i){ return !!(i % 2); }

  function showError() {
      setError(true)
      setTimeout(() => setError(false), 1000);
  }
  
  return (
    <div className="App">
      <div className="App-header">
        <Grid {...{grid, setGrid, win, setWin, showError, resolution}} />
        <Error error={error} />          
      </div>
    </div>
  );
}

export default App;
