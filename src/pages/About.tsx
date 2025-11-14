import { Target, Award, Shield, Users, TrendingUp, Clock } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const values = [
    {
      icon: <Shield size={32} />,
      title: 'Legal Compliance',
      description: 'Full adherence to labor laws and safety regulations',
    },
    {
      icon: <Award size={32} />,
      title: 'Quality Service',
      description: 'Excellence in every aspect of our operations',
    },
    {
      icon: <Users size={32} />,
      title: 'Client Focus',
      description: 'Your success is our primary objective',
    },
    {
      icon: <Clock size={32} />,
      title: 'Timely Delivery',
      description: 'Meeting deadlines with precision and reliability',
    },
  ];

  const reasons = [
    {
      title: 'Experienced Leadership',
      description: 'Our management team brings decades of combined experience in manpower supply, contract management, and equipment rental services.',
    },
    {
      title: 'Certified Workforce',
      description: 'All our workers are vetted, trained, and certified according to industry standards, ensuring safe and efficient operations.',
    },
    {
      title: 'Modern Equipment',
      description: 'Our fleet consists of well-maintained, modern machinery that meets all safety and efficiency requirements.',
    },
    {
      title: 'Flexible Solutions',
      description: 'We tailor our services to match your specific project requirements, timeline, and budget constraints.',
    },
  ];

  return (
    <div className="pt-16 md:pt-20">
      <section className="relative py-20 bg-gradient-to-br from-[#0B1F3B] to-[#050816]">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10"></div>

        <div className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            About <span className="text-[#F59E0B]">ProManpower+</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Building partnerships through reliable service, professional excellence, and unwavering commitment to our clients' success.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="animate-fade-in-up">
              <div className="flex items-center gap-3 mb-6">
                <Target className="text-[#1D4ED8]" size={40} />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                To provide industry-leading manpower solutions, contract management services, and equipment rental options that empower our clients to complete their projects safely, efficiently, and within budget.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We strive to be the most trusted partner in the construction and industrial sectors by maintaining the highest standards of compliance, safety, and professionalism in everything we do.
              </p>
            </div>
            <div className="relative animate-fade-in">
              <img
                src="https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team collaboration"
                className="rounded-xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#1D4ED8] text-white p-6 rounded-lg shadow-xl">
                <TrendingUp size={40} className="mb-2" />
                <p className="text-2xl font-bold">15+ Years</p>
                <p className="text-sm">Industry Experience</p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="bg-[#1D4ED8] text-white p-4 rounded-lg">
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We differentiate ourselves through commitment to excellence, comprehensive service offerings, and unwavering dedication to client satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-2 h-full bg-[#F59E0B] rounded-full"></div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {reason.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#1D4ED8] to-[#0B1F3B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can support your next project with our comprehensive manpower, contract management, and equipment rental solutions.
          </p>
          <button className="bg-[#F59E0B] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-white hover:text-[#1D4ED8] hover:scale-105 shadow-xl">
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  );
}
