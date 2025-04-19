import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  // Refs for animation targets
  const navbarRef = useRef(null);
  const logoRef = useRef(null);
  const linksRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const underlineRefs = useRef({});
  
  // Initialize GSAP animations on mount
  useEffect(() => {
    // Initial navbar animation
    gsap.fromTo(
      navbarRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    );
    
    // Logo animation
    gsap.fromTo(
      logoRef.current,
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, delay: 0.2, ease: "back.out(1.7)" }
    );
    
    // Desktop links animation with stagger
    if (linksRef.current) {
      gsap.fromTo(
        linksRef.current.children,
        { y: -20, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.5, 
          stagger: 0.1, 
          delay: 0.4, 
          ease: "power2.out" 
        }
      );
    }
    
    // Set up scroll behavior
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 100) {
        gsap.to(navbarRef.current, { 
          backgroundColor: "rgba(17, 24, 39, 0.95)", 
          boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)", 
          height: "70px", 
          duration: 0.3 
        });
      } else {
        gsap.to(navbarRef.current, { 
          backgroundColor: "rgb(17, 24, 39)", 
          boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1)", 
          height: "80px", 
          duration: 0.3 
        });
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Mobile menu animation
  useEffect(() => {
    if (mobileMenuRef.current) {
      if (isOpen) {
        gsap.fromTo(
          mobileMenuRef.current,
          { height: 0, opacity: 0 },
          { height: "auto", opacity: 1, duration: 0.5, ease: "power2.out" }
        );
        
        gsap.fromTo(
          mobileMenuRef.current.children,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.4, stagger: 0.1, delay: 0.2 }
        );
      } else {
        gsap.to(mobileMenuRef.current, { 
          height: 0, 
          opacity: 0, 
          duration: 0.4, 
          ease: "power2.in" 
        });
      }
    }
  }, [isOpen]);
  
  // Route change effect for active link
  useEffect(() => {
    const currentPath = location.pathname;
    
    // Clear all underlines
    Object.values(underlineRefs.current).forEach(ref => {
      if (ref) {
        gsap.to(ref, { width: "0%", duration: 0.3 });
      }
    });
    
    // Animate the current link's underline
    if (underlineRefs.current[currentPath]) {
      gsap.to(underlineRefs.current[currentPath], { 
        width: "100%", 
        duration: 0.5, 
        ease: "power2.out" 
      });
    }
  }, [location]);
  
  // Set up ref for each link's underline
  const setupUnderlineRef = (path) => (el) => {
    if (el) underlineRefs.current[path] = el;
  };
  
  return (
    <nav 
      ref={navbarRef} 
      className="bg-gray-900 text-white fixed w-full top-0 z-50 transition-all duration-300 h-20"
    >
      <div className="container mx-auto px-6 h-full flex justify-between items-center">
        {/* Logo */}
        <div 
          ref={logoRef} 
          className="text-2xl font-bold tracking-wide flex items-center"
        >
          <span className="text-cyan-400">Port</span>
          <span className="text-white">folio</span>
        </div>
        
        {/* Desktop Links */}
        <div 
          ref={linksRef} 
          className="hidden md:flex space-x-8 text-lg"
        >
          {[
            { path: "/", name: "Home" },
            { path: "/about", name: "About" },
            { path: "/projects", name: "Projects" },
            { path: "/skills", name: "Skills" },
            { path: "/contact", name: "Contact" }
          ].map((item) => (
            <div key={item.path} className="relative group">
              <Link 
                to={item.path} 
                className={`transition duration-300 font-medium px-2 py-1 ${
                  location.pathname === item.path ? 'text-cyan-400' : 'text-white hover:text-cyan-400'
                }`}
              >
                {item.name}
                <div 
                  ref={setupUnderlineRef(item.path)}
                  className={`absolute bottom-0 left-0 h-0.5 bg-cyan-400 transition-all duration-300 ${
                    location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                ></div>
              </Link>
            </div>
          ))}
        </div>
        
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none w-10 h-10 relative"
          aria-label="Toggle menu"
        >
          <span className={`absolute h-0.5 w-6 bg-white transform transition-all duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'}`}></span>
          <span className={`absolute h-0.5 w-6 bg-white transform transition-all duration-300 ease-in-out ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`absolute h-0.5 w-6 bg-white transform transition-all duration-300 ease-in-out ${isOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'}`}></span>
        </button>
      </div>
      
      {/* Mobile Links */}
      <div 
        ref={mobileMenuRef}
        className="md:hidden bg-gray-800 overflow-hidden h-0"
      >
        {[
          { path: "/", name: "Home" },
          { path: "/about", name: "About" },
          { path: "/projects", name: "Projects" },
          { path: "/skills", name: "Skills" },
          { path: "/contact", name: "Contact" }
        ].map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`block py-4 text-center transition-all duration-300 ${
              location.pathname === item.path ? 'text-cyan-400 bg-gray-700' : 'hover:bg-gray-700 hover:text-cyan-400'
            }`}
            onClick={() => setIsOpen(false)}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;