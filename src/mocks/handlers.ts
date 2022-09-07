import { rest } from "msw";
import { API_ROOT } from "../utils/constants";

export const handlers = [
  rest.get(`${API_ROOT}/users/:useName`, (req, res, ctx) => {
    const { useName } = req.params;
    console.log("wesalaaaat ");
    //setTimeout(() => {
    return res(
      ctx.status(200),
      ctx.json({
        username: useName,
        age: 26,
      })
    );
    //}, 5000);
  }),
];
