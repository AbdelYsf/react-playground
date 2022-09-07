import { useState } from "react";
import { useParams } from "react-router";

const UserPage = () => {
  const [isLoading, setLoading] = useState(true);
  const { id } = useParams();
  setTimeout(() => {
    setLoading(false);
  }, 5000);
  return <>{isLoading ? <p>waiting...</p> : <p>{id}</p>}</>;
};

export default UserPage;
