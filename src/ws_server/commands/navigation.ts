import { mouse } from "@nut-tree/nut-js";

export const mouseMove = async (
  note: string,
  x: number,
  y: number
): Promise<string> => {
  const position = await mouse.getPosition();
  await mouse.setPosition({ x: position.x + x, y: position.y + y });
  if (x) {
    console.log(`${note} ${position.x} px`);
    return `${note}_${Math.abs(x)}`;
  }
  if (y) {
    console.log(`${note} ${position.y} px`);
    return `${note}_${Math.abs(y)}`;
  }
  console.log(`${note} ${position.x} px, ${position.y} px`);
  return `${note} ${position.x},${position.y}`;
};
