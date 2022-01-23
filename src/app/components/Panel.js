import React, {useState} from "react";
import { connect } from "react-redux";

import Box from "@mui/material/Box";
import Bank from "./Bank";
import Cards from "./Cards";


function Panel(props) {



  return (
    <Box
      sx={{
        width: 1100,
        height: 900,
        backgroundColor: "#DACC96",
        borderRadius: "10%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
    
     {  props.gameView ?  <Bank/> : <Cards/>  } 
    </Box>
  );
}


const mapStateToProps = (state) => {
  return { gameView: state.app.gameView };
};

export default connect(mapStateToProps)(Panel);
