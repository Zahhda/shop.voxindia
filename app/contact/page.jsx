// app/contact/page.jsx
"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useRouter } from "next/navigation";

const ContactPage = () => {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const router = useRouter();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // For now, just show a thank-you toast or redirect
        alert("Thank you for contacting us!");
        setForm({ name: "", email: "", message: "" });
        router.push("/thank-you"); // Or stay on same page
    };

    return (
        <>
            <Navbar />

            <section className="min-h-screen px-6 py-16 bg-gray-50 text-gray-800">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl md:text-4xl font-semibold text-center mb-12">Contact Us</h1>

                    <div className="grid md:grid-cols-2 gap-10">
                        {/* Contact Form */}
                        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 shadow rounded">
                            <div>
                                <label className="block text-sm font-medium mb-1">Your Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-600"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Your Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-600"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Message</label>
                                <textarea
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    rows="5"
                                    required
                                    className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-600"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-red-700 text-white py-2 px-6 rounded hover:bg-red-800 transition"
                            >
                                Send Message
                            </button>
                        </form>

                        {/* Contact Info */}
                        <div className="bg-white p-8 shadow rounded space-y-4 text-sm text-gray-700">
                            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
                            <p><strong>📍 Address:</strong><br />1202, 100-ft Rd, Indiranagar, Bengaluru, KA-560008</p>
                            <p><strong>📞 Phone:</strong><br /> <a href="tel:+919528500500" className="hover:underline text-red-700">
                                +91 9528-500-500
                            </a></p>
                            <p><strong>✉️ Email:</strong><br />
                                <a href="mailto:customercare@voxindia.co" className="text-red-700 hover:underline">
                                    customercare@voxindia.co
                                </a>
                            </p>
                            <p><strong>🕒 Hours:</strong><br />Mon - Sat: 10 AM – 6 PM</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default ContactPage;
