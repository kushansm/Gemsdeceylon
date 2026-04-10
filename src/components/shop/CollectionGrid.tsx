"use client";

import React from "react";
import Image from "next/image";
import { CATEGORIES } from "@/lib/data";
import { Category } from "@/types/gem";

interface CollectionGridProps {
    onSelectCategory: (category: Category | "All") => void;
}

export const CollectionGrid = ({ onSelectCategory }: CollectionGridProps) => {
    const collectionImages: Record<string, string> = {
        "Blue Sapphires": "/assets/shop/bluesapphire_gridcover.png",
        "Yellow Sapphires": "/assets/shop/yellowsappire_gridcover.png",
        "Pink Sapphires": "/assets/shop/pinksapphire_gridcover.png",
        "White Sapphires": "/assets/shop/whitesapphire_gridcover.png",
        "Spinel": "/assets/shop/spinel_gridcover.png",
        "Garnet": "/assets/shop/garnet_gridcover.png",
        "Star Sapphires": "/assets/shop/starsapphire_gridcover.png",
        "Other Gemstones": "/assets/shop/other_gridcover.png",
        "All Collection": "/assets/shop/allcollection_grid cover.png",
    };

    const allItems = [...CATEGORIES, "All Collection" as const];

    return (
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 pb-32">
            {allItems.map((item) => {
                const isAll = item === "All Collection";
                const category = isAll ? "All" : item as Category;

                return (
                    <button
                        key={item}
                        onClick={() => onSelectCategory(category)}
                        className={`group relative overflow-hidden aspect-[1.1/1] rounded-[3rem] transition-all duration-700 hover:shadow-[0_0_80px_rgba(234,179,8,0.12)] flex flex-col items-center justify-center p-6 ${isAll
                            ? "bg-gradient-to-br from-[#111111] to-black border border-yellow-500/30 shadow-2xl scale-[1.02]"
                            : "bg-[#0D0D0D] border border-white/5 hover:border-white/10"
                            }`}
                    >
                        {/* Background Image Container - Compact & Prominent */}
                        <div className="relative w-full aspect-[2/1] flex items-center justify-center mb-4">
                            <Image
                                src={collectionImages[item] || collectionImages["Other Gemstones"]}
                                alt={item}
                                fill
                                className={`object-contain transition-all duration-1000 group-hover:scale-110 ${isAll ? "opacity-90 p-2" : "p-0"}`}
                                priority
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />

                            {/* Subtle ambient glow */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04),transparent_60%)] pointer-events-none" />
                        </div>

                        {/* Content Labels */}
                        <div className="z-10 text-center flex flex-col items-center">
                            <span className={`text-[9px] font-black uppercase tracking-[0.5em] mb-2 transition-colors ${isAll ? "text-yellow-500" : "text-white/20 group-hover:text-yellow-500/50"}`}>
                                {isAll ? "Masterpiece Library" : "Pure Sourced Collection"}
                            </span>
                            <h3 className={`text-xl lg:text-3xl font-black tracking-tighter transition-colors ${isAll ? "text-white" : "text-white/80 group-hover:text-white"}`}>
                                {item}
                            </h3>

                            <div className="mt-4 flex flex-col items-center">
                                <div className={`h-[1px] bg-yellow-500/40 transition-all duration-700 ${isAll ? "w-20" : "w-0 group-hover:w-20"}`} />
                                <p className={`mt-3 text-[9px] font-bold uppercase tracking-[0.2em] transition-all duration-500 ${isAll ? "opacity-100" : "opacity-0 group-hover:opacity-100 text-white/30"}`}>
                                    Explore <span>→</span>
                                </p>
                            </div>
                        </div>

                        {/* Premium Reflection */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
                    </button>
                );
            })}
        </div>
    );
};
