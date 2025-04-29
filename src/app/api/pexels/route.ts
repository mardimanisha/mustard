// src/app/api/pexels/route.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import type { ImagesResults } from "@/models/Images";
import { ImageSchemaWithPhoto } from "@/models/Images";
import { env } from "@/lib/env";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query") || "mustard color"; // Default if no query
  const page = searchParams.get("page") || "1";
  const perPage = searchParams.get("per_page") || "20";

  const url = `https://api.pexels.com/v1/search?query=${query}&per_page=${perPage}&page=${page}`;

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

    if (parsedData.total_results === 0) {
      return NextResponse.json(undefined);
    }

    return NextResponse.json(parsedData);
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
}
