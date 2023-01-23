import * as dotenv from "dotenv";
import { resolve } from "path";
import { httpServer } from "./src/http_server/index.js";
import { wsServer } from "./src/ws_server/index.js";

dotenv.config({ path: resolve(process.cwd(), ".env") });

const HTTP_PORT: number = Number(process?.env?.HTTP_PORT) || 8181;
const WSS_PORT: number = Number(process.env.WSS_PORT) || 8080;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

wsServer(WSS_PORT);

process.on("exit", (code) => {
  if (code === 0) {
    process.kill(process.pid);
  }
});
process.on("SIGINT", () => {
  process.exit();
});

