import { Button, Grid, Stack, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";

export const UseMemoDemo = () => {
  const [number, setNumber] = useState(0);
  const [isDarkTheme, setDarkTheme] = useState(true);
  const [doubleNumber, setDoubleNumber] = useState(0);

  const handleCalculation = (event: React.ChangeEvent<HTMLInputElement>) => {
    const numValue = +event.target.value;
    setNumber(numValue);
    const result = slowFunction(numValue);
    setDoubleNumber(result);
  };

  const handleDarkTheme = () => {
    console.log(isDarkTheme);
    setDarkTheme((prevDark) => !prevDark);
  };
  return (
    <Grid
      container
      direction="column"
      alignContent="center"
      justifyContent="center"
      spacing={0}
    >
      <Grid item xs={3}>
        <Stack direction="column" style={{ marginTop: 20, marginBottom: 15 }}>
          <TextField
            id="outlined-basic"
            label="Enter a value"
            variant="outlined"
            type="number"
            value={number}
            onChange={handleCalculation}
          />
          <Typography
            variant="h3"
            component="h3"
            style={{
              backgroundColor: isDarkTheme ? "dark" : "white",
              color: isDarkTheme ? "dark" : "pink",
            }}
          >
            result : {doubleNumber}
          </Typography>
          <Button variant="contained" onClick={handleDarkTheme}>
            change Theme
          </Button>
        </Stack>
      </Grid>
    </Grid>
  );
};

const slowFunction = (value: number) => {
  for (let i = 0; i < 100_000_000_0; i++) {}
  return value * value;
};
