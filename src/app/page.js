'use client'
import "./globals.css";
import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from "next/link";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ArrowUp } from 'lucide-react';
import { animateScroll as scroll } from 'react-scroll';
import TestimonialCarousel from "./components/TestimonialCarousel";









export default function Home() {
  const cards = [
    {
      title: "COMPANY",
      desc: "▶ Constant Growth is a Saudi-based software company",
      img: "/cgtech/mockup1.png",
    },
    {

      title: "VISION",
      desc: "⚡ To become a leading regional technology provider recognized",
      img: "/cgtech/mockup4.png", // put your images in public folder
    },
    {
      title: "MISION",
      desc: "⚡ To enable organizations in Saudi Arabia and the region to grow through digital innovation",
      img: "/cgtech/mockup2.png",
    },
    {
      title: "VALUES",
      desc: "⚡ We are guided by a set of core values that form the foundation of our organizational culture.",
      img: "/cgtech/mockup6.png",
    },
    {
      title: "SERVICES",
      desc: "⚡ ERP IMPLEMENTATION, CUSTOM BUSINESS APPLICATIONS etc...",
      img: "/cgtech/mockup3.png",
    },

  ];
  const [activeImg, setActiveImg] = useState(cards[0].img);
  const [currentSet, setCurrentSet] = useState(0);

  const companySets = [
    [
      { name: "NETI", logo: "/cgtech/patener1.png" },
      { name: "PARTENER2", logo: "/cgtech/partener2.png" },
      { name: "itti", logo: "/cgtech/partener3.png" },
      { name: "Al-Maraa Pet Clinic", logo: "/cgtech/partener4.png" },
      { name: "Joline", logo: "/cgtech/partener5.png" },
    ],
    [
      { name: "HAYAT ICE", logo: "/cgtech/partener6.png" },
      { name: "KAWTHER PURE WATER", logo: "/cgtech/partener7.png" },
      { name: "روابي الخليج", logo: "/cgtech/partener8.png" },
      { name: "AL-KAWTHER", logo: "/cgtech/partener9.png" },
      { name: "Morofa", logo: "/cgtech/partener10.png" },
    ],
  ];

  // Auto-rotate carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSet((prev) => (prev + 1) % companySets.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [companySets.length]);



  
  const proofs = [
    {
      href: "https://github.com/constantgrowth25",
      gradientClass: "bg-gradient-to-r from-[#184997] via-[#068AF7] to-[#184997]  ",
      imgSrc:
        "/images/VS_Code_Dark_b6aa3d887d.svg",
      text: (
        <>
          <strong className="font-semibold text-white">
            This is our Github.
          </strong>{" "}
          Here you will find all the projects we have done.
        </>
      ),
    },
    {
      href: "/",
      gradientClass: "bg-gradient-to-r from-[#5E2EAD] via-[#068AF7] to-[#4B42BD]",
      imgSrc:
        "/cgtech/whatsapp-svgrepo-com.svg",
      text: (
        <>
          <strong className="font-semibold text-white">
            This is our Whatsapp.
          </strong>{" "}
          From here you can contact us to obtain our services.
        </>
      ),
    },
    {
      href: "/",
      gradientClass: "bg-gradient-to-r from-[#184997] via-[#068AF7] to-[#184997]",
      imgSrc:
        "/cgtech/linkedin-161-svgrepo-com.svg",
      text: (
        <>
          <strong className="font-semibold text-white">
            This is our linkedin account.
          </strong>{" "}
          Here you will find all the activities we do.
        </>
      ),
    },
  ];
  const icons = [
    "/logostech/ai-mi-algorithm-svgrepo-com.svg",
    "/logostech/ai-svgrepo-com.svg",
    "/logostech/android-svgrepo-com.svg",
    "/logostech/api-interface-svgrepo-com.svg",
    "/logostech/brand-angularjs-svgrepo-com.svg",
    "/logostech/flutter-svgrepo-com.svg",
    "/logostech/laravel-svgrepo-com.svg",
    "/logostech/logo-google-android-studio-svgrepo-com.svg",
    "/logostech/machine-learning-01-svgrepo-com.svg",
    "/logostech/mongodb-svgrepo-com.svg",
    "/logostech/nextjs-svgrepo-com.svg",
    "/logostech/nodejs-icon-svgrepo-com.svg",
    "/logostech/python-svgrepo-com.svg",
    "/logostech/react-svgrepo-com.svg",
    "/logostech/system-settings-svgrepo-com.svg",
    "/logostech/vs-code-svgrepo-com.svg",
    "/logostech/vue-9-logo-svgrepo-com.svg",
    "/logostech/host-hardware-svgrepo-com.svg",
    "/logostech/bootstrap-fill-svgrepo-com.svg",
    "/logostech/tailwind-svgrepo-com.svg",
    "/logostech/js-svgrepo-com.svg",
    "/logostech/66e3d729b8346ed0eceba7d8_microsoft_Excel_svg_dc455568ae.svg",
    "/logostech/66e3d729d7214df077bd1a8e_lm_Chat_Aws_Bedrock_svg_1ae33dfeb5.svg",
    "/logostech/66e3d729485addcc28ecfa78_Icon_44e8e36907.svg",
    "/logostech/66f4d7cc7710ca11e9ff79c3_affinity_svg_bfb77106bf.svg",
    "/logostech/66f6a68fbe0cbedc9ca2ddb3_mailchimp_svg_574c2a4641.svg",
    "/logostech/66f57a101c0f1368d96e0b4c_vector_Store_Pinecone_svg_53b9355d44.png",
    "/logostech/nextjs-svgrepo-com.svg",
    "/logostech/system-settings-svgrepo-com.svg",
    "/logostech/flutter-svgrepo-com.svg",
    "/logostech/android-svgrepo-com.svg",
    "/logostech/ai-mi-algorithm-svgrepo-com.svg",
    "/logostech/vue-9-logo-svgrepo-com.svg",
    "/logostech/vs-code-svgrepo-com.svg",
    "/logostech/tailwind-svgrepo-com.svg",
    "/logostech/brand-angularjs-svgrepo-com.svg",
    "/logostech/nextjs-svgrepo-com.svg",
    "/images/logo-nav.svg",

  ];
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);

  // 🔥 هنا نحدد عدد الصفوف حسب حجم الشاشة
  const [rows, setRows] = useState(2);

  // لكل صف هنخزن أماكن العناصر
  const [positions, setPositions] = useState([]);

  const [iconBoxSize, setIconBoxSize] = useState(64);
  const [gap, setGap] = useState(120);
  const fadeZone = 60;

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        setContainerWidth(width);

        // responsive sizes
        if (width < 500) {
          setIconBoxSize(50);
          setGap(90);
          setRows(3); // زود صفوف على الشاشات الصغيرة
        } else if (width < 900) {
          setIconBoxSize(64);
          setGap(110);
          setRows(2);
        } else {
          setIconBoxSize(70);
          setGap(90);
          setRows(2);
        }
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // وزّع الأيقونات على الصفوف
  useEffect(() => {
    const perRow = Math.ceil(icons.length / rows);
    const newPositions = [];
    for (let r = 0; r < rows; r++) {
      const rowIcons = icons.slice(r * perRow, (r + 1) * perRow);
      // لو الصف زوجي يمشي يمين، لو فردي شمال
      if (r % 2 === 0) {
        newPositions.push(
          rowIcons.map((_, idx) => ({ x: idx * gap, dir: "right", index: r * perRow + idx }))
        );
      } else {
        newPositions.push(
          rowIcons.map((_, idx) => ({ x: containerWidth - idx * gap, dir: "left", index: r * perRow + idx }))
        );
      }
    }
    setPositions(newPositions);
  }, [containerWidth, rows, gap]);

  // حركة لكل صف
  useEffect(() => {
    if (!positions.length || !containerWidth) return;
    let raf;
    const speed = 0.5;

    const animate = () => {
      setPositions((prev) =>
        prev.map((row, rIdx) =>
          row.map((p) => {
            let x = p.x;
            if (p.dir === "right") {
              x += speed;
              if (x > containerWidth) x = -gap;
            } else {
              x -= speed;
              if (x < -gap) x = containerWidth;
            }
            return { ...p, x };
          })
        )
      );
      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [positions, containerWidth, gap]);



  // Refs for each card container
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);

  // State for each card's mouse position and hover state
  const [card1, setCard1] = useState({ x: 0, y: 0, isHovered: false, size: 500 });
  const [card2, setCard2] = useState({ x: 0, y: 0, isHovered: false, size: 500 });
  const [card3, setCard3] = useState({ x: 0, y: 0, isHovered: false, size: 500 });

  // Mouse move handler with responsive gradient sizing
  const handleMouseMove = useCallback((e, ref, setState) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Calculate gradient size based on card dimensions
    const size = Math.max(rect.width, rect.height) * 1.5;

    setState(prev => ({
      ...prev,
      x,
      y,
      size
    }));
  }, []);










  const FeatureItem = ({ text }) => (
    <li className="feature-item flex gap-x-2">
      <FeatureIcon />
      <div className="font-medium text-md">
        <div dangerouslySetInnerHTML={{ __html: text }} />
      </div>
    </li>
  );

  // Run Tweak Item Component
  const RunTweakItem = ({ text }) => (
    <li className="feature-item flex gap-x-2">
      <CheckIcon />
      <div className="font-medium text-md text-gray-400">
        <div dangerouslySetInnerHTML={{ __html: text }} />
      </div>
    </li>
  );

  // SVG Icons
  const FeatureIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="text-[#ebebeb] shrink-0" width="24" height="24" viewBox="0 0 24 24">
      <g fill="none">
        <path d="M6.47977 8.82659L2.67165 12L6.47977 15.1735C6.55763 15.2358 6.62227 15.313 6.66992 15.4006C6.71757 15.4882 6.74727 15.5845 6.75728 15.6837C6.76729 15.7829 6.75741 15.8831 6.72822 15.9785C6.69903 16.0739 6.65111 16.1624 6.58727 16.2391C6.52343 16.3157 6.44495 16.3788 6.35643 16.4247C6.2679 16.4706 6.17111 16.4984 6.07171 16.5065C5.9723 16.5146 5.87229 16.5027 5.77752 16.4717C5.68275 16.4406 5.59513 16.391 5.51977 16.3256L1.01978 12.5757C0.935337 12.5053 0.867403 12.4172 0.820784 12.3176C0.774165 12.2181 0.75 12.1095 0.75 11.9996C0.75 11.8896 0.774165 11.781 0.820784 11.6815C0.867403 11.5819 0.935337 11.4938 1.01978 11.4235L5.51977 7.67346C5.67269 7.54616 5.86991 7.48481 6.06805 7.50292C6.2662 7.52103 6.44903 7.61711 6.57634 7.77002C6.70364 7.92294 6.76499 8.12016 6.74688 8.3183C6.72877 8.51645 6.63269 8.69928 6.47977 8.82659ZM22.9798 11.4235L18.4798 7.67346C18.4041 7.61043 18.3167 7.56292 18.2226 7.53366C18.1285 7.5044 18.0296 7.49396 17.9315 7.50292C17.8334 7.51189 17.738 7.54009 17.6508 7.58592C17.5636 7.63175 17.4862 7.69431 17.4232 7.77002C17.2959 7.92294 17.2346 8.12016 17.2527 8.3183C17.2708 8.51645 17.3669 8.69928 17.5198 8.82659L21.3279 12L17.5198 15.1735C17.4419 15.2358 17.3773 15.313 17.3296 15.4006C17.282 15.4882 17.2523 15.5845 17.2423 15.6837C17.2323 15.7829 17.2421 15.8831 17.2713 15.9785C17.3005 16.0739 17.3484 16.1624 17.4123 16.2391C17.4761 16.3157 17.5546 16.3788 17.6431 16.4247C17.7316 16.4706 17.8284 16.4984 17.9278 16.5065C18.0272 16.5146 18.1273 16.5027 18.222 16.4717C18.3168 16.4406 18.4044 16.391 18.4798 16.3256L22.9798 12.5757C23.0642 12.5053 23.1321 12.4172 23.1788 12.3176C23.2254 12.2181 23.2495 12.1095 23.2495 11.9996C23.2495 11.8896 23.2254 11.781 23.1788 11.6815C23.1321 11.5819 23.0642 11.4938 22.9798 11.4235ZM15.2557 3.04502C15.1631 3.01141 15.0648 2.99636 14.9664 3.00074C14.868 3.00512 14.7715 3.02883 14.6822 3.07053C14.593 3.11223 14.5129 3.1711 14.4464 3.24377C14.3799 3.31645 14.3284 3.4015 14.2948 3.49409L8.29477 19.9941C8.26102 20.0867 8.24586 20.1851 8.25016 20.2836C8.25447 20.3821 8.27815 20.4788 8.31986 20.5681C8.36157 20.6575 8.42049 20.7377 8.49324 20.8043C8.56599 20.8708 8.65114 20.9224 8.74384 20.956C8.826 20.9852 8.91257 21.0001 8.99977 21C9.1538 21 9.30409 20.9526 9.43022 20.8642C9.55635 20.7758 9.65221 20.6507 9.70477 20.506L15.7048 4.00596C15.7384 3.91338 15.7534 3.81508 15.7491 3.71669C15.7447 3.61829 15.721 3.52172 15.6793 3.43249C15.6376 3.34325 15.5787 3.26311 15.506 3.19663C15.4334 3.13015 15.3483 3.07863 15.2557 3.04502Z" fill="#828282"></path>
      </g>
    </svg>
  );

  const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="shrink-0 text-white" width="24" height="24" viewBox="0 0 24 24">
      <path fill="currentColor" d="M18.71 7.21a1 1 0 0 0-1.42 0l-7.45 7.46l-3.13-3.14A1 1 0 1 0 5.29 13l3.84 3.84a1 1 0 0 0 1.42 0l8.16-8.16a1 1 0 0 0 0-1.47"></path>
    </svg>
  );

  // Data
  const featureItems = [
    { text: '<strong>Making website applications</strong> - We can create a website for your organization and services.' },
    { text: '<strong>Making mobile application</strong> We can create a mobile application to display your services or your organization.' },
    { text: '<strong>Dashboard for all users</strong> You can manage your organization or services through a display interface dedicated to you.' },
    // { text: '<strong>Merge workflow branches</strong>, don’t just split them' },
  ];

  const runTweakItems = [
    { text: '<strong >ERP Implementation Services</strong> We offer tailored services for implementing ERP systems.' },
    { text: '<strong>Workflow Analysis</strong> We assess existing workflows to optimize ERP integration.' },
    { text: '<strong>System Configuration</strong>, We configure the ERP for smooth integration with current processes.' },
    { text: '<strong>Data Migration</strong> We facilitate seamless data transfer to enhance productivity.' },
  ];










  const caseStudies = [
    {
      id: 1,
      company: "Delivery Hero",
      logo: "/images/cs_delivery_hero_745bb7ac83.svg",
      description: "How Delivery Hero saved <strong style={{color:white;}}>200 hours each month</strong> with a single ITOps workflow",
      quote: "\"We have seen drastic efficiency improvements since we started using n8n for user management. It's incredibly powerful, but also simple to use.\"",
      author: {
        name: "Dennis Zahrt",
        position: "Director of Global IT Service Delivery",
        image: "/images/E02996_YDSAK_U4_TEE_6_AAW_8f94f206d022_512_9956afea32_5cf58d57e3.jpeg"
      },
      link: "/case-studies/delivery-hero/"
    },
    {
      id: 2,
      company: "The Stepstone Group",
      logo: "/images/the_stepstone_group_6dccc5eb32.webp",
      description: "How StepStone finishes <strong>2 weeks’ work in only 2 hours</strong> with n8n workflows",
      quote: "“We’ve sped up our integration of marketplace data sources by 25X. It takes me 2 hours max to connect up APIs and transform the data we need. You can’t do this that fast in code.”",
      author: {
        name: "Luka Pilic",
        position: "Marketplace Tech Lead",
        image: "/images/Luka_Pilic_Stepstone_443e0351bf_4dbe30dafe.jpeg"
      },
      link: "/case-studies/stepstone/"
    }
  ];



  // Create refs array for case study cards
  const cardRefs = useRef([]);

  // State for each card's mouse position and hover state
  const [cardStates, setCardStates] = useState(
    caseStudies.map(() => ({ x: 0, y: 0, isHovered: false, size: 0 }))
  );

  // Mouse move handler with responsive gradient sizing
  const handleMouseMove2 = useCallback((e, index) => {
    if (!cardRefs.current[index]) return;

    const rect = cardRefs.current[index].getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Calculate gradient size based on card dimensions
    const size = Math.max(rect.width, rect.height) * 1.5;

    setCardStates(prev => {
      const newStates = [...prev];
      newStates[index] = { ...newStates[index], x, y, size };
      return newStates;
    });
  }, []);












  // Create ref for testimonial card
  const cardRef = useRef(null);

  // State for mouse position and hover state
  const [cardState, setCardState] = useState({
    x: 0,
    y: 0,
    isHovered: false,
    size: 0
  });

  // Mouse move handler with responsive gradient sizing
  const handleMouseMove3 = useCallback((e) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Calculate gradient size based on card dimensions
    const size = Math.max(rect.width, rect.height) * 1.5;

    setCardState(prev => ({
      ...prev,
      x,
      y,
      size
    }));
  }, []);






  // Create ref for the section container
  const sectionRef = useRef(null);

  // State for mouse position and hover state
  const [sectionState, setSectionState] = useState({
    x: 0,
    y: 0,
    isHovered: false,
    size: 0
  });

  // Mouse move handler with responsive gradient sizing
  const handleMouseMove4 = useCallback((e) => {
    if (!sectionRef.current) return;

    const rect = sectionRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Calculate gradient size based on container dimensions
    const size = Math.max(rect.width, rect.height) * 1.5;

    setSectionState(prev => ({
      ...prev,
      x,
      y,
      size
    }));
  }, []);





  // Unique variable names for this section
  const ctaContainerRef = useRef(null);
  const [ctaMouseState, setCtaMouseState] = useState({
    x: 0,
    y: 0,
    isHovered: false,
    size: 0
  });

  // Mouse move handler with unique function name
  const handleCtaMouseMove = useCallback((e) => {
    if (!ctaContainerRef.current) return;

    const rect = ctaContainerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const size = Math.max(rect.width, rect.height) * 1.5;

    setCtaMouseState(prev => ({
      ...prev,
      x,
      y,
      size
    }));
  }, []);






  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
    });
  }, []);














  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 2000, // slow scroll: 1500ms
      smooth: 'easeInOutQuart',
    });
  };




















  return (

    
    <main className="flex justify-center flex-col">
      <div

        className="relative w-full sm:w-full md:w-full lg:w-full xl:w-[58%]   flex items-center justify-center sm:justify-normal lg:overflow-hidden m-auto">
        <video
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-duration="500"
          data-aos-delay="100"
          data-aos-offset="0"
          autoPlay
          loop
          muted
          className="absolute top-1/2 left-1/2 w-[100%] h-[100%] object-cover transform -translate-x-1/2 -translate-y-1/2 blur-[10px] z-0"
        >
          <source src="/videos/home-intro.mp4" type="video/mp4" />
        </video>
        <img
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-duration="500"
          data-aos-delay="100"
          data-aos-offset="0"
          src="/images/logo-nav.svg"
          alt="Your image"
          className="absolute sm:top-[40%]   sm:left-[55%] lg:w-[500px] md:w-[350px] sm:w-[300px] w-[290px] top-[50%]    object-cover z-10 "
        />
        <div className="flex flex-col items-center justify-center w-full sm:w-[55%] p-5 text-white relative z-20 sm:text-center">
          <div className="lg:text-left sm:text-center  max-w-full mt-30">
            <h1
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-delay="700"
              className="text-[60px] font-[600] text-5xl  
      bg-gradient-to-r from-[#dddddd] via-[#0c04f0] to-[#0d00ff] 
      bg-[length:200%_auto] 
      text-transparent bg-clip-text 
      animate-gradient">COMPANY<span className="block
        bg-gradient-to-r from-[#ff6a00] via-[#ffc072] to-[#ffb347]
        bg-[length:200%_auto]
        text-transparent bg-clip-text
        animate-gradient"
              >OVERVIEW</span></h1>
            <p className="text-[1.1rem] my-9 text-[#B8B0C7]"
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-delay="1000">Constant Growth is a Saudi-based software company specialized in the imple-
              mentation, customization, and development of business applications and ERP
              solutions. We empower companies in their digital transformation journey by of-
              fering flexible and efficient technology solutions that streamline operations and
              support sustainable growth.

            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-1">
              <button className="boton-elegante"
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-delay="1300">Get Strat for Free</button>

              <button className="buttonsec1"
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-delay="1300"> Talk to sales
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* /////////////////////////////////////////////////////////////////////////////// */}
      {/* second-section */}
      <div className="w-full flex justify-center mt-15 sm:mt-0">
        {/* Main container */}
        <div
          className="
          relative overflow-hidden rounded-3xl p-0
          w-full lg:w-[60%]
          bg-black/50 border-4
          border-gradient-to-r
        "

        >
          {/* Cards at the top */}
          <div className="relative z-10 flex flex-col sm:flex-col md:flex-wrap md:flex-row justify-center gap-4 p-3"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="1300">
            {cards.map((card, index) => (
              <div key={index} className="w-full md:w-auto flex flex-col items-center">
                <div
                  onClick={() => setActiveImg(card.img)}
                  className="
                  w-full md:w-[194px] sm:w-[100%] md:max-w-[200px]
                  p-4 rounded-2xl cursor-pointer
                  bg-black/60 border border-white/20
                  text-white text-center
                  transform hover:-translate-y-2 hover:scale-105
                  transition-all duration-300 ease-out
                  hover:bg-gradient-to-r hover:from-[#503935] hover:to-[#2B3766]
                  shadow-lg hover:shadow-purple-500/20
                  mb-4 md:mb-0
                  h-[100%]
                "
                >
                  <h3 className="text-lg font-bold">
                    <span className="text-[#3367e9]">OUR</span> {card.title}
                  </h3>
                  <p className="text-[0.8rem] mt-2">{card.desc}</p>
                </div>
                {/* Image shown below each card only on small screens */}
                <div className="block md:hidden w-full">
                  <img
                    src={card.img}
                    alt="selected workflow"
                    className="
                    w-full h-[300px] object-cover rounded-b-3xl shadow-2xl mb-4
                  "
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Dynamic image below for large screens only */}
          <div className="relative z-10 w-full hidden md:block">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeImg}
                src={activeImg}
                alt="selected workflow"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="
                w-full h-[600px]
                object-cover
                rounded-b-3xl
                shadow-2xl
              "
              />
            </AnimatePresence>
          </div>
        </div>
      </div>
      {/* /////////////////////////////////////////////////////////////////////////////// */}
      {/* third-section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 "
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-delay="200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-[1.8rem]  text-[#9F9DA3] mb-8 font-[500]">
              OUR PARTNERS
            </h2>

            <div className="relative h-20 md:h-80">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSet}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-25"
                >
                  {companySets[currentSet].map((company, index) => (
                    <motion.div
                      key={`${currentSet}-${index}`}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                      whileHover={{ scale: 1.05 }}
                      className="flex flex-col items-center w-1/4 min-w-[100px] max-w-[150px]"
                    >
                      <div className="w-30 h-16 sm:w-40 sm:h-20 md:w-40 md:h-24 rounded-lg flex items-center justify-center  transition-all duration-300 p-2">
                        <Image
                          src={company.logo}
                          alt={company.name}
                          width={40}
                          height={40}
                          className="object-contain h-full w-full"
                          unoptimized // Remove this if you want Next.js to optimize the images
                        />
                      </div>

                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
      {/* /////////////////////////////////////////////////////////////////// */}
      {/* fourth-section */}
      <div className=" flex flex-col items-center justify-center gap-2 px-2 md:px-0 lg:flex-row position-relative z-10 md:mt-[-40px] lg:mt-[-30px] sm:mt-[90px] mt-[50px] xl:mt-[-200px]"
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-delay="200">
        {proofs.map((proof, index) => (
          <Link
            key={index}
            href={proof.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${proof.gradientClass} z-6 rounded-[9px] flex min-w-64 max-w-96  overflow-hidden hover:scale-95 transition-transform duration-300 shadow-md `}
          >
            <div className="flex items-center gap-x-2.5 p-4">
              <Image
                src={proof.imgSrc}
                alt="image"
                width={48}
                height={48}
                className="h-12 w-12"
              />
              <div className="text-lg font-light leading-snug text-white/75">
                <p>{proof.text}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <header className="flex flex-col mb-12 lg:mb-16 xl:mb-22 gap-y-4 items-center mt-30"
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-delay="200">
        <h2 className="
        text-3xl md:text-5xl lg:text-[47px] 
        text-center flex flex-col items-center max-w-[800px] 
        bg-gradient-to-r from-[#c1c1c1] via-[#8fb2f6] to-[#417aff] bg-clip-text text-transparent font-[500]
      ">
          These are all software services &amp;{" "}
          <span className="bg-gradient-to-r from-[#c76eff]  to-[#c1c1c1] bg-clip-text text-transparent mt-0">
            over 20 technologies
          </span>
        </h2>
      </header>
      {/* //////////////////////////////////////////////////// */}
      {/* section 5 */}
      <section
        ref={containerRef}
        className="relative  w-[70%] md:w-[75%] lg:w-[85%] mx-auto  rounded-xl py-9 "
        style={{ height: rows * (iconBoxSize + 20) }}
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-delay="200"
      >
        {positions.map((row, rIdx) =>
          row.map((pos) => {
            const opacity =
              pos.x < fadeZone
                ? pos.x / fadeZone
                : pos.x > containerWidth - fadeZone
                  ? (containerWidth - pos.x) / fadeZone
                  : 1;

            return (
              <div
                key={`${rIdx}-${pos.index}`}
                style={{
                  position: "absolute",
                  left: pos.x,
                  top: rIdx * (iconBoxSize + 20),
                  width: iconBoxSize,
                  height: iconBoxSize,
                  opacity,
                }}
                className="flex items-center justify-center bg-gray-200 rounded-xl shadow-md overflow-hidden hover:bg-gray-300 hover:scale-105  "
              >
                <div className="transition-all duration-300 hover:scale-110 hover:brightness-90 flex items-center justify-center w-full h-full">
                  <Image
                    src={icons[pos.index]}
                    alt={`icon-${pos.index}`}
                    width={iconBoxSize / 2}
                    height={iconBoxSize / 2}
                    className="pointer-events-none"
                  />
                </div>
              </div>
            );
          })
        )}

      </section>
      <div className="w-[100%] flex justify-center align-middle mt-7"
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-delay="200">
        <button className="btn-sec5">
          Browse all Technologies
        </button>
      </div>
      {/* /////////////////////////////////////////////////////////////////////////// */}
      {/* section 6  */}
      <header className="flex flex-col mb-12 lg:mb-16 xl:mb-7 gap-y-4 items-center mt-35 z-6"
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-delay="200">
        <h2 className="
        text-3xl md:text-5xl lg:text-[47px] 
        text-center flex flex-col items-center max-w-[800px] 
        bg-gradient-to-r from-[#0180ff]  to-[#cdb0fd] bg-clip-text text-transparent font-[700]
      ">
          Constant Growth Company
          <span className="bg-gradient-to-r from-[#d57dfd]  to-[#c6c6c6] bg-clip-text text-transparent mt-1 font-[600]">
            is your first step towards digital transformation.
          </span>
        </h2>
      </header>
      {/* ///////////////// */}
      <section className="w-full px-4 md:px-8 lg:px-16 py-6 md:py-8 lg:py-12 relative overflow-hidden lg:overflow-visible"
      >
        <div className="max-w-screen-xl mx-auto w-full sm-w-full md:w-full lg:w-[95%] xl:w-[58%]">
          <div className="grid grid-cols-1 gap-2 md:grid-cols-2 ">
            {/* Card 1 */}
            <div
              ref={card1Ref}
              className="col-span-12 row-start-1 lg:col-span-4 border-1 rounded-3xl bg-gradient-to-r from-[#235793] via-[#949494] to-[#235793] relative overflow-hidden"
              onMouseMove={(e) => handleMouseMove(e, card1Ref, setCard1)}
              onMouseEnter={() => setCard1(prev => ({ ...prev, isHovered: true }))}
              onMouseLeave={() => setCard1(prev => ({ ...prev, isHovered: false }))}
            >
              {/* Gradient overlay */}
              <div
                className="absolute inset-0 pointer-events-none transition-opacity duration-300"
                style={{
                  opacity: card1.isHovered ? 1 : 0,
                  background: `radial-gradient(${card1.size}px at ${card1.x}px ${card1.y}px, rgba(255, 155, 38, 0.3), rgba(107, 33, 239, 0.3), transparent 80%)`,
                }}
              />

              <div className="card-anime relative flex flex-col overflow-hidden w-full h-full items-stretch rounded-[20px] card-nested">
                <div className="card-wrapper relative flex h-full w-full items-stretch overflow-hidden rounded-[19px] p-[1px] bg-shades-deep-navy/30">
                  <div className="animate invisible absolute left-1/2 top-1/2 z-0 block aspect-square -translate-x-1/2 -translate-y-1/2 rounded-[100%] bg-gradient-to-br opacity-0 blur-[60px] will-change-[transform,opacity] from-[#ff9b26] to-[#6b21ef]"></div>
                  <div className="card-inner relative z-10 h-full w-full rounded-[19px] bg-[#0c081c6e] gradient--default p-0">
                    <div className="card-content h-full w-full">
                      <div className="card-teams-agent grid h-full w-full grid-cols-1 gap-4 px-8 py-10 md:grid-cols-2 md:gap-0 md:p-0">
                        <header className="order-last flex flex-col justify-center gap-2 px-2 md:order-first md:px-10 lg:pl-10 lg:pr-0">
                          <h3 className="text-[1.5rem] font-[500] title title--white font-geomanist-book leading-none text-[#F8F8F8]/95 md:[letter-spacing:-0.48px] lg:max-w-[250px]">
                            Here we offer you some of our various services.
                          </h3>
                          <p className="font-geomanist text-[1rem] text-white opacity-55 mt-5 w-[70%] mb-6">
                            We specialize in implementing, customizing, and developing business applications and iRP solutions to enable companies on their digital transformation journey by providing flexible and effective technology solutions.
                          </p>
                          <Link href="/ai/" className="btn items-center text-center relative justify-center font-normal whitespace-nowrap rounded-lg disabled:cursor-not-allowed btn-primary text-white tracking-[.3px] font-geomanist-book min-h-[39px] text-small-button-text mt-2 flex w-fit space-x-2">
                            <button className="button-g flex items-center space-x-2">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path>
                              </svg>
                              <div className="text-g">
                                Explore Our Services
                              </div>
                            </button>
                          </Link>
                        </header>
                        <div className="image relative">
                          <Image
                            alt="Teams of agents, calling custom tools"
                            src="/images/logo-nav.svg"
                            className="h-[100%]  object-cover object-center md:h-[400px] md:object-contain"
                            width={500}
                            height={368}
                            priority
                          />
                          <div className="absolute left-0 top-0 z-10 h-full w-full">
                            <div className="flex h-full flex-col justify-between gap-2 opacity-0 md:pb-6 md:pt-8 lg:opacity-100 xl:pt-8">
                              <div className="feature-group flex flex-col items-center gap-1"
                                data-aos="zoom-in"
                                data-aos-duration="500"
                                data-aos-delay="200">
                                <span
                                  className="badge-feature leading-[1.7] bg-shades-deep-navy/50 text-white flex cursor-default flex-row items-center rounded-[40px] border border-transparent shadow-[0_0_0px_1px_rgba(0,0,0,0.44)] backdrop-blur-md transition-[color,border] duration-150 hover:border-white/10 hover:text-white gap-[5px] py-[2px] pl-[6px] pr-[8px] text-[12px] agents-feature-item -mt-1" style={{ transform: 'scale(1.2, 1.2)', opacity: 0.6 }}>
                                  <span className="opacity-50">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="size-[18px]">
                                      <path fillRule="evenodd" clipRule="evenodd" d="M7.2 1.2002C4.54904 1.2002 2.4 3.34923 2.4 6.0002V9.6002C2.4 10.2629 1.86275 10.8002 1.2 10.8002C0.537258 10.8002 0 11.3375 0 12.0002C0 12.6629 0.537258 13.2002 1.2 13.2002C1.86275 13.2002 2.4 13.7375 2.4 14.4002V18.0001C2.4 20.6512 4.54904 22.8001 7.2 22.8001C7.86275 22.8001 8.4 22.263 8.4 21.6001C8.4 20.9374 7.86275 20.4001 7.2 20.4001C5.87451 20.4001 4.8 19.3257 4.8 18.0001V14.4002C4.8 13.4782 4.45338 12.6371 3.88332 12.0002C4.45338 11.3633 4.8 10.5222 4.8 9.6002V6.0002C4.8 4.67471 5.87451 3.6002 7.2 3.6002C7.86275 3.6002 8.4 3.06294 8.4 2.4002C8.4 1.73745 7.86275 1.2002 7.2 1.2002ZM16.8 1.2002C16.1373 1.2002 15.6 1.73745 15.6 2.4002C15.6 3.06294 16.1373 3.6002 16.8 3.6002C18.1255 3.6002 19.2 4.67471 19.2 6.0002V9.6002C19.2 10.5222 19.5466 11.3633 20.1166 12.0002C19.5466 12.6371 19.2 13.4782 19.2 14.4002V18.0001C19.2 19.3257 18.1255 20.4001 16.8 20.4001C16.1373 20.4001 15.6 20.9374 15.6 21.6001C15.6 22.263 16.1373 22.8001 16.8 22.8001C19.451 22.8001 21.6 20.6512 21.6 18.0001V14.4002C21.6 13.7375 22.1373 13.2002 22.8 13.2002C23.4627 13.2002 24 12.6629 24 12.0002C24 11.3375 23.4627 10.8002 22.8 10.8002C22.1373 10.8002 21.6 10.2629 21.6 9.6002V6.0002C21.6 3.34923 19.451 1.2002 16.8 1.2002ZM11.7977 15.6121C11.7977 15.6921 11.8217 15.7602 11.8697 15.8161C11.9257 15.8721 11.9977 15.9001 12.0857 15.9001H13.1777C13.2577 15.9001 13.3257 15.8721 13.3817 15.8161C13.4377 15.7602 13.4657 15.6921 13.4657 15.6121V7.78812C13.4657 7.70813 13.4377 7.64012 13.3817 7.58412C13.3257 7.52813 13.2577 7.50012 13.1777 7.50012H12.1217C12.0657 7.50012 12.0137 7.50413 11.9657 7.51212C11.9177 7.52012 11.8697 7.54412 11.8217 7.58412L9.13371 9.66012C9.06171 9.70812 9.01772 9.77213 9.00171 9.85212C8.99372 9.93212 9.01371 10.0081 9.06171 10.0801L9.56571 10.7281C9.62172 10.8001 9.68571 10.8441 9.75771 10.8601C9.82971 10.8681 9.90171 10.8481 9.97371 10.8001L11.7977 9.39612V15.6121Z" fill="white"></path>
                                    </svg>
                                  </span>
                                  ERP IMPLEMENTATION
                                </span>
                                <span className="badge-feature leading-[1.7] bg-shades-deep-navy/50 text-white flex cursor-default flex-row items-center rounded-[40px] border border-transparent shadow-[0_0_0px_1px_rgba(0,0,0,0.44)] backdrop-blur-md transition-[color,border] duration-150 hover:border-white/10 hover:text-white gap-[5px] py-[2px] pl-[6px] pr-[8px] text-[12px] agents-feature-item -mt-1" style={{ opacity: 0.6, transform: 'scale(1.2, 1.2)' }}>
                                  <span className="opacity-50">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="size-[18px]">
                                      <path fillRule="evenodd" clipRule="evenodd" d="M7.2 1.2002C4.54904 1.2002 2.4 3.34923 2.4 6.0002V9.6002C2.4 10.2629 1.86275 10.8002 1.2 10.8002C0.537258 10.8002 0 11.3375 0 12.0002C0 12.6629 0.537258 13.2002 1.2 13.2002C1.86275 13.2002 2.4 13.7375 2.4 14.4002V18.0001C2.4 20.6512 4.54904 22.8001 7.2 22.8001C7.86275 22.8001 8.4 22.263 8.4 21.6001C8.4 20.9374 7.86275 20.4001 7.2 20.4001C5.87451 20.4001 4.8 19.3257 4.8 18.0001V14.4002C4.8 13.4782 4.45338 12.6371 3.88332 12.0002C4.45338 11.3633 4.8 10.5222 4.8 9.6002V6.0002C4.8 4.67471 5.87451 3.6002 7.2 3.6002C7.86275 3.6002 8.4 3.06294 8.4 2.4002C8.4 1.73745 7.86275 1.2002 7.2 1.2002ZM16.8 1.2002C16.1373 1.2002 15.6 1.73745 15.6 2.4002C15.6 3.06294 16.1373 3.6002 16.8 3.6002C18.1255 3.6002 19.2 4.67471 19.2 6.0002V9.6002C19.2 10.5222 19.5466 11.3633 20.1166 12.0002C19.5466 12.6371 19.2 13.4782 19.2 14.4002V18.0001C19.2 19.3257 18.1255 20.4001 16.8 20.4001C16.1373 20.4001 15.6 20.9374 15.6 21.6001C15.6 22.263 16.1373 22.8001 16.8 22.8001C19.451 22.8001 21.6 20.6512 21.6 18.0001V14.4002C21.6 13.7375 22.1373 13.2002 22.8 13.2002C23.4627 13.2002 24 12.6629 24 12.0002C24 11.3375 23.4627 10.8002 22.8 10.8002C22.1373 10.8002 21.6 10.2629 21.6 9.6002V6.0002C21.6 3.34923 19.451 1.2002 16.8 1.2002ZM11.7977 15.6121C11.7977 15.6921 11.8217 15.7602 11.8697 15.8161C11.9257 15.8721 11.9977 15.9001 12.0857 15.9001H13.1777C13.2577 15.9001 13.3257 15.8721 13.3817 15.8161C13.4377 15.7602 13.4657 15.6921 13.4657 15.6121V7.78812C13.4657 7.70813 13.4377 7.64012 13.3817 7.58412C13.3257 7.52813 13.2577 7.50012 13.1777 7.50012H12.1217C12.0657 7.50012 12.0137 7.50413 11.9657 7.51212C11.9177 7.52012 11.8697 7.54412 11.8217 7.58412L9.13371 9.66012C9.06171 9.70812 9.01772 9.77213 9.00171 9.85212C8.99372 9.93212 9.01371 10.0081 9.06171 10.0801L9.56571 10.7281C9.62172 10.8001 9.68571 10.8441 9.75771 10.8601C9.82971 10.8681 9.90171 10.8481 9.97371 10.8001L11.7977 9.39612V15.6121Z" fill="white"></path>
                                    </svg>
                                  </span>
                                  CUSTOM BUSINESS APPLICATIONS
                                </span>
                                <span className="badge-feature leading-[1.7] bg-shades-deep-navy/50 text-white flex cursor-default flex-row items-center rounded-[40px] border border-transparent shadow-[0_0_0px_1px_rgba(0,0,0,0.44)] backdrop-blur-md transition-[color,border] duration-150 hover:border-white/10 hover:text-white gap-[5px] py-[2px] pl-[6px] pr-[8px] text-[12px] agents-feature-item -mt-1" style={{ opacity: 0.6, transform: 'scale(1.2, 1.2)' }}>
                                  <span className="opacity-50">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="size-[18px]">
                                      <path fillRule="evenodd" clipRule="evenodd" d="M7.2 1.2002C4.54904 1.2002 2.4 3.34923 2.4 6.0002V9.6002C2.4 10.2629 1.86275 10.8002 1.2 10.8002C0.537258 10.8002 0 11.3375 0 12.0002C0 12.6629 0.537258 13.2002 1.2 13.2002C1.86275 13.2002 2.4 13.7375 2.4 14.4002V18.0001C2.4 20.6512 4.54904 22.8001 7.2 22.8001C7.86275 22.8001 8.4 22.263 8.4 21.6001C8.4 20.9374 7.86275 20.4001 7.2 20.4001C5.87451 20.4001 4.8 19.3257 4.8 18.0001V14.4002C4.8 13.4782 4.45338 12.6371 3.88332 12.0002C4.45338 11.3633 4.8 10.5222 4.8 9.6002V6.0002C4.8 4.67471 5.87451 3.6002 7.2 3.6002C7.86275 3.6002 8.4 3.06294 8.4 2.4002C8.4 1.73745 7.86275 1.2002 7.2 1.2002ZM16.8 1.2002C16.1373 1.2002 15.6 1.73745 15.6 2.4002C15.6 3.06294 16.1373 3.6002 16.8 3.6002C18.1255 3.6002 19.2 4.67471 19.2 6.0002V9.6002C19.2 10.5222 19.5466 11.3633 20.1166 12.0002C19.5466 12.6371 19.2 13.4782 19.2 14.4002V18.0001C19.2 19.3257 18.1255 20.4001 16.8 20.4001C16.1373 20.4001 15.6 20.9374 15.6 21.6001C15.6 22.263 16.1373 22.8001 16.8 22.8001C19.451 22.8001 21.6 20.6512 21.6 18.0001V14.4002C21.6 13.7375 22.1373 13.2002 22.8 13.2002C23.4627 13.2002 24 12.6629 24 12.0002C24 11.3375 23.4627 10.8002 22.8 10.8002C22.1373 10.8002 21.6 10.2629 21.6 9.6002V6.0002C21.6 3.34923 19.451 1.2002 16.8 1.2002ZM11.7977 15.6121C11.7977 15.6921 11.8217 15.7602 11.8697 15.8161C11.9257 15.8721 11.9977 15.9001 12.0857 15.9001H13.1777C13.2577 15.9001 13.3257 15.8721 13.3817 15.8161C13.4377 15.7602 13.4657 15.6921 13.4657 15.6121V7.78812C13.4657 7.70813 13.4377 7.64012 13.3817 7.58412C13.3257 7.52813 13.2577 7.50012 13.1777 7.50012H12.1217C12.0657 7.50012 12.0137 7.50413 11.9657 7.51212C11.9177 7.52012 11.8697 7.54412 11.8217 7.58412L9.13371 9.66012C9.06171 9.70812 9.01772 9.77213 9.00171 9.85212C8.99372 9.93212 9.01371 10.0081 9.06171 10.0801L9.56571 10.7281C9.62172 10.8001 9.68571 10.8441 9.75771 10.8601C9.82971 10.8681 9.90171 10.8481 9.97371 10.8001L11.7977 9.39612V15.6121Z" fill="white"></path>
                                    </svg>
                                  </span>
                                  MODULE DEVELOPMENT & CUSTOMIZATION
                                </span>
                              </div>
                              <div className="feature-group flex flex-col items-center gap-1"
                                data-aos="zoom-in"
                                data-aos-duration="500"
                                data-aos-delay="200">
                                <span className="badge-feature leading-[1.7] bg-shades-deep-navy/50 text-white flex cursor-default flex-row items-center rounded-[40px] border border-transparent shadow-[0_0_0px_1px_rgba(0,0,0,0.44)] backdrop-blur-md transition-[color,border] duration-150 hover:border-white/10 hover:text-white gap-[5px] py-[2px] pl-[6px] pr-[8px] text-[12px] agents-feature-item -mb-1" style={{ zIndex: 10, opacity: 0.6, transform: 'scale(1.2, 1.2)' }}>
                                  <span className="opacity-50">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="size-4">
                                      <path fillRule="evenodd" clipRule="evenodd" d="M7.2 1.2002C4.54904 1.2002 2.4 3.34923 2.4 6.0002V9.6002C2.4 10.2629 1.86275 10.8002 1.2 10.8002C0.537258 10.8002 0 11.3375 0 12.0002C0 12.6629 0.537258 13.2002 1.2 13.2002C1.86275 13.2002 2.4 13.7375 2.4 14.4002V18.0001C2.4 20.6512 4.54904 22.8001 7.2 22.8001C7.86275 22.8001 8.4 22.263 8.4 21.6001C8.4 20.9374 7.86275 20.4001 7.2 20.4001C5.87451 20.4001 4.8 19.3257 4.8 18.0001V14.4002C4.8 13.4782 4.45338 12.6371 3.88332 12.0002C4.45338 11.3633 4.8 10.5222 4.8 9.6002V6.0002C4.8 4.67471 5.87451 3.6002 7.2 3.6002C7.86275 3.6002 8.4 3.06294 8.4 2.4002C8.4 1.73745 7.86275 1.2002 7.2 1.2002ZM16.8 1.2002C16.1373 1.2002 15.6 1.73745 15.6 2.4002C15.6 3.06294 16.1373 3.6002 16.8 3.6002C18.1255 3.6002 19.2 4.67471 19.2 6.0002V9.6002C19.2 10.5222 19.5466 11.3633 20.1166 12.0002C19.5466 12.6371 19.2 13.4782 19.2 14.4002V18.0001C19.2 19.3257 18.1255 20.4001 16.8 20.4001C16.1373 20.4001 15.6 20.9374 15.6 21.6001C15.6 22.263 16.1373 22.8001 16.8 22.8001C19.451 22.8001 21.6 20.6512 21.6 18.0001V14.4002C21.6 13.7375 22.1373 13.2002 22.8 13.2002C23.4627 13.2002 24 12.6629 24 12.0002C24 11.3375 23.4627 10.8002 22.8 10.8002C22.1373 10.8002 21.6 10.2629 21.6 9.6002V6.0002C21.6 3.34923 19.451 1.2002 16.8 1.2002ZM8.93385 15.8101C8.98986 15.8661 9.05785 15.8941 9.13785 15.8941H14.8738C14.9619 15.8941 15.0299 15.8661 15.0779 15.8101C15.1338 15.7542 15.1618 15.6861 15.1618 15.6061V14.7541C15.1618 14.6661 15.1338 14.5981 15.0779 14.5501C15.0299 14.4941 14.9619 14.4661 14.8738 14.4661H11.4538L13.1579 12.7381C13.5419 12.4341 13.8699 12.1381 14.1419 11.8501C14.4139 11.5541 14.6219 11.2501 14.7659 10.9381C14.9098 10.6181 14.9818 10.2701 14.9818 9.89412C14.9818 9.41412 14.8699 8.98212 14.6458 8.59812C14.4298 8.21412 14.1019 7.91012 13.6618 7.68612C13.2298 7.46213 12.6819 7.35012 12.0178 7.35012C11.5459 7.35012 11.1219 7.42613 10.7458 7.57812C10.3699 7.73012 10.0499 7.93412 9.78585 8.19012C9.52986 8.43812 9.33385 8.72612 9.19785 9.05412C9.06186 9.37412 8.98986 9.70613 8.98185 10.0501C8.98185 10.1141 9.00585 10.1701 9.05385 10.2181C9.10185 10.2661 9.16185 10.2901 9.23385 10.2901H10.3018C10.3738 10.2901 10.4459 10.2701 10.5178 10.2301C10.5898 10.1901 10.6339 10.1181 10.6498 10.0141C10.6899 9.78212 10.7619 9.57012 10.8658 9.37812C10.9779 9.18612 11.1299 9.03413 11.3218 8.92212C11.5139 8.80212 11.7499 8.74212 12.0299 8.74212C12.4539 8.74212 12.7618 8.85413 12.9538 9.07812C13.1539 9.30212 13.2539 9.59412 13.2539 9.95412C13.2539 10.1941 13.1779 10.4381 13.0259 10.6861C12.8819 10.9261 12.6459 11.1941 12.3179 11.4901C11.9979 11.7781 11.5739 12.1301 11.0459 12.5461L9.14985 14.4301C9.02185 14.5341 8.93785 14.6381 8.89785 14.7421C8.86586 14.8381 8.84985 14.9221 8.84985 14.9941V15.6061C8.84985 15.6861 8.87786 15.7542 8.93385 15.8101Z" fill="white"></path>
                                    </svg>
                                  </span>
                                  TECHNICAL SUPPORT & MAINTENANCE
                                </span>
                                <span className="badge-feature leading-[1.7] bg-shades-deep-navy/50 text-white flex cursor-default flex-row items-center rounded-[40px] border border-transparent shadow-[0_0_0px_1px_rgba(0,0,0,0.44)] backdrop-blur-md transition-[color,border] duration-150 hover:border-white/10 hover:text-white gap-[5px] py-[2px] pl-[6px] pr-[8px] text-[12px] agents-feature-item -mb-1" style={{ zIndex: 9, opacity: 0.6, transform: 'scale(1.2, 1.2)' }}>
                                  <span className="opacity-50">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="size-4">
                                      <path fillRule="evenodd" clipRule="evenodd" d="M7.2 1.2002C4.54904 1.2002 2.4 3.34923 2.4 6.0002V9.6002C2.4 10.2629 1.86275 10.8002 1.2 10.8002C0.537258 10.8002 0 11.3375 0 12.0002C0 12.6629 0.537258 13.2002 1.2 13.2002C1.86275 13.2002 2.4 13.7375 2.4 14.4002V18.0001C2.4 20.6512 4.54904 22.8001 7.2 22.8001C7.86275 22.8001 8.4 22.263 8.4 21.6001C8.4 20.9374 7.86275 20.4001 7.2 20.4001C5.87451 20.4001 4.8 19.3257 4.8 18.0001V14.4002C4.8 13.4782 4.45338 12.6371 3.88332 12.0002C4.45338 11.3633 4.8 10.5222 4.8 9.6002V6.0002C4.8 4.67471 5.87451 3.6002 7.2 3.6002C7.86275 3.6002 8.4 3.06294 8.4 2.4002C8.4 1.73745 7.86275 1.2002 7.2 1.2002ZM16.8 1.2002C16.1373 1.2002 15.6 1.73745 15.6 2.4002C15.6 3.06294 16.1373 3.6002 16.8 3.6002C18.1255 3.6002 19.2 4.67471 19.2 6.0002V9.6002C19.2 10.5222 19.5466 11.3633 20.1166 12.0002C19.5466 12.6371 19.2 13.4782 19.2 14.4002V18.0001C19.2 19.3257 18.1255 20.4001 16.8 20.4001C16.1373 20.4001 15.6 20.9374 15.6 21.6001C15.6 22.263 16.1373 22.8001 16.8 22.8001C19.451 22.8001 21.6 20.6512 21.6 18.0001V14.4002C21.6 13.7375 22.1373 13.2002 22.8 13.2002C23.4627 13.2002 24 12.6629 24 12.0002C24 11.3375 23.4627 10.8002 22.8 10.8002C22.1373 10.8002 21.6 10.2629 21.6 9.6002V6.0002C21.6 3.34923 19.451 1.2002 16.8 1.2002ZM8.93385 15.8101C8.98986 15.8661 9.05785 15.8941 9.13785 15.8941H14.8738C14.9619 15.8941 15.0299 15.8661 15.0779 15.8101C15.1338 15.7542 15.1618 15.6861 15.1618 15.6061V14.7541C15.1618 14.6661 15.1338 14.5981 15.0779 14.5501C15.0299 14.4941 14.9619 14.4661 14.8738 14.4661H11.4538L13.1579 12.7381C13.5419 12.4341 13.8699 12.1381 14.1419 11.8501C14.4139 11.5541 14.6219 11.2501 14.7659 10.9381C14.9098 10.6181 14.9818 10.2701 14.9818 9.89412C14.9818 9.41412 14.8699 8.98212 14.6458 8.59812C14.4298 8.21412 14.1019 7.91012 13.6618 7.68612C13.2298 7.46213 12.6819 7.35012 12.0178 7.35012C11.5459 7.35012 11.1219 7.42613 10.7458 7.57812C10.3699 7.73012 10.0499 7.93412 9.78585 8.19012C9.52986 8.43812 9.33385 8.72612 9.19785 9.05412C9.06186 9.37412 8.98986 9.70613 8.98185 10.0501C8.98185 10.1141 9.00585 10.1701 9.05385 10.2181C9.10185 10.2661 9.16185 10.2901 9.23385 10.2901H10.3018C10.3738 10.2901 10.4459 10.2701 10.5178 10.2301C10.5898 10.1901 10.6339 10.1181 10.6498 10.0141C10.6899 9.78212 10.7619 9.57012 10.8658 9.37812C10.9779 9.18612 11.1299 9.03413 11.3218 8.92212C11.5139 8.80212 11.7499 8.74212 12.0299 8.74212C12.4539 8.74212 12.7618 8.85413 12.9538 9.07812C13.1539 9.30212 13.2539 9.59412 13.2539 9.95412C13.2539 10.1941 13.1779 10.4381 13.0259 10.6861C12.8819 10.9261 12.6459 11.1941 12.3179 11.4901C11.9979 11.7781 11.5739 12.1301 11.0459 12.5461L9.14985 14.4301C9.02185 14.5341 8.93785 14.6381 8.89785 14.7421C8.86586 14.8381 8.84985 14.9221 8.84985 14.9941V15.6061C8.84985 15.6861 8.87786 15.7542 8.93385 15.8101Z" fill="white"></path>
                                    </svg>
                                  </span>
                                  GAP ANALYSIS & CONSULTATION
                                </span>
                                <span className="badge-feature leading-[1.7] bg-shades-deep-navy/50 text-white flex cursor-default flex-row items-center rounded-[40px] border border-transparent shadow-[0_0_0px_1px_rgba(0,0,0,0.44)] backdrop-blur-md transition-[color,border] duration-150 hover:border-white/10 hover:text-white gap-[5px] py-[2px] pl-[6px] pr-[8px] text-[12px] agents-feature-item -mb-1" style={{ zIndex: 8, opacity: 0.6, transform: 'scale(1.2, 1.2)' }}>
                                  <span className="opacity-50">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="size-4">
                                      <path fillRule="evenodd" clipRule="evenodd" d="M7.2 1.2002C4.54904 1.2002 2.4 3.34923 2.4 6.0002V9.6002C2.4 10.2629 1.86275 10.8002 1.2 10.8002C0.537258 10.8002 0 11.3375 0 12.0002C0 12.6629 0.537258 13.2002 1.2 13.2002C1.86275 13.2002 2.4 13.7375 2.4 14.4002V18.0001C2.4 20.6512 4.54904 22.8001 7.2 22.8001C7.86275 22.8001 8.4 22.263 8.4 21.6001C8.4 20.9374 7.86275 20.4001 7.2 20.4001C5.87451 20.4001 4.8 19.3257 4.8 18.0001V14.4002C4.8 13.4782 4.45338 12.6371 3.88332 12.0002C4.45338 11.3633 4.8 10.5222 4.8 9.6002V6.0002C4.8 4.67471 5.87451 3.6002 7.2 3.6002C7.86275 3.6002 8.4 3.06294 8.4 2.4002C8.4 1.73745 7.86275 1.2002 7.2 1.2002ZM16.8 1.2002C16.1373 1.2002 15.6 1.73745 15.6 2.4002C15.6 3.06294 16.1373 3.6002 16.8 3.6002C18.1255 3.6002 19.2 4.67471 19.2 6.0002V9.6002C19.2 10.5222 19.5466 11.3633 20.1166 12.0002C19.5466 12.6371 19.2 13.4782 19.2 14.4002V18.0001C19.2 19.3257 18.1255 20.4001 16.8 20.4001C16.1373 20.4001 15.6 20.9374 15.6 21.6001C15.6 22.263 16.1373 22.8001 16.8 22.8001C19.451 22.8001 21.6 20.6512 21.6 18.0001V14.4002C21.6 13.7375 22.1373 13.2002 22.8 13.2002C23.4627 13.2002 24 12.6629 24 12.0002C24 11.3375 23.4627 10.8002 22.8 10.8002C22.1373 10.8002 21.6 10.2629 21.6 9.6002V6.0002C21.6 3.34923 19.451 1.2002 16.8 1.2002ZM8.93385 15.8101C8.98986 15.8661 9.05785 15.8941 9.13785 15.8941H14.8738C14.9619 15.8941 15.0299 15.8661 15.0779 15.8101C15.1338 15.7542 15.1618 15.6861 15.1618 15.6061V14.7541C15.1618 14.6661 15.1338 14.5981 15.0779 14.5501C15.0299 14.4941 14.9619 14.4661 14.8738 14.4661H11.4538L13.1579 12.7381C13.5419 12.4341 13.8699 12.1381 14.1419 11.8501C14.4139 11.5541 14.6219 11.2501 14.7659 10.9381C14.9098 10.6181 14.9818 10.2701 14.9818 9.89412C14.9818 9.41412 14.8699 8.98212 14.6458 8.59812C14.4298 8.21412 14.1019 7.91012 13.6618 7.68612C13.2298 7.46213 12.6819 7.35012 12.0178 7.35012C11.5459 7.35012 11.1219 7.42613 10.7458 7.57812C10.3699 7.73012 10.0499 7.93412 9.78585 8.19012C9.52986 8.43812 9.33385 8.72612 9.19785 9.05412C9.06186 9.37412 8.98986 9.70613 8.98185 10.0501C8.98185 10.1141 9.00585 10.1701 9.05385 10.2181C9.10185 10.2661 9.16185 10.2901 9.23385 10.2901H10.3018C10.3738 10.2901 10.4459 10.2701 10.5178 10.2301C10.5898 10.1901 10.6339 10.1181 10.6498 10.0141C10.6899 9.78212 10.7619 9.57012 10.8658 9.37812C10.9779 9.18612 11.1299 9.03413 11.3218 8.92212C11.5139 8.80212 11.7499 8.74212 12.0299 8.74212C12.4539 8.74212 12.7618 8.85413 12.9538 9.07812C13.1539 9.30212 13.2539 9.59412 13.2539 9.95412C13.2539 10.1941 13.1779 10.4381 13.0259 10.6861C12.8819 10.9261 12.6459 11.1941 12.3179 11.4901C11.9979 11.7781 11.5739 12.1301 11.0459 12.5461L9.14985 14.4301C9.02185 14.5341 8.93785 14.6381 8.89785 14.7421C8.86586 14.8381 8.84985 14.9221 8.84985 14.9941V15.6061C8.84985 15.6861 8.87786 15.7542 8.93385 15.8101Z" fill="white"></path>
                                    </svg>
                                  </span>
                                  DIGITAL MARKETING SERVICES
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div
              ref={card2Ref}
              className="col-span-12 md:col-span-12 lg:col-span-1 sm:col-span-12 border-1 rounded-3xl bg-gradient-to-b from-[#1797ff] via-[#100B1F] to-[#4d274d] relative overflow-hidden"
              onMouseMove={(e) => handleMouseMove(e, card2Ref, setCard2)}
              onMouseEnter={() => setCard2(prev => ({ ...prev, isHovered: true }))}
              onMouseLeave={() => setCard2(prev => ({ ...prev, isHovered: false }))}
            >
              {/* Gradient overlay */}
              <div
                className="absolute inset-0 pointer-events-none transition-opacity duration-300"
                style={{
                  opacity: card2.isHovered ? 1 : 0,
                  background: `radial-gradient(${card2.size}px at ${card2.x}px ${card2.y}px, rgba(238, 79, 39, 0.3), rgba(107, 33, 239, 0.3), transparent 80%)`,
                }}
              />

              <div className="card-anime relative flex flex-col overflow-hidden w-[100%] h-full items-stretch rounded-lg card-nested">
                <div className="card-wrapper relative flex h-full w-[100%] items-stretch overflow-hidden rounded-lg p-0 bg-shades-deep-navy/30">
                  <div className="animate invisible absolute left-1/2 top-1/2 z-0 block aspect-square -translate-x-1/2 -translate-y-1/2 rounded-full opacity-0 blur-[60px] will-change-[transform,opacity] bg-gradient-to-r from-[#ee4f27] to-[#6b21ef]" ></div>
                  <div className="card-inner relative z-10 h-full w-[100%] rounded-3xl bg-[#0c081c6e] gradient--default p-0">
                    <div className="card-content h-full w-full">
                      <div className="grid h-full w-full grid-cols-1 gap-4 px-4 py-6 md:grid-cols-2">
                        <div className="image flex flex-col items-center">
                          <div className="relative inline-block">
                            <Image
                              alt="Local AI"
                              src="/images/ai_local_0963b5f7b2.png"
                              className="absolute left-[68%] top-[41%] z-10 h-auto w-[31%] transition-transform duration-500 ease-[cubic-bezier(.87,-.41,.19,1.44)] hover:scale-125"
                              width={150}
                              height={150}
                              priority
                            />
                            <Image
                              alt="Fully self-hostable"
                              src="/images/self_host_66e57951a8.png"
                              className="h-[290px] w-auto object-cover opacity-55 transition-opacity duration-300 hover:opacity-100 md:h-[368px]"
                              width={400}
                              height={368}
                              priority
                            />
                          </div>
                        </div>
                        <div className="flex flex-col justify-center gap-4 md:gap-6 md:px-8">
                          <header className="flex flex-col gap-2">
                            <h3 className="text-[1.5rem] font-[500] title title--white font-geomanist-book leading-none text-[#F8F8F8]/95">
                              Hosting to make your website visible to everyone
                            </h3>
                            <p className="font-geomanist text-[1rem] text-white opacity-55">
                              Protect your data by deploying your site.
                            </p>
                          </header>
                          <ul className="flex flex-col gap-y-3">
                            <li className="feature-item flex flex-row gap-x-2">
                              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="shrink-0 text-white opacity-55 iconify iconify--uil" style={{ fontSize: '24px' }} width="1em" height="1em" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M18.71 7.21a1 1 0 0 0-1.42 0l-7.45 7.46l-3.13-3.14A1 1 0 1 0 5.29 13l3.84 3.84a1 1 0 0 0 1.42 0l8.16-8.16a1 1 0 0 0 0-1.47"></path>
                              </svg>
                              <div className="font-geomanist text-sm text-white opacity-55">
                                <p>Deploy on Hostinger & GoDaddy</p>
                              </div>
                            </li>
                            <li className="feature-item flex flex-row gap-x-2">
                              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="shrink-0 text-white opacity-55 iconify iconify--uil" style={{ fontSize: '24px' }} width="1em" height="1em" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M18.71 7.21a1 1 0 0 0-1.42 0l-7.45 7.46l-3.13-3.14A1 1 0 1 0 5.29 13l3.84 3.84a1 1 0 0 0 1.42 0l8.16-8.16a1 1 0 0 0 0-1.47"></path>
                              </svg>
                              <div className="font-geomanist text-sm text-white opacity-55">
                                <p>Access the entire source code on Github</p>
                              </div>
                            </li>
                            <li className="feature-item flex flex-row gap-x-2">
                              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="shrink-0 text-white opacity-55 iconify iconify--uil" style={{ fontSize: '24px' }} width="1em" height="1em" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M18.71 7.21a1 1 0 0 0-1.42 0l-7.45 7.46l-3.13-3.14A1 1 0 1 0 5.29 13l3.84 3.84a1 1 0 0 0 1.42 0l8.16-8.16a1 1 0 0 0 0-1.47"></path>
                              </svg>
                              <div className="font-geomanist text-sm text-white opacity-55">
                                <p>Hosted version also available</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div
              ref={card3Ref}
              className="col-span-12 md:col-span-12 lg:col-span-3 sm:col-span-12 border-1 rounded-3xl bg-gradient-to-b from-[#6c2ca3] via-[#35284d] to-[#12192F] relative overflow-hidden"
              onMouseMove={(e) => handleMouseMove(e, card3Ref, setCard3)}
              onMouseEnter={() => setCard3(prev => ({ ...prev, isHovered: true }))}
              onMouseLeave={() => setCard3(prev => ({ ...prev, isHovered: false }))}
            >
              {/* Gradient overlay */}
              <div
                className="absolute inset-0 pointer-events-none transition-opacity duration-300"
                style={{
                  opacity: card3.isHovered ? 1 : 0,
                  background: `radial-gradient(${card3.size}px at ${card3.x}px ${card3.y}px, rgba(37, 0, 85, 0.3), rgba(0, 25, 255, 0.3), transparent 80%)`,
                }}
              />

              <div className="card-anime relative flex flex-col overflow-hidden w-full h-full items-stretch rounded-lg card-nested">
                <div className="card-wrapper relative flex h-full w-full items-stretch overflow-hidden rounded-lg p-0 bg-shades-deep-navy/30">
                  <div className="animate invisible absolute left-1/2 top-1/2 z-0 block aspect-square -translate-x-1/2 -translate-y-1/2 rounded-full opacity-0 blur-[60px] will-change-[transform,opacity] bg-gradient-to-r from-[#250055] to-[#0019ff]"></div>
                  <div className="card-inner relative z-10 h-full w-full rounded-lg bg-[#0c081c6e] gradient--blue p-0">
                    <div className="card-content h-full w-full">
                      <div className="flex h-full flex-col gap-4 px-4 py-6">
                        <header className="mb-6 flex flex-col gap-2">
                          <h3 className="text-[1.5rem] font-[500] title title--white font-geomanist-book leading-none text-[#F8F8F8]/95">
                            Chat with us and communicate with us
                          </h3>
                          <p className="font-geomanist text-[1rem] text-white opacity-55">
                            You can contact us now and learn about our services, what we offer, and how we will find you technological solutions and plans to advance your organization and make it better.
                          </p>
                        </header>
                        <div className="chat">
                          <div className="chat-box flex flex-col gap-4">
                            <div
                              data-aos="zoom-in"
                              data-aos-duration="300"
                              data-aos-delay="100"
                              className="chat-box-message rounded-lg border border-white/10 bg-shades-deep-navy/50 px-2 pb-2 pt-2 text-sm leading-[1.5] text-shades-soft-gray text-white/80 shadow-[inset_0px_4px_12px_0px_rgba(255,255,255,0.05),0px_4px_16px_-8px_rgba(0,0,0,0.23)] backdrop-blur-md self-start">
                              <span>Who held meetings with SpaceX last week?</span>
                            </div>
                            <div
                              data-aos="zoom-in"
                              data-aos-duration="300"
                              data-aos-delay="300"
                              className="chat-box-message rounded-lg border border-white/10 bg-shades-deep-navy/50 px-2 pb-2 pt-2 text-sm leading-[1.5] text-shades-soft-gray text-white/80 shadow-[inset_0px_4px_12px_0px_rgba(255,255,255,0.05),0px_4px_16px_-8px_rgba(0,0,0,0.23)] backdrop-blur-md self-end">
                              <span>On Wednesday, Joe updated the status to "won" in Salesforce after a Zoom call.</span>
                            </div>
                            <div
                              data-aos="zoom-in"
                              data-aos-duration="300"
                              data-aos-delay="500"
                              className="chat-box-message rounded-lg border border-white/10 bg-shades-deep-navy/50 px-2 pb-2 pt-2 text-sm leading-[1.5] text-shades-soft-gray text-white/80 shadow-[inset_0px_4px_12px_0px_rgba(255,255,255,0.05),0px_4px_16px_-8px_rgba(0,0,0,0.23)] backdrop-blur-md self-end">
                              <span>On Thursday, Sue provided on-site setup and closed the ServiceNow ticket.</span>
                            </div>
                            <div
                              data-aos="zoom-in"
                              data-aos-duration="300"
                              data-aos-delay="700"
                              className="chat-box-message rounded-lg border border-white/10 bg-shades-deep-navy/50 px-2 pb-2 pt-2 text-sm leading-[1.5] text-shades-soft-gray text-white/80 shadow-[inset_0px_4px_12px_0px_rgba(255,255,255,0.05),0px_4px_16px_-8px_rgba(0,0,0,0.23)] backdrop-blur-md self-start">
                              <span>Create a task in Asana...</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ///////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* section 7 */}
      <section className="w-full px-4 md:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col gap-12 relative">
            {/* First Feature Block */}
            <div className="relative flex flex-col gap-y-6 overflow-hidden rounded-[17px]  bg-gradient-to-br from-[#0f97ff] via-[#04558b] to-[#63219c] p-8 lg:flex-row lg:items-center lg:gap-x-20 lg:bg-white">
              <div className="pointer-events-none absolute bottom-0 left-0 right-0 top-0 -z-10 overflow-hidden rounded-2xl">
                <div className="lottie-animation-container absolute left-1/2 top-1/2 aspect-video min-h-full w-auto min-w-full -translate-x-1/2 -translate-y-1/2 transform bg-[#464646]">
                  <canvas
                    className="mix-blend-lighten w-full h-full"
                    style={{ contentVisibility: 'visible' }}
                  ></canvas>
                </div>
              </div>

              <div className="relative mb-8 pb-4 pt-5 md:pb-20 md:pt-20 lg:order-2 lg:mb-0 lg:flex-[0_0_49%] lg:pr-10 perspective-500"
                data-aos="zoom-in"
                data-aos-duration="500"
                data-aos-delay="900">
                <Image
                  src="/images/coding-man.jpg"
                  alt="Code / UI"
                  width={798}
                  height={549}
                  className="effect-img w-full border-[3px] border-[black] rounded-2xl -rotate-x-10 rotate-y-20  rotate-z-3 hover:scale-105 transition-all duration-300 "
                  onError={(e) => e.currentTarget.setAttribute('data-error', '1')}
                />
              </div>

              <div className="flex flex-col lg:flex-[0_0_45%] lg:pl-12 xl:pl-14">
                <h2 className="text-2xl md:text-3xl lg:text-[3rem] tracking-tight  text-[#ffff] font-medium mb-2">
                  CUSTOM BUSINESS APPLICATIONS
                </h2>
                <p className="font-[400] text-sm mb-8 text-[#cdcdcd] xl:w-3/4">
                  We design and develop custom mobile and web applications including HR systems, booking platforms, and trading interfaces. Our
                  development approach emphasizes scalability, intuitive user interfaces, and high performance across devices, ensuring optimal
                  user experience and business efficiency
                </p>

                <ul className="flex flex-col gap-y-6 text-[#d1d1d1]">
                  {featureItems.map((item, index) => (
                    <FeatureItem key={index} {...item} />
                  ))}
                </ul>
              </div>
            </div>

            {/* Second Feature Block */}
            <div className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0E0818] p-8 lg:h-[600px] lg:flex-row lg:items-center lg:justify-between lg:px-0 lg:py-0">
              <div className="relative mb-8  lg:order-2 lg:mb-0 lg:flex-[0_0_49%] overflow-hidden ">
                <div className="relative w-full">
                  <div className="absolute bottom-1 left-0 top-1 z-10 w-full overflow-hidden rounded-r-2xl "></div>
                  <div className="absolute left-1/2  z-10 h-auto w-[32%] -translate-x-1/2 -translate-y-1/2 transform top-[47.3%]  ">
                    <Image
                      src="/images/thunder.webp"
                      alt="Thunder"
                      width={417}
                      height={417}
                      data-aos="zoom-in"
                      data-aos-duration="300"
                      data-aos-delay="700"
                    />
                  </div>
                  <div className="bg-video pointer-events-none  w-full rounded-br-2xl rounded-tr-2xl lg:aspect-auto lg:h-full ">
                    <video
                      data-aos="zoom-in"
                      data-aos-duration="300"
                      data-aos-delay="700"
                      preload="auto"
                      loop
                      autoPlay
                      muted
                      playsInline
                      className="bg-video--mask-linear mix-blend-lighten object-cover overflow-hidden object-center  left-0 top-0 z-20  h-full w-full "
                    >
                      <source src="/videos/run-tweak-repeat.mp4" type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>

              <div className="flex flex-col lg:flex-[0_0_45%] lg:pl-12 xl:pl-20">
                <div className="w-full lg:pl-2">
                  <h2 className="text-2xl md:text-3xl lg:text-[2.9rem] tracking-tighter bg-gradient-to-r from-[#F7F7F7]  to-[#7A8CE8] bg-clip-text text-transparent font-medium mb-2">
                    ERP IMPLEMENTATION
                  </h2>
                  <p className="font-[400] text-[0.95rem] tracking-tighter mb-8 text-[#AEA5BC]">
                    We offer comprehensive ERP implementation services tailored to the specific operational needs of each client. This includes ana-
                    lyzing current workflows, configuring the system for seamless integration with existing processes, and ensuring smooth data mi-
                    gration. Our goal is to deliver a streamlined ERP experience that enhances productivity and operational control.
                  </p>

                  <ul className="mb-8 flex flex-col gap-y-6 lg:mb-12 lg:grid lg:grid-cols-2 lg:gap-6">
                    {runTweakItems.map((item, index) => (
                      <RunTweakItem key={index} {...item} />
                    ))}
                  </ul>

                  <div className="flex">
                    <button
                      className="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-indigo-500 rounded-md group"
                    >
                      <span
                        className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-mr-4 group-hover:-mt-4"
                      >
                        <span
                          className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
                        ></span>
                      </span>
                      <span
                        className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-ml-4 group-hover:-mb-4"
                      >
                        <span
                          className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
                        ></span>
                      </span>
                      <span
                        className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-indigo-600 rounded-md group-hover:translate-x-0"
                      ></span>
                      <span
                        className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white cursor-pointer">
                        See how we plan and implement
                      </span>
                    </button>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* //////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* section 8 */}
      <section className="w-full px-4 md:px-8 lg:px-16 py-12 md:py-16 lg:py-5">
        <div className="max-w-7xl mx-auto w-full">
          <header className="flex flex-col mb-12 lg:mb-16 xl:mb-16 gap-y-4 items-center"
            data-aos="fade-up"
            data-aos-duration="300"
            data-aos-delay="500">
            <div className="h-8 relative flex py-1 pr-2.5 pl-1 items-center gap-1.5 border border-white/10 rounded-[44px] bg-gradient-to-bl from-[#635f6d]  to-[#624d82] backdrop-blur-md text-white text-xs cursor-text w-fit">
              <span className="flex w-6 h-6 justify-center items-center rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="text-white bg-gradient-to-br from-[#3e24ff]  to-[#4f12b0] rounded-full" width="23" height="23" viewBox="0 0 14 20" fill="none">
                  <g fill="#FFFBE6">
                    <path d="M2.36133 10.81C2.36133 10.6733 2.42057 10.5343 2.53906 10.393L8.5 2.96916C8.65039 2.78231 8.81217 2.69116 8.98535 2.69572C9.15853 2.70028 9.29297 2.77319 9.38867 2.91447C9.48893 3.05118 9.49349 3.23575 9.40234 3.46818L7.4541 8.73868H11.1592C11.3005 8.73868 11.4144 8.78198 11.501 8.86857C11.5921 8.95516 11.6377 9.06225 11.6377 9.18986C11.6377 9.32657 11.5807 9.46785 11.4668 9.61368L5.50586 17.0307C5.35547 17.2175 5.19141 17.3087 5.01367 17.3041C4.84049 17.3041 4.70605 17.2335 4.61035 17.0922C4.51465 16.9509 4.51009 16.7641 4.59668 16.5316L6.55176 11.2612H2.84668C2.7054 11.2612 2.58919 11.2179 2.49805 11.1313C2.4069 11.0447 2.36133 10.9376 2.36133 10.81Z" />
                  </g>
                </svg>
              </span>
              <span className="text-white/90 font-normal text-sm">See The Results</span>
            </div>
            <h2 className="text-4xl md:text-4xl lg:text-[3.3rem] font-[500] text-center  bg-gradient-to-r from-[#DEDCE2]  to-[#8754da] bg-clip-text text-transparent">
              Some of our work
            </h2>
          </header>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-6">
            {caseStudies.map((study, index) => (
              <div
                key={study.id}
                ref={el => cardRefs.current[index] = el}
                className="relative flex flex-col overflow-hidden w-full m-auto h-full items-stretch rounded-2xl bg-gradient-to-br from-[#6b00ed] to-[#b19ad1] border border-white/10"
                onMouseMove={(e) => handleMouseMove2(e, index)}
                onMouseEnter={() => setCardStates(prev => {
                  const newStates = [...prev];
                  newStates[index] = { ...newStates[index], isHovered: true };
                  return newStates;
                })}
                onMouseLeave={() => setCardStates(prev => {
                  const newStates = [...prev];
                  newStates[index] = { ...newStates[index], isHovered: false };
                  return newStates;
                })}
                data-aos="flip-left"
                data-aos-duration="1000"
                data-aos-delay="700"
              >
                {/* Gradient overlay */}
                <div
                  className="absolute inset-0 pointer-events-none transition-opacity duration-800"
                  style={{
                    opacity: cardStates[index].isHovered ? 1 : 0,
                    background: cardStates[index].size
                      ? `radial-gradient(${cardStates[index].size}px at ${cardStates[index].x}px ${cardStates[index].y}px, #b19ad1, #0f97ff, transparent 80%)`
                      : 'transparent',
                  }}

                />

                <div className="relative z-10 h-full w-full bg-[#0c081c6e] p-8 lg:px-[52px] lg:py-11 flex flex-col">
                  <div className="mb-10">
                    <Image
                      src={study.logo}
                      alt={study.company}
                      width={168}
                      height={42}
                      className="h-[42px] w-auto object-contain opacity-65 brightness-200 transition-opacity hover:opacity-100"
                    />
                  </div>

                  <div className="text-[1.5rem] font-light leading-[140%] text-[#ffffffcb] lg:mb-12">
                    <p dangerouslySetInnerHTML={{ __html: study.description }} />
                  </div>

                  <hr className="hidden lg:block h-px border-0 bg-white/10 my-6" />

                  <p className="font-[400] tracking-tighter hidden lg:block text-[#bebdc0] opacity-70 mb-12 text-[1.21rem]">
                    {study.quote}
                  </p>

                  <div className="hidden lg:flex items-center gap-5 mb-7">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src={study.author.image}
                        alt={study.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col gap-1 text-left">
                      <p className="font-book text-lg leading-none text-white">
                        {study.author.name}
                      </p>
                      <p className="font-book text-[0.9rem] text-[#AEA5BC]">
                        {study.author.position}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="relative group">
                      <button
                        className="relative inline-block p-px font-semibold leading-6 text-white bg-[#ff000000] shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
                      >
                        <span
                          className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                        ></span>

                        <span className="relative z-10 block px-6 py-3 rounded-xl bg-gradient-to-br from-[#a719ff] to-[#3b1571]">
                          <div className="relative z-10 flex items-center space-x-2">
                            <span className="transition-all duration-500 group-hover:translate-x-1">
                              Read Case Study
                            </span>
                            <svg
                              className="w-8 h-6 transition-transform duration-500 group-hover:translate-x-1"
                              data-slot="icon"
                              aria-hidden="true"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                clipRule="evenodd"
                                d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                                fillRule="evenodd"
                              ></path>
                            </svg>
                          </div>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ////////////////////////////////////////////////////////////////// */}
      {/* section 9 */}
      <section className="w-full px-4 md:px-8 lg:px-16 py-16 md:py-20 lg:py-24 relative z-10 overflow-hidden bg-shades-deep-navy">
        <div className="max-w-7xl mx-auto w-full">
          <div className="relative lg:grid lg:grid-cols-2 lg:gap-x-16 xl:grid-cols-[600px_auto] xl:gap-x-32">
            {/* Background Image */}
            <div className="hidden lg:block absolute inset-0 opacity-40 pointer-events-none lg:left-[200px]"
              data-aos="fade-up"
              data-aos-duration="300"
              data-aos-delay="500">
              <Image
                src="/images/server.png"
                alt="Server background"
                width={1120}
                height={853}
                layout="responsive"
                className="object-contain"
              />
            </div>

            {/* Content Column */}
            <div className="relative z-10">
              <header className="flex flex-col mb-8 gap-y-4 items-start">
                {/* Badge */}
                <div
                  data-aos="fade-up"
                  data-aos-duration="400"
                  data-aos-delay="200"
                  className="h-8 relative flex py-1 pr-2.5 pl-1 items-center gap-1.5 border border-white/10 rounded-[44px] bg-gradient-to-bl from-[#635f6d]  to-[#624d82] backdrop-blur-md text-white text-xs cursor-text w-fit">
                  <span className="flex w-6 h-6 justify-center items-center rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-white bg-gradient-to-br from-[#3e24ff]  to-[#4f12b0] rounded-full" width="23" height="23" viewBox="0 0 14 20" fill="none">
                      <g fill="#FFFBE6">
                        <path d="M2.36133 10.81C2.36133 10.6733 2.42057 10.5343 2.53906 10.393L8.5 2.96916C8.65039 2.78231 8.81217 2.69116 8.98535 2.69572C9.15853 2.70028 9.29297 2.77319 9.38867 2.91447C9.48893 3.05118 9.49349 3.23575 9.40234 3.46818L7.4541 8.73868H11.1592C11.3005 8.73868 11.4144 8.78198 11.501 8.86857C11.5921 8.95516 11.6377 9.06225 11.6377 9.18986C11.6377 9.32657 11.5807 9.46785 11.4668 9.61368L5.50586 17.0307C5.35547 17.2175 5.19141 17.3087 5.01367 17.3041C4.84049 17.3041 4.70605 17.2335 4.61035 17.0922C4.51465 16.9509 4.51009 16.7641 4.59668 16.5316L6.55176 11.2612H2.84668C2.7054 11.2612 2.58919 11.2179 2.49805 11.1313C2.4069 11.0447 2.36133 10.9376 2.36133 10.81Z" />
                      </g>
                    </svg>
                  </span>
                  <span className="text-white/90 font-normal text-sm">Enterprise-ready</span>
                </div>

                <h2
                  data-aos="fade-up"
                  data-aos-duration="400"
                  data-aos-delay="400"
                  className="text-4xl md:text-5xl lg:text-[2.9rem] tracking-tighter text-shades-paragraphs font-[600] bg-gradient-to-r from-[#DEDCE2]  to-[#4a56fd] bg-clip-text text-transparent">
                  MODULE DEVELOPMENT & CUSTOMIZATION
                </h2>

                <p
                  data-aos="fade-up"
                  data-aos-duration="400"
                  data-aos-delay="600"
                  className="text-[#b4b7d7] lg:max-w-[540px] text-shades-paragraphs">
                  We build and tailor ERP modules to extend core system functionality in line with unique business processes. Whether enhancing
                  existing components or developing new ones from scratch, we ensure modular flexibility that supports business growth and oper-
                  ational specificity.
                </p>
              </header>

              {/* CTA Buttons */}
              <div className="mb-12 flex flex-col gap-y-4 md:flex-row md:gap-x-4 lg:mb-14"
                data-aos="fade-up"
                data-aos-duration="400"
                data-aos-delay="800">
                <Link
                  href="/enterprise/"
                  className="bg-[#3195fa] hover:bg-[#067cf3] text-white py-2 px-6 rounded-lg text-center font-book min-h-[39px] flex items-center justify-center"
                >
                  Explore CG for enterprise
                </Link>

                <Link
                  href="https://n8n-community.typeform.com/to/y9X2YuGa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white/20 hover:bg-white/5 text-white py-2 px-6 rounded-lg text-center font-book min-h-[39px] flex items-center justify-center"
                >
                  Talk to us
                </Link>
              </div>

              {/* Features List */}
              <ul className="mb-8 flex flex-col gap-y-6 lg:mb-10 lg:max-w-[540px] lg:gap-y-8"
                data-aos="fade-up"
                data-aos-duration="400"
                data-aos-delay="1000">
                <li className="flex flex-col gap-y-2 md:flex-row md:gap-x-6">
                  <h3 className="w-full font-[700] tracking-tighter text-white md:w-4/12 lg:w-4/12">Customization of ERP Modules</h3>
                  <div className="w-full font-[400] tracking-tighter text-[#b4b7d7] text-[1.02rem] text-shades-paragraphs md:w-8/12 lg:w-8/12">
                    <p>Developing ERP modules tailored to the unique needs of each business.</p>
                  </div>
                </li>

                <li className="flex flex-col gap-y-2 md:flex-row md:gap-x-6">
                  <h3 className="w-full font-[700] tracking-tighter text-white md:w-4/12 lg:w-4/12">Enhancement of Existing Components</h3>
                  <div className="w-full font-[400] tracking-tighter text-[#b4b7d7] text-[1.02rem] text-shades-paragraphs md:w-8/12 lg:w-8/12">
                    <p>Improving current ERP features for better performance and efficiency.</p>
                  </div>
                </li>

                <li className="flex flex-col gap-y-2 md:flex-row md:gap-x-6">
                  <h3 className="w-full font-[700] tracking-tighter text-white md:w-4/12 lg:w-4/12">Modular Flexibility in Design</h3>
                  <div className="w-full font-[400] tracking-tighter text-[#b4b7d7] text-[1.02rem] text-shades-paragraphs md:w-8/12 lg:w-8/12">
                    <p>Allowing easy modifications and expansions to adapt as businesses grow.</p>
                  </div>
                </li>
              </ul>

              <hr className="h-px w-full border-0 bg-white opacity-10 my-8" />
            </div>

            {/* Feedback Card (Right Column) */}
            <div className="hidden lg:flex flex-col items-end mt-8"
              data-aos="fade-up"
              data-aos-duration="400"
              data-aos-delay="600">
              <div
                ref={cardRef}
                className="relative overflow-hidden rounded-[20px] max-w-[408px] w-full bg-gradient-to-br from-[#1e4485b1] via-[#3b96ffb3] to-[#1e4485b1] border border-white/10 p-8"
                onMouseMove={handleMouseMove3}
                onMouseEnter={() => setCardState(prev => ({ ...prev, isHovered: true }))}
                onMouseLeave={() => setCardState(prev => ({ ...prev, isHovered: false }))}
              >
                {/* Gradient overlay */}
                <div
                  className="absolute inset-0 pointer-events-none transition-opacity duration-800"
                  style={{
                    opacity: cardState.isHovered ? 1 : 0,
                    background: cardState.size
                      ? `radial-gradient(${cardState.size}px at ${cardState.x}px ${cardState.y}px, rgba(17, 12, 34, 0.4), rgba(35, 22, 37, 0.4), rgba(17, 12, 34, 0.4), transparent 150%)`
                      : 'transparent',
                  }}
                />

                <p className="mb-8 text-shades-soft-gray italic text-[1.07rem] font-[400] text-[#b4b7d7] tracking-tight relative z-10">
                  "The idea is that everybody in the organization can use n8n to manage data retrieval or data transformation."
                </p>

                <div className="flex items-center gap-5 relative z-10">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src="/images/Martino_Bonfiglioni_9a3bf848b3.jpeg"
                      alt="Martino Bonfiglioni"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>

                  <div className="flex flex-col">
                    <p className="text-white text-[1.11rem]">Martino Bonfiglioli</p>
                    <p className="text-shades-lavender-gray text-[0.87rem] text-[#b4b7d7]">Senior Product Manager</p>
                  </div>
                </div>

                <Link
                  href="/case-studies/musixmatch/"
                  className="mt-8 flex w-fit items-center gap-x-1 text-sm text-shades-lavender-gray text-[#C4BBD3] font-[500] text-[0.9rem] tracking-tight relative z-10 hover:text-white transition-colors duration-300"
                >
                  See the case
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 256 256"
                    className="fill-current transition-transform duration-300 hover:translate-x-1"
                  >
                    <path d="m220.24 132.24l-72 72a6 6 0 0 1-8.48-8.48L201.51 134H40a6 6 0 0 1 0-12h161.51l-61.75-61.76a6 6 0 0 1 8.48-8.48l72 72a6 6 0 0 1 0 8.48"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Logos Section */}
          <div className="flex gap-6 mt-[-40px] flex-wrap"
            data-aos="fade-up"
            data-aos-duration="400"
            data-aos-delay="1000">
            <div className="mt-6 w-[13%] min-w-[32px] max-w-[80px]">
              <Link href="/legal/#security" className="block hover:opacity-85 transition-opacity">
                <Image
                  src="/logostech/nextjs-fill-svgrepo-com.svg"
                  alt="SOC 2 Compliant"
                  width={150}
                  height={150}
                  layout="responsive"
                />
              </Link>
            </div>

            <div className="mt-6 w-[13%] min-w-[32px] max-w-[80px]">
              <Link href="/legal/#security" className="block hover:opacity-85 transition-opacity">
                <Image
                  src="/logostech/vs-code-svgrepo-com.svg"
                  alt="GDPR Compliant"
                  width={150}
                  height={150}
                  layout="responsive"
                />
              </Link>
            </div>

            <div className="mt-6 w-[13%] min-w-[32px] max-w-[80px]">
              <Link href="/legal/#security" className="block hover:opacity-85 transition-opacity">
                <Image
                  src="/logostech/nodejs-icon-svgrepo-com.svg"
                  alt="GDPR Compliant"
                  width={150}
                  height={150}
                  layout="responsive"
                />
              </Link>
            </div>

            <div className="mt-6 w-[13%] min-w-[32px] max-w-[80px]">
              <Link href="/legal/#security" className="block hover:opacity-85 transition-opacity">
                <Image
                  src="/logostech/flutter-svgrepo-com.svg"
                  alt="Security Certified"
                  width={150}
                  height={150}
                  layout="responsive"
                />
              </Link>
            </div>


          </div>
        </div>
      </section>
      {/* ///////////////////////////////////////////////////////////////// */}
      {/* section 10 */}
      <section className="w-full px-4 md:px-8 lg:px-16 py-8 md:py-5 lg:py-2 relative z-10">
        <div className="max-w-7xl mx-auto w-full"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="400">
          <div className="relative max-lg:overflow-hidden bg-gradient-to-b from-[#0454e7bb] to-[#0E0918] rounded-2xl"
            ref={sectionRef}

            onMouseMove={handleMouseMove4}
            onMouseEnter={() => setSectionState(prev => ({ ...prev, isHovered: true }))}
            onMouseLeave={() => setSectionState(prev => ({ ...prev, isHovered: false }))}>

            {/* Gradient overlay */}
            <div
              className="absolute inset-0 pointer-events-none transition-opacity duration-800 rounded-2xl"
              style={{
                opacity: sectionState.isHovered ? 0.7 : 0,
                background: sectionState.size
                  ? `radial-gradient(${sectionState.size}px at ${sectionState.x}px ${sectionState.y}px, #0E0918,#0E0918 , transparent 30%)`
                  : 'transparent',
              }}
            />

            {/* Content Container */}
            <div className="overflow-hidden rounded-2xl border-1 border-white/30 backdrop-blur-[0px] relative">
              {/* Image Section */}
              <div className="relative w-full h-auto aspect-video md:aspect-[4/1]">
                <Image
                  src="/images/embed-automation.webp"
                  alt="Automation"
                  layout="fill"
                  objectFit="cover"
                  className="md:-mb-[5%]"
                  placeholder="blur"
                  blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMwOCIgaGVpZ2h0PSIzMzYiIHZpZXdCb3g9IjAgMCAxMzA4IDMzNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjEzMDgiIGhlaWdodD0iMzM2IiBmaWxsPSIjMjMxRjJGIi8+Cjwvc3ZnPg=="
                  quality={100}
                />
              </div>

              {/* Text Content */}
              <div className="relative z-10 px-4 sm:px-8 md:px-16 pb-16 mt-[-60px]">
                <header className="flex flex-col mb-8 gap-y-6 items-center m-auto">
                  {/* Badge */}
                  <div className="h-8 relative flex py-1 pr-2.5 pl-1 items-center gap-1.5 border border-white/10 rounded-[44px] bg-gradient-to-bl from-[#5793fa] to-[#0a7cff] backdrop-blur-md text-white text-xs cursor-text w-fit">
                    <span className="flex w-6 h-6 justify-center items-center rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="text-white bg-gradient-to-br from-[#1875f8] to-[#001f7a] rounded-full" width="23" height="23" viewBox="0 0 14 20" fill="none">
                        <g fill="#FFFBE6">
                          <path d="M2.36133 10.81C2.36133 10.6733 2.42057 10.5343 2.53906 10.393L8.5 2.96916C8.65039 2.78231 8.81217 2.69116 8.98535 2.69572C9.15853 2.70028 9.29297 2.77319 9.38867 2.91447C9.48893 3.05118 9.49349 3.23575 9.40234 3.46818L7.4541 8.73868H11.1592C11.3005 8.73868 11.4144 8.78198 11.501 8.86857C11.5921 8.95516 11.6377 9.06225 11.6377 9.18986C11.6377 9.32657 11.5807 9.46785 11.4668 9.61368L5.50586 17.0307C5.35547 17.2175 5.19141 17.3087 5.01367 17.3041C4.84049 17.3041 4.70605 17.2335 4.61035 17.0922C4.51465 16.9509 4.51009 16.7641 4.59668 16.5316L6.55176 11.2612H2.84668C2.7054 11.2612 2.58919 11.2179 2.49805 11.1313C2.4069 11.0447 2.36133 10.9376 2.36133 10.81Z" />
                        </g>
                      </svg>
                    </span>
                    <span className="text-white/90 font-normal text-sm">Constant Growth</span>
                  </div>

                  {/* Heading */}
                  <h2 className="text-2xl md:text-4xl lg:text-[3rem] text-center font-medium tracking-tight text-white max-w-md md:max-w-2xl w-[35%]">
                    Our Vision
                  </h2>

                  {/* Description */}
                  <p className="text-[#BAB2CA] text-center max-w-lg mx-auto text-[1.02rem]">
                    To become a leading regional technology provider recognized
                    for delivering scalable and effective ERP solutions that empower
                    businesses to thrive.
                  </p>
                </header>

                {/* Button */}
                <div className="flex justify-center">
                  <Link href="#" className="btn bg-gradient-to-br from-[#2082CE] via-[#2b2bee] to-[#3E4ADD] text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#244c96] flex items-center justify-center w-fit transform hover:scale-105">
                    Explore Constant Growth
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /////////////////////////////////////////////////////////////////////// */}
      {/* section 11 */}

      <section className="w-full px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-18 mt-10 relative z-30">
        <div className="max-w-7xl mx-auto w-full"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="400"
          ref={ctaContainerRef}
          onMouseMove={handleCtaMouseMove}
          onMouseEnter={() => setCtaMouseState(prev => ({ ...prev, isHovered: true }))}
          onMouseLeave={() => setCtaMouseState(prev => ({ ...prev, isHovered: false }))}>
          <div className="relative max-lg:overflow-hidden">
            <div className="relative flex w-full flex-col items-center justify-center overflow-visible">
              {/* Gradient border container */}
              <div
                ref={ctaContainerRef}
                className="relative z-10 flex w-full items-stretch justify-center overflow-visible rounded-[1.2rem] bg-gradient-to-br from-[#ffffff4d] to-[#ffffff4d] p-[1px]"
              >
                <div className="mb-0 flex w-full items-center justify-center overflow-hidden rounded-[1.2rem] bg-gradient-to-b from-[#0E0918] via-[#0e0918]  to-[#0454e7bb] relative">
                  {/* Gradient overlay */}
                  <div
                    className="absolute inset-0 pointer-events-none transition-opacity duration-300 rounded-[1.2rem]"
                    style={{
                      opacity: ctaMouseState.isHovered ? 0.7 : 0,
                      background: ctaMouseState.size
                        ? `radial-gradient(${ctaMouseState.size}px at ${ctaMouseState.x}px ${ctaMouseState.y}px, #0E0918, #0E0918, transparent 30%)`
                        : 'transparent',
                    }}
                  />
                  <div className="relative flex w-full flex-col items-center justify-center px-[10%] py-16 md:py-20 lg:py-24 z-10">
                    {/* Heading */}
                    <h2 className="text-2xl md:text-3xl lg:text-[3.4rem] tracking-tight font-book font-[600] text-[#FFFFFF] mx-auto mb-6 max-w-[460px] text-center md:max-w-[505px] lg:max-w-[570px]">
                      Our Mission
                    </h2>

                    {/* Description */}
                    <div className="text-lg md:text-[1.3rem] text-white mb-6 max-w-[520px] text-center lg:mx-auto lg:mb-10">
                      <p>
                        To enable organizations in Saudi Arabia and the region to grow
                        through digital innovation by providing reliable ERP systems,
                        custom business applications, and smart automation tools tai-
                        lored to their evolving needs.
                      </p>
                    </div>

                    {/* CTA Button */}
                    <div className="flex justify-center">
                      <Link href="/" className="btn bg-gradient-to-r from-[#1d6bfd] via-[#123fe0] to-[#3381ff] text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#244c96] flex items-center justify-center w-fit transform hover:scale-105" >
                        Start with us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ///////////////////////////////////////////////////////////////////// */}
      {/* section 12 */}
      <header className="flex flex-col mb-1 lg:mb-16 xl:mb-6 gap-y-4 items-center"
        data-aos="fade-up"
        data-aos-duration="300"
        data-aos-delay="500">
        <div className="h-8 relative flex py-1 pr-2.5 pl-1 items-center gap-1.5 border border-white/10 rounded-[44px] bg-gradient-to-bl from-[#635f6d]  to-[#624d82] backdrop-blur-md text-white text-xs cursor-text w-fit">
          <span className="flex w-6 h-6 justify-center items-center rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="text-white bg-gradient-to-br from-[#1875f8] to-[#001f7a] rounded-full" width="23" height="23" viewBox="0 0 14 20" fill="none">
              <g fill="#FFFBE6">
                <path d="M2.36133 10.81C2.36133 10.6733 2.42057 10.5343 2.53906 10.393L8.5 2.96916C8.65039 2.78231 8.81217 2.69116 8.98535 2.69572C9.15853 2.70028 9.29297 2.77319 9.38867 2.91447C9.48893 3.05118 9.49349 3.23575 9.40234 3.46818L7.4541 8.73868H11.1592C11.3005 8.73868 11.4144 8.78198 11.501 8.86857C11.5921 8.95516 11.6377 9.06225 11.6377 9.18986C11.6377 9.32657 11.5807 9.46785 11.4668 9.61368L5.50586 17.0307C5.35547 17.2175 5.19141 17.3087 5.01367 17.3041C4.84049 17.3041 4.70605 17.2335 4.61035 17.0922C4.51465 16.9509 4.51009 16.7641 4.59668 16.5316L6.55176 11.2612H2.84668C2.7054 11.2612 2.58919 11.2179 2.49805 11.1313C2.4069 11.0447 2.36133 10.9376 2.36133 10.81Z" />
              </g>
            </svg>
          </span>
          <span className="text-white/90 font-normal text-sm">See The Results</span>
        </div>
        <h2 className="text-4xl md:text-4xl lg:text-[3.1rem] font-[500] text-center  bg-gradient-to-r from-[#DEDCE2]  to-[#5261b3] bg-clip-text text-transparent">
          Opinions of some of our customers
        </h2>
      </header>

      <TestimonialCarousel />
      {/* /////////////////////////////////////////////////////////////////////////// */}
      <button
      onClick={scrollToTop}
      className={`fixed bottom-6 cursor-pointer right-6 z-50 p-3 rounded-full bg-blue-600 text-white shadow-md transition-all hover:bg-blue-700 ${
        visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-5 h-5" />
    </button>


    </main>
  );
}
