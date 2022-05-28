import React, { useState } from "react";
import { TextField, Grid } from "@mui/material";

export const TilesBox = () => {
  const [wh, setWh] = useState(0);
  const [hh, setHh] = useState(0);
  const [wt, setWt] = useState(0);
  const [ht, setHt] = useState(0);
  const [tilesbox, setTilesbox] = useState(0);
  const [costofbox, setCostofbox] = useState(1);
  const [numberfloor, setNumberFloor] = useState(1);
  const [numberbuilding, setNumberbuilding] = useState(1);
  const calculateBoxes = () => {
    const areaOfHall = wh * hh;
    const areaOfTile = wt * ht;
    const totalNumberOfTiles = areaOfHall / areaOfTile;
    const tilesBoxes = totalNumberOfTiles / tilesbox;
    return tilesBoxes;
  };
  return (
    <div className="sub">
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <TextField
            label="Width Of Hall"
            variant="outlined"
            onChange={(e) => setWh(e.target.value)}
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            label="Hieght Of Hall"
            onChange={(e) => setHh(e.target.value)}
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            label="Tile's Width"
            variant="outlined"
            onChange={(e) => setWt(e.target.value)}
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            label="Tile's Hieght"
            variant="outlined"
            onChange={(e) => setHt(e.target.value)}
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            label="Tiles In a Box"
            variant="outlined"
            onChange={(e) => setTilesbox(e.target.value)}
          />
        </Grid>
        <Grid item>
          <TextField
            label="Cost Of Box"
            variant="outlined"
            onChange={(e) => setCostofbox(e.target.value)}
          />
        </Grid>
        <Grid item>
          <TextField
            label="Number Of Floors"
            variant="outlined"
            onChange={(e) => setNumberFloor(e.target.value)}
          />
        </Grid>
        <Grid item>
          <TextField
            label="Number Of Building"
            variant="outlined"
            onChange={(e) => setNumberbuilding(e.target.value)}
          />
        </Grid>
        <Grid item>
          <h2>{calculateBoxes() * costofbox * numberfloor * numberbuilding}</h2>
        </Grid>
      </Grid>
    </div>
  );
};
