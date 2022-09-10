import {
  Box,
  Card,
  Container,
  Grid,
  Skeleton,
  TextField,
  Typography,
} from "@mui/material";
import React, { useCallback, useRef, useState } from "react";
import { useBookSearch } from "../../hooks/useBookSearch";
import CardContent from "@mui/material/CardContent";

export const InfinitScrollPage = () => {
  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const { isLoading, error, books, hasMore } = useBookSearch(query, pageNumber);

  const observer = useRef<IntersectionObserver>();
  const lastBookElementRef = useCallback<any>(
    (node: any) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
          console.log("last book viible" + node);
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading]
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setPageNumber(1);
  };
  return (
    <>
      <Container>
        <Grid
          container
          direction="column"
          alignContent="center"
          justifyContent="center"
          spacing={0}
        >
          <TextField
            id="standard-basic"
            label="Book Title"
            variant="outlined"
            value={query}
            type="text"
            onChange={handleSearch}
            style={{ margin: "30px" }}
          />
        </Grid>

        <Grid
          container
          direction="row"
          alignContent="center"
          justifyContent="center"
          spacing={1}
        >
          {books.map((book, index: number) => {
            if (books.length === index + 1)
              return (
                <Grid
                  item
                  xs={8}
                  sm={6}
                  md={4}
                  lg={3}
                  key={index}
                  ref={lastBookElementRef}
                >
                  <Card variant="elevation" style={{ margin: 5 }}>
                    <CardContent>
                      <Typography variant="h5" component="div">
                        {book}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              );
            else
              return (
                <Grid item xs={8} sm={6} md={4} lg={3} key={index}>
                  <Card variant="elevation" style={{ margin: 5 }}>
                    <CardContent>
                      <Typography variant="h5" component="div">
                        {book}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              );
          })}

          <div>
            {isLoading && (
              <Box style={{ width: 80 }}>
                <Skeleton />
                <Skeleton animation="wave" />
                <Skeleton animation={false} />
              </Box>
            )}
          </div>
          <div>{error && "Error"}</div>
        </Grid>
      </Container>
    </>
  );
};
