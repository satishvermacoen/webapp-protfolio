import Footer from '@/components/landingpage/Footer'
import Header from '@/components/landingpage/Header'
import Icon from '@/components/landingpage/Icon'
import SectionTitle from '@/components/landingpage/SectionTitle'
import React from 'react'

const page = () => {
  return (
    <div className="pt-24 bg-white">
      <Header/>
        <section id="contact-form" className="py-24 bg-gray-50">
            <div className="container mx-auto px-6">
                <SectionTitle>Get In Touch</SectionTitle>
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-xl shadow-lg">
                        <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                        <form>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Full Name</label>
                                <input type="text" id="name" name="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500 transition" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email Address</label>
                                <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500 transition" />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
                                <textarea id="message" name="message" rows={5} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500 transition"></textarea>
                            </div>
                            <button type="submit" className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-rose-500/30">
                                Send Message
                            </button>
                        </form>
                    </div>
                    {/* Contact Info */}
                    <div className="space-y-6">
                         <div className="bg-white p-6 rounded-xl shadow-lg flex items-center">
                            <div className="p-4 bg-gradient-to-br from-pink-100 to-rose-100 text-pink-500 rounded-full mr-5">
                                <Icon name="mail" className="w-7 h-7" />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg text-gray-900">Email</h4>
                                <a href="mailto:hello@janedoe.design" className="text-gray-600 hover:text-pink-500">hello@janedoe.design</a>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-lg flex items-center">
                            <div className="p-4 bg-gradient-to-br from-pink-100 to-rose-100 text-pink-500 rounded-full mr-5">
                                <Icon name="phone" className="w-7 h-7" />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg text-gray-900">Phone</h4>
                                <p className="text-gray-600">+1 (123) 456-7890</p>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-lg flex items-center">
                            <div className="p-4 bg-gradient-to-br from-pink-100 to-rose-100 text-pink-500 rounded-full mr-5">
                                <Icon name="map-pin" className="w-7 h-7" />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg text-gray-900">Location</h4>
                                <p className="text-gray-600">123 Design St, Creative City</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      <Footer/>
    </div>
  )
}

export default page