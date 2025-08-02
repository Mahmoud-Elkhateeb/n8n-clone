'use client';
import { useEffect, useRef, useState } from 'react';
import TextType from './TextType';
import LightRays from './LightRays';
import ChromaGrid from './ChromaGrid'
import 'aos/dist/aos.css';








export default function AboutPage() {

  const [counters, setCounters] = useState({
    projects: 0,
    team: 0,
    satisfaction: 0,
    support: "0/7"
  });

  const floatingElementsRef = useRef([]);
  const statsSectionRef = useRef(null);



  // Handle scroll animations
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      floatingElementsRef.current.forEach((element, index) => {
        if (element) {
          const speed = 0.5 + (index * 0.1);
          element.style.transform = `translateY(${scrolled * speed}px)`;
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animate counters when stats section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateCounters();
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (statsSectionRef.current) {
      observer.observe(statsSectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateCounters = () => {
    const targets = { projects: 500, team: 50, satisfaction: 98 };
    const duration = 2000;

    Object.keys(targets).forEach(key => {
      let start = 0;
      const increment = targets[key] / (duration / 50);

      const timer = setInterval(() => {
        start += increment;
        if (start >= targets[key]) {
          setCounters(prev => ({ ...prev, [key]: targets[key] }));
          clearInterval(timer);
        } else {
          setCounters(prev => ({ ...prev, [key]: Math.floor(start) }));
        }
      }, 50);
    });

    // Special case for support counter
    setTimeout(() => {
      setCounters(prev => ({ ...prev, support: "24/7" }));
    }, duration);
  };


  const services = [
    {
      icon: "💻",
      title: "ERP (ENTERPRISE RESOURCE PLANNING)",
      description: "The system includes accounting, purchasing management, sales management, distribution and transportation management, sales and customer service applications, warehouse management, expense and payroll management, human resources, fleet management, manufacturing and maintenance management, customer management, project management, and integration with WhatsApp and email.",
      features: ["Accounting", "Sales", "Warehousing", "Integration"]
    },
    {
      icon: "📱",
      title: "CUSTOM BUSINESS APPLICATIONS",
      description: "We design and develop custom mobile and web applications including HR systems, booking platforms, and trading interfaces. Ourdevelopment approach emphasizes scalability, intuitive user interfaces, and high performance across devices, ensuring optimal user experience and business efficiency",
      features: ["Customization", "Scalability", "Usability", "Performance"]
    },
    {
      icon: "☁️",
      title: "MODULE DEVELOPMENT & CUSTOMIZATION",
      description: "We build and tailor ERP modules to extend core system functionality in line with unique business processes. Whether enhancingexisting components or developing new ones from scratch, we ensure modular flexibility that supports business growth and oper-ational specificity.",
      features: ["Enhancement", "Tailoring", "Flexibility", "Growth"]
    },
    {
      icon: "🤖",
      title: "GAP ANALYSIS & CONSULTATION",
      description: "We conduct comprehensive gap analyses to identify disparities between current systems and business goals. Our strategic con-sultation services are designed to optimize ERP adoption, streamline operations, and maximize return on investment.",
      features: ["Analysis", "Optimization", "Streamlining", "Investment"]
    },
    {
      icon: "🔄",
      title: "TECHNICAL SUPPORT & MAINTENANCE",
      description: "We provide ongoing technical support and system maintenance, including bug resolution, performance monitoring, and regular updates. Our team ensures your system stays reliable, secure, and efficient around the clock",
      features: ["Support", "Maintenance", "Reliability", "Security"]
    },
    {
      icon: "🛡️",
      title: "SAAS SOLUTIONS (PLANNED)",
      description: "We are developing scalable, cloud-hosted Software-as-a-Service (SaaS) solutions offering clients cost-effective access to high-performance business applications on a subscription basis. These solutions will support rapid deployment, flexibility, and operational agility",
      features: ["Scalability", "Cost-effectiveness", "Flexibility", "Agility"]
    }
  ];

  const values = [
    {
      icon: "💡",
      title: "Delivering Value and Smart Investment",
      text: "We are committed to delivering solutions that make a real impact and enhance our clients' return on investment (ROI)."
    },
    {
      icon: "🤝",
      title: "Innovation and Sustainable Development",
      text: "We believe innovation drives growth and develop sustainable solutions for a changing world."
    },
    {
      icon: "⭐",
      title: "Quality and Excellence",
      text: "We consistently strive to deliver high-quality services that exceed ex-pectations and achieve excellence in every detail."
    },
    {
      icon: "🌱",
      title: "Commitment and Trust",
      text: "We build long-term relationships based on credibility and transparen-cy with our partners and clients."
    }
  ];

  const teamMembers = [
    {
      initials: "AS",
      name: "Alex Smith",
      role: "CEO & Founder",
      bio: "Visionary leader with 15+ years in software development. Passionate about creating solutions that drive constant growth."
    },
    {
      initials: "MJ",
      name: "Maria Johnson",
      role: "CTO",
      bio: "Technology expert specializing in scalable architectures and innovative development practices."
    },
    {
      initials: "DL",
      name: "David Lee",
      role: "Lead Designer",
      bio: "Creative mind behind our user experiences, ensuring every interaction is intuitive and delightful."
    },
    {
      initials: "SB",
      name: "Sarah Brown",
      role: "Product Manager",
      bio: "Strategic thinker who bridges the gap between client needs and technical solutions."
    }
  ];




  const items = [
    {
      image: "https://i.pravatar.cc/300?img=1",
      title: "Sarah Johnson",
      subtitle: "Frontend Developer",
      handle: "@sarahjohnson",
      borderColor: "#3B82F6",
      gradient: "linear-gradient(145deg, #3B82F6, #000)",
      url: "https://github.com/sarahjohnson"
    },
    {
      image: "https://i.pravatar.cc/300?img=2",
      title: "Mike Chen",
      subtitle: "Backend Engineer",
      handle: "@mikechen",
      borderColor: "#10B981",
      gradient: "linear-gradient(180deg, #10B981, #000)",
      url: "https://linkedin.com/in/mikechen"
    },
    {
      image: "https://i.pravatar.cc/300?img=8",
      title: "Alex Rivera",
      subtitle: "Full Stack Developer",
      handle: "@alexrivera",
      borderColor: "#4F46E5",
      gradient: "linear-gradient(145deg,#4F46E5,#000)",
      url: "https://github.com/",
    },
    {
      image: "https://i.pravatar.cc/300?img=3",
      title: "Morgan Blake",
      subtitle: "UI/UX Designer",
      handle: "@morganblake",
      borderColor: "#F59E0B",
      gradient: "linear-gradient(165deg,#F59E0B,#000)",
      url: "https://dribbble.com/",
    },
    {
      image: "https://i.pravatar.cc/300?img=16",
      title: "Casey Park",
      subtitle: "Data Scientist",
      handle: "@caseypark",
      borderColor: "#EF4444",
      gradient: "linear-gradient(195deg,#EF4444,#000)",
      url: "https://kaggle.com/",
    },
    {
      image: "https://i.pravatar.cc/300?img=60",
      title: "Tyler Rodriguez",
      subtitle: "Cloud Architect",
      handle: "@tylerrod",
      borderColor: "#06B6D4",
      gradient: "linear-gradient(135deg,#06B6D4,#000)",
      url: "https://aws.amazon.com/",
    },
  ];


  return (
    <main className="flex flex-col justify-center">

      {/* Hero Section */}
      <section className="md:h-[100vh]">
        <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
          <LightRays
            raysOrigin="top-center"
            raysColor="#307EFE"
            raysSpeed={1.5}
            lightSpread={0.8}
            rayLength={1.2}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0.1}
            distortion={0.05}
            className="custom-rays"
          />
        </div>

        <div className="max-w-7xl mx-auto px-5 mt-[-550px]">
          <div className="hero-content text-center relative z-10">
            <h1
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="200"
              className=" md:text-[3.8rem] text-[2rem] mb-5 font-[500] bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 bg-clip-text text-transparent animate-gradient-shimmer">
              About Constant Growth
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="200"
              className="text-2xl mb-10 text-[#ffffff] ">
              <TextType
                text={["Constant Growth: ERP Innovators", "Empowering Digital Transformation", "Streamlining Business Operations"]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
                className="md:text-[1.5rem] text-[1.1rem] text-[#cbcbcb]"
              />
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-5">
          <h2 className="section-title text-5xl text-center mb-16 animate-on-scroll">
            <span
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="600"
              className="font-[500] bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 bg-clip-text text-transparent bg-size-200 animate-shimmer">
              Company Overview
            </span>
          </h2>

          <div className="overview-content grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="overview-text lg:col-span-2 animate-on-scroll">
              <p
                data-aos="fade-right"
                data-aos-delay="300"
                data-aos-duration="600"
                className="text-lg leading-relaxed text-[#ACA4B9] mb-6">
                Constant Growth is a software company based in Saudi Arabia, focusing on providing tailored solutions for businesses. The company specializes in the implementation, customization, and development of business applications and Enterprise Resource Planning (ERP) systems. This expertise allows them to cater to a diverse range of industries, helping organizations optimize their operations.
              </p>
              <p
                data-aos="fade-right"
                data-aos-delay="400"
                data-aos-duration="600"
                className="text-lg leading-relaxed text-[#ACA4B9] mb-6">
                The primary mission of Constant Growth is to empower companies on their digital transformation journeys. By leveraging modern technology solutions, the company assists businesses in adapting to the digital landscape. Their flexible and efficient offerings enable organizations to enhance productivity and improve decision-making processes.
              </p>
              <p
                data-aos="fade-right"
                data-aos-delay="500"
                data-aos-duration="600"
                className="text-lg leading-relaxed text-[#ACA4B9]">
                In addition to facilitating digital transformation, Constant Growth is dedicated to supporting sustainable growth for its clients. By streamlining operations through innovative technology, they help businesses reduce costs and improve efficiency. This commitment ensures that companies not only thrive in the present but also build a resilient foundation for future success.
              </p>
            </div>

            <div
              ref={statsSectionRef}
              className=" grid grid-cols-1 sm:grid-cols-2 gap-8 "
            >
              <div
                data-aos="flip-right"
                data-aos-delay="300"
                data-aos-duration="600"
                className="stat-item text-center p-8 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl border border-blue-500/30 transition-all hover:-translate-y-1 hover:scale-105 hover:border-purple-500 hover:shadow-xl hover:shadow-purple-500/30 animate-pulse">
                <div className="stat-number text-4xl font-bold mb-3 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                  {counters.projects}+
                </div>
                <div className="stat-label text-gray-300">Projects Completed</div>
              </div>

              <div 
              data-aos="flip-right"
                data-aos-delay="300"
                data-aos-duration="600"
              className="stat-item text-center p-8 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl border border-blue-500/30 transition-all hover:-translate-y-1 hover:scale-105 hover:border-purple-500 hover:shadow-xl hover:shadow-purple-500/30 animate-pulse">
                <div className="stat-number text-4xl font-bold mb-3 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                  {counters.team}+
                </div>
                <div className="stat-label text-gray-300">Team Members</div>
              </div>

              <div 
              data-aos="flip-right"
                data-aos-delay="300"
                data-aos-duration="600"
              className="stat-item text-center p-8 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl border border-blue-500/30 transition-all hover:-translate-y-1 hover:scale-105 hover:border-purple-500 hover:shadow-xl hover:shadow-purple-500/30 animate-pulse">
                <div className="stat-number text-4xl font-bold mb-3 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                  {counters.satisfaction}%
                </div>
                <div className="stat-label text-gray-300">Client Satisfaction</div>
              </div>

              <div 
              data-aos="flip-right"
                data-aos-delay="300"
                data-aos-duration="600"
              className="stat-item text-center p-8 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl border border-blue-500/30 transition-all hover:-translate-y-1 hover:scale-105 hover:border-purple-500 hover:shadow-xl hover:shadow-purple-500/30 animate-pulse">
                <div className="stat-number text-4xl font-bold mb-3 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                  {counters.support}
                </div>
                <div className="stat-label text-gray-300">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 ">
        <div className="max-w-7xl mx-auto px-5">
          <div className="mv-grid grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div 
            data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="600"
            className="mv-card p-10 rounded-2xl bg-black/50 border border-purple-500/30 transition-all hover:-translate-y-3 hover:border-purple-500 hover:shadow-xl hover:shadow-purple-500/20 animate-on-scroll">

              <div className="mv-icon text-5xl mb-5">🎯</div>
              <h3 className="mv-title text-3xl mb-5 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Our Mission
              </h3>
              <p className="mv-text text-gray-300 leading-relaxed mb-8">
                To enable organizations in Saudi Arabia and the region to grow
                through digital innovation by providing reliable ERP systems,
                custom business applications, and smart automation tools
                tailored to their evolving needs.
              </p>
              <div className="mv-points flex flex-col gap-4">
                <div className="point text-blue-500 flex items-center gap-3">
                  <span>✓</span> Driving Growth Through Digital Innovation in Saudi Arabia
                </div>
                <div className="point text-blue-500 flex items-center gap-3">
                  <span>✓</span> Reliable ERP Systems for Organizations
                </div>
                <div className="point text-blue-500 flex items-center gap-3">
                  <span>✓</span> Custom Business Applications to Meet Evolving Needs
                </div>
                <div className="point text-blue-500 flex items-center gap-3">
                  <span>✓</span> Smart Automation Tools for Enhanced Efficiency
                </div>
              </div>
            </div>

            <div 
            data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="600"
            className="mv-card p-10 rounded-2xl bg-black/50 border border-purple-500/30 transition-all hover:-translate-y-3 hover:border-purple-500 hover:shadow-xl hover:shadow-purple-500/20 animate-on-scroll">
              <div className="mv-icon text-5xl mb-5">🚀</div>
              <h3 className="mv-title text-3xl mb-5 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Our Vision
              </h3>
              <p className="mv-text text-gray-300 leading-relaxed mb-8">
                To become a leading regional technology provider recognized
                for delivering scalable and effective ERP solutions that empow-er businesses to thrive.
              </p>
              <div className="mv-points flex flex-col gap-4">
                <div className="point text-blue-500 flex items-center gap-3">
                  <span>✓</span> Aiming for Leadership in Regional Technology
                </div>
                <div className="point text-blue-500 flex items-center gap-3">
                  <span>✓</span> Delivering Scalable ERP Solutions
                </div>
                <div className="point text-blue-500 flex items-center gap-3">
                  <span>✓</span> Empowering Businesses to Thrive
                </div>
                <div className="point text-blue-500 flex items-center gap-3">
                  <span>✓</span> Recognized for Effective Technology Solutions
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-5">
          <h2 className="section-title text-5xl text-center mb-16 ">
            <span 
            data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="600"
            className="font-[500] bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 bg-clip-text text-transparent bg-size-200 animate-shimmer">
              Our Services
            </span>
          </h2>

          <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
              data-aos="flip-right"
                data-aos-delay="300"
                data-aos-duration="400"
                key={index}
                className="service-card p-10 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/30 transition-all hover:-translate-y-4 hover:border-purple-500 hover:shadow-xl hover:shadow-blue-500/30 relative overflow-hidden animate-on-scroll"
              >
                <div className="service-icon text-5xl mb-5 transition-all">{service.icon}</div>
                <h3 className="service-title text-2xl mb-4 text-blue-500">{service.title}</h3>
                <div className="service-description text-gray-300 leading-relaxed mb-6">{service.description}</div>
                <div className="service-features flex flex-wrap gap-2">
                  {service.features.map((feature, i) => (
                    <span key={i} className="feature-tag bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24  text-center">
        <div className="max-w-7xl mx-auto px-5">

          <h2 className="section-title text-5xl text-center mb-4 animate-on-scroll">
            <span 
            data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="300"
            className="font-[500] bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 bg-clip-text text-transparent bg-size-200 animate-shimmer">
              Our Core Values
            </span>

          </h2>
          <p className=" text-md md:text-xl max-w-2xl m-auto text-center text-white opacity-90 mb-16"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="300">
            We are guided by a set of core values that form the
            foundation of our organizational culture.
          </p>


          <div className="values-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
              data-aos="fade-uo"
                data-aos-delay="300"
                data-aos-duration="500"
                key={index}
                className="value-card text-center p-10 rounded-2xl bg-black/50 border border-purple-500/30 transition-all hover:-translate-y-3 hover:border-purple-500 hover:shadow-xl hover:shadow-purple-500/20 animate-on-scroll"
              >
                <div className="value-icon text-5xl mb-5">{value.icon}</div>
                <h3 className="value-title text-lg mb-4 text-blue-500">{value.title}</h3>
                <p className="value-text text-gray-300 leading-relaxed">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-5  w-[70%] m-auto">
        <div className="max-w-7xl mx-auto px-5">
          <h2 className="section-title text-5xl text-center mb-16 animate-on-scroll">
            <span 
            data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="500"
            className="font-[500] bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 bg-clip-text text-transparent bg-size-200 animate-shimmer">
              Meet Our Team
            </span>
          </h2>

          <div style={{ height: '100%', position: 'relative', }}>
            <ChromaGrid
              items={items}
              radius={300}
              damping={0.45}
              fadeOut={0.6}
              ease="power3.out"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
