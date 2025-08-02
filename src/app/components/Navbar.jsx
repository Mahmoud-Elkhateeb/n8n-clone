// 'use client';
// import { useEffect, useState } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ChevronDown, ChevronUp } from 'lucide-react';

// export default function Navbar() {
//   const [scrollY, setScrollY] = useState(0);
//   const [visible, setVisible] = useState(true);
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > scrollY) {
//         setVisible(false);
//       } else {
//         setVisible(true);
//       }
//       setScrollY(window.scrollY);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [scrollY]);

//   const navItems = [
//     { label: 'Product', items: ['Overview', 'Features', 'Roadmap'] },
//     { label: 'Use cases', items: ['IT operations', 'Security operations', 'Embedded automation', 'Lead automation', 'Supercharge your CRM', 'Limitless integrations', 'Backend prototyping'] },
//     { label: 'Docs', items: ['Getting Started', 'API Reference', 'Tutorials'] },
//     { label: 'Community', items: ['Forum', 'Blog', 'Events'] },
//     { label: 'Enterprise', items: ['Solutions', 'Pricing', 'Contact'] },
//     { label: 'Pricing', items: ['Plans', 'Compare', 'FAQ'] }
//   ];

//   return (
//     <div className="w-full flex justify-center" id="top">
//       <nav className={`fixed top-1 w-[99%] z-50 transition-all duration-500 bg-black text-[#ACA4B9] shadow-md border border-gray-800 rounded-sm ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
//         <div className="flex items-center justify-between px-4 py-3 md:px-6">
//           {/* Logo */}
//           <div className="flex items-center space-x-6">
//             <Link href="/" className="text-2xl font-bold">
//               <img src="/images/logo-white.svg" alt="Logo" className="w-[100px]" />
//             </Link>
//           </div>

//           {/* Desktop Nav (only on xl and up) */}
//           <div className="hidden xl:flex space-x-6 ">
//             {navItems.map((nav, idx) => (
//               <div key={idx} className="relative group">
//                 <button
//                   onClick={() => setOpenDropdown(openDropdown === idx ? null : idx)}
//                   className="hover:text-gray-200 flex items-center gap-4   text-[1.05rem] font-[500] cursor-pointer transition-all duration-500"
//                 >
//                   {nav.label}
//                   {openDropdown === idx ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
//                 </button>
//                 <AnimatePresence>
//                   {openDropdown === idx && (
//                     <motion.div
//                       initial={{ opacity: 0, height: 0 }}
//                       animate={{ opacity: 1, height: 'auto' }}
//                       exit={{ opacity: 0, height: 0 }}
//                       transition={{ duration: 0.3 }}
//                       className="absolute left-0 mt-5 w-56 bg-black border border-gray-700 rounded-lg py-2 z-40"
//                     >
//                       {nav.items.map((item, i) => (
//                         <Link
//                           key={i}
//                           href="#"
//                           className="block px-4 py-2 hover:bg-[#2c2c2cae] rounded-[9px] transition-all duration-300 text-[#ffffff]"
//                         >
//                           {item}
//                         </Link>
//                       ))}
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
//             ))}
//           </div>

//           {/* Desktop Actions (only on xl and up) */}
//           <div className="hidden xl:flex items-center space-x-4">
//             <Link href="/" className="border text-white border-gray-500 px-3 py-1 rounded hover:bg-gray-600 transition-all">GitHub ★ 122,282</Link>
//             <Link href="/" className="hover:text-gray-200 text-[1.05rem] font-medium transition-all duration-500">Sign in</Link>
//             <Link href="/" className="bg-[#0695fb] px-4 py-2 text-white rounded hover:bg-[#1241E1] transition-all duration-500">Get Started</Link>
//           </div>

//           {/* Hamburger (visible below xl) */}
//           <div className="xl:hidden">
//             <button onClick={() => setMobileOpen(!mobileOpen)} className="text-white text-2xl">
//               ☰
//             </button>
//           </div>
//         </div>

//         {/* Mobile Dropdown (visible below xl) */}
//         <AnimatePresence>
//           {mobileOpen && (
//             <motion.div
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: 'auto' }}
//               exit={{ opacity: 0, height: 0 }}
//               transition={{ duration: 0.4, ease: 'easeInOut' }}
//               className="xl:hidden bg-black border-t border-gray-700 px-4 py-2 space-y-2 overflow-hidden"
//             >
//               {navItems.map((nav, idx) => (
//                 <div key={idx}>
//                   <button
//                     onClick={() => setOpenDropdown(openDropdown === idx ? null : idx)}
//                     className="w-full text-left py-2 hover:text-gray-400 flex items-center gap-1"
//                   >
//                     {nav.label}
//                     {openDropdown === idx ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
//                   </button>
//                   <AnimatePresence>
//                     {openDropdown === idx && (
//                       <motion.div
//                         initial={{ opacity: 0, height: 0 }}
//                         animate={{ opacity: 1, height: 'auto' }}
//                         exit={{ opacity: 0, height: 0 }}
//                         transition={{ duration: 0.3 }}
//                         className="pl-4 overflow-hidden"
//                       >
//                         {nav.items.map((item, i) => (
//                           <Link
//                             key={i}
//                             href="#"
//                             className="block py-1 hover:text-gray-300"
//                           >
//                             {item}
//                           </Link>
//                         ))}
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </div>
//               ))}
//               <div className="pt-2 border-t border-gray-700 flex flex-col space-y-2">
//                 <button className="border border-gray-500 px-3 py-1 rounded hover:bg-gray-700 text-left">GitHub ★ 122,282</button>
//                 <button className="hover:underline text-left">Sign in</button>
//                 <Link href="/" className="bg-[#0695fb] px-4 py-2 rounded hover:bg-[#1241E1] text-white text-center">Get Started</Link>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </nav>
//     </div>
//   );
// }


