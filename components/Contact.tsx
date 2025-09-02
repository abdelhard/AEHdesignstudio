
import React, { useState } from 'react';
import { LinkedInIcon, BehanceIcon, InstagramIcon } from './SocialIcons';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, you would handle form submission here (e.g., API call)
        console.log('Form submitted:', formData);
        alert('Thank you for your message! I will get back to you shortly.');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact" className="py-20 bg-gray-900">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Get in Touch</h2>
                    <div className="w-20 h-1 bg-cyan-500 mx-auto mt-4"></div>
                    <p className="max-w-2xl mx-auto text-gray-400 mt-4">Have a project in mind or just want to say hello? Feel free to reach out.</p>
                </div>
                <div className="max-w-lg mx-auto">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="sr-only">Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your Name"
                                required
                                className="w-full bg-gray-800 border border-gray-700 text-white px-4 py-3 rounded-md focus:ring-cyan-500 focus:border-cyan-500 transition"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="sr-only">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Your Email"
                                required
                                className="w-full bg-gray-800 border border-gray-700 text-white px-4 py-3 rounded-md focus:ring-cyan-500 focus:border-cyan-500 transition"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="sr-only">Message</label>
                            <textarea
                                name="message"
                                id="message"
                                rows={5}
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Your Message"
                                required
                                className="w-full bg-gray-800 border border-gray-700 text-white px-4 py-3 rounded-md focus:ring-cyan-500 focus:border-cyan-500 transition"
                            ></textarea>
                        </div>
                        <div className="text-center">
                            <button
                                type="submit"
                                className="bg-cyan-500 text-white font-semibold py-3 px-8 rounded-md hover:bg-cyan-600 transition-all duration-300 text-lg"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                    <div className="text-center mt-12">
                        <p className="text-gray-400">Or contact me directly at:</p>
                        <a href="mailto:contact@aehdesign.com" className="text-cyan-400 hover:text-cyan-300 text-lg font-medium">contact@aehdesign.com</a>
                        <div className="flex justify-center gap-6 mt-6">
                            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors"><LinkedInIcon /></a>
                            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors"><BehanceIcon /></a>
                            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors"><InstagramIcon /></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
