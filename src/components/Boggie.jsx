import React, { useState } from "react";
import { TextField, Grid, Button, Card } from "@mui/material";

export const Boggie = () => {
  const [passName, setPassName] = useState("");
  const [passData, setPassData] = useState([]);
  const handleOnboard = () => {
    setPassData([...passData, passName]);
  };
  const handleOffboarding = () => {
    const filtered = passData.filter((item) => item !== passName);
    setPassData([...filtered]);
  };
  return (
    <div className="sub2">
      <Grid container>
        <Grid item xs={4}>
          <TextField
            label="Passenger Name"
            variant="outlined"
            onChange={(e) => setPassName(e.target.value)}
          />
        </Grid>
        <Grid item xs={4}>
          <Button variant="contained" onClick={handleOnboard}>
            On boarding
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button variant="contained" onClick={handleOffboarding}>
            Off boarding
          </Button>
        </Grid>
      </Grid>
      <h1>My Boggie</h1>
      <Grid container spacing={3}>
        {passData.map((item) => (
          <Grid item xs={4}>
            <Card>
              <h2>{item}</h2>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
