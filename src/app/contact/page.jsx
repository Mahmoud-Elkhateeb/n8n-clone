'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef, useCallback } from 'react';
import 'aos/dist/aos.css';
import Contact from './emailjs';




export default function ContactPage() {

  // section 2 logic

  const stats = [
    { value: '8.91 h', label: 'Average response time' },
    { value: '100%', label: 'Questions answered' },
    { value: '1400', label: 'Active community members' },
  ];
  // //////////////////////////////////////////////////////////////////////////

  // section 3 logic

  const engineers = [
    {
      name: "Jan",
      role: "Founder & CEO @ CG",
      image: "/images/n8n_community_gualter_5596a9a54d.jpeg",
      link: "https://community.n8n.io/u/jan/summary"
    },
    {
      name: "Jon",
      role: "Senior Community Engineer @ CG",
      image: "/images/n8n_community_gualter_5596a9a54d.jpeg",
      link: "https://community.n8n.io/u/jon/summary"
    },
    {
      name: "Marcus",
      role: "Partner Engineer @ CG",
      image: "/images/n8n_community_gualter_5596a9a54d.jpeg",
      link: "https://community.n8n.io/u/marcus/summary"
    },
    {
      name: "Aya",
      role: "Support Engineer @ CG",
      image: "/images/n8n_community_gualter_5596a9a54d.jpeg",
      link: "https://community.n8n.io/u/aya/summary"
    },
    {
      name: "Ria",
      role: "Support Engineer CG",
      image: "/images/n8n_community_gualter_5596a9a54d.jpeg",
      link: "https://community.n8n.io/u/ria/summary"
    },
    {
      name: "Mariana",
      role: "Support Engineer @ CG",
      image: "/images/n8n_community_gualter_5596a9a54d.jpeg",
      link: "https://community.n8n.io/u/mariana-na/summary"
    },
    {
      name: "Ihor",
      role: "Senior Support Engineer @ CG",
      image: "/images/n8n_community_gualter_5596a9a54d.jpeg",
      link: "https://community.n8n.io/u/ihortom/summary"
    },
    {
      name: "gualter",
      role: "Head of Support Engineering @ CG",
      image: "/images/n8n_community_gualter_5596a9a54d.jpeg",
      link: "https://community.n8n.io/u/gualter/summary"
    },
    {
      name: "gualter",
      role: "Head of Support Engineering @ CG",
      image: "/images/n8n_community_gualter_5596a9a54d.jpeg",
      link: "https://community.n8n.io/u/gualter/summary"
    }
  ];

  // //////////////////////////////////////////////////////////////////////////////////

  // section 4 logic

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

  // ////////////////////////////////////////////////////////////////

  // section 6 logic

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
      gradientClass: "bg-gradient-to-r from-[#184997] via-[#068AF7] to-[#184997]",
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





  return (
    <main className=" text-white flex flex-col justify-center ">
      {/* /////////////////////////////////////////////////////////////////////////////////// */}
      {/* section 1 */}

      <section className="w-full px-4 md:px-8 lg:px-16 py-16 md:py-24 lg:py-14 relative">
        <div className="max-w-7xl mx-auto w-full">
          <div className="opacity-100">
            <div className="absolute left-0 top-0 aspect-square w-full overflow-hidden md:aspect-auto md:min-h-[800px]">
              {/* SVG Image */}
              <div className="pointer-events-none absolute left-1/2 top-[100px] z-[2] w-full max-w-[1460px] -translate-x-1/2 transform md:top-1/2 md:-translate-y-[70%]">
                <Image
                  src="/images/hero-community.svg"
                  alt="Hero community illustration"
                  width={1460}
                  height={800}
                  onError={(e) => (e.currentTarget.style.display = 'none')}
                />
              </div>

              {/* Background PNG */}
              <div className="pointer-events-none absolute left-1/2 top-[100px] z-[1] w-full max-w-[1650px] -translate-x-1/2 transform opacity-60 lg:top-1/2 lg:-translate-y-[60%] lg:opacity-80">
                <Image
                  src="/images/hero-community-bg.png"
                  alt="Hero community background"
                  width={1650}
                  height={900}
                  quality={90}
                  onError={(e) => (e.currentTarget.style.display = 'none')}
                />
              </div>

              {/* Gradient */}
              <span className="circle-gradient absolute left-1/2 top-0 z-0 w-full h-full"></span>
            </div>

            <header className="section-header flex flex-col gap-y-4 items-center relative z-10 pt-16 lg:pt-24 xl:pt-28">
              <h2 className="text-4xl md:text-4xl lg:text-5xl font-[600] flex max-w-3xl flex-col items-center text-center bg-gradient-to-r from-[#cccccc] via-[#008ee6]  
      bg-[length:200%_auto] tracking-tight
      text-transparent bg-clip-text"
      data-aos="fade-up"
      data-aos-delay="200"
      data-aos-duration="300">
                <div className="text-[1.4rem] md:text-[1.5rem] font-[700]  bg-gradient-to-r from-[#893aea] via-[#c3c3c3]  
      bg-[length:200%_auto] tracking-tight
      text-transparent bg-clip-text  mb-2">
                  Here for you
                </div>
                Community support
              </h2>

              <p className="font-geomanist text-md md:text-xl max-w-2xl text-center text-white opacity-90"
              data-aos="fade-up"
      data-aos-delay="300"
      data-aos-duration="300">
                There are multiple support options for Constant Growth. Learn more about our forum and email support.
              </p>
            </header>
          </div>
        </div>
      </section>
      {/* ///////////////////////////////////////////////////////////////////////////// */}
      {/* section 2 */}

      <section className="w-full px-4 md:px-8 lg:px-16 pb-16 md:pb-24 lg:pb-32 relative z-10"
      data-aos="fade-up"
      data-aos-delay="400"
      data-aos-duration="300">
        <div className="max-w-7xl mx-auto w-full">
          <div>
            <p className="font-geomanist text-[1.03rem] font-[500] tracking-tight text-center text-gray-400 mb-4 opacity-80">
              Forum stats in the last 30 days
            </p>

            <div className="flex flex-col items-center justify-center gap-8 py-4 lg:flex-row lg:flex-wrap lg:gap-20">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="feature-item flex flex-row items-center gap-4 opacity-100"
                >
                  <div className="flex-shrink-0 rounded-lg bg-[#ffffff17] bg-opacity-[6%] px-3 py-2">
                    <span className="text-2xl font-book bg-gradient-to-r from-[#ffffff] via-[#808080]  
      bg-[length:200%_auto]
      text-transparent bg-clip-text text-[0.95rem] tracking-tighter font-[500]">
                      {stat.value}
                    </span>
                  </div>
                  <p className="font-geomanist text-lg text-gray-200">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* /////////////////////////////////////////////////////////////////////////////////////// */}
      {/* section 3 */}

      <section className="w-full px-4 md:px-8 lg:px-16 py-7 md:py-24 lg:py-0 relative z-10 bg-shades-dark">
        <div className="max-w-7xl mx-auto w-full">
          <header className="flex flex-col mb-12 lg:mb-16 xl:mb-15 gap-y-4 items-center"
          data-aos="fade-up"
      data-aos-delay="500"
      data-aos-duration="300">
            <h2 className="text-4xl md:text-5xl lg:text-5xl font-[600] flex max-w-3xl flex-col items-center text-center bg-gradient-to-r from-[#cccccc] via-[#008ee6]  
      bg-[length:200%_auto] tracking-tight
      text-transparent bg-clip-text">
              <div className="text-2xl md:text-[1.65rem] font-[600] bg-gradient-to-r from-[#893aea] via-[#c3c3c3]  
      bg-[length:200%_auto] tracking-tighter
      text-transparent bg-clip-text  mb-1">
                Free for allCG users
              </div>
              Meet our forum engineers
            </h2>
            <p className="font-geomanist text-lg max-w-2xl text-center text-gray-300">
              Some of the familiar faces you will run into on the forum, including our founder and CEO!
            </p>
          </header>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pb-12 md:pb-24 lg:pb-15 w-[100%] m-auto">
            {engineers.map((engineer, index) => (
              <Link
                key={index}
                href={engineer.link}
                target="_blank"
                rel="noopener noreferrer"
                className="card border  border-white/10 bg-shades-dark-navy rounded-2xl hover:bg-shades-dark-navy-hover transition-colors duration-300 bg-[#1B1728]"
              data-aos="flip-left"
      data-aos-delay="600"
      data-aos-duration="1000"
              >
                <div className="flex flex-row items-center justify-between gap-4 py-6 pl-6 pr-4">
                  <div className="flex flex-col gap-1">
                    <h3 className="font-geomanist text-xl text-white mb-2">{engineer.name}</h3>
                    <p className="font-geomanist text-xs text-shades-lavender-gray text-[#baaed0]">{engineer.role}</p>
                  </div>
                  <div className="flex-shrink-0 rounded-3xl bg-white/5 overflow-hidden">
                    <Image
                      src={engineer.image}
                      alt={`${engineer.name} profile photo`}
                      width={96}
                      height={96}
                      className="w-24 h-24 object-cover"
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6"
          data-aos="fade-up"
      data-aos-delay="500"
      data-aos-duration="300">
            <Link
              href="https://community.n8n.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn flex items-center text-center justify-center px-8 py-3 font-normal whitespace-nowrap rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-geomanist-book min-h-[48px] text-base transition-colors duration-300"
            >
              Ask your question
            </Link>
          </div>
        </div>
      </section>
      {/* ///////////////////////////////////////////////////////////////////////////////// */}
      {/* section 4 */}

      <section className="w-full px-4 md:px-8 lg:px-16 py-8 md:py-5 lg:py-33 relative z-10">
        <div className="max-w-7xl mx-auto xl:w-[65%]"
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
                  src="/images/n8n_support_free_8870fbdb8d.png"
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
              <div className="relative z-10 px-4 sm:px-8 md:px-16 pb-7 mt-[-52px]  m-auto">
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
                  <h2 className="text-2xl md:text-4xl lg:text-[3rem] text-center font-medium tracking-tight text-white max-w-md md:max-w-2xl w-[45%]">
                    Free for all CG users
                  </h2>

                  {/* Description */}
                  <p className="text-[#BAB2CA] text-center max-w-lg mx-auto text-[1.02rem]">
                    Our forum is like no other - with our engineers regularly answering topics on the forum, plus a large active community of n8n experts, you'll find all the help you need there. Whether you're a cloud user, self-hosting or still testing n8n in a trial, we're happy to help you with your technical questions and share the knowledge with the whole community.
                  </p>
                </header>

                {/* Button */}
                {/* <div className="flex justify-center">
                      <Link href="#" className="btn bg-gradient-to-br from-[#2082CE] via-[#2b2bee] to-[#3E4ADD] text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#244c96] flex items-center justify-center w-fit transform hover:scale-105">
                        Explore Constant Growth
                      </Link>
                    </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* section 5 */}

      <section className="w-full px-4 md:px-8 lg:px-16 py-16 md:py-20 lg:py-24 relative z-10 overflow-hidden bg-shades-deep-navy">
        <div className="max-w-7xl mx-auto xl:w-[60%]">
          <div className="relative lg:grid lg:grid-cols-2 lg:gap-x-16 xl:grid-cols-[500px_auto] xl:gap-x-32">
            {/* Background Image */}
            <div className="hidden lg:block absolute inset-0 opacity-40 pointer-events-none lg:left-[500px] lg:top-[130px]"
              data-aos="fade-up"
              data-aos-duration="300"
              data-aos-delay="500">
              <Image
                src="/images/experts_enterprise_plan_c7001aff85.png"
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
                  <span className="text-white/90 font-normal text-sm">Email Support</span>
                </div>
                <h2
                  data-aos="fade-up"
                  data-aos-duration="400"
                  data-aos-delay="400"
                  className="text-4xl md:text-5xl lg:text-[2.9rem] tracking-tighter text-shades-paragraphs font-[600] bg-gradient-to-r from-[#DEDCE2]  to-[#4a56fd] bg-clip-text text-transparent">
                  Enterprise & Power plan users
                </h2>
                <p
                  data-aos="fade-up"
                  data-aos-duration="400"
                  data-aos-delay="600"
                  className="text-[#b4b7d7] lg:max-w-[540px] text-shades-paragraphs">
                  We get it, sometimes email is just easier. That is why our Enterprise users and Power users get access to email support for technical doubts. Email your questions directly to ConstantGrowth@gmail.com and our team will be happy to help.
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
                  Email us
                </Link>

              </div>
              {/* Features List */}
              <ul className="mb-8 flex flex-col gap-y-6 lg:mb-10 lg:max-w-[540px] lg:gap-y-8"
                data-aos="fade-up"
                data-aos-duration="400"
                data-aos-delay="1000">
                <li className="flex flex-col gap-y-2 md:flex-row md:gap-x-6">
                  <h3 className="w-full font-[700] tracking-tighter text-white md:w-4/12 lg:w-4/12">Email Support for Enterprise and Power Users</h3>
                  <div className="w-full font-[400] tracking-tighter text-[#b4b7d7] text-[1.02rem] text-shades-paragraphs md:w-8/12 lg:w-8/12">
                    <p>This heading highlights that both Enterprise and Power plan users have access to email support. This service allows them to quickly seek help for any technical questions they may have.</p>
                  </div>
                </li>
                <li className="flex flex-col gap-y-2 md:flex-row md:gap-x-6">
                  <h3 className="w-full font-[700] tracking-tighter text-white md:w-4/12 lg:w-4/12">Direct Communication with Support Team</h3>
                  <div className="w-full font-[400] tracking-tighter text-[#b4b7d7] text-[1.02rem] text-shades-paragraphs md:w-8/12 lg:w-8/12">
                    <p>This emphasizes the ease of contacting the support team by sending emails directly to ConstantGrowth@gmail.com. It ensures that users can get prompt assistance for their queries.Improving current ERP features for better performance and efficiency.</p>
                  </div>
                </li>
              </ul>
              <hr className="h-px w-full border-0 bg-white opacity-10 my-8" />
            </div>
          </div>
        </div>
      </section>
      {/* ///////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* section 6 */}

      <header className="flex flex-col mb-12 lg:mb-16 xl:mb-22 gap-y-4 items-center mt-[-50px]"
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-delay="200">
        <h2 className="
        text-3xl md:text-5xl lg:text-[47px] 
        text-center flex flex-col items-center max-w-[800px] 
        bg-gradient-to-r from-[#c1c1c1] via-[#c76eff] to-[#417aff] bg-clip-text text-transparent font-[500]
      ">
          CG communication services
          
        </h2>
      </header>
      <div className=" flex flex-row flex-wrap xl:w-[70%] m-auto  items-center justify-center gap-4 px-2 md:px-0 lg:flex-row position-relative z-10 md:mt-[-20px] lg:mt-[-30px] sm:mt-[0px]  xl:mt-[00px]"
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
      {/* /////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* section 7 email */}

      <Contact/>
    </main>
  );
}
