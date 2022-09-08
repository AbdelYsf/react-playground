import { useFetch } from "../../hooks/useFetch";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  CssBaseline,
  Grid,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import BasicAlert from "../Alert/Alert";
import Box from "@mui/material/Box";

interface AddressDetails {
  street: string;
  suite: string;
  city: string;
}

interface UserDetails {
  name: string;
  address: AddressDetails;
  phone: string;
}

export const UsersPage = () => {
  const { data, isLoading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        {isLoading ? (
          <Stack spacing={1}>
            <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
            <Skeleton variant="circular" width={40} height={40} />
            <Skeleton variant="rectangular" width={210} height={60} />
            <Skeleton variant="rounded" width={210} height={60} />
          </Stack>
        ) : error ? (
          <BasicAlert
            severity="error"
            title="something went wrong!"
            description={error.message}
          />
        ) : (
          data.map((user: UserDetails, index: number) => {
            return (
              // breakpoints : xs , sm, md ,lg, xl: 12 unit
              <Box sx={{ width: "100%" }}>
                <Grid
                  container
                  spacing={4}
                  direction="row"
                  justifyContent="space-evenly"
                  alignItems="center"
                  rowSpacing={1}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                  <Grid item xs={3} sm={6} md={4} lg={10}>
                    <Card
                      sx={{ maxWidth: 345 }}
                      key={index}
                      style={{ margin: 15 }}
                    >
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height="140"
                          image="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
                          alt="green iguana"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            {user.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {user.address.street} {user.address.suite}{" "}
                            {user.address.city} <br />
                            {user.phone}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                        <Button size="small" color="primary">
                          Share
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                </Grid>
              </Box>
            );
          })
        )}
      </Container>
    </>
  );
};
