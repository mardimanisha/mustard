"use client";
import { useEffect } from "react";
import { useImageStore } from "@/store/useImageStore";

export default function useInfiniteScroll() {
  const incrementPage = useImageStore((state) => state.incrementPage);

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.innerHeight + window.scrollY;
      const threshold = document.body.offsetHeight - 500; // 500px before end

      if (scrollTop >= threshold) {
        incrementPage();
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [incrementPage]);
}
