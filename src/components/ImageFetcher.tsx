'use client'

import { useImageStore } from "@/store/useImageStore";
import { useEffect } from "react";

export default function ImageFetcher() {
  const { setImages, addImages, setLoading, setFetchingNextPage } = useImageStore();

  async function fetchImages(pageToFetch: number) {
    try {
      if (pageToFetch === 1) {
        setLoading(true);
      } else {
        setFetchingNextPage(true);
      }

      const res = await fetch(`/api/pexels?page=${pageToFetch}`);
      if (!res.ok) {
        throw new Error("Failed to fetch images");
      }
      const data = await res.json();

      if (data?.photos) {
        if (pageToFetch === 1) {
          setImages(data.photos);
        } else {
          addImages(data.photos);
        }
      }
    } catch (error) {
      console.error(error);
    } finally {
      if (pageToFetch === 1) {
        setLoading(false);
      } else {
        setFetchingNextPage(false);
      }
    }
  }

  useEffect(() => {
    fetchImages(1);
  }, []);

  return null;
}
