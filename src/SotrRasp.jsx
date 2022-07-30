import React from "react";
import * as R from 'ramda'
import Cell from './Cell'
import { useSelector } from "react-redux";

const SotrRasp = ({cd}) => {
    const sotrRasp = useSelector(state => state.resultRaspisanie[cd])
    return <div style={{ minWidth: '180px' }}>
        {sotrRasp.map(el => <Cell info={el} cd={cd}/>)}
    </div>
}
export default React.memo(SotrRasp)
