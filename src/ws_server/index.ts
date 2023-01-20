import WebSocket, { createWebSocketStream, WebSocketServer } from "ws";
import internal from "stream";
import { wsHandler } from "./handler.js";

const WSS_PORT = 8080;

export const wsServer = (): void => {
  const websocketServer = new WebSocketServer({ port: WSS_PORT });

  websocketServer
    .on("connection", (ws: WebSocket.WebSocket) => {
      console.log("New connection started!");

      const duplex: internal.Duplex = createWebSocketStream(ws, {
        encoding: "utf8",
        decodeStrings: false,
      });

      duplex.on("data", async (chunk) => {
        const res: string = await wsHandler(chunk);
        duplex.write(res);
        //ws.send(res);
      });
    })
    .on("error", console.log)
    .on("close", () => console.log("Client disconnected"));
};
