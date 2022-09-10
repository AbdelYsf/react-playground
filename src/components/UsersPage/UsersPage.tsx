import { useFetch } from "../../hooks/useFetch";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import BasicAlert from "../Alert/Alert";

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
      <Container>
        {isLoading ? (
          <Stack spacing={1}>
            <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
            <Skeleton variant="circular" width={40} height={40} />
            <Skeleton variant="rectangular" width={1110} height={60} />
            <Skeleton variant="rounded" width={210} height={60} />
          </Stack>
        ) : error ? (
          <BasicAlert
            severity="error"
            title="something went wrong!"
            description={error.message}
          />
        ) : (
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            {data.map((user: UserDetails, index: number) => {
              return (
                <Grid item xs={8} sm={4} md={3} lg={2}>
                  <Card
                    key={index}
                    style={{ margin: 15, width: 170, height: 400 }}
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
              );
            })}
          </Grid>
        )}
      </Container>
    </>
  );
};
