import { Image, mouse, Region, screen } from "@nut-tree/nut-js";
import Jimp from "jimp";

const size = 200;

const getBase64Image = async (x: number, y: number): Promise<string> => {
  const region = new Region(x, y, size, size);
  const bitmap = await screen.grabRegion(region);
  const image = getJimpImage(bitmap);
  const base64ImageData = await image.getBase64Async(Jimp.MIME_PNG);
  
  return base64ImageData.replace(/^data:image\/\w+;base64,/, "");
};

export const printScreen = async (note: string): Promise<string> => {
  const { x, y } = await mouse.getPosition();

  try {
    const image64 = await getBase64Image(x, y);
    console.log(`${note} ${image64}`);

    return `${note} ${image64}`;

  } catch (err) {

    console.log((err as any)?.message);
    console.log("Start position was changed to {0,0}");
    const image64 = await getBase64Image(0, 0);
    console.log(`${note} ${image64}`);

    return `${note} ${image64}`;

  }
};

const getJimpImage = (img: Image): Jimp => {
  const image: Jimp = new Jimp(img.width, img.height);
  let pos: number = 0;
  image.scan(
    0,
    0,
    image.bitmap.width,
    image.bitmap.height,
    (x: number, y: number, idx: number) => {
      image.bitmap.data[idx + 2] = img.data.readUInt8(pos++);
      image.bitmap.data[idx + 1] = img.data.readUInt8(pos++);
      image.bitmap.data[idx + 0] = img.data.readUInt8(pos++);
      image.bitmap.data[idx + 3] = img.data.readUInt8(pos++);
    }
  );
  return image;
};
