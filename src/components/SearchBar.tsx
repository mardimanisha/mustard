'use client'
import { useEffect, useRef, useState } from "react"
import { Input } from "./ui/input"
import { Search, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface SearchbarProps {
    onSearchSubmit: (keyword: string) => void;
}

const suggestionsList = [
    "fashion", "travel", "interiors", "autumn", "sunset", "flowers", "architecture", "nature", "city", "abstract"
];

export default function Searchbar({onSearchSubmit}: SearchbarProps) {
    const [searchOpen, setSearchOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
    const inputRef = useRef<HTMLInputElement>(null);

    //Autofocus when opened
    useEffect(() => {
        if (searchOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [searchOpen]);

    useEffect(() => {
        if (searchText.length > 0) {
            const filtered = suggestionsList.filter(suggestion =>
                suggestion.toLowerCase().includes(searchText.toLowerCase())
            );

            setFilteredSuggestions(filtered);
        } else {
            setFilteredSuggestions([]);
        }
    }, [searchText]);

    const handleSubmit = () => {
        if (searchText.trim() !== '') {
            onSearchSubmit(searchText.trim());
            setFilteredSuggestions([]);
        }
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleSubmit();
        }
    }

    const handleSuggestionClick = (suggestion: string) => {
        onSearchSubmit(suggestion);
        setSearchText('');
        setFilteredSuggestions([]);
    }


    return (
        <div className="flex items-center gap-2 sm:justify-center sm:flex-1">
            {/* Mobile Search */}
            <div
                className="relative sm:hidden flex items-center"
            >
                <AnimatePresence mode="wait">
                    {searchOpen ? (
                        <motion.div
                            key="search-input"
                            initial={{width: 0, opacity: 0}}
                            animate={{ width: "10rem", opacity: 1 }}
                            exit={{ width: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                        >
                            <Input
                                ref={inputRef}
                                type="text"
                                placeholder="Search..."
                                value={searchText}
                                onChange={(e) => setSearchText(e.target.value)}
                                onKeyDown={handleKeyDown}
                                className="text-sm rounded-sm focus:!outline-none focus:!ring-0 focus:!border-transparent border-muted bg-muted/50 backdrop-blur-sm placeholder:text-muted-foreground"
                            />
                        </motion.div>
                    ) : null}
                </AnimatePresence>

                {searchOpen ? (
                    <X
                        size={20}
                        className="ml-2 cursor-pointer text-muted-foreground"
                        onClick={() => setSearchOpen(false)}
                    />
                
                ) : (
                    <Search
                        size={20}
                        className="cursor-pointer text-muted-foreground"
                        onClick={() => setSearchOpen(true)}
                    />
                )}
            </div>

            {/* Desktop Search Bar */}
            <motion.div
                className="hidden sm:block mx-auto"
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                animate={{ width: isHovered ? 500 : 400 }}
                transition={{ type: "spring", stiffness: 250, damping: 40 }}
                style={{maxWidth: "100%"}}
            >
                <Input
                    type="text"
                    placeholder="Search mustard moods..."
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="text-sm rounded-sm border-muted focus:!outline-none focus:!ring-0 focus:!border-transparent bg-muted/50 backdrop-blur-md placeholder:text-muted-foreground"
                />

                {/* Suggestions Dropdown */}
                {filteredSuggestions.length > 0 && (
                    <div className="absolute mt-1 w-full bg-background rounded-md shadow-md z-10">
                        {filteredSuggestions.map((suggestion, index) => (
                            <div
                                key={index}
                                className="p-2 cursor-pointer hover:bg-muted text-sm"
                                onClick={() => handleSuggestionClick(suggestion)}
                            >
                                {suggestion}
                            </div>
                        ))}
                    </div>
                )}
            </motion.div>
        </div>
    )
}