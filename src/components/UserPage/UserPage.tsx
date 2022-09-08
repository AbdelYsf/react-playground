import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { API_ROOT } from "../../utils/constants";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Loader from "../Loader/Loader";
import { fetchUser } from "../../networking/usersClient";
import { isError } from "util";
import BasicAlert from "../Alert/Alert";

const UserPage = () => {
  const [isLoading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  const { id } = useParams();

  useEffect(() => {
    setTimeout(() => {
      fetchUser(+id!)
        .then((res) => {
          setUser(res.data);
        })
        .catch((err) => {
          setError(err);
          console.log(err);
        })
        .finally(() => {
          setLoading(false);
        });
    }, 1000);
  }, []);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <BasicAlert
          severity="error"
          title="something went wrong"
          description={error.message}
        ></BasicAlert>
      ) : (
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="70"
              image="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {user.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {user.address.street} {user.address.suite} {user.address.city}{" "}
                <br />
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
      )}
    </>
  );
};

export default UserPage;
