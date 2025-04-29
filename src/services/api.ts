import { ImagesResults, Photo } from "@/models/Images";

export async function fetchMustardImages(
  page: number = 1,
  perPage: number = 15
): Promise<Photo[]> {
  try {
    const response = await fetch(
      `/api/pexels?page=${page}&per_page=${perPage}`
    );

    if (!response.ok) throw new Error("Failed to fetch mustard images");

    const data: ImagesResults = await response.json();
    return data.photos;
  } catch (error) {
    console.error("Error fetching mustard images:", error);
    return [];
  }
}
