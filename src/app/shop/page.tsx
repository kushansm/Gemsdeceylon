"use client";

import React, { useState, useMemo, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import { FilterSidebar } from "@/components/shop/FilterSidebar";
import { ShopList } from "@/components/shop/ShopList";
import { CollectionGrid } from "@/components/shop/CollectionGrid";
import { MOCK_GEMS } from "@/lib/data";
import { Category } from "@/types/gem";
import { useSearchParams } from "next/navigation";
import { CATEGORIES } from "@/lib/data";
import { Suspense } from "react";

type ViewMode = "collections" | "products";

function ShopContent() {
    const searchParams = useSearchParams();
    const [viewMode, setViewMode] = useState<ViewMode>("collections");
    const [selectedCategory, setSelectedCategory] = useState<Category | "All" | null>(null);
    const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);
    const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);
    const [showFeatured, setShowFeatured] = useState(false);
    const [showNew, setShowNew] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);

        const categoryParam = searchParams.get("category");
        if (categoryParam) {
            if (categoryParam === "All") {
                setSelectedCategory("All");
                setSelectedCategories([]);
                setViewMode("products");
            } else if (CATEGORIES.includes(categoryParam as any)) {
                setSelectedCategory(categoryParam as Category);
                setSelectedCategories([categoryParam as Category]);
                setViewMode("products");
            }
        }
    }, [searchParams]);

    const handleSelectCategory = (category: Category | "All") => {
        setSelectedCategory(category);
        if (category === "All") {
            setSelectedCategories([]);
        } else {
            setSelectedCategories([category]);
        }
        setViewMode("products");
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleBackToCollections = () => {
        setViewMode("collections");
        setSelectedCategory(null);
        setSelectedCategories([]);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const filteredGems = useMemo(() => {
        return MOCK_GEMS.filter((gem) => {
            const matchesSearch = gem.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                gem.description.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(gem.category);
            const matchesPrice = gem.price >= priceRange[0] && gem.price <= priceRange[1];
            const matchesFeatured = !showFeatured || gem.isFeatured;
            const matchesNew = !showNew || gem.isNew;

            return matchesSearch && matchesCategory && matchesPrice && matchesFeatured && matchesNew;
        });
    }, [selectedCategories, priceRange, showFeatured, showNew, searchQuery]);

    return (
        <main className="min-h-screen w-full bg-[#0A0A0A] text-white flex flex-col">
            <Navbar />

            {/* Outer Container - Vertical Scrolling Allowed */}
            <div className="w-full flex flex-col pt-32 pb-4 px-8 lg:px-16">

                {/* Centered Luxury Header */}
                <div className={`mb-16 transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                    <div className="flex flex-col items-center justify-center text-center gap-6 relative">
                        <div className="flex flex-col items-center">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="h-[1px] w-12 bg-yellow-500/20" />
                                <span className="text-yellow-500 font-bold uppercase tracking-[0.8em] text-[10px]">Ceylon Boutique</span>
                                <div className="h-[1px] w-12 bg-yellow-500/20" />
                            </div>
                            <h1 className="mozilla-headline-main text-4xl lg:text-9xl font-black tracking-tighter leading-none mb-6 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent text-center">
                                {viewMode === "collections" ? "The Master Collection" : (selectedCategory === "All" ? "The Full Library" : selectedCategory)}
                            </h1>
                            <p className="text-[10px] lg:text-[11px] text-white/30 font-medium max-w-2xl uppercase tracking-[0.4em] leading-relaxed">
                                {viewMode === "collections"
                                    ? "Experience nature's rarest gems in a curated exhibition."
                                    : `A refined selection of the world's finest ${selectedCategory === "All" ? "gemstones" : selectedCategory}.`}
                            </p>
                        </div>

                        {viewMode === "products" && (
                            <button
                                onClick={handleBackToCollections}
                                className="lg:absolute lg:left-0 lg:bottom-1 group flex items-center gap-4 text-[10px] font-black text-white/20 hover:text-yellow-500 transition-all uppercase tracking-[0.5em] pb-1 border-b border-white/5 hover:border-yellow-500/50"
                            >
                                <span className="text-xl group-hover:-translate-x-2 transition-transform">←</span>
                                Back to collections
                            </button>
                        )}
                    </div>
                </div>

                {/* Content Section */}
                <div className="w-full relative">
                    {viewMode === "collections" ? (
                        <div className="animate-in fade-in zoom-in-100 duration-1000">
                            <CollectionGrid onSelectCategory={handleSelectCategory} />
                        </div>
                    ) : (
                        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 animate-in fade-in slide-in-from-right-4 duration-500">
                            {/* Sidebar - Sticky if possible or just normal scroll with page */}
                            <div className="flex-shrink-0 w-full lg:w-72">
                                <div className="lg:sticky lg:top-32 h-fit">
                                    <FilterSidebar
                                        selectedCategories={selectedCategories}
                                        setSelectedCategories={setSelectedCategories}
                                        priceRange={priceRange}
                                        setPriceRange={setPriceRange}
                                        showFeatured={showFeatured}
                                        setShowFeatured={setShowFeatured}
                                        showNew={showNew}
                                        setShowNew={setShowNew}
                                        searchQuery={searchQuery}
                                        setSearchQuery={setSearchQuery}
                                    />
                                </div>
                            </div>

                            {/* Product Grid */}
                            <div className="flex-1 flex flex-col">
                                <div className="flex items-center justify-between mb-10 pb-4 border-b border-white/5">
                                    <span className="text-[11px] font-black text-white uppercase tracking-[0.4em]">
                                        {filteredGems.length} Pieces currated in series
                                    </span>
                                </div>

                                <div className="pb-20">
                                    <ShopList gems={filteredGems} />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Footer Branding - Bold White */}
            <div className="px-8 lg:px-16 py-20 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-12 text-[10px] lg:text-[11px] font-black text-white uppercase tracking-[0.4em] lg:tracking-[0.8em]">
                <span>Exclusive Source</span>
                <span>Premium Grade</span>
                <span>Gems De Ceylon</span>
                <span>© 2019</span>
            </div>
        </main>
    );
}

export default function Page() {
    return (
        <Suspense fallback={<div>Loading shop...</div>}>
            <ShopContent />
        </Suspense>
    );
}
