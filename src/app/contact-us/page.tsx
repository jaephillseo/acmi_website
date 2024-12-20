'use client';

  import React, { useRef } from 'react';
  import emailjs from '@emailjs/browser';
  import '@/styles/contact.css'
  import { MapPin, Phone, Mail } from 'lucide-react';
  
  const ContactUs = () => {
    const form = useRef<HTMLFormElement>(null);
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [validationMessage, setValidationMessage] = React.useState('');
  
    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setValidationMessage('');
  
      const name = form.current?.['user_name'].value;
      const email = form.current?.['user_email'].value;
      const subject = form.current?.['subject'].value;
      const message = form.current?.['message'].value;
  
      if (!name || !email || !subject || !message) {
        setValidationMessage('Please fill in all fields.');
        return;
      }
  
      if (form.current) {
        emailjs
          .sendForm(
            'service_k7xvyb6',
            'template_78sm6qp',
            form.current,
            '-E9irREi5AoJBWsLr'
          )
          .then(
            (result) => {
              console.log(result.text);
              setIsModalOpen(true);
              if (form.current) {
                form.current.reset();
              }
            },
            (error) => {
              console.log(error.text);
            }
          );
      }
    };
  
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div
          className="contact-hero h-[40vh] lg:h-[50vh] flex items-center justify-center"
          style={{
            backgroundImage: "url('/images/stock/stockimage1.jpg')"
          }}
        >
          <div className="text-center text-white space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Get in Touch
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto px-4">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </div>
  
        {/* Contact Section */}
        <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <div className="contact-info-card p-8 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Our Office</p>
                      <p className="text-gray-600">
                        Jl. Millennium Raya 3B, Blok H1,
                        <br />
                        Desa Peusar, Panongan,
                        <br />
                        Tangerang, Banten 15710
                      </p>
                    </div>
                  </div>
  
                  <div className="flex items-center space-x-4">
                    <Phone className="w-6 h-6 text-blue-600" />
                    <div>
                      <p className="font-semibold">Phone</p>
                      <p className="text-gray-600">+62 21-2915-9080</p>
                    </div>
                  </div>
  
                  <div className="flex items-center space-x-4">
                    <Mail className="w-6 h-6 text-blue-600" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-gray-600">support@hsk.co.id</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="contact-form-container p-8 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                
                <form ref={form} onSubmit={sendEmail} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="user_name"
                        className="contact-input w-full px-4 py-3 rounded-lg border border-gray-300"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        name="user_email"
                        className="contact-input w-full px-4 py-3 rounded-lg border border-gray-300"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      className="contact-input w-full px-4 py-3 rounded-lg border border-gray-300"
                      placeholder="How can we help?"
                    />
                  </div>
  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={6}
                      className="contact-input w-full px-4 py-3 rounded-lg border border-gray-300"
                      placeholder="Your message here..."
                    />
                  </div>
  
                  <button
                    type="submit"
                    className="contact-submit-btn w-full md:w-auto px-8 py-3 text-white font-medium rounded-lg"
                  >
                    Send Message
                  </button>
                </form>
  
                {validationMessage && (
                  <div className="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-400 text-yellow-700">
                    {validationMessage}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
  
        {/* Success Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Thank You!
              </h3>
              <p className="text-gray-600 mb-6">
                Your message has been sent successfully. We'll get back to you soon.
              </p>
              <button
                onClick={() => setIsModalOpen(false)}
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    );
  };
  
  export default ContactUs;