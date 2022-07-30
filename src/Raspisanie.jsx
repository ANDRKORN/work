import React from "react";
import { connect, useSelector } from "react-redux";
import SotrRasp from "./SotrRasp";

const Raspisanie = ({ arrsotr }) => {
    
  return (
    <div>
      <div style={{ display: "flex" }}>
        {arrsotr.map((el) => {          
            return ( 
          <div>
            <div>
                {el.fiosotr}
            </div>
            <SotrRasp cd={el.cd} /> 
          </div>
        )}
        )}
      </div>
    </div>
  );
};

export default connect((state) => ({ arrsotr: state.resultReduser.cdsotr }))(Raspisanie);
