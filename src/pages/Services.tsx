import {
  Users,
  HardHat,
  Wrench,
  FileText,
  ClipboardCheck,
  Handshake,
  Truck,
  Construction,
  Drill,
  Settings,
  Zap,
  CreditCard,
} from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const manpowerServices = [
    {
      icon: <HardHat size={32} />,
      title: 'Skilled Workers',
      description: 'Certified technicians, operators, and specialized craftsmen with proven expertise in their respective fields.',
      examples: ['Electricians', 'Plumbers', 'Welders', 'Heavy Equipment Operators'],
    },
    {
      icon: <Wrench size={32} />,
      title: 'Semi-Skilled Workers',
      description: 'Experienced workers with practical knowledge and hands-on capabilities for various construction tasks.',
      examples: ['Carpenters', 'Masons', 'Painters', 'Steel Fixers'],
    },
    {
      icon: <Users size={32} />,
      title: 'Unskilled Workers',
      description: 'Reliable general laborers ready to support your project with basic construction and maintenance work.',
      examples: ['General Laborers', 'Helpers', 'Cleaners', 'Material Handlers'],
    },
  ];

  const contractServices = [
    {
      icon: <FileText size={32} />,
      title: 'Third-Party Coordination',
      description: 'Seamless coordination with subcontractors, vendors, and stakeholders to ensure smooth project execution.',
    },
    {
      icon: <ClipboardCheck size={32} />,
      title: 'Contract Administration',
      description: 'Comprehensive management of contracts, documentation, compliance, and legal requirements throughout project lifecycle.',
    },
    {
      icon: <Handshake size={32} />,
      title: 'Vendor Management',
      description: 'Professional liaison services between your organization and third-party service providers for optimal results.',
    },
  ];

  const equipmentServices = [
    {
      icon: <CreditCard size={32} />,
      title: 'Cranes & Lifting Equipment',
      description: 'Mobile cranes, tower cranes, and specialized lifting equipment for heavy-duty operations.',
      color: 'bg-[#1D4ED8]',
    },
    {
      icon: <Truck size={32} />,
      title: 'Trucks & Transport',
      description: 'Dump trucks, flatbed trucks, and specialized transport vehicles for material handling and logistics.',
      color: 'bg-[#F59E0B]',
    },
    {
      icon: <Construction size={32} />,
      title: 'Excavators & Earthmoving',
      description: 'Hydraulic excavators, bulldozers, backhoes, and loaders for excavation and earthmoving projects.',
      color: 'bg-[#1D4ED8]',
    },
    {
      icon: <Drill size={32} />,
      title: 'Drilling & Piling Equipment',
      description: 'Advanced drilling rigs and piling equipment for foundation work and specialized drilling operations.',
      color: 'bg-[#F59E0B]',
    },
    {
      icon: <Settings size={32} />,
      title: 'Concrete Equipment',
      description: 'Concrete mixers, pumps, vibrators, and finishing equipment for all concrete-related work.',
      color: 'bg-[#1D4ED8]',
    },
    {
      icon: <Zap size={32} />,
      title: 'Generators & Power',
      description: 'Diesel generators, power distribution units, and backup power solutions for uninterrupted operations.',
      color: 'bg-[#F59E0B]',
    },
  ];

  return (
    <div className="pt-16 md:pt-20">
      <section className="relative py-20 bg-gradient-to-br from-[#0B1F3B] to-[#050816]">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1154510/pexels-photo-1154510.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10"></div>

        <div className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our <span className="text-[#F59E0B]">Services</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive solutions for all your manpower, contract management, and equipment rental needs.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Manpower Supply Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Legal, compliant workforce solutions with fully vetted and certified workers across all skill levels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {manpowerServices.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="bg-[#1D4ED8] text-white w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Examples:</p>
                  <ul className="space-y-1">
                    {service.examples.map((example, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#F59E0B] rounded-full"></div>
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-[#1D4ED8] to-[#0B1F3B] rounded-xl p-8 text-center text-white">
            <p className="text-lg font-semibold">
              All workers are fully compliant with labor laws, insured, and background-verified for your peace of mind.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Subcontracting & Contract Management
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional third-party coordination and comprehensive contract administration services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contractServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="bg-[#F59E0B] text-white w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Heavy Equipment Rental
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Modern, well-maintained machinery and equipment for all construction and industrial needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {equipmentServices.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`${service.color} text-white w-14 h-14 rounded-lg flex items-center justify-center mb-4`}>
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-[#F59E0B] to-[#D97706] rounded-xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">Need Custom Equipment?</h3>
            <p className="text-lg mb-6">
              Can't find what you're looking for? We offer specialized equipment sourcing and custom rental solutions.
            </p>
            <button className="bg-white text-[#F59E0B] px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-gray-100 hover:scale-105">
              Contact Us for Custom Solutions
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#0B1F3B] to-[#050816]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Contact us today to discuss your project requirements. Our team will provide tailored solutions and competitive quotes for all your manpower, contract management, and equipment needs.
              </p>
              <div className="space-y-4">
                {[
                  'Flexible rental periods and contract terms',
                  'Competitive pricing with transparent costs',
                  'Rapid deployment and logistics support',
                  'Maintenance and technical support included',
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#F59E0B] rounded-full"></div>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Request a Quote</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]"
                />
                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]">
                  <option>Select Service Type</option>
                  <option>Manpower Supply</option>
                  <option>Contract Management</option>
                  <option>Equipment Rental</option>
                  <option>Multiple Services</option>
                </select>
                <textarea
                  placeholder="Project Details"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]"
                ></textarea>
                <button className="w-full bg-[#1D4ED8] text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-[#F59E0B]">
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
