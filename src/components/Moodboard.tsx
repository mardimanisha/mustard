'use client'

import Masonry from "react-masonry-css";
import ImageCard from "./ImageCard";
import { useImageStore } from "@/store/useImageStore";
import { useEffect, useRef, useCallback } from "react";
import Loader from "./Loader";
import ScrollLoader from "./ScrollLoader";
import BackToTop from "./BackToTop";

const breakpointColumnsObj = {
  default: 5,
  1100: 3,
  700: 2
};

export default function Moodboard() {
  const { images, page, isLoading, isFetchingNextPage, incrementPage } = useImageStore();
  const observer = useRef<IntersectionObserver | null>(null);
  

  const lastImageElementRef = useCallback((node: HTMLDivElement | null) => {
    if (isFetchingNextPage) return;
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        incrementPage();
      }
    });

    if (node) observer.current.observe(node);
  }, [isFetchingNextPage, incrementPage]);

  useEffect(() => {
    if (page === 1) return;
    const fetchNextImages = async () => {
      try {
        const res = await fetch(`/api/pexels?page=${page}`);
        if (!res.ok) {
          throw new Error("Failed to fetch images");
        }
        const data = await res.json();
        if (data?.photos) {
          useImageStore.getState().addImages(data.photos);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchNextImages();
  }, [page]);

  if (isLoading) return <Loader />;

  return (
    <div className="px-4 py-6">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="masonry-grid"
        columnClassName="masonry-grid_column"
      >
        {images.map((photo, index) => {
          if (index === images.length - 1) {
            return (
              <div key={photo.id} ref={lastImageElementRef}>
                <ImageCard photo={photo} />
              </div>
            );
          } else {
            return <ImageCard key={photo.id} photo={photo} />;
          }
        })}
      </Masonry>
          {isFetchingNextPage && <ScrollLoader />}
          <BackToTop />
    </div>
  );
}
