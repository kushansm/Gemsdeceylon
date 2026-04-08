"use client";

import React from "react";
import { CATEGORIES } from "@/lib/data";
import { Category } from "@/types/gem";

interface FilterSidebarProps {
    selectedCategories: Category[];
    setSelectedCategories: (categories: Category[]) => void;
    priceRange: [number, number];
    setPriceRange: (range: [number, number]) => void;
    showFeatured: boolean;
    setShowFeatured: (show: boolean) => void;
    showNew: boolean;
    setShowNew: (show: boolean) => void;
    searchQuery: string;
    setSearchQuery: (query: string) => void;
}

export const FilterSidebar = ({
    selectedCategories,
    setSelectedCategories,
    priceRange,
    setPriceRange,
    showFeatured,
    setShowFeatured,
    showNew,
    setShowNew,
    searchQuery,
    setSearchQuery,
}: FilterSidebarProps) => {
    const toggleCategory = (category: Category) => {
        if (selectedCategories.includes(category)) {
            setSelectedCategories(selectedCategories.filter((c) => c !== category));
        } else {
            setSelectedCategories([...selectedCategories, category]);
        }
    };

    return (
        <aside className="w-full flex flex-col gap-12 text-white">
            {/* Search */}
            <div>
                <h3 className="text-[10px] font-black text-white/20 mb-6 uppercase tracking-[0.4em]">Search Gallery</h3>
                <div className="relative group">
                    <input
                        type="text"
                        placeholder="Type gem name..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full px-0 py-3 bg-transparent border-b border-white/5 focus:border-yellow-500 focus:outline-none transition-all duration-300 font-light text-lg placeholder:text-white/10"
                    />
                </div>
            </div>

            {/* Collections */}
            <div>
                <h3 className="text-[10px] font-black text-white/20 mb-6 uppercase tracking-[0.4em]">Stone Types</h3>
                <div className="flex flex-col gap-3">
                    {CATEGORIES.map((category) => (
                        <button
                            key={category}
                            onClick={() => toggleCategory(category)}
                            className={`flex items-center justify-between group py-1 text-sm font-bold transition-all ${selectedCategories.includes(category) ? "text-yellow-500" : "text-white/40 hover:text-white"
                                }`}
                        >
                            <span className="tracking-tight">{category}</span>
                            <div className={`w-1.5 h-1.5 rounded-full transition-all ${selectedCategories.includes(category) ? "bg-yellow-500 scale-100" : "bg-white/5 scale-0 group-hover:scale-100"
                                }`} />
                        </button>
                    ))}
                </div>
            </div>

            {/* Price */}
            <div>
                <div className="flex justify-between items-end mb-6">
                    <h3 className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">Max Price</h3>
                    <span className="text-xl font-black text-yellow-500 tracking-tighter">${priceRange[1].toLocaleString()}</span>
                </div>
                <input
                    type="range"
                    min="0"
                    max="10000"
                    step="100"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full h-[1px] bg-white/10 appearance-none cursor-pointer accent-yellow-500"
                />
            </div>

            {/* Curated Toggles */}
            <div className="flex flex-col gap-4 mt-8">
                <button
                    onClick={() => setShowFeatured(!showFeatured)}
                    className={`flex items-center gap-4 py-3 px-6 rounded-2xl border transition-all duration-500 text-xs font-black uppercase tracking-widest ${showFeatured ? "bg-white text-black border-white" : "bg-transparent text-white/30 border-white/5 hover:border-white/20"
                        }`}
                >
                    Priority Gems
                </button>

                <button
                    onClick={() => setShowNew(!showNew)}
                    className={`flex items-center gap-4 py-3 px-6 rounded-2xl border transition-all duration-500 text-xs font-black uppercase tracking-widest ${showNew ? "bg-white text-black border-white" : "bg-transparent text-white/30 border-white/5 hover:border-white/20"
                        }`}
                >
                    New Acquisitions
                </button>
            </div>

            <button
                onClick={() => {
                    setSelectedCategories([]);
                    setPriceRange([0, 10000]);
                    setShowFeatured(false);
                    setShowNew(false);
                    setSearchQuery("");
                }}
                className="mt-6 text-[8px] font-black text-white/10 hover:text-red-500 transition-colors uppercase tracking-[0.5em] text-center"
            >
                — Reset Exhibition —
            </button>
        </aside>
    );
};
