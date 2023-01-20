import { down, left, mouse, right, up } from "@nut-tree/nut-js";

export const drawCircle = async (
  note: string,
  radius: number
): Promise<string> => {
  mouse.config.mouseSpeed = 200;
  const position = await mouse.getPosition();

  await mouse.setPosition({ x: position.x + radius, y: position.y });
  await mouse.pressButton(0);

  for (let i = 0; i <= Math.PI * 2; i += 0.02) {
    const x = position.x + radius * Math.cos(i);
    const y = position.y + radius * Math.sin(i);

    await mouse.move([{ x, y }]);
  }
  await mouse.releaseButton(0);

  console.log(`${note} ${radius}`);
  return `${note}_${radius}`;
};

export const drawRectangle = async (
  note: string,
  width: number,
  height: number
): Promise<string> => {
  mouse.config.mouseSpeed = 200;
  await mouse.pressButton(0);
  await mouse.move(right(width));
  await mouse.move(down(height));
  await mouse.move(left(width));
  await mouse.move(up(height));
  await mouse.releaseButton(0);

  if (note === "draw_square") {
    console.log(`${note} ${width}`);
    return `${note}_${width}`;
  } else {
    console.log(`${note} ${width} ${height}`);
    return `${note}_${width}_${height}`;
  }
};
