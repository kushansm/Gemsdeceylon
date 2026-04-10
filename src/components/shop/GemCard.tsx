import React from "react";
import Image from "next/image";
import { Gem } from "@/types/gem";

interface GemCardProps {
    gem: Gem;
}

export const GemCard = ({ gem }: GemCardProps) => {
    return (
        <div className="group relative bg-[#0D0D0D] rounded-[3rem] overflow-hidden border border-white/5 transition-all duration-700 hover:border-yellow-500/30 flex flex-col p-4">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.03),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

            <div className="relative aspect-square w-full overflow-hidden rounded-[2.5rem] bg-[#111111]">
                <Image
                    src={gem.image}
                    alt={gem.name}
                    fill
                    className="object-contain p-8 group-hover:scale-110 transition-transform duration-1000"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                <div className="absolute top-6 left-6 flex flex-col gap-2">
                    {gem.isNew && (
                        <span className="bg-yellow-500 text-black text-[8px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest">
                            Acquisition
                        </span>
                    )}
                    {gem.isFeatured && (
                        <span className="bg-white text-black text-[8px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest">
                            Vault
                        </span>
                    )}
                </div>
            </div>

            <div className="p-8 flex flex-col flex-1 z-10">
                <div className="flex justify-between items-center mb-4">
                    <span className="text-[9px] font-black text-white/20 uppercase tracking-[0.4em]">
                        {gem.category}
                    </span>
                    <span className="text-[10px] font-black text-white tracking-widest">
                        {gem.weight} CRT
                    </span>
                </div>

                <h3 className="text-xl lg:text-2xl font-black text-white mb-6 group-hover:text-yellow-600 transition-colors tracking-tighter leading-none">
                    {gem.name}
                </h3>

                <div className="flex items-center gap-3 text-[9px] font-black text-white/40 uppercase tracking-widest mb-10">
                    <span className="border border-white/10 px-2 py-1 rounded">{gem.origin}</span>
                    <span className="border border-white/10 px-2 py-1 rounded">{gem.clarity}</span>
                </div>

                <div className="mt-auto flex items-end justify-between border-t border-white/5 pt-8">
                    <div className="flex flex-col">
                        <span className="text-[8px] text-white/20 font-black uppercase tracking-[0.5em] mb-1">Value</span>
                        <span className="text-2xl lg:text-3xl font-black text-white tracking-tighter">${gem.price.toLocaleString()}</span>
                    </div>
                    <button className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-black hover:bg-yellow-500 transition-all duration-500 shadow-2xl shadow-white/5 group-hover:scale-110">
                        <span className="text-2xl">→</span>
                    </button>
                </div>
            </div>
        </div>
    );
};
