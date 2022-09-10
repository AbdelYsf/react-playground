import { Button, Grid, Stack, TextField } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import Typography from "@mui/material/Typography";

export const UseRefDemo = () => {
  const [value, setValue] = useState(1);

  // 1 - access directly an element in the DOM
  const inputText = useRef<HTMLInputElement>(null);

  // 2 - persist the value of a mutable data between renders (does not cause of re rendring)
  const redersCount = useRef(1);

  useEffect(() => {
    redersCount.current = redersCount.current + 1;
  }, [value]);

  const handleButtonClick = () => {
    console.log(inputText.current);
    console.log(inputText.current?.value);
  };

  const handleChangeState = () => {
    setValue(value + 1);
    console.log(`current state value :${value}`);
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
            inputRef={inputText}
          />
          <Button variant="outlined" onClick={handleButtonClick}>
            {" "}
            Get element from DOM
          </Button>
          <Button variant="contained" onClick={handleChangeState}>
            {" "}
            change state
          </Button>
        </Stack>
        <Typography variant="h3" component="h2">
          the component get rendred {redersCount.current} ' times
        </Typography>
        ;
      </Grid>
    </Grid>
  );
};
