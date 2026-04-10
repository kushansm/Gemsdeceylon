import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "@/lib/blogData";

interface BlogCardProps {
    post: BlogPost;
}

export const BlogCard = ({ post }: BlogCardProps) => {
    return (
        <div className="group flex flex-col space-y-6 bg-white/[0.02] border border-white/5 p-4 rounded-[3rem] transition-all duration-700 hover:bg-white/[0.04] hover:scale-[1.02] hover:border-white/10">
            {/* Image Container */}
            <div className="relative aspect-[4/3] w-full rounded-[2.5rem] overflow-hidden">
                <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700" />

                {/* Category Tag */}
                <div className="absolute top-6 left-6 flex">
                    <span className="px-4 py-1.5 bg-yellow-500/10 backdrop-blur-md border border-yellow-500/20 text-yellow-500 text-[10px] font-black uppercase tracking-widest rounded-full">
                        {post.category}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="px-4 pb-4 space-y-4">
                <div className="flex items-center gap-4 text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">
                    <span>{post.date}</span>
                    <div className="w-1 h-1 rounded-full bg-white/20" />
                    <span>{post.readTime}</span>
                </div>

                <h3 className="text-2xl font-black text-white leading-tight group-hover:text-yellow-500 transition-colors duration-500">
                    {post.title}
                </h3>

                <p className="text-white/40 text-sm leading-relaxed font-light line-clamp-2">
                    {post.excerpt}
                </p>

                <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-4 pt-4 group/btn"
                >
                    <span className="text-[10px] font-black text-white uppercase tracking-[0.4em] group-hover/btn:text-yellow-500 transition-colors">
                        Read Story
                    </span>
                    <div className="w-8 h-[1px] bg-white/20 group-hover/btn:w-12 group-hover/btn:bg-yellow-500 transition-all duration-500" />
                    <span className="text-white/20 group-hover/btn:text-yellow-500 transition-colors">→</span>
                </Link>
            </div>
        </div>
    );
};
