import express, { Express, Request, Response } from "express";
// import { create } from "./src/create_sql";
const port = 1155;

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
  res.send("HELLO FROM EXPRESS + TS!!!!");
});

app.get("/hi", (req: Request, res: Response) => {
  res.send("BYEEE!!");
  // create()
});

app.listen(port, () => {
  console.log(`now listening on port ${port}`);
});
