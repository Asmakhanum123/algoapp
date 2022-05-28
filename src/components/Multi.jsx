import React, { useState } from "react";
import { TextField, Grid } from "@mui/material";

export const Multi = () => {
  const [firstnum, setFirstnum] = useState(0);
  const [secondnum, setSecondnum] = useState(0);
  return (
    <div className="sub">
      <Grid container>
        <Grid item xs={3}>
          <TextField
            label="First Number"
            variant="standard"
            onChange={(e) => setFirstnum(e.target.value)}
          />
        </Grid>
        <Grid item xs={1}>
          <h3>X</h3>
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="Second Number"
            variant="standard"
            onChange={(e) => setSecondnum(e.target.value)}
          />
        </Grid>
        <Grid item xs={1}>
          <h3>=</h3>
        </Grid>
        <Grid item>
          <h3>{firstnum * secondnum}</h3>
        </Grid>
      </Grid>
    </div>
  );
};
