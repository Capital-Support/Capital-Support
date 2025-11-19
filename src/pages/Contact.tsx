import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from 'lucide-react';
import { useEffect, useState, Dispatch, SetStateAction } from 'react';
import emailjs from '@emailjs/browser';
import Footer from '../components/Footer';

interface ContactProps {
  setActivePage: Dispatch<SetStateAction<string>>;
}

export default function Contact({ setActivePage }: ContactProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<null | { type: 'success' | 'error'; message: string }>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);

    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setStatus({
        type: 'error',
        message: 'Please fill in all required fields before submitting.',
      });
      return;
    }

    try {
      setIsSubmitting(true);

      const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
      const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
      const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company || 'N/A',
        phone: formData.phone,
        message: formData.message,
        to_email: 'mhammadhouj@gmail.com, mady@capitaloman.com',
      };

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);

      setStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully. We will contact you shortly.',
      });

      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        message: '',
      });
    } catch (error) {
      console.error('Email send error:', error);
      setStatus({
        type: 'error',
        message:
          'Something went wrong while sending your message. Please try again or contact us directly by phone or email.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const openWhatsApp = () => {
    const phoneNumber = '96877786668';
    const defaultMessage = encodeURIComponent(
      'Hello, I would like to inquire about your manpower, equipment, or management services.'
    );
    const url = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

    if (typeof window !== 'undefined') {
      window.open(url, '_blank');
    }
  };

  const contactInfo = [
    {
      icon: <Phone size={28} />,
      title: 'Phone',
      details: ['+968 7778 6668'],
      color: 'bg-[#1D4ED8]',
    },
    {
      icon: <Mail size={28} />,
      title: 'Email',
      details: ['mady@capitaloman.com'],
      color: 'bg-[#F59E0B]',
    },
    {
      icon: <MapPin size={28} />,
      title: 'Office Address',
      details: ['564 St. Bawsher', ' Muscat, Sultanate of Oman'],
      color: 'bg-[#1D4ED8]',
    },
    {
      icon: <Clock size={28} />,
      title: 'Business Hours',
      details: ['Monday - Friday: 8:00 AM - 6:00 PM', 'Saturday: 9:00 AM - 2:00 PM'],
      color: 'bg-[#F59E0B]',
    },
  ];

  return (
    <div className="pt-16 md:pt-20">
      <section className="relative py-20 bg-gradient-to-br from-[#0B1F3B] to-[#050816]">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/7376/startup-photos.jpg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10"></div>

        <div
          className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Get In <span className="text-[#F59E0B]">Touch</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to start your project? Contact us today for a consultation and custom quote tailored to your needs.
          </p>
        </div>
      </section>

      <section className="py-20 section-surface-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`${info.color} text-white w-14 h-14 rounded-lg flex items-center justify-center mb-4`}>
                  {info.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {info.title}
                </h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600 text-sm">
                    {detail}
                  </p>
                ))}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="animate-fade-in-up">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <MessageSquare className="text-[#1D4ED8]" size={32} />
                  <h2 className="text-3xl font-bold text-gray-900">Send Us a Message</h2>
                </div>

                {status && (
                  <div
                    className={`mb-4 rounded-lg px-4 py-3 text-sm ${
                      status.type === 'success'
                        ? 'bg-green-50 text-green-700 border border-green-200'
                        : 'bg-red-50 text-red-700 border border-red-200'
                    }`}
                  >
                    {status.message}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8] transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8] transition-all"
                      placeholder="Your Company"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8] transition-all"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8] transition-all"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8] transition-all resize-none"
                      placeholder="Tell us about your project requirements..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-[#1D4ED8] text-white py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg flex items-center justify-center gap-2 group ${
                      isSubmitting
                        ? 'opacity-70 cursor-not-allowed'
                        : 'hover:bg-[#F59E0B] hover:scale-105'
                    }`}
                  >
                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                    {!isSubmitting && (
                      <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                    )}
                  </button>
                </form>
              </div>
            </div>

            <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="bg-gradient-to-br from-[#1D4ED8] to-[#0B1F3B] rounded-xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Why Contact Us?</h3>
                <ul className="space-y-4">
                  {[
                    'Free initial consultation and project assessment',
                    'Competitive pricing with transparent quotes',
                    'Rapid response within 24 hours',
                    'Customized solutions for your specific needs',
                    'Expert guidance from experienced professionals',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#F59E0B] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-100">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Connect on WhatsApp</h3>
                <p className="text-gray-600 mb-6">
                  For quick inquiries and instant responses, reach out to us on WhatsApp.
                </p>
                <button
                  onClick={openWhatsApp}
                  className="w-full bg-[#25D366] text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-[#20BA5A] hover:scale-105 flex items-center justify-center gap-2"
                >
                  <MessageSquare size={20} />
                  <span>Chat on WhatsApp</span>
                </button>
              </div>

              <div className="bg-gray-100 rounded-xl p-2 h-64">
                <div className="w-full h-full rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.3498356504842!2d58.39851197478618!3d23.555875896217515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e91fe43c18236e9%3A0xa8148420694316a!2s564%20Bawshar%20St%2C%20Muscat%2C%20Oman!5e0!3m2!1sen!2slb!4v1763405125546!5m2!1sen!2slb"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full border-0"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer setActivePage={setActivePage} />
    </div>
  );
}
