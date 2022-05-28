import React, { useState } from "react";
import { TextField, Card, Paper } from "@mui/material";

export const Add = () => {
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);
  const [third, setThird] = useState(0);
  const [fourth, setFourth] = useState(0);
  const [fifth, setFifth] = useState(0);
  return (
    <div className="sub">
      <TextField
        label="First Number"
        variant="outlined"
        onChange={(e) => setFirst(e.target.value)}
      />
      <TextField
        label="Second Number"
        variant="outlined"
        onChange={(e) => setSecond(e.target.value)}
      />
      <TextField
        label="Third Number"
        variant="outlined"
        onChange={(e) => setThird(e.target.value)}
      />
      <TextField
        label="Fourth Number"
        variant="outlined"
        onChange={(e) => setFourth(e.target.value)}
      />
      <TextField
        label="Fifth Number"
        variant="outlined"
        onChange={(e) => setFifth(e.target.value)}
      />
      <Paper variant="outlined">
        {Number(first) +
          Number(second) +
          Number(third) +
          Number(fourth) +
          Number(fifth)}
      </Paper>
    </div>
  );
};
