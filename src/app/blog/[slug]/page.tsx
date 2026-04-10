"use client";

import React, { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { BLOG_POSTS } from "@/lib/blogData";
import Navbar from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { notFound } from "next/navigation";

export default function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const post = BLOG_POSTS.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <main className="bg-[#0A0A0A] min-h-screen">
            <Navbar />

            {/* Centered Blog Content Container */}
            <section className="w-full pt-40 pb-24 px-8 lg:px-16 flex justify-center">
                <div className="w-full max-w-4xl">
                    {/* Header Info */}
                    <div className="flex flex-col items-center text-center mb-16">
                        <div className="flex items-center justify-center gap-4 mb-8">
                            <div className="h-[1px] w-6 bg-yellow-500/30" />
                            <span className="text-yellow-500 font-bold uppercase tracking-[0.7em] text-[10px]">
                                {post.category}
                            </span>
                            <div className="h-[1px] w-6 bg-yellow-500/30" />
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tighter leading-tight mb-12">
                            {post.title}
                        </h1>

                        <div className="flex items-center justify-center gap-8 text-[10px] font-black text-white/30 uppercase tracking-[0.5em] pb-12 border-b border-white/5 w-full">
                            <span>{post.date}</span>
                            <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/50" />
                            <span>{post.readTime}</span>
                        </div>
                    </div>

                    {/* Featured Image - Framed Elevantly */}
                    <div className="relative w-full aspect-[16/9] lg:aspect-[21/9] rounded-[3rem] overflow-hidden mb-24 bg-white/[0.02] border border-white/5 p-3">
                        <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden">
                            <Image
                                src={post.image}
                                alt={post.title}
                                fill
                                className="object-cover transition-transform duration-[2000ms] hover:scale-105"
                                priority
                            />
                        </div>
                    </div>

                    {/* Article Content Area */}
                    <div className="max-w-3xl mx-auto">
                        {/* Back Button */}
                        <Link href="/#blog" className="inline-flex items-center gap-4 mb-20 group">
                            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-500">
                                <span className="text-white group-hover:text-black transition-colors">←</span>
                            </div>
                            <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em] group-hover:text-white transition-colors">
                                Back to Stories
                            </span>
                        </Link>

                        <article className="prose prose-invert prose-yellow max-w-none">
                            {post.content.split('\n\n').map((paragraph, index) => {
                                if (paragraph.startsWith('### ')) {
                                    return (
                                        <h3 key={index} className="text-3xl font-black text-white mt-20 mb-10 uppercase tracking-tight">
                                            {paragraph.replace('### ', '')}
                                        </h3>
                                    );
                                }
                                if (paragraph.includes('*   ')) {
                                    const items = paragraph.split('\n').filter(p => p.trim());
                                    return (
                                        <ul key={index} className="space-y-6 my-10 list-none p-0">
                                            {items.map((item, i) => (
                                                <li key={i} className="flex gap-5 text-white/60 text-lg leading-relaxed font-light bg-white/[0.02] p-6 rounded-3xl border border-white/5">
                                                    <span className="text-yellow-500 font-bold text-xl pt-1">✦</span>
                                                    <span>{item.replace('*   ', '')}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    );
                                }
                                return (
                                    <p key={index} className="text-white/60 text-lg lg:text-xl leading-relaxed font-light mb-10">
                                        {paragraph}
                                    </p>
                                );
                            })}
                        </article>

                        {/* End of Story Decor */}
                        <div className="mt-32 pt-16 border-t border-white/5 flex flex-col items-center">
                            <div className="w-px h-24 bg-gradient-to-b from-yellow-500/50 to-transparent mb-8" />
                            <p className="text-[10px] font-black text-white/20 uppercase tracking-[1em] mb-12 text-center">End of Story</p>
                            <Link href="/shop" className="px-12 py-5 bg-white text-black font-black text-xs uppercase tracking-[0.4em] rounded-full hover:bg-yellow-500 transition-all shadow-xl shadow-white/5">
                                Explore Boutique
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
