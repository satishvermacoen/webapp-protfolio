"use client";


import React, { useState } from 'react';
import { BarChart, Users,  Zap, Menu, X, CheckCircle, ArrowRight, Star, Sparkles, LoaderCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

// Helper component for animated sections
const AnimatedSection = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay }}
    >
        {children}
    </motion.div>
);


// Main OneApp Component
const OneApp = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // State for AI Features
    const [className, setClassName] = useState('Sunrise Yoga');
    const [classDescription, setClassDescription] = useState('Start your day with an energizing flow. This class combines gentle stretches and foundational poses to awaken your body and center your mind, leaving you refreshed and ready for the day ahead.');
    const [isGeneratingDescription, setIsGeneratingDescription] = useState(false);

    const [campaignTheme, setCampaignTheme] = useState('New Year Transformation');
    const [slogans, setSlogans] = useState([
        "New Year, New You. Stronger Together.",
        "Your 2025 resolution starts here.",
        "Transform your body, transform your life.",
        "Commit to be fit this New Year.",
        "Beyond resolutions. Real results."
    ]);
    const [isGeneratingSlogans, setIsGeneratingSlogans] = useState(false);
    const [error, setError] = useState('');

    const navLinks = [
        { href: '/', label: 'Features' },
        { href: '/', label: 'AI Tools' },
        { href: '/', label: 'How It Works' },
        { href: '/', label: 'Pricing' },
        { href: '/', label: 'Testimonials' },
    ];

    // Gemini API call for Class Description
    const handleGenerateDescription = async () => {
        if (!className) return;
        setIsGeneratingDescription(true);
        setClassDescription('');
        setError('');

        const prompt = `Write an exciting and welcoming marketing description for a gym class called "${className}". Focus on the benefits and feeling. Keep it under 50 words.`;

        try {
            const chatHistory = [{ role: "user", parts: [{ text: prompt }] }];
            const payload = { contents: chatHistory };
            const apiKey = ""; // Leave empty, will be handled by the environment
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
            
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'Oneapplication/json' },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                throw new Error(`API error: ${response.statusText}`);
            }

            const result = await response.json();
            
            if (result.candidates && result.candidates.length > 0 && result.candidates[0].content.parts.length > 0) {
                const text = result.candidates[0].content.parts[0].text;
                setClassDescription(text);
            } else {
                throw new Error("No content received from API.");
            }
        } catch (err) {
            console.error(err);
            setError("Sorry, we couldn't generate a description right now. Please try again.");
            setClassDescription('An amazing class to help you reach your fitness goals!');
        } finally {
            setIsGeneratingDescription(false);
        }
    };

    // Gemini API call for Slogans
    const handleGenerateSlogans = async () => {
        if (!campaignTheme) return;
        setIsGeneratingSlogans(true);
        setSlogans([]);
        setError('');

        const prompt = `You are a marketing expert for a fitness center. Generate 5 short, catchy, and motivational marketing slogans for a gym campaign about "${campaignTheme}". Return the result as a JSON array of strings. Example: ["slogan 1", "slogan 2"]`;

        try {
            const chatHistory = [{ role: "user", parts: [{ text: prompt }] }];
            const payload = { 
                contents: chatHistory,
                generationConfig: {
                    responseMimeType: "Oneapplication/json",
                }
            };
            const apiKey = ""; // Leave empty
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'Oneapplication/json' },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                throw new Error(`API error: ${response.statusText}`);
            }
            
            const result = await response.json();

            if (result.candidates && result.candidates.length > 0 && result.candidates[0].content.parts.length > 0) {
                const jsonText = result.candidates[0].content.parts[0].text;
                const parsedSlogans = JSON.parse(jsonText);
                setSlogans(parsedSlogans);
            } else {
                throw new Error("No content received from API.");
            }
        } catch (err) {
            console.error(err);
            setError("Sorry, we couldn't generate slogans right now. Please try again.");
            setSlogans(["Your Fitness Journey Starts Now.", "Achieve Your Best Self.", "Sweat, Smile, Repeat."]);
        } finally {
            setIsGeneratingSlogans(false);
        }
    };


    return (
        <div className="bg-gray-900 text-gray-300 font-sans antialiased">
            {/* Header */}
            <header className="bg-black bg-opacity-50 backdrop-blur-lg shadow-lg sticky top-0 z-50">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
                        <div className="flex items-center space-x-2">
                            <BarChart className="w-8 h-8 text-cyan-400" />
                            <h1 className="text-2xl font-bold text-white">GymFlow</h1>
                        </div>
                    </motion.div>
                    <nav className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link, i) => (
                             <motion.a 
                                key={link.href} 
                                href={link.href} 
                                className="text-gray-300 hover:text-cyan-400 transition-colors"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 * i }}
                            >
                                {link.label}
                            </motion.a>
                        ))}
                    </nav>
                    <motion.div 
                        className="hidden md:flex items-center space-x-4"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <a href="#contact" className="text-gray-300 hover:text-cyan-400">Login</a>
                        <a href="#contact" className="bg-cyan-500 text-white px-5 py-2 rounded-lg font-semibold hover:bg-cyan-600 transition-all shadow-[0_0_15px_rgba(56,189,248,0.5)]">
                            Get Started
                        </a>
                    </motion.div>
                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 focus:outline-none">
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
                {/* Mobile Menu */}
                <AnimatePresence>
                {isMenuOpen && (
                    <motion.div 
                        className="md:hidden bg-black bg-opacity-80 backdrop-blur-lg"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                    >
                        <nav className="flex flex-col items-center space-y-6 py-6">
                            {navLinks.map((link) => (
                                <a key={link.href} href={link.href} className="text-gray-300 hover:text-cyan-400 transition-colors text-lg" onClick={() => setIsMenuOpen(false)}>
                                    {link.label}
                                </a>
                            ))}
                             <a href="#contact" className="text-gray-300 hover:text-cyan-400 text-lg">Login</a>
                            <a href="#contact" className="bg-cyan-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-cyan-600 transition-all text-lg">
                                Get Started
                            </a>
                        </nav>
                    </motion.div>
                )}
                </AnimatePresence>
            </header>

            {/* Main Content */}
            <main>
                {/* Hero Section */}
                <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center text-white">
                    <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
                    <Image 
                        src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=2400&auto=format&fit=crop" 
                        alt="Gym background"
                        width={1920}
                        height={1080} 
                        className="absolute inset-0 w-full h-full object-cover"
                        onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => { (e.target as HTMLImageElement).src = 'https://placehold.co/1920x1080/000000/FFFFFF?text=Gym+Atmosphere'; }}
                    />
                    <div className="relative z-20 container mx-auto px-6 text-center">
                        <motion.h2 
                            className="text-4xl md:text-7xl font-extrabold tracking-tight"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            Unleash Your Gym&apos;s <br/> <span className="text-cyan-400">Full Potential</span>
                        </motion.h2>
                        <motion.p 
                            className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            The ultimate ERP designed to streamline your operations, amplify member engagement, and accelerate your growth with the power of AI.
                        </motion.p>
                        <motion.div 
                            className="mt-12 flex justify-center items-center flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            <a href="#pricing" className="bg-cyan-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-600 transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(56,189,248,0.6)]">
                                Start Free Trial
                            </a>
                            <a href="#features" className="flex items-center text-cyan-400 font-semibold text-lg hover:text-cyan-300 transition-all transform hover:scale-105">
                                Explore Features <ArrowRight className="ml-2 w-5 h-5" />
                            </a>
                        </motion.div>
                    </div>
                </section>

                {/* Features Section */}
                <section id="features" className="py-24 bg-gray-900">
                    <div className="container mx-auto px-6">
                        <AnimatedSection>
                            <div className="text-center mb-16">
                                <h3 className="text-4xl md:text-5xl font-bold text-white">The Command Center for Your Gym</h3>
                                <p className="mt-4 text-lg text-gray-400">From front desk to back office, we&apos;ve got you covered.</p>
                            </div>
                        </AnimatedSection>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { icon: Users, title: 'Member Management', description: 'A complete view of your members, from sign-up to success story.', image: 'https://images.unsplash.com/photo-1552196563-55cd4e45efb3?q=80&w=800&auto=format&fit=crop' },
                                { icon: BarChart, title: 'Class Scheduling', description: 'Intuitive drag-and-drop scheduling for classes, trainers, and resources.', image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop' },
                                { icon: Zap, title: 'Automated Billing', description: 'Set it and forget it. Secure, automated payments that just work.', image: 'https://images.unsplash.com/photo-1580221374589-2a969246aa6c?q=80&w=800&auto=format&fit=crop' },
                            ].map((feature, index) => (
                                <AnimatedSection key={index} delay={index * 0.1}>
                                    <div className="bg-gray-800 rounded-xl overflow-hidden group h-full flex flex-col">
                                        <div className="relative h-56"> 
                                            <Image src={feature.image} width={1920} height={1080} alt={feature.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => { (e.target as HTMLImageElement).src = 'https://placehold.co/800x600/111827/FFFFFF?text=Feature'; }}/>
                                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
                                        </div>
                                        <div className="p-8 flex-grow">
                                            <div className="flex items-center mb-4">
                                                <div className="bg-cyan-900 text-cyan-400 p-3 rounded-full mr-4">
                                                    <feature.icon className="w-6 h-6" />
                                                </div>
                                                <h4 className="text-2xl font-bold text-white">{feature.title}</h4>
                                            </div>
                                            <p className="text-gray-400">{feature.description}</p>
                                        </div>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </section>

                {/* AI Features Section */}
                <section id="ai-features" className="py-24 bg-black">
                    <div className="container mx-auto px-6">
                        <AnimatedSection>
                            <div className="text-center mb-16">
                                <h3 className="text-4xl md:text-5xl font-bold text-white">
                                    Work Smarter, Not Harder with <span className="text-cyan-400">AI</span>
                                </h3>
                                <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">Let our AI assistant handle the creative work, so you can focus on your members. Try it yourself!</p>
                            </div>
                        </AnimatedSection>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            {/* AI Class Description Generator */}
                            <AnimatedSection>
                                <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 h-full">
                                    <div className="flex items-center mb-4">
                                        <Sparkles className="w-8 h-8 text-cyan-400 mr-4" />
                                        <h4 className="text-2xl font-bold text-white">AI Class Description Writer</h4>
                                    </div>
                                    <p className="text-gray-400 mb-6">Never write a class description again. Enter a class name and watch the magic hOneappen.</p>
                                    <div className="space-y-4">
                                        <input 
                                            type="text"
                                            value={className}
                                            onChange={(e) => setClassName(e.target.value)}
                                            placeholder="e.g., 'HIIT Explosion'"
                                            className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                        />
                                        <button 
                                            onClick={handleGenerateDescription}
                                            disabled={isGeneratingDescription}
                                            className="w-full flex items-center justify-center bg-cyan-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-cyan-600 transition-all disabled:bg-gray-600 disabled:cursor-not-allowed"
                                        >
                                            {isGeneratingDescription ? <LoaderCircle className="animate-spin mr-2" /> : <Sparkles className="mr-2" />}
                                            {isGeneratingDescription ? 'Generating...' : '✨ Generate Description'}
                                        </button>
                                        <div className="bg-gray-900 p-4 rounded-lg min-h-[100px] text-gray-300 italic">
                                            {classDescription}
                                        </div>
                                    </div>
                                </div>
                            </AnimatedSection>
                            
                            {/* AI Marketing Slogan Generator */}
                             <AnimatedSection delay={0.1}>
                                <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 h-full">
                                    <div className="flex items-center mb-4">
                                        <Sparkles className="w-8 h-8 text-cyan-400 mr-4" />
                                        <h4 className="text-2xl font-bold text-white">AI Marketing Slogan Creator</h4>
                                    </div>
                                    <p className="text-gray-400 mb-6">Stuck on marketing? Get instant, catchy slogans for your next campaign.</p>
                                    <div className="space-y-4">
                                        <input 
                                            type="text"
                                            value={campaignTheme}
                                            onChange={(e) => setCampaignTheme(e.target.value)}
                                            placeholder="e.g., 'Summer Shred'"
                                            className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                        />
                                        <button 
                                            onClick={handleGenerateSlogans}
                                            disabled={isGeneratingSlogans}
                                            className="w-full flex items-center justify-center bg-cyan-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-cyan-600 transition-all disabled:bg-gray-600 disabled:cursor-not-allowed"
                                        >
                                            {isGeneratingSlogans ? <LoaderCircle className="animate-spin mr-2" /> : <Sparkles className="mr-2" />}
                                            {isGeneratingSlogans ? 'Generating...' : '✨ Create Slogans'}
                                        </button>
                                        <div className="bg-gray-900 p-4 rounded-lg min-h-[100px]">
                                            <ul className="space-y-2">
                                            {slogans.map((slogan, i) => (
                                                <li key={i} className="text-gray-300 list-disc list-inside">{slogan}</li>
                                            ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </AnimatedSection>
                        </div>
                        {error && <p className="text-red-400 text-center mt-6">{error}</p>}
                    </div>
                </section>


                {/* How It Works Section */}
                <section id="how-it-works" className="py-24 bg-gray-900">
                    <div className="container mx-auto px-6">
                        <AnimatedSection>
                            <div className="text-center mb-20">
                                <h3 className="text-4xl md:text-5xl font-bold text-white">Launch in Three Simple Steps</h3>
                                <p className="mt-4 text-lg text-gray-400">Go from zero to hero in record time.</p>
                            </div>
                        </AnimatedSection>
                        <div className="relative">
                             {/* Connecting line */}
                            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-700/50 -translate-y-1/2"></div>
                            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-purple-500 -translate-y-1/2 opacity-0 animate-draw-line" style={{animationDelay: '0.5s', animationDuration: '2s'}}></div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                                {[
                                    { number: '1', title: 'Sign Up Free', description: 'Create your account. No credit card, no commitment.' },
                                    { number: '2', title: 'Customize', description: 'Set up your brand, classes, and membership plans.' },
                                    { number: '3', title: 'Go Live', description: 'Invite your members and start growing your community.' },
                                ].map((step, index) => (
                                    <AnimatedSection key={index} delay={index * 0.2}>
                                        <div className="text-center bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:-translate-y-2 transition-transform duration-300">
                                            <div className="relative inline-block mb-6">
                                                <div className="bg-cyan-500 text-white w-20 h-20 rounded-full flex items-center justify-center text-4xl font-bold shadow-[0_0_20px_rgba(56,189,248,0.5)]">{step.number}</div>
                                            </div>
                                            <h4 className="text-2xl font-bold text-white mb-3">{step.title}</h4>
                                            <p className="text-gray-400">{step.description}</p>
                                        </div>
                                    </AnimatedSection>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
                
                {/* Testimonials Section */}
                <section id="testimonials" className="py-24 bg-black">
                    <div className="container mx-auto px-6">
                        <AnimatedSection>
                            <div className="text-center mb-16">
                                <h3 className="text-4xl md:text-5xl font-bold text-white">Hear from Our Champions</h3>
                                 <p className="mt-4 text-lg text-gray-400">Real stories from gym owners who leveled up with GymFlow.</p>
                            </div>
                        </AnimatedSection>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {[
                                { name: 'Sarah L.', gym: 'FitZone Studio', quote: "GymFlow has revolutionized how we manage our studio. The automation features save us hours every week!", avatar: 'https://placehold.co/100x100/E9D5FF/4C1D95?text=SL' },
                                { name: 'Mike R.', gym: 'Iron Paradise Gym', quote: "The member Oneapp is a game-changer. Our members love the easy booking, and we've seen a huge increase in engagement.", avatar: 'https://placehold.co/100x100/C7D2FE/4338CA?text=MR' },
                                { name: 'Jessica P.', gym: 'YogaFlow Wellness', quote: "Switching to GymFlow was the best decision for our business. It's intuitive, powerful, and the support is top-notch.", avatar: 'https://placehold.co/100x100/A5F3FC/0E7490?text=JP' },
                            ].map((testimonial, index) => (
                               <AnimatedSection key={index} delay={index * 0.1}>
                                    <div className="bg-gray-800 p-8 rounded-xl shadow-lg flex flex-col h-full border border-gray-700">
                                        <div className="flex items-center mb-4">
                                            <Image src={testimonial.avatar} alt={testimonial.name} width={100} height={100} className="w-16 h-16 rounded-full mr-4 border-2 border-cyan-400" />
                                            <div>
                                                <p className="font-bold text-lg text-white">{testimonial.name}</p>
                                                <p className="text-gray-400">{testimonial.gym}</p>
                                            </div>
                                        </div>
                                        <div className="flex mb-4">
                                            {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />)}
                                        </div>
                                        <p className="text-gray-300 italic flex-grow">&quot;{testimonial.quote}&quot;</p>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Pricing Section */}
                <section id="pricing" className="py-24 bg-gray-900">
                    <div className="container mx-auto px-6">
                        <AnimatedSection>
                            <div className="text-center mb-16">
                                <h3 className="text-4xl md:text-5xl font-bold text-white">Find Your Perfect Fit</h3>
                                <p className="mt-4 text-lg text-gray-400">Simple, transparent pricing that scales with you.</p>
                            </div>
                        </AnimatedSection>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                            {/* Starter Plan */}
                            <AnimatedSection delay={0}>
                                <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 h-full">
                                    <h4 className="text-2xl font-bold text-cyan-400">Starter</h4>
                                    <p className="text-gray-400 mt-2">For new and small gyms</p>
                                    <p className="text-5xl font-extrabold text-white mt-6">$49<span className="text-lg font-medium text-gray-400">/mo</span></p>
                                    <ul className="mt-8 space-y-4">
                                        {[ 'Up to 100 members', 'Member Management', 'Class Scheduling', 'Basic Reporting'].map((item, i) => (
                                            <li key={i} className="flex items-center">
                                                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                                                <span className="text-gray-300">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <a href="#" className="mt-8 block w-full text-center bg-gray-700 border border-cyan-500 text-cyan-500 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all">Choose Plan</a>
                                </div>
                            </AnimatedSection>

                            {/* Pro Plan (Most Popular) */}
                            <AnimatedSection delay={0.1}>
                                <div className="bg-gradient-to-br from-cyan-500 to-blue-600 text-white p-10 rounded-xl shadow-2xl relative transform lg:scale-105">
                                    <span className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-yellow-400 text-gray-900 px-4 py-1 text-sm font-bold rounded-full uppercase tracking-wider">Most Popular</span>
                                    <h4 className="text-2xl font-bold">Pro</h4>
                                    <p className="opacity-90 mt-2">For growing businesses</p>
                                    <p className="text-5xl font-extrabold mt-6">$99<span className="text-lg font-medium opacity-90">/mo</span></p>
                                    <ul className="mt-8 space-y-4">
                                        {[ 'Up to 500 members', 'All Starter Features', 'Automated Billing', 'Member OneApp', '✨ AI Tools'].map((item, i) => (
                                            <li key={i} className="flex items-center">
                                                <CheckCircle className="w-5 h-5 text-white mr-3" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <a href="#" className="mt-8 block w-full text-center bg-white text-cyan-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105">Choose Plan</a>
                                </div>
                            </AnimatedSection>

                            {/* Enterprise Plan */}
                            <AnimatedSection delay={0.2}>
                                <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 h-full">
                                    <h4 className="text-2xl font-bold text-cyan-400">Enterprise</h4>
                                    <p className="text-gray-400 mt-2">For large-scale gyms</p>
                                    <p className="text-4xl font-extrabold text-white mt-6">Contact Us</p>
                                    <ul className="mt-8 space-y-4">
                                        {[ 'Unlimited members', 'All Pro Features', 'Dedicated Support', 'API Access', 'Custom Branding'].map((item, i) => (
                                            <li key={i} className="flex items-center">
                                                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                                                <span className="text-gray-300">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <a href="#" className="mt-8 block w-full text-center bg-gray-700 border border-cyan-500 text-cyan-500 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all">Contact Sales</a>
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section id="faq" className="py-24 bg-gray-900">
                    <div className="container mx-auto px-6 max-w-4xl">
                        <AnimatedSection>
                            <div className="text-center mb-16">
                                <h3 className="text-4xl md:text-5xl font-bold text-white">Your Questions, Answered</h3>
                                <p className="mt-4 text-lg text-gray-400">Everything you need to know to get started.</p>
                            </div>
                        </AnimatedSection>
                        <div className="space-y-6">
                            {[
                                { q: 'Is there a free trial?', a: 'Yes, we offer a 14-day free trial on our Starter and Pro plans. No credit card is required to get started.' },
                                { q: 'Can I change my plan later?', a: 'Absolutely! You can upgrade, downgrade, or cancel your plan at any time from your account dashboard.' },
                                { q: 'What are the AI tools?', a: 'Our AI tools, powered by Google\'s Gemini, help you generate marketing content like class descriptions and slogans instantly, saving you time and boosting creativity. They are included in our Pro and Enterprise plans.' },
                                { q: 'Is my data secure?', a: 'Data security is our top priority. We use industry-standard encryption and security practices to keep your data safe.' },
                            ].map((faq, index) => (
                                <AnimatedSection key={index} delay={index * 0.1}>
                                    <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                                        <h5 className="text-lg font-semibold text-cyan-400">{faq.q}</h5>
                                        <p className="mt-2 text-gray-300">{faq.a}</p>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer id="contact" className="bg-black text-white">
                <div className="container mx-auto px-6 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        <div className="md:col-span-1 lg:col-span-1">
                            <h4 className="text-lg font-semibold text-white">GymFlow</h4>
                            <p className="mt-4 text-gray-400">Empowering fitness businesses to thrive in the digital age.</p>
                        </div>
                        <div>
                            <h5 className="font-semibold text-gray-200 uppercase tracking-wider">Product</h5>
                            <ul className="mt-4 space-y-3">
                                <li><a href="#features" className="text-gray-400 hover:text-cyan-400 transition-colors">Features</a></li>
                                <li><a href="#ai-features" className="text-gray-400 hover:text-cyan-400 transition-colors">AI Tools</a></li>
                                <li><a href="#pricing" className="text-gray-400 hover:text-cyan-400 transition-colors">Pricing</a></li>
                                <li><a href="#testimonials" className="text-gray-400 hover:text-cyan-400 transition-colors">Testimonials</a></li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="font-semibold text-gray-200 uppercase tracking-wider">Company</h5>
                            <ul className="mt-4 space-y-3">
                                <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">About Us</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Careers</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Contact</a></li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="font-semibold text-gray-200 uppercase tracking-wider">Join our newsletter</h5>
                            <p className="mt-4 text-gray-400">Get the latest news, updates, and tips.</p>
                            <form className="mt-4 flex">
                                <input type="email" placeholder="Enter your email" className="w-full px-4 py-2 rounded-l-lg text-gray-800 bg-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
                                <button type="submit" className="bg-cyan-500 text-white px-4 rounded-r-lg hover:bg-cyan-600 font-semibold transition-colors">Subscribe</button>
                            </form>
                        </div>
                    </div>
                    <div className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-500">
                        <p>&copy; {new Date().getFullYear()} GymFlow. All rights reserved.</p>
                    </div>
                </div>
            </footer>
             <style jsx global>{`
                @keyframes draw-line {
                    to {
                        opacity: 1;
                        width: 100%;
                    }
                }
                .animate-draw-line {
                    animation: draw-line 1.5s ease-out forwards;
                }
            `}</style>
        </div>
    );
};

export default OneApp;
