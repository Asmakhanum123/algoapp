import React from "react";
import { Grid, TextField } from "@mui/material";

export const WorkDone = () => {
  return (
    <div className="sub">
      <Grid container>
        <Grid item xs={3}>
          <TextField label="Force" variant="standard" />
        </Grid>
        <Grid item xs={1}>
          <h3>X</h3>
        </Grid>
        <Grid item xs={3}>
          <TextField label="Displacement" variant="standard" />
        </Grid>
        <Grid item xs={1}>
          <h3>=</h3>
        </Grid>
        <Grid item>
          <h3>0</h3>
        </Grid>
      </Grid>
    </div>
  );
};
