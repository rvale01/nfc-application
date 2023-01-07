import { json, urlencoded } from "body-parser";
import express from "express";
// @ts-ignore
import morgan from "morgan";
import cors from "cors";
// @ts-ignore
import { log } from "logger";

export const createServer = () => {
  const app = express();
  app
    .disable("x-powered-by")
    .use(morgan("dev"))
    .use(urlencoded({ extended: true }))
    .use(json())
    .use(cors())
    .get("/message/:name", (req, res) => {
      return res.json({ message: `hello ${req.params.name}` });
    })
    .get("/healthz", (req, res) => {
      return res.json({ ok: true });
    });

  return app;
};

// eslint-disable-next-line turbo/no-undeclared-env-vars
const port = process.env.PORT || 5001;
const server = createServer();

server.listen(port, () => {
  console.log("working fine")
});