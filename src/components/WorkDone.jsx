import React, { useState } from "react";
import { Grid, TextField } from "@mui/material";

export const WorkDone = () => {
  const [force, setForce] = useState(0);
  const [displacement, setDisplacement] = useState(0);

  return (
    <div className="sub">
      <Grid container>
        <Grid item xs={3}>
          <TextField
            label="Force"
            variant="standard"
            onChange={(e) => setForce(e.target.value)}
          />
        </Grid>
        <Grid item xs={1}>
          <h3>X</h3>
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="Displacement"
            variant="standard"
            onChange={(e) => setDisplacement(e.target.value)}
          />
        </Grid>
        <Grid item xs={1}>
          <h3>=</h3>
        </Grid>
        <Grid item>
          <h3>{force * displacement}</h3>
        </Grid>
      </Grid>
    </div>
  );
};
