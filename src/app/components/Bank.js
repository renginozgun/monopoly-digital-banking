import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Autocomplete from "@mui/material/Autocomplete";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import { connect, useDispatch } from "react-redux";

import {
  setTakerAccountAction,
  setGiverAccountAction,
  makeTransaction,
} from "../redux/actions/cardActions";

function Bank(props) {
  
  const [giverAnchorEl, setGiverAnchorEl] = useState(null);
  const giverOpen = Boolean(giverAnchorEl);

  const [takerAnchorEl, setTakerAnchorEl] = useState(null);
  const takerOpen = Boolean(takerAnchorEl);

  const [giverAccount, setGiverAccount] = useState(null);
  const [takerAccount, setTakerAccount] = useState(null);

  const [amount, setAmount] = useState([]);

  const [finalAmount, setFinalAmount] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    takerAccount
      ? dispatch(setTakerAccountAction(takerAccount))
      : dispatch(setTakerAccountAction(null));
  }, [takerAccount]);

  useEffect(() => {
    giverAccount
      ? dispatch(setGiverAccountAction(giverAccount))
      : dispatch(setGiverAccountAction(null));
  }, [giverAccount]);

  useEffect(() => {
    console.log("son girilen", finalAmount);
  }, [finalAmount]);

  useEffect(() => {
    setFinalAmount(amount.join(""));
  }, [amount]);

  const handleMenuClose = () => {
    setGiverAnchorEl(null);
    setTakerAnchorEl(null);
  };

  const onMinusClick = (event) => {
    setGiverAnchorEl(event.currentTarget);
  };

  const onPlusClick = (event) => {
    setTakerAnchorEl(event.currentTarget);
  };

  const handleTakerMenuItemClick = (e) => {
    setTakerAccount(findUserByName(e.nativeEvent.target.outerText));
    setTakerAnchorEl(null);
  };

  const handleGiverMenuItemClick = (e) => {
    setGiverAccount(findUserByName(e.nativeEvent.target.outerText));
    setGiverAnchorEl(null);
  };

  const findUserByName = (name) => {
    return props.cards.find((x) => x.name === name);
  };

  const handleTransaction = (money) => {
    if (takerAccount && takerAccount.money < money) {
      
    } else {
      dispatch(
        makeTransaction({
          taker: takerAccount,
          giver: giverAccount,
          amount: money,
          cards: props.cards,
        })
      );
      finishTransaction();
    }
  };

  const finishTransaction = () => {
    setTakerAccount(null);
    setGiverAccount(null);
    removeAmount();
  };

  const removeAmount = () => {
    let tempAmount = [...amount];
    tempAmount.length = 0;
    setAmount(tempAmount);
  };

  const onButtonClick = (e) => {
    let clickedValue = e.target.value;
    let tempAmount = [...amount];
    let tempNumber = 0;

    switch (clickedValue) {
      case "M":
        tempNumber = Number(finalAmount) * 1000000;
        setFinalAmount(tempNumber);
        handleTransaction(tempNumber);
        break;
      case "K":
        tempNumber = Number(finalAmount) * 1000;
        setFinalAmount(tempNumber);
        handleTransaction(tempNumber);
        break;
      case "C":
        removeAmount();
        handleTransaction(tempNumber);
        break;
      case "OK":
        tempNumber = Number(finalAmount) + 2000;
        setFinalAmount(tempNumber);
        handleTransaction(tempNumber);
        break;
      default:
        tempAmount.push(clickedValue);
        setAmount(tempAmount);
    }
  };

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
        <Button
          onClick={onPlusClick}
          sx={{ fontSize: "large", color: "white" }}
        >
          {" "}
          +{" "}
        </Button>

        <Stack direction="column" spacing={2}>
          <Box borderColor={"grey"}>{finalAmount}</Box>

          <Stack direction="row" spacing={2}>
            <Button
              onClick={onButtonClick}
              value="M"
              sx={{ backgroundColor: "white", color: "black" }}
            >
              M
            </Button>
            <Button
              onClick={onButtonClick}
              value="OK"
              sx={{ backgroundColor: "white", color: "black" }}
            >
              OK
            </Button>
            <Button
              onClick={onButtonClick}
              value="K"
              sx={{ backgroundColor: "white", color: "black" }}
            >
              K
            </Button>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Button
              value="9"
              onClick={onButtonClick}
              sx={{ backgroundColor: "white", color: "black" }}
            >
              9
            </Button>
            <Button
              value="8"
              onClick={onButtonClick}
              sx={{ backgroundColor: "white", color: "black" }}
            >
              8
            </Button>
            <Button
              value="7"
              onClick={onButtonClick}
              sx={{ backgroundColor: "white", color: "black" }}
            >
              7
            </Button>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Button
              onClick={onButtonClick}
              value="6"
              sx={{ backgroundColor: "white", color: "black" }}
            >
              6
            </Button>
            <Button
              onClick={onButtonClick}
              value="5"
              sx={{ backgroundColor: "white", color: "black" }}
            >
              5
            </Button>
            <Button
              onClick={onButtonClick}
              value="4"
              sx={{ backgroundColor: "white", color: "black" }}
            >
              4
            </Button>
          </Stack>

          <Stack direction="row" spacing={2}>
            <Button
              onClick={onButtonClick}
              value="3"
              sx={{ backgroundColor: "white", color: "black" }}
            >
              3
            </Button>
            <Button
              onClick={onButtonClick}
              value="2"
              sx={{ backgroundColor: "white", color: "black" }}
            >
              2
            </Button>
            <Button
              onClick={onButtonClick}
              value="1"
              sx={{ backgroundColor: "white", color: "black" }}
            >
              1
            </Button>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Button
              onClick={onButtonClick}
              value="C"
              sx={{ backgroundColor: "white", color: "black" }}
            >
              C
            </Button>
            <Button
              onClick={onButtonClick}
              value="0"
              sx={{ backgroundColor: "white", color: "black" }}
            >
              0
            </Button>
            <Button
              onClick={onButtonClick}
              value="."
              sx={{ backgroundColor: "white", color: "black" }}
            >
              .
            </Button>
          </Stack>
        </Stack>
        <Button
          onClick={onMinusClick}
          sx={{ fontSize: "large", color: "white" }}
        >
          {" "}
          -{" "}
        </Button>
      </Box>

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={takerAnchorEl}
        open={takerOpen}
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        {props.cards.map((item, i) => (
          <MenuItem onClick={handleTakerMenuItemClick}>{item.name}</MenuItem>
        ))}
      </Menu>

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={giverAnchorEl}
        open={giverOpen}
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        {props.cards.map((item, i) => (
          <MenuItem onClick={handleGiverMenuItemClick}>{item.name}</MenuItem>
        ))}
      </Menu>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cards: state.card.cards,
  };
};

export default connect(mapStateToProps)(Bank);
