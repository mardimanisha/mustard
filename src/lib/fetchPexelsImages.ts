import type { ImagesResults } from "@/models/Images";
import { ImageSchemaWithPhoto } from "@/models/Images";
import { env } from "./env";

export default async function fetchPexelsImages(
  url: string
): Promise<ImagesResults | undefined> {
  try {
    const response = await fetch(url, {
      headers: {
        Authorization: env.NEXT_PUBLIC_PEXELS_ACCESS_KEY,
      },
    });

    if (!response.ok) throw new Error("Fetch Images error!");

    const imagesResults: ImagesResults = await response.json();
    console.log(imagesResults);

    const parsedData = ImageSchemaWithPhoto.parse(imagesResults);

    if (parsedData.total_results === 0) return undefined;

    return parsedData;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.stack);
    }
  }
}
