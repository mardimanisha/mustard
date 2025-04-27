'use client'
import { useEffect, useRef, useState } from "react"
import { Input } from "./ui/input"
import { Search, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Searchbar() {
    const [searchOpen, setSearchOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    //Autofocus when opened
    useEffect(() => {
        if (searchOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [searchOpen])


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
                    className="text-sm rounded-sm border-muted focus:!outline-none focus:!ring-0 focus:!border-transparent bg-muted/50 backdrop-blur-md placeholder:text-muted-foreground"
                />
            </motion.div>
        </div>
    )
}