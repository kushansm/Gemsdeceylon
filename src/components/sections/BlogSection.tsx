"use client";

import React from "react";
import { BLOG_POSTS } from "@/lib/blogData";
import { BlogCard } from "../ui/BlogCard";

export const BlogSection = () => {
    return (
        <section id="blog" className="w-screen py-32 px-8 lg:px-16 bg-[#0A0A0A] flex flex-col items-center">
            <div className="w-full max-w-[1600px] flex flex-col">
                {/* Title Section */}
                <div className="mb-24 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="h-[1px] w-8 bg-yellow-500/30" />
                            <span className="text-yellow-500 font-bold uppercase tracking-[0.7em] text-[10px]">The Chronicles</span>
                            <div className="h-[1px] w-8 bg-yellow-500/30" />
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none">
                            Gemstone <span className="text-white/40 italic">Stories</span>
                        </h2>
                    </div>

                    <p className="text-white/40 text-lg md:text-xl font-light max-w-sm lg:text-right">
                        Journey into the heart of Sri Lanka&apos;s mining history and the science of brilliance.
                    </p>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {BLOG_POSTS.map((post) => (
                        <BlogCard key={post.id} post={post} />
                    ))}
                </div>

                {/* Bottom Decorative Element */}
                <div className="mt-32 flex flex-col items-center">
                    <div className="w-px h-32 bg-gradient-to-b from-yellow-500/50 to-transparent" />
                    <p className="mt-8 text-[10px] font-black text-white/20 uppercase tracking-[1em]">Explore More</p>
                </div>
            </div>
        </section>
    );
};
