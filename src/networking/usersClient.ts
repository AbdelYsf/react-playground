import axios from "axios";

export const fetchUser = (id: number) =>
  axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
