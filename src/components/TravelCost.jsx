import React, { useState } from "react";
import { TextField, Grid } from "@mui/material";

export const TravelCost = () => {
  const [mileage, setMileage] = useState(0);
  const [dist, setDist] = useState(0);
  const [costfuel, setCostfuel] = useState(0);
  return (
    <div className="sub">
      <Grid container>
        <Grid item xs={3}>
          <TextField
            label="Mileage"
            variant="outlined"
            onChange={(e) => setMileage(e.target.value)}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="Distance"
            variant="outlined"
            onChange={(e) => setDist(e.target.value)}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="Cost of Fuel"
            variant="outlined"
            onChange={(e) => setCostfuel(e.target.value)}
          />
        </Grid>
        <Grid>
          <h2>{Math.ceil((dist / mileage) * costfuel)}</h2>
        </Grid>
      </Grid>
    </div>
  );
};
