import { Box, Typography } from "@mui/material";
import React from "react";
import Joke from "./Joke";

export default function JokesList() {
  const classes = {
    display: "flex",
    width: "80%",
    height: "80%",
    margin: "20px auto",
    maxWidth: "750px",
  };

  const sidebar = {
    backgroundColor: "#9575cd",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "30%",
    height: "50%",
    justifyContent: "center",
    textAlign: "center",
    boxShadow: "0 19px 38px rgba(0,0,0,0.3), 0 15px 12px rgba(0,0,0,0.1)",
    zIndex: 2,
  };

  const listjoke = {
    height: "400px",
    width: "560px",
    backgroundColor: "white",
    alignSelf: "center",
    boxShadow: "0 19px 38px rgba(0,0,0,0.3), 0 15px 12px rgba(0,0,0,0.1)",
    overFlow: "scroll",
    borderTopRightRadius: 7,
    borderBottomRightRadius: 7,
  };
  return (
    <>
      <Box sx={classes}>
        <Box sx={sidebar}>
          <Typography
            sx={{
              fontSize: "3rem",
              fontWeight: 700,
              margin: 20,
              color: "white",
            }}
          >
            Funx <br />
            Jokes
          </Typography>
        </Box>
        <Box sx={listjoke}>
          <Joke />
        </Box>
      </Box>
    </>
  );
}
