import React from "react";
import { Box, LinearProgress, Typography } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import axios from "axios";
export default function Joke() {
  const jokename = {
    display: "flex",
    borderBottom: "2px solid grey",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 400,
    padding: "1rem",
  };

  const text = {
    width: "75%",
    marginLeft: "60px",
    fontSize: "1.2rem",
  };

  const arrowRow = {
    display: "flex",
    marginRight: "10px",
    justifyContent: "center",
    alignItems: "center",
    width: "15px",
  };

  const arrowIcon = {
    fontSize: "1rem",
    margin: 2,
    cursor: "pointer",
  };

  const voteLabel = {
    fontSize: 20,
  };

  const [data, setdata] = React.useState({ jokes: [] });
  const [loading, setloading] = React.useState(false);

  React.useEffect(() => {
    setloading(true);
    axios
      .get(
        "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=political&type=single&amount=3",
        {
          headers: {
            Accepts: "application/json",
          },
        }
      )
      .then(({ data }) => setdata(data))
      .catch(console.error)
      .finally(() => setloading(false));
  }, []);

  return (
    <>
      {loading ? (
        <LinearProgress />
      ) : (
        data.jokes.map((e, index) => {
          return (
            <Box sx={jokename} key={index}>
              <Box sx={arrowRow}>
                <ArrowUpwardIcon sx={arrowIcon}></ArrowUpwardIcon>
                <Typography sx={voteLabel}>0</Typography>

                <ArrowDownwardIcon sx={arrowIcon}></ArrowDownwardIcon>
              </Box>

              <Box sx={text}>{e.joke}</Box>
            </Box>
          );
        })
      )}
    </>
  );
}
