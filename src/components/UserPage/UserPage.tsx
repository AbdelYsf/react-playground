import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { API_ROOT } from "../../utils/constants";
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Loader from "../Loader/Loader";

const UserPage = () => {
  const [isLoading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);
  const { id } = useParams();

  const fetching = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        console.log("seter 9");
        setUser(res.data);
        console.log(res.data);
        setLoading(false);
      });
  };

  useEffect(() => {
    setTimeout(() => {
      fetching();
    }, 1000);
  }, []);
  return (
    <>
      {isLoading ? (
        <Loader />
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