// ////////////////////////////////////////////////////////////////////////




'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function Navbar() {
  const [scrollY, setScrollY] = useState(0);
  const [visible, setVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > scrollY) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollY]);

  const navItems = [
    { label: 'Home', href: '/' },
    {
      label: 'Products',
      items: [
        { label: 'Product 1', href: '/' },
        { label: 'Product 2', href: '/' },
        { label: 'Product 3', href: '/' },
      ]
    },
    {
      label: 'Our Services',
      items: [
        { label: 'Service 1', href: '/' },
        { label: 'Service 2', href: '/' },
        { label: 'Service 3',href: '/' },
        
      ]
    },
    { label: 'About Us', href: '/about' },
    { label: 'Contact Us', href: '/contact' },
  ];

  return (
    <div className="w-full flex justify-center" id="top">
      <nav className={`fixed top-1 w-[99%] z-50 transition-all duration-500 bg-black text-[#ACA4B9] shadow-md border border-gray-800 rounded-sm ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="flex items-center justify-between px-4 py-3 md:px-6">
          {/* Logo */}
          <div className="flex items-center space-x-6">
            <Link href="/" className="text-2xl font-bold">
              <img src="/images/logo-white.svg" alt="Logo" className="w-[100px]" />
            </Link>
          </div>

          {/* Desktop Nav (only on xl and up) */}
          <div className="hidden xl:flex space-x-6">
            {navItems.map((nav, idx) => (
              <div key={idx} className="relative group">
                {'items' in nav ? (
                  <>
                    <button
                      onClick={() => setOpenDropdown(openDropdown === idx ? null : idx)}
                      className="hover:text-gray-200 flex items-center gap-4 text-[1.05rem] font-[500] cursor-pointer transition-all duration-500"
                    >
                      {nav.label}
                      {openDropdown === idx ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                    <AnimatePresence>
                      {openDropdown === idx && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="absolute left-0 mt-5 w-56 bg-black border border-gray-700 rounded-lg py-2 z-40"
                        >
                          {nav.items.map((item, i) => (
                            <Link
                              key={i}
                              href={item.href}
                              className="block px-4 py-2 hover:bg-[#2c2c2cae] rounded-[9px] transition-all duration-300 text-[#ffffff]"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    href={nav.href}
                    className="hover:text-gray-200 text-[1.05rem] font-[500] transition-all duration-500"
                  >
                    {nav.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden xl:flex items-center space-x-4">
            <Link href="https://github.com/Constant-Growth-Tech" className="border text-white border-gray-500 px-3 py-1 rounded hover:bg-gray-600 transition-all">GitHub ★ 122,282</Link>
            <Link href="/Signup" className="hover:text-gray-200 text-[1.05rem] font-medium transition-all duration-500">Sign up</Link>
            <Link href="/contact" className="bg-[#0695fb] px-4 py-2 text-white rounded hover:bg-[#1241E1] transition-all duration-500">Get Started</Link>
          </div>

          {/* Hamburger (Mobile) */}
          <div className="xl:hidden">
            <button onClick={() => setMobileOpen(!mobileOpen)} className="text-white text-2xl">
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="xl:hidden bg-black border-t border-gray-700 px-4 py-2 space-y-2 overflow-hidden"
            >
              {navItems.map((nav, idx) => (
                <div key={idx}>
                  {'items' in nav ? (
                    <>
                      <button
                        onClick={() => setOpenDropdown(openDropdown === idx ? null : idx)}
                        className="w-full text-left py-2 hover:text-gray-400 flex items-center gap-1"
                      >
                        {nav.label}
                        {openDropdown === idx ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      </button>
                      <AnimatePresence>
                        {openDropdown === idx && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="pl-4 overflow-hidden"
                          >
                            {nav.items.map((item, i) => (
                              <Link
                                key={i}
                                href={item.href}
                                className="block py-1 hover:text-gray-300"
                              >
                                {item.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={nav.href}
                      className="block py-2 hover:text-gray-300"
                    >
                      {nav.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-2 border-t border-gray-700 flex flex-col space-y-2">
                <button className="border border-gray-500 px-3 py-1 rounded hover:bg-gray-700 text-left">GitHub ★ 122,282</button>
                <button className="hover:underline text-left">Sign in</button>
                <Link href="/" className="bg-[#0695fb] px-4 py-2 rounded hover:bg-[#1241E1] text-white text-center">Get Started</Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
}

