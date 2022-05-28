import React, { useState } from "react";
import { Tabs, Tab } from "@mui/material";
import { Add } from "./Add";
import { Multi } from "./Multi";
import { WorkDone } from "./WorkDone";

export const ContainerManager = () => {
  const [val, setVal] = useState("mult");
  return (
    <div>
      <Tabs value={val} onChange={(e, value) => setVal(value)}>
        <Tab value="add" label="Add" />
        <Tab value="mult" label="Multiply" />
        <Tab value="even" label="Even Odd" />
        <Tab value="wd" label="Work Done" />
      </Tabs>
      {val === "mult" && <Multi />}
      {val === "add" && <Add />}
      {val === "even" && <h3>This is my PDAC course - Even Odd App</h3>}
      {val === "wd" && <WorkDone />}
    </div>
  );
};
