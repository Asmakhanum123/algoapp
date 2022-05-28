import React, { useState } from "react";
import { Tabs, Tab } from "@mui/material";
import { Add } from "./Add";
import { Multi } from "./Multi";
import { WorkDone } from "./WorkDone";
import { Area } from "./Area";
import { TravelCost } from "./TravelCost";
import { TilesBox } from "./TilesBox";
import { Boggie } from "./Boggie";

export const ContainerManager = () => {
  const [val, setVal] = useState("mult");
  return (
    <div>
      <Tabs value={val} onChange={(e, value) => setVal(value)}>
        <Tab value="add" label="Add" />
        <Tab value="mult" label="Multiply" />
        <Tab value="wd" label="Work Done" />
        <Tab value="Area" label="Area of rec" />
        <Tab value="travelcost" label="Travel Cost" />
        <Tab value="tiles" label="Tiles boxes" />
        <Tab value="boggie" label="Boggie" />
      </Tabs>
      {val === "mult" && <Multi />}
      {val === "add" && <Add />}
      {val === "wd" && <WorkDone />}
      {val === "Area" && <Area />}
      {val === "travelcost" && <TravelCost />}
      {val === "tiles" && <TilesBox />}
      {val === "boggie" && <Boggie />}
    </div>
  );
};
