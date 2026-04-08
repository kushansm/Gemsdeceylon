import React from "react";
import { Gem } from "@/types/gem";
import { GemCard } from "./GemCard";

interface ShopListProps {
    gems: Gem[];
}

export const ShopList = ({ gems }: ShopListProps) => {
    if (gems.length === 0) {
        return (
            <div className="flex-1 flex flex-col items-center justify-center py-20 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No gemstones found</h3>
                <p className="text-gray-500">Try adjusting your filters to find what you're looking for.</p>
            </div>
        );
    }

    return (
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {gems.map((gem) => (
                <GemCard key={gem.id} gem={gem} />
            ))}
        </div>
    );
};
