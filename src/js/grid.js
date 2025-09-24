import React, { useEffect } from "react";
import Cell from './cell'

function Grid({win, setWin, showError, grid, setGrid, theme, resolution}) {  
    function onClick(row, col){
        let nearestEmptyCell;

        if (grid[row-1] && grid[row-1][col] === null) nearestEmptyCell = [row-1, col]
        if (grid[row+1] && grid[row+1][col] === null) nearestEmptyCell = [row+1, col]
        if (grid[row][col-1] === null) nearestEmptyCell = [row, col-1]
        if (grid[row][col+1] === null) nearestEmptyCell = [row, col+1]

        if (nearestEmptyCell && !win){
            let newGrid = [...grid]
            newGrid[nearestEmptyCell[0]][nearestEmptyCell[1]] = grid[row][col]
            newGrid[row][col] = null
            
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
                    (cacc, c, cn) => cacc && (
                        // значення в клітинці рівне (номеру рядка * довжину рядка + номеру колонки)
                        ((rn * resolution + cn) === c) || 
                        // або це остання клітинка і вона порожня
                        (rn === resolution-1 && cn === resolution-1 && c===null)
                    ),
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
        <div className={"grid" + (win ? " win" : "")}>
            {grid.map((row, rowNum) => 
                <div key={'row-'+rowNum} className="row">
                    {row.map((col, colNum) => 
                        <Cell key={'col-'+colNum} value={col} theme={theme} resolution={resolution} onClick={() => onClick(rowNum, colNum)} />
                    )}
                </div>
            )}
        </div>
    );
}

export default Grid