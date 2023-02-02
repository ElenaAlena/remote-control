import { CommandsEnum, startCommand } from "./command.js";

export const wsHandler = async (data: string): Promise<string> => {
  let [command, ...params] = data.split(" ");
  const action = startCommand[command as CommandsEnum];
  if (action) {
    const res = await action(command, ...params);
    return res;
  } else {
    return "There is no such command.";
  }
};
