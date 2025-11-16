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
  Briefcase,
} from 'lucide-react';
import { useEffect, useState, Dispatch, SetStateAction } from 'react';
import Footer from '../components/Footer';

interface ServicesProps {
  setActivePage: Dispatch<SetStateAction<string>>;
}

export default function Services({ setActivePage }: ServicesProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const manpowerServices = [
    {
      icon: <HardHat size={32} />,
      title: 'Monthly Staffing Arrangements',
      description:
        'Qualified manpower supplied on a monthly basis to support your ongoing operations with full legal compliance.',
      examples: [
        'Long-term site staffing',
        'Operations support teams',
        'Back-office manpower',
        'Project-based crews',
      ],
    },
    {
      icon: <Wrench size={32} />,
      title: 'Direct Recruitment',
      description:
        'End-to-end sourcing, screening, and placement of candidates directly onto your company payroll.',
      examples: [
        'Engineers & supervisors',
        'Technical specialists',
        'Administrative staff',
        'Management roles',
      ],
    },
    {
      icon: <Users size={32} />,
      title: 'Indirect Hiring & Sponsorship',
      description:
        'Facilitating the indirect hiring and sponsorship of skilled workers for long-term roles in line with local labor regulations.',
      examples: [
        'Skilled technicians',
        'Long-term site staff',
        'Specialized contractors',
        'Key operational roles',
      ],
    },
  ];

  const contractServices = [
    {
      icon: <FileText size={32} />,
      title: 'Third-Party Coordination',
      description:
        'Seamless coordination with subcontractors, vendors, and stakeholders to ensure smooth project execution.',
    },
    {
      icon: <ClipboardCheck size={32} />,
      title: 'Contract Administration',
      description:
        'Comprehensive management of contracts, documentation, compliance, and legal requirements throughout the project lifecycle.',
    },
    {
      icon: <Handshake size={32} />,
      title: 'Vendor Management',
      description:
        'Professional liaison services between your organization and third-party service providers for optimal results.',
    },
  ];

  const equipmentServices = [
    {
      icon: <CreditCard size={32} />,
      title: 'Cranes & Lifting Equipment',
      description:
        'Mobile cranes, tower cranes, and specialized lifting equipment for heavy-duty operations.',
      color: 'bg-[#1D4ED8]',
    },
    {
      icon: <Truck size={32} />,
      title: 'Trucks & Transport',
      description:
        'Dump trucks, flatbed trucks, and specialized transport vehicles for material handling and logistics.',
      color: 'bg-[#F59E0B]',
    },
    {
      icon: <Construction size={32} />,
      title: 'Excavators & Earthmoving',
      description:
        'Hydraulic excavators, bulldozers, backhoes, and loaders for excavation and earthmoving projects.',
      color: 'bg-[#1D4ED8]',
    },
    {
      icon: <Drill size={32} />,
      title: 'Drilling & Piling Equipment',
      description:
        'Advanced drilling rigs and piling equipment for foundation work and specialized drilling operations.',
      color: 'bg-[#F59E0B]',
    },
    {
      icon: <Settings size={32} />,
      title: 'Concrete Equipment',
      description:
        'Concrete mixers, pumps, vibrators, and finishing equipment for all concrete-related work.',
      color: 'bg-[#1D4ED8]',
    },
    {
      icon: <Zap size={32} />,
      title: 'Generators & Power',
      description:
        'Diesel generators, power distribution units, and backup power solutions for uninterrupted operations.',
      color: 'bg-[#F59E0B]',
    },
  ];

  const managementGroups = [
    {
      icon: <Briefcase size={28} />,
      title: 'Market Entry & Setup',
      description:
        'Support for entering and establishing your business in Oman with the right structure and partners.',
      items: [
        'Market Research & Pricing Analysis',
        'Company Formation & CR Registration',
        'Local Partners & Investors Matchmaking',
        'Local Partner Representation',
      ],
    },
    {
      icon: <FileText size={28} />,
      title: 'Legal, Tenders & Government',
      description:
        'End-to-end support across contracts, tenders, and government relations to keep you compliant and competitive.',
      items: [
        'Commercial Contracts & Agreements',
        'Tender Preparation & Submission',
        'Government Relations & PRO Services',
      ],
    },
    {
      icon: <Zap size={28} />,
      title: 'Strategy & Business Growth',
      description:
        'Strategic insights and business development services to grow and sustain your operations.',
      items: [
        'Feasibility Studies & Investment Analysis',
        'Business Development Strategies',
        'Economic Data & Market Intelligence',
        'B2B Meetings & Client Introductions',
      ],
    },
  ];

  return (
    <div className="pt-16 md:pt-20">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-[#0B1F3B] to-[#050816]">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1154510/pexels-photo-1154510.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10" />

        <div
          className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our <span className="text-[#F59E0B]">Services</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Integrated solutions for manpower supply, subcontracting, heavy
            equipment rental, and strategic management services.
          </p>
        </div>
      </section>

      {/* Manpower Supply */}
      <section className="py-20 section-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Manpower Supply Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Legal, compliant workforce solutions from monthly staffing
              arrangements to direct recruitment and indirect hiring support.
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
                  <p className="text-sm font-semibold text-gray-700 mb-2">
                    Examples:
                  </p>
                  <ul className="space-y-1">
                    {service.examples.map((example, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-gray-600 flex items-center gap-2"
                      >
                        <div className="w-1.5 h-1.5 bg-[#F59E0B] rounded-full" />
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
              All workers are fully compliant with labor laws, insured, and
              background-verified for your peace of mind.
            </p>
          </div>
        </div>
      </section>

      {/* Subcontracting & Contract Management */}
      <section className="py-20 section-surface-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Subcontracting & Contract Management
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional third-party coordination and comprehensive contract
              administration services for complex projects.
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

      {/* Management Services – improved */}
      <section className="py-20 section-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Management Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Strategic management support covering market entry, contracts,
              government relations, and long-term business growth in Oman.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {managementGroups.map((group, index) => (
              <div
                key={group.title}
                className="bg-gray-50 rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="bg-[#1D4ED8] text-white w-14 h-14 rounded-lg flex items-center justify-center mb-5">
                  {group.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {group.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {group.description}
                </p>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-gray-700 text-sm"
                    >
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Heavy Equipment Rental */}
      <section className="py-20 section-surface-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Heavy Equipment Rental
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Modern, well-maintained machinery and equipment for all
              construction and industrial needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {equipmentServices.map((service, index) => (
              <div
                key={service.title}
                className="bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`${service.color} text-white w-14 h-14 rounded-lg flex items-center justify-center mb-4`}
                >
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
              Can't find what you're looking for? We offer specialized equipment
              sourcing and custom rental solutions.
            </p>
            <button
              onClick={() => setActivePage('contact')}
              className="bg-white text-[#F59E0B] px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-gray-100 hover:scale-105"
            >
              Contact Us for Custom Solutions
            </button>
          </div>
        </div>
      </section>

      <Footer setActivePage={setActivePage} />
    </div>
  );
}
