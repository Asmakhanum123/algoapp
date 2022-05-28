import React, { useState } from "react";
import { Tabs, Tab } from "@mui/material";
import { Add } from "./Add";

export const ContainerManager = () => {
  const [val, setVal] = useState("mult");
  return (
    <div>
      <Tabs value={val} onChange={(e, value) => setVal(value)}>
        <Tab value="add" label="Add" />
        <Tab value="mult" label="Multiply" />
        <Tab value="even" label="Even Odd" />
      </Tabs>
      {val === "mult" && <h1>This is my PDAC course - Multiplication App</h1>}
      {val === "add" && <Add />}
      {val === "even" && <h3>This is my PDAC course - Even Odd App</h3>}
    </div>
  );
};
