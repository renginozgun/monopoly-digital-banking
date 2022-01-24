import React, { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";

import Box from "@mui/material/Box";
import Bank from "./Bank";
import Cards from "./Cards";
import { Typography } from "@mui/material";
import Stack from "@mui/material/Stack";

import {
  setGiverAccountAction,
  setTakerAccountAction,
} from "../redux/reducers/cardReducer";

function Panel(props) {
  const dispatch = useDispatch();
  const [takerAccount, setTakerAccount] = useState(false);
  const [giverAccount, setGiverAccount] = useState(false);

  useEffect(() => {
    props.taker && setTakerAccount(true);
  }, [props.taker]);

  useEffect(() => {
    props.giver && setGiverAccount(true);
  }, [props.giver]);

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
      <Stack
        direction="row"
        spacing={2}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        {props.taker && (
          <Stack direction="column">
            <svg
              width="150"
              height="150"
              fill={props.taker.color}
              viewBox="0 0 16 16"
            >
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z" />
              <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z" />
            </svg>
            <Typography variant="h6">{props.taker.name} </Typography>
          </Stack>
        )}

        <Stack direction="column">
          {props.gameView ? <Bank /> : <Cards />}
          {props.gameView &&
            props.cards.map((item, i) => (
              <Typography>
                {item.name} : {item.money}
              </Typography>
            ))}
        </Stack>

        {props.giver && (
          <Stack direction="column">
            <svg
              width="150"
              height="150"
              fill={props.giver.color}
              viewBox="0 0 16 16"
            >
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z" />
              <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z" />
            </svg>
            <Typography variant="h6">{props.giver.name} </Typography>
          </Stack>
        )}
        
      </Stack>
    </Box>
  );
}

const mapStateToProps = (state) => {
  return {
    gameView: state.app.gameView,
    cards: state.card.cards,
    giver: state.card.giverAccount,
    taker: state.card.takerAccount,
  };
};

export default connect(mapStateToProps)(Panel);
