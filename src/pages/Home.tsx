import { Users, FileText, Truck, ArrowRight, CheckCircle, Briefcase } from 'lucide-react';
import { useEffect, useState, Dispatch, SetStateAction } from 'react';
import Footer from '../components/Footer';
import CountUp from '../components/CountUp';


interface HomeProps {
  setActivePage: Dispatch<SetStateAction<string>>;
}

export default function Home({ setActivePage }: HomeProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <Users size={40} />,
      title: 'Manpower Supply',
      description:
        'Flexible, compliant workforce solutions from monthly staffing to direct recruitment of qualified manpower.',
      color: 'bg-[#1D4ED8]',
    },
    {
      icon: <FileText size={40} />,
      title: 'Subcontracting & Contract Management',
      description:
        'Professional third-party coordination and comprehensive contract management services for seamless project execution.',
      color: 'bg-[#F59E0B]',
    },
    {
      icon: <Truck size={40} />,
      title: 'Equipment Rental',
      description:
        'Heavy machinery and equipment rental including cranes, trucks, excavators, and more for all construction needs.',
      color: 'bg-[#1D4ED8]',
    },
    {
      icon: <Briefcase size={40} />,
      title: 'Management Services',
      description:
        'Strategic management support including market research, company formation, contracts, tenders, and business development in Oman.',
      color: 'bg-[#F59E0B]',
    },
  ];

  const stats = [
    { value: 500, suffix: '+', label: 'Active Workers' },
    { value: 150, suffix: '+', label: 'Projects Completed' },
    { value: 50, suffix: '+', label: 'Equipment Fleet' },
    { value: 99, suffix: '%', label: 'Client Satisfaction' }
  ];


  return (
    <div className="pt-16 md:pt-20">
      <section
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#050816] via-[#0B1F3B] to-[#0B1F3B] overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10"></div>

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B1F3B]/50 to-[#0B1F3B]"></div>

        <div
          className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Reliable Manpower, Contracts <br />
            <span className="text-[#F59E0B]">& Equipment Solutions</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Your trusted partner for legal manpower supply, professional subcontracting services, and comprehensive heavy equipment rental solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => setActivePage('contact')}
              className="group bg-[#1D4ED8] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-[#F59E0B] hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              Request Manpower
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => setActivePage('services')}
              className="group bg-transparent text-white px-8 py-4 rounded-lg font-semibold text-lg border-2 border-[#F59E0B] transition-all duration-300 hover:bg-[#F59E0B] hover:scale-105 shadow-lg"
            >
              View Services
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-gray-400 rounded-full"></div>
          </div>
        </div>
      </section>

      <section className="py-20 section-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl md:text-5xl font-bold text-[#1D4ED8] mb-2">
                  <CountUp 
                    to={stat.value}
                    duration={1}
                    delay={index * 0.1}
                    separator=',' />
                  {stat.suffix}
                </div>
                <div className="text-sm md:text-base text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions tailored to meet your industrial and construction needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div
                  className={`${feature.color} w-16 h-16 rounded-lg flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#0B1F3B] to-[#050816]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose Capital Support?
              </h2>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                We deliver excellence through commitment, compliance, and comprehensive service offerings that set industry standards.
              </p>
              <div className="space-y-4">
                {[
                  'Fully licensed and compliant manpower solutions',
                  'Experienced team with proven track record',
                  'Modern equipment fleet maintained to highest standards',
                  'Flexible contracts tailored to project requirements',
                  '24/7 support and rapid response times',
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 animate-slide-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CheckCircle className="text-[#F59E0B] flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative animate-fade-in">
              <img
                src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Construction site"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3B] to-transparent rounded-xl opacity-40"></div>
            </div>
          </div>
        </div>
      </section>

      <Footer setActivePage={setActivePage} />
    </div>
  );
}
