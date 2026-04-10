"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";

const REQUIREMENT_TYPES = ["Gemstone", "Jewelry", "Custom Order"];

interface FormData {
    fullName: string;
    email: string;
    phone: string;
    type: string;
    budget: string;
    message: string;
}

interface FormErrors {
    fullName?: string;
    email?: string;
    message?: string;
}

export const CustomerRequirement = () => {
    const [formData, setFormData] = useState<FormData>({
        fullName: "",
        email: "",
        phone: "",
        type: "Gemstone",
        budget: "",
        message: "",
    });

    const [files, setFiles] = useState<File[]>([]);
    const [previews, setPreviews] = useState<string[]>([]);
    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        // Clear error when user types
        if (errors[name as keyof FormErrors]) {
            setErrors((prev) => ({ ...prev, [name]: undefined }));
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = Array.from(e.target.files || []);
        addFiles(selectedFiles);
    };

    const addFiles = (newFiles: File[]) => {
        const validFiles = newFiles.filter(file => {
            const isImage = file.type.startsWith("image/");
            const isUnderLimit = file.size <= 5 * 1024 * 1024; // 5MB
            return isImage && isUnderLimit;
        });

        setFiles((prev) => [...prev, ...validFiles]);

        const newPreviews = validFiles.map(file => URL.createObjectURL(file));
        setPreviews((prev) => [...prev, ...newPreviews]);
    };

    const removeFile = (index: number) => {
        setFiles((prev) => prev.filter((_, i) => i !== index));
        URL.revokeObjectURL(previews[index]);
        setPreviews((prev) => prev.filter((_, i) => i !== index));
    };

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};
        if (!formData.fullName.trim()) newErrors.fullName = "Name is required";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Invalid email format";
        }
        if (!formData.message.trim()) newErrors.message = "Please describe your requirement";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateForm()) return;

        setIsSubmitting(true);
        setSubmitStatus(null);

        const data = new FormData();
        Object.entries(formData).forEach(([key, value]) => data.append(key, value));
        files.forEach((file) => data.append("files", file));

        try {
            const response = await fetch("/api/requirement", {
                method: "POST",
                body: data,
            });

            if (response.ok) {
                setSubmitStatus("success");
                setFormData({
                    fullName: "",
                    email: "",
                    phone: "",
                    type: "Gemstone",
                    budget: "",
                    message: "",
                });
                setFiles([]);
                setPreviews([]);
            } else {
                setSubmitStatus("error");
            }
        } catch (error) {
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="requirement" className="w-full py-32 px-8 lg:px-16 bg-[#0A0A0A] flex justify-center overflow-hidden">
            <div className="w-full max-w-5xl">
                {/* Header */}
                <div className="text-center mb-20">
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="h-[1px] w-8 bg-yellow-500/30" />
                        <span className="text-yellow-500 font-bold uppercase tracking-[0.7em] text-[10px]">Direct Inquiry</span>
                        <div className="h-[1px] w-8 bg-yellow-500/30" />
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none mb-8">
                        Share Your <span className="text-white/40 italic">Requirement</span>
                    </h2>
                    <p className="text-white/40 text-sm md:text-base font-light max-w-xl mx-auto uppercase tracking-widest leading-relaxed">
                        Whether it’s a specific gemstone or a custom jewelry piece, describe your vision and our experts will help you find the perfect match.
                    </p>
                </div>

                {/* Form Container */}
                <div className="relative bg-white/[0.02] border border-white/5 backdrop-blur-3xl rounded-[3rem] p-8 md:p-16 shadow-2xl">
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {/* Left Side: Basic Info */}
                        <div className="space-y-8">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.4em] ml-4">Full Name*</label>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleInputChange}
                                    placeholder="John Doe"
                                    className={`w-full bg-white/[0.03] border ${errors.fullName ? "border-red-500/50" : "border-white/10"} rounded-2xl px-6 py-4 text-white placeholder:text-white/10 focus:outline-none focus:border-yellow-500/50 transition-all`}
                                />
                                {errors.fullName && <span className="text-[10px] text-red-500/70 ml-4">{errors.fullName}</span>}
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.4em] ml-4">Email Address*</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="john@example.com"
                                    className={`w-full bg-white/[0.03] border ${errors.email ? "border-red-500/50" : "border-white/10"} rounded-2xl px-6 py-4 text-white placeholder:text-white/10 focus:outline-none focus:border-yellow-500/50 transition-all`}
                                />
                                {errors.email && <span className="text-[10px] text-red-500/70 ml-4">{errors.email}</span>}
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.4em] ml-4">Phone Number</label>
                                <input
                                    type="text"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    placeholder="+94 71 234 5678"
                                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/10 focus:outline-none focus:border-yellow-500/50 transition-all"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.4em] ml-4">Inquiry Type</label>
                                    <select
                                        name="type"
                                        value={formData.type}
                                        onChange={handleInputChange}
                                        className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white/60 focus:outline-none focus:border-yellow-500/50 transition-all appearance-none cursor-pointer"
                                    >
                                        {REQUIREMENT_TYPES.map(t => <option key={t} value={t} className="bg-black text-white">{t}</option>)}
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.4em] ml-4">Budget Range</label>
                                    <input
                                        type="text"
                                        name="budget"
                                        value={formData.budget}
                                        onChange={handleInputChange}
                                        placeholder="e.g. $2000 - $5000"
                                        className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/10 focus:outline-none focus:border-yellow-500/50 transition-all"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Message & Files */}
                        <div className="space-y-8">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.4em] ml-4">Your Vision*</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    placeholder="Describe the gemstone or jewelry piece you are looking for..."
                                    rows={5}
                                    className={`w-full bg-white/[0.03] border ${errors.message ? "border-red-500/50" : "border-white/10"} rounded-3xl px-6 py-5 text-white placeholder:text-white/10 focus:outline-none focus:border-yellow-500/50 transition-all resize-none`}
                                />
                                {errors.message && <span className="text-[10px] text-red-500/70 ml-4">{errors.message}</span>}
                            </div>

                            <div className="space-y-4">
                                <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.4em] ml-4">Inspirations (JPG/PNG)</label>

                                {/* Drag & Drop Area */}
                                <div
                                    onClick={() => fileInputRef.current?.click()}
                                    onDragOver={(e) => { e.preventDefault(); e.currentTarget.classList.add('border-yellow-500/30'); }}
                                    onDragLeave={(e) => { e.preventDefault(); e.currentTarget.classList.remove('border-yellow-500/30'); }}
                                    onDrop={(e) => {
                                        e.preventDefault();
                                        e.currentTarget.classList.remove('border-yellow-500/30');
                                        addFiles(Array.from(e.dataTransfer.files));
                                    }}
                                    className="w-full h-40 border-2 border-dashed border-white/5 rounded-3xl flex flex-col items-center justify-center gap-3 cursor-pointer hover:bg-white/[0.02] transition-all group"
                                >
                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-yellow-500/10 transition-colors">
                                        <span className="text-white/30 group-hover:text-yellow-500 transition-colors">+</span>
                                    </div>
                                    <p className="text-[9px] font-bold text-white/20 uppercase tracking-widest">Add images (Max 5MB)</p>
                                    <input
                                        type="file"
                                        multiple
                                        accept="image/*"
                                        className="hidden"
                                        ref={fileInputRef}
                                        onChange={handleFileChange}
                                    />
                                </div>

                                {/* Previews */}
                                {previews.length > 0 && (
                                    <div className="flex flex-wrap gap-4 mt-4">
                                        {previews.map((preview, index) => (
                                            <div key={index} className="relative w-24 h-24 rounded-2xl overflow-hidden group/thumb border border-white/10">
                                                <Image src={preview} alt="Preview" fill className="object-cover" />
                                                <button
                                                    type="button"
                                                    onClick={() => removeFile(index)}
                                                    className="absolute inset-0 bg-black/60 opacity-0 group-hover/thumb:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-bold"
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="md:col-span-2 pt-8 flex flex-col items-center gap-6">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`px-20 py-6 bg-white text-black font-black text-xs uppercase tracking-[0.5em] rounded-full hover:bg-yellow-500 transition-all shadow-2xl flex items-center gap-4 ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                                        Processing...
                                    </>
                                ) : (
                                    "Send Requirement"
                                )}
                            </button>

                            {submitStatus === "success" && (
                                <p className="text-green-500 text-[10px] font-black uppercase tracking-widest animate-fade-in text-center">
                                    Requirement sent successfully. We will reach out to you shortly.
                                </p>
                            )}
                            {submitStatus === "error" && (
                                <p className="text-red-500 text-[10px] font-black uppercase tracking-widest animate-fade-in text-center">
                                    Something went wrong. Please check your connection and try again.
                                </p>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};
