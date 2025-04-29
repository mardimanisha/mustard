'use client'
import Searchbar from "./SearchBar";
import { useImageStore } from "@/store/useImageStore";

export default function Header() {
    const { setSearchKeyword, clearImages } = useImageStore();

    const handleSearchSubmit = (keyword: string) => {
        clearImages();
        setSearchKeyword(keyword);
    }
    
    return (
        <header className="fixed top-0 left-0 z-50 w-full border-b border-muted bg-background px-6 sm:px-12 md:px-16 py-1">
            <div className="mx-auto flex items-center justify-between max-w-7xl">
                <div className="text-2xl flex items-center font-bold tracking-widest text-black">MUSTARD<strong className="text-amber-400 pb-2.5 font-black text-4xl ">.</strong></div>

                {/* Searchbar */}
                <Searchbar onSearchSubmit={handleSearchSubmit}/>
            </div>
        </header>
    )
}