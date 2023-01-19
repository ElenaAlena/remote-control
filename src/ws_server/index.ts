import WebSocket, { createWebSocketStream, WebSocketServer } from "ws";
import internal from "stream";

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
        const [message] = chunk.split(" ");
        console.log(message);
      });
    })
    .on("error", console.log)
    .on("close", () => console.log("Client disconnected"));
};
