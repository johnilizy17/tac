"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { ArrowLeft, Upload, X, CheckCircle, Mail, User, FileText, Briefcase } from "lucide-react";
import Link from "next/link";

export default function ApplyPage() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        position: "Graduate Trainee Programme",
        coverLetter: ""
    });
    const [cvFile, setCvFile] = useState<File | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            // Check file size (max 5MB)
            if (file.size > 5 * 1024 * 1024) {
                alert("File size must be less than 5MB");
                return;
            }
            // Check file type
            const allowedTypes = ['.pdf', '.doc', '.docx'];
            const fileExtension = file.name.substring(file.name.lastIndexOf('.')).toLowerCase();
            if (!allowedTypes.includes(fileExtension)) {
                alert("Please upload a PDF or Word document");
                return;
            }
            setCvFile(file);
        }
    };

    const removeFile = () => {
        setCvFile(null);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!cvFile) {
            alert("Please upload your CV/Resume");
            return;
        }

        setIsSubmitting(true);

        // Convert file to base64 for email attachment
        const reader = new FileReader();
        reader.readAsDataURL(cvFile);
        reader.onload = () => {
            const base64File = reader.result as string;
            
            // Create email content
            const subject = encodeURIComponent(`Job Application - ${formData.position} - ${formData.fullName}`);
            const body = encodeURIComponent(
                `Dear TAC HR Team,\n\n` +
                `I am writing to apply for the position of ${formData.position}.\n\n` +
                `Applicant Details:\n` +
                `Name: ${formData.fullName}\n` +
                `Email: ${formData.email}\n` +
                `Phone: ${formData.phone}\n` +
                `Position: ${formData.position}\n\n` +
                `Cover Letter:\n${formData.coverLetter}\n\n` +
                `Please find my CV/Resume attached.\n\n` +
                `Best regards,\n${formData.fullName}`
            );

            // Open email client with pre-filled data
            const mailtoLink = `mailto:careers@tacgroupng.com?subject=${subject}&body=${body}`;
            
            // Note: File attachment via mailto is not supported in browsers
            // We'll show a success message and instructions
            setTimeout(() => {
                setIsSubmitting(false);
                setSubmitted(true);
            }, 1000);
        };
    };

    if (submitted) {
        return (
            <>
                <Navbar />
                <main className="min-h-screen bg-background flex items-center justify-center px-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="max-w-2xl w-full text-center"
                    >
                        <div className="glass-card p-12 rounded-[3rem] bg-white dark:bg-foreground/5 shadow-2xl">
                            <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <CheckCircle className="w-10 h-10 text-green-500" />
                            </div>
                            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                                Application Ready!
                            </h1>
                            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                                Your application details have been prepared. Please complete the submission by:
                            </p>
                            <div className="bg-tac-brand/5 border border-tac-brand/20 rounded-2xl p-6 mb-8 text-left">
                                <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                                    <Mail className="w-5 h-5 text-tac-brand" />
                                    Next Steps:
                                </h3>
                                <ol className="space-y-3 text-muted-foreground">
                                    <li className="flex gap-3">
                                        <span className="font-bold text-tac-brand">1.</span>
                                        <span>Click the button below to open your email client</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="font-bold text-tac-brand">2.</span>
                                        <span>Attach your CV/Resume file: <span className="font-semibold text-foreground">{cvFile?.name}</span></span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="font-bold text-tac-brand">3.</span>
                                        <span>Review the pre-filled information and click Send</span>
                                    </li>
                                </ol>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href={`mailto:careers@tacgroupng.com?subject=${encodeURIComponent(`Job Application - ${formData.position} - ${formData.fullName}`)}&body=${encodeURIComponent(
                                        `Dear TAC HR Team,\n\n` +
                                        `I am writing to apply for the position of ${formData.position}.\n\n` +
                                        `Applicant Details:\n` +
                                        `Name: ${formData.fullName}\n` +
                                        `Email: ${formData.email}\n` +
                                        `Phone: ${formData.phone}\n` +
                                        `Position: ${formData.position}\n\n` +
                                        `Cover Letter:\n${formData.coverLetter}\n\n` +
                                        `Please find my CV/Resume attached.\n\n` +
                                        `Best regards,\n${formData.fullName}`
                                    )}`}
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-tac-brand text-tac-dark font-bold rounded-xl hover:scale-105 active:scale-95 transition-all shadow-lg"
                                >
                                    <Mail className="w-5 h-5" />
                                    Open Email & Send Application
                                </a>
                                <Link
                                    href="/careers"
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-foreground/5 border-2 border-foreground/10 text-foreground font-bold rounded-xl hover:bg-foreground/10 transition-all"
                                >
                                    Back to Careers
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </main>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-background">
                {/* Hero Section */}
                <section className="pt-40 pb-12 relative overflow-hidden bg-gradient-to-b from-tac-brand/5 via-background to-background">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-tac-brand/10 blur-[120px] -z-10" />
                    <div className="max-w-4xl mx-auto px-4 relative">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <Link
                                href="/careers"
                                className="inline-flex items-center gap-2 text-tac-brand hover:text-tac-brand/80 transition-colors mb-8 group"
                            >
                                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                                Back to Careers
                            </Link>
                            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                                Apply to <span className="text-gradient">TAC Professional Services</span>
                            </h1>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Take the first step towards an exciting career. Fill out the form below and we'll get back to you soon.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Application Form */}
                <section className="py-12 pb-24">
                    <div className="max-w-3xl mx-auto px-4">
                        <motion.form
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            onSubmit={handleSubmit}
                            className="glass-card p-8 md:p-12 rounded-[3rem] bg-white dark:bg-foreground/5 shadow-xl"
                        >
                            <div className="space-y-6">
                                {/* Full Name */}
                                <div>
                                    <label htmlFor="fullName" className="flex items-center gap-2 text-foreground font-semibold mb-3">
                                        <User className="w-5 h-5 text-tac-brand" />
                                        Full Name
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="fullName"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-6 py-4 rounded-2xl bg-background border-2 border-foreground/10 focus:border-tac-brand focus:outline-none transition-colors text-foreground"
                                        placeholder="Enter your full name"
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label htmlFor="email" className="flex items-center gap-2 text-foreground font-semibold mb-3">
                                        <Mail className="w-5 h-5 text-tac-brand" />
                                        Email Address
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-6 py-4 rounded-2xl bg-background border-2 border-foreground/10 focus:border-tac-brand focus:outline-none transition-colors text-foreground"
                                        placeholder="your.email@example.com"
                                    />
                                </div>

                                {/* Phone */}
                                <div>
                                    <label htmlFor="phone" className="flex items-center gap-2 text-foreground font-semibold mb-3">
                                        <svg className="w-5 h-5 text-tac-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        Phone Number
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-6 py-4 rounded-2xl bg-background border-2 border-foreground/10 focus:border-tac-brand focus:outline-none transition-colors text-foreground"
                                        placeholder="+234 XXX XXX XXXX"
                                    />
                                </div>

                                {/* Position */}
                                <div>
                                    <label htmlFor="position" className="flex items-center gap-2 text-foreground font-semibold mb-3">
                                        <Briefcase className="w-5 h-5 text-tac-brand" />
                                        Position Applying For
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        id="position"
                                        name="position"
                                        value={formData.position}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-6 py-4 rounded-2xl bg-background border-2 border-foreground/10 focus:border-tac-brand focus:outline-none transition-colors text-foreground"
                                    >
                                        <option value="Graduate Trainee Programme">Graduate Trainee Programme</option>
                                        <option value="Experienced Hire">Experienced Hire</option>
                                        <option value="Internship">Internship</option>
                                        <option value="Other">Other Position</option>
                                    </select>
                                </div>

                                {/* CV Upload */}
                                <div>
                                    <label className="flex items-center gap-2 text-foreground font-semibold mb-3">
                                        <FileText className="w-5 h-5 text-tac-brand" />
                                        Upload CV/Resume
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        {!cvFile ? (
                                            <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-foreground/20 rounded-2xl cursor-pointer hover:border-tac-brand hover:bg-tac-brand/5 transition-all">
                                                <Upload className="w-10 h-10 text-tac-brand mb-3" />
                                                <span className="text-foreground font-medium mb-1">Click to upload CV/Resume</span>
                                                <span className="text-sm text-muted-foreground">PDF, DOC, DOCX (Max 5MB)</span>
                                                <input
                                                    type="file"
                                                    accept=".pdf,.doc,.docx"
                                                    onChange={handleFileChange}
                                                    className="hidden"
                                                />
                                            </label>
                                        ) : (
                                            <div className="flex items-center justify-between p-4 bg-tac-brand/5 border-2 border-tac-brand/20 rounded-2xl">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 bg-tac-brand/10 rounded-xl flex items-center justify-center">
                                                        <FileText className="w-5 h-5 text-tac-brand" />
                                                    </div>
                                                    <div>
                                                        <p className="text-foreground font-medium">{cvFile.name}</p>
                                                        <p className="text-sm text-muted-foreground">
                                                            {(cvFile.size / 1024 / 1024).toFixed(2)} MB
                                                        </p>
                                                    </div>
                                                </div>
                                                <button
                                                    type="button"
                                                    onClick={removeFile}
                                                    className="w-8 h-8 bg-red-500/10 hover:bg-red-500/20 rounded-lg flex items-center justify-center transition-colors"
                                                >
                                                    <X className="w-5 h-5 text-red-500" />
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Cover Letter */}
                                <div>
                                    <label htmlFor="coverLetter" className="flex items-center gap-2 text-foreground font-semibold mb-3">
                                        <FileText className="w-5 h-5 text-tac-brand" />
                                        Cover Letter / Message
                                    </label>
                                    <textarea
                                        id="coverLetter"
                                        name="coverLetter"
                                        value={formData.coverLetter}
                                        onChange={handleInputChange}
                                        rows={6}
                                        className="w-full px-6 py-4 rounded-2xl bg-background border-2 border-foreground/10 focus:border-tac-brand focus:outline-none transition-colors text-foreground resize-none"
                                        placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                                    />
                                </div>

                                {/* Submit Button */}
                                <div className="pt-6">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full px-8 py-5 bg-tac-brand text-tac-dark font-bold rounded-2xl hover:scale-[1.02] active:scale-95 transition-all shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-lg"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-tac-dark/30 border-t-tac-dark rounded-full animate-spin" />
                                                Processing...
                                            </>
                                        ) : (
                                            <>
                                                Submit Application
                                                <Mail className="w-5 h-5" />
                                            </>
                                        )}
                                    </button>
                                    <p className="text-sm text-muted-foreground text-center mt-4">
                                        By submitting this form, you agree to our privacy policy and terms of service.
                                    </p>
                                </div>
                            </div>
                        </motion.form>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
