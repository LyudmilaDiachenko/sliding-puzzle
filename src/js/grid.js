import React, { useEffect } from "react";
import Cell from './cell'

function Grid({turn, setTurn, win, setWin, showError, grid, setGrid, log, setLog, aiPlayer}) {  
    function onClick(row, col){
        if (!grid[row][col] && !win){
            let newGrid = [...grid]
            newGrid[row][col] = turn
            setGrid(newGrid)
            validateWin(newGrid)
        } else if (win) {
            // noop
        } else {
            showError()
        }
    }

    function validateWin(grid){
        let isWin = false;
        if (grid[0][0] === 1){
            isWin = submitWin()
        }
        return isWin;
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