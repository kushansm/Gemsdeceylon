"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { CollectionGrid } from "../shop/CollectionGrid";
import { Category } from "@/types/gem";

export const GemShopSection = () => {
    const router = useRouter();

    const handleSelectCategory = (category: Category | "All") => {
        router.push(`/shop?category=${encodeURIComponent(category)}`);
    };

    return (
        <section id="shop" className="w-full py-32 px-8 lg:px-16 bg-[#0A0A0A] flex flex-col items-center overflow-hidden">
            {/* Header */}
            <div className="text-center mb-20 max-w-4xl">
                <div className="flex items-center justify-center gap-4 mb-6">
                    <div className="h-[1px] w-8 bg-yellow-500/30" />
                    <span className="text-yellow-500 font-bold uppercase tracking-[0.7em] text-[10px]">Pure Sourced</span>
                    <div className="h-[1px] w-8 bg-yellow-500/30" />
                </div>
                <h2 className="mozilla-headline-main text-5xl md:text-7xl font-black text-white tracking-tighter leading-none mb-8">
                    Discover Our <span className="text-white/40">Master Collection</span>
                </h2>
                <p className="text-white/40 text-sm md:text-base font-light max-w-xl mx-auto uppercase tracking-widest leading-relaxed">
                    Explore nature&apos;s rarest gems, directly mined and masterfully cut to reveal their eternal brilliance.
                </p>
            </div>

            {/* Grid */}
            <div className="w-full max-w-[1400px]">
                <CollectionGrid onSelectCategory={handleSelectCategory} />
            </div>
        </section>
    );
};
