import { drawCircle, drawRectangle } from "./commands/drawing.js";
import { mouseMove } from "./commands/navigation.js";
import { printScreen } from "./commands/print_screen.js";

export enum CommandsEnum {
  MouseLeft = "mouse_left",
  MouseRight = "mouse_right",
  MouseUp = "mouse_up",
  MouseDown = "mouse_down",
  MousePosition = "mouse_position",
  DrawCircle = "draw_circle",
  DrawRectangle = "draw_rectangle",
  DrawSquare = "draw_square",
  PrntScrn = "prnt_scrn",
}
type Command = {
  [key in CommandsEnum]: Function;
};

export const startCommand: Command = {
  [CommandsEnum.MouseLeft]: async (
    note: string,
    offset: string
  ): Promise<string> => mouseMove(note, -offset, 0),
  [CommandsEnum.MouseRight]: async (
    note: string,
    offset: string
  ): Promise<string> => mouseMove(note, +offset, 0),
  [CommandsEnum.MouseUp]: async (
    note: string,
    offset: string
  ): Promise<string> => mouseMove(note, 0, -offset),
  [CommandsEnum.MouseDown]: async (
    note: string,
    offset: string
  ): Promise<string> => mouseMove(note, 0, +offset),
  [CommandsEnum.MousePosition]: async (note: string): Promise<string> =>
    mouseMove(note, 0, 0),
  [CommandsEnum.DrawCircle]: (note: string, radius: string) =>
    drawCircle(note, +radius),
  [CommandsEnum.DrawRectangle]: (note: string, width: string, height: string) =>
    drawRectangle(note, +width, +height),
  [CommandsEnum.DrawSquare]: (note: string, size: string) =>
    drawRectangle(note, +size, +size),
  [CommandsEnum.PrntScrn]: (note: string) => printScreen(note),
};
