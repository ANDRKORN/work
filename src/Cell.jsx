import React from "react";
import * as R from 'ramda'
import { useDispatch } from "react-redux";

const Cell = ({info, cd}) => {
    const dispatch = useDispatch();
    return (<div>
        <div
            style={{ display: 'flex' }}
            onClick={() => dispatch({ type: 'CHANGE_CELL', payload: {
                update: {...info, fiopac: 'Пронько'},
                cd: cd,
            }})}   
        >
            <div>{info.timep}</div>
            <div>{info.fiopac}</div>
        </div>
    </div>
    )
}

function moviePropsAreEqual(prevMovie, nextMovie) {
   return R.equals(prevMovie, nextMovie)   
}

export default React.memo(Cell, moviePropsAreEqual)