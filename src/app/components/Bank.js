import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import Autocomplete from '@mui/material/Autocomplete';

function Bank() {



  return (
    <div>

      <Box
        sx={{
          height: 600,
          width: 350,
          borderRadius: "5%",
          backgroundColor: "gray",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          alignContent: "center",
        }}
      > 
      <Button sx={{ fontSize:'large', color:'white'}}> + </Button>
       
        <Stack direction="column" spacing={2}>

        <TextField sx={{}} id="outlined-basic" label="Monopoly" variant="outlined" />

          <Stack direction="row" spacing={2} >
            <Button sx={{backgroundColor:'white', color:'black' }}>M</Button>
            <Button  sx={{backgroundColor:'white', color:'black' }}>OK</Button>
            <Button  sx={{backgroundColor:'white', color:'black' }}>K</Button>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Button  sx={{backgroundColor:'white', color:'black' }}>9</Button>
            <Button  sx={{backgroundColor:'white', color:'black' }}>8</Button>
            <Button  sx={{backgroundColor:'white', color:'black' }}>7</Button>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Button  sx={{backgroundColor:'white', color:'black' }}>6</Button>
            <Button  sx={{backgroundColor:'white', color:'black' }}>5</Button>
            <Button  sx={{backgroundColor:'white', color:'black' }}>4</Button>
          </Stack>
          
          <Stack direction="row" spacing={2}>
            <Button  sx={{backgroundColor:'white', color:'black' }}>3</Button>
            <Button sx={{backgroundColor:'white', color:'black' }}>2</Button>
            <Button  sx={{backgroundColor:'white', color:'black' }}>1</Button>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Button sx={{backgroundColor:'white', color:'black' }}>C</Button>
            <Button sx={{backgroundColor:'white', color:'black' }}>0</Button>
            <Button sx={{backgroundColor:'white', color:'black' }}>.</Button>
          </Stack>
        </Stack>
        <Button sx={{ fontSize:'large',  color:'white'}}>- </Button>
      </Box>
    </div>
  );
}

export default Bank;
