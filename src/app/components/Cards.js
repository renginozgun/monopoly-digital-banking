import React, { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";


import header from "../../pngegg.png";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";

import { cardColors } from "../constants/constants";
import { setCardsAction } from "../redux/actions/cardActions";
import {setGameViewAction} from "../redux/actions/appActions";

function Cards(props) {

  const [open, setOpen] = useState(false);
  const [cardOwnerName, setCardOwnerName] = useState();
  const [cardColor, setCardColor] = useState("Red");
  const [startGame, setStartGame]=useState(false);
  const [users, setUsers]=useState([])

  useEffect(() => {

      console.log("store" ,props.cards)

  }, [props.cards])

  useEffect(() => {

    console.log(users.length)

    users.length===2 && setStartGame(true)

  }, [users])
  

  let usersList = [];
  const dispatch = useDispatch();

  const handleSelectChange = (event) => {
    setCardColor(event.target.value);
  };

  const onAddCard = () => {
    setOpen(true);
  };

  const handleCloseButton = () => {
    setOpen(false);
  };

  const handleAddButton = () => {

    let uniqueId= Date.now()
    let user = { id: uniqueId, name: cardOwnerName, color: cardColor, money: "15000" }
    let tempList=[...users]
    tempList.push(user)
    setUsers(tempList)

    console.log(users)
    setOpen(false);

  };

  const handleInputChange = (e) => {
    setCardOwnerName(e.target.value);
  };

  const onStartClick=()=>{

     dispatch(setCardsAction(users))
     dispatch(setGameViewAction(true))


  }

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <Stack direction="column">
        <img src={header} height="300"></img>
        <Stack direction="row" sx={{ alignItems: "center" }}>
          <Button onClick={onAddCard}> Add Card </Button>
         { startGame && <Button onClick={onStartClick}> Start Game </Button>}
        </Stack>
      </Stack>

      <Dialog
        open={open}
        onClose={handleCloseButton}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Add New Monopoly Credit Card"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Monopoly digital banking is played with credit cards.
          </DialogContentText>
          <DialogContentText>
            Every player starts with 15000 monopoly money.
          </DialogContentText>
          <FormControl variant="standard" sx={{ mt: 3 }}>
            <InputLabel htmlFor="input-with-icon-adornment">
              Enter card owner's name
            </InputLabel>
            <Input
              id="input-with-icon-adornment"
              value={cardOwnerName}
              onChange={handleInputChange}
            />
            <TextField
              sx={{ mt: 3 }}
              select
              label="Select card color"
              value={cardColor}
              onChange={handleSelectChange}
              SelectProps={{
                native: true,
              }}
            >
              {cardColors.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.value}
                </option>
              ))}
            </TextField>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseButton} autoFocus>
            Close
          </Button>
          <Button onClick={handleAddButton} autoFocus>
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

const mapStateToProps = (state) => {
  return { cards: state.card.cards };
};

export default connect(mapStateToProps)(Cards);
