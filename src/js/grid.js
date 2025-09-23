import React, { useEffect } from "react";
import Cell from './cell'

function Grid({win, setWin, showError, grid, setGrid, resolution}) {  
    function onClick(row, col){
        if (false && !win){
            let newGrid = [...grid]
            // newGrid[row][col] =
            
            setGrid(newGrid)
            validateWin(newGrid)
        } else if (win) {
            // noop
        } else {
            showError()
        }
    }

    function validateWin(grid){
        grid.reduce(
            (racc, r, rn) => 
                racc && r.reduce(
                    (cacc, c, cn) => cacc && ((rn * resolution + cn) === c),
                    true
                ),
            true
        ) && submitWin()
    }

    function submitWin(){
        setWin(true)
        return true;
    }
    
    return (
        
        <div className={"grid " + win}>
            {grid.map(
                (row, rowNum) => <div key={'row-'+rowNum} className="row">
                    {row.map(
                        (col, colNum) =>
                            <Cell 
                                key={'col-'+colNum} 
                                value={col} 
                                onClick={
                                    () => onClick(rowNum, colNum)
                                }
                            />
                    )}
                </div>
            )}
        </div>
    );
}

export default Grid