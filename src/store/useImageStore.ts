import { Photo } from "@/models/Images";
import { create } from "zustand";

interface ImageState {
  images: Photo[];
  page: number;
  isLoading: boolean;
  isFetchingNextPage: boolean;
  setImages: (images: Photo[]) => void;
  addImages: (images: Photo[]) => void;
  setLoading: (loading: boolean) => void;
  setFetchingNextPage: (loading: boolean) => void;
  incrementPage: () => void;
  clearImages: () => void;
}

export const useImageStore = create<ImageState>((set) => ({
  images: [],
  page: 1,
  isLoading: true,
  isFetchingNextPage: false,
  setImages: (images) => set({ images }),
  addImages: (newImages) =>
    set((state) => ({ images: [...state.images, ...newImages] })),
  setLoading: (loading) => set({ isLoading: loading }),
  setFetchingNextPage: (loading) => set({ isFetchingNextPage: loading }),
  incrementPage: () => set((state) => ({ page: state.page + 1 })),
  clearImages: () => set({ images: [], page: 1 }),
}));
