import React, { useEffect, useRef } from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { useNavigate } from 'react-router-dom';

function Home() {
  // Register GSAP plugins
  gsap.registerPlugin(TextPlugin);
  
  // Create refs for animation targets
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subtitleRef = useRef(null);
  const descriptionRef = useRef(null);
  const socialRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // Create a timeline for sequential animations
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    
    // Animate elements in sequence
    tl.fromTo(sectionRef.current, 
      { opacity: 0 },
      { opacity: 1, duration: 0.5 }
    )
    .fromTo(headingRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 }
    )
    .fromTo(subtitleRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6 }
    )
    .fromTo(descriptionRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 }
    )
    .fromTo(socialRef.current.children,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.15, duration: 0.6 }
    )
    .fromTo(imageRef.current,
      { x: 50, opacity: 0 },
      { x: 0, opacity: 1, duration: 1 },
      "-=1" // Start slightly before previous animation completes
    );

    // Typing effect for name
    const nameElement = document.querySelector('.highlight-name');
    if (nameElement) {
      gsap.to(nameElement, {
        duration: 1.5,
        delay: 1,
        css: { color: '#ec4899' },
        ease: "power3.inOut"
      });
    }

    // Set up hover animations for social icons
    const socialIcons = socialRef.current.querySelectorAll('a');
    socialIcons.forEach(icon => {
      icon.addEventListener('mouseenter', () => {
        gsap.to(icon, {
          scale: 1.2,
          duration: 0.3,
          backgroundColor: icon.dataset.hoverColor || '#4B5563'
        });
      });
      
      icon.addEventListener('mouseleave', () => {
        gsap.to(icon, {
          scale: 1,
          duration: 0.3,
          backgroundColor: 'rgb(229, 231, 235)'
        });
      });
    });

    return () => {
      // Clean up event listeners
      socialIcons.forEach(icon => {
        icon.removeEventListener('mouseenter', () => {});
        icon.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);

  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/projects');
  }

  return (
    <section 
      ref={sectionRef}
      className="bg-gradient-to-tr from-cyan-500 to-blue-500 px-6 py-20 md:py-32 min-h-screen flex flex-col md:flex-row items-center justify-center"
    >
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-12 md:mb-0 md:pr-8">
          <h1 
            ref={headingRef}
            className="text-5xl md:text-6xl font-bold mb-4 text-white leading-tight"
          >
            Hi, I'm <span className="highlight-name">ARJUN REJI</span>
          </h1>
          
          <h2 
            ref={subtitleRef}
            className="text-2xl md:text-3xl mb-6 text-white font-medium opacity-90"
          >
            MERN Stack Developer
          </h2>
          
          <p 
            ref={descriptionRef}
            className="text-white text-lg mb-8 leading-relaxed max-w-lg opacity-85"
          >
            I build modern, responsive web applications using MongoDB, Express, React, 
            and Node.js. Specialized in crafting scalable solutions that solve real-world 
            problems with clean code.
          </p>
          
          <div 
            ref={socialRef}
            className="flex space-x-5"
          >
            <a 
              href="https://github.com/ArjunReji" 
              data-hover-color="#333"
              className="bg-gray-200 p-3 rounded-full hover:shadow-lg transition-all duration-300"
            >
              <Github size={22} className="text-gray-700" />
            </a>
            <a 
              href="https://www.linkedin.com/in/arjun-reji/" 
              data-hover-color="#0077B5"
              className="bg-gray-200 p-3 rounded-full hover:shadow-lg transition-all duration-300"
            >
              <Linkedin size={22} className="text-gray-700" />
            </a>
            <a 
              href="https://x.com/home" 
              data-hover-color="#1DA1F2"
              className="bg-gray-200 p-3 rounded-full hover:shadow-lg transition-all duration-300"
            >
              <Twitter size={22} className="text-gray-700" />
            </a>
            <a 
              href="mailto:arjunreji364@gmail.com" 
              data-hover-color="#EA4335"
              className="bg-gray-200 p-3 rounded-full hover:shadow-lg transition-all duration-300"
            >
              <Mail size={22} className="text-gray-700" />
            </a>
          </div>
          
          <div className="mt-10">
            <button onClick={handleNavigation} className="bg-pink-500 text-white px-6 py-3 font-medium rounded-lg shadow-md hover:bg-pink-600 transition-all duration-300 mr-4">
              View Projects
            </button>
            <button className="bg-transparent border-2 border-white text-white px-6 py-3 font-medium rounded-lg hover:bg-white hover:text-blue-500 transition-all duration-300">
              <a href="./resume.pdf" download="resume">Download CV</a>
            </button>
          </div>
        </div>
        
        <div 
          ref={imageRef} 
          className="md:w-1/2 flex justify-center items-center"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="./image.png" 
              alt="Arjun Reji - Developer" 
              className="object-cover max-w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;