import React, { useState } from "react";
import { Grid, TextField } from "@mui/material";

export const Area = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  return (
    <div>
      <Grid container>
        <Grid item xs={3}>
          <TextField
            label="width"
            variant="standard"
            onChange={(e) => setWidth(e.target.value)}
          />
        </Grid>
        <Grid item xs={1}>
          <h3>X</h3>
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="height"
            variant="standard"
            onChange={(e) => setHeight(e.target.value)}
          />
        </Grid>
        <Grid item xs={1}>
          <h3>=</h3>
        </Grid>
        <Grid item>
          <h3>{width * height}</h3>
        </Grid>
      </Grid>
    </div>
  );
};
