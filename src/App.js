import React from "react";
import Panel from "./app/components/Panel";
import Box from "@mui/material/Box";
import "./App.css";
import { Provider } from 'react-redux';
import { store } from "./app/redux/store";

function App() {
  return (
    <Provider store={store}> 
    <div className="App">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Panel />
      </Box>
    </div>
  </Provider>  
  );
}

export default App;
