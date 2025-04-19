import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function Projects() {
  // Register the ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);
  
  const sectionRef = useRef(null);
  const projectRefs = useRef([]);
  
  // Reset refs array when projects change
  projectRefs.current = [];
  
  // Add to refs array function
  const addToRefs = (el) => {
    if (el && !projectRefs.current.includes(el)) {
      projectRefs.current.push(el);
    }
  };

  useEffect(() => {
    // Animate section title
    gsap.fromTo(
      ".section-title",
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    // Animate projects with stagger
    const projectCards = projectRefs.current;
    gsap.fromTo(
      projectCards,
      { opacity: 0, y: 100 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none none"
        }
      }
    );
    
    // Hover animations setup
    projectCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, { 
          y: -10, 
          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          duration: 0.3 
        });
      });
      
      card.addEventListener('mouseleave', () => {
        gsap.to(card, { 
          y: 0, 
          boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
          duration: 0.3 
        });
      });
    });
    
    return () => {
      // Cleanup event listeners if needed
      projectCards.forEach(card => {
        card.removeEventListener('mouseenter', () => {});
        card.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);

  const projects = [
    {
      title: "Plantation Management System",
      type: "Full Stack MERN",
      description: `This project aims to develop a comprehensive Plantation Management System tailored 
      for cardamom plantations, using React for a dynamic and responsive user experience.
      
      Key features include:
      • Workforce management and real-time attendance tracking via QR codes
      • Worker gamification with points and leaderboards to boost productivity
      • Produce tracking with historical harvest analysis
      • Financial reporting and task management modules
      • Intuitive dashboard for streamlined operations
      
      Built with React, Node.js, MongoDB, and Tailwind CSS, this system improves operational 
      efficiency and data-driven decision-making for modern agricultural management.`,
      image: "./public/mainproject.png"
    },
    {
      title: "E-Commerce Platform",
      type: "React + API integration",
      description: `A fully functional, responsive eCommerce web application built using React, Redux for 
      state management, and REST API integration for dynamic product and user data.
      
      The platform enables users to:
      • Browse products with detailed information
      • Add items to cart and manage wishlists
      • Complete purchases securely
      • Track order history and status
      
      Backend services are consumed via REST APIs for product listing, cart management, and order 
      processing, creating a seamless shopping experience.`,
      image: "./public/ecommerse.png"
    },
    {
      title: "Random Quote Generator",
      type: "React + API Integration",
      description: `An interactive quote generator that fetches random quotes from the DummyJSON API 
      using Axios for smooth API calls.
      
      Technical highlights:
      • React hooks (useState, useEffect) for state management
      • Dynamic rendering of quotes and authors
      • Styled with CSS for a polished, aesthetic interface
      • Deployed on Netlify for optimal performance
      
      The core functionality is contained in the QuoteGenerator component, which updates the 
      display whenever users request a new quote through an intuitive interface.`,
      image: "./public/randomquotegenerator.png"
    },
    {
      title: "Tesla Home Page Front-End",
      type: "HTML, CSS, Bootstrap",
      description: `A pixel-perfect recreation of the Tesla website's homepage that demonstrates 
      front-end development skills.
      
      Implementation details:
      • HTML structure with semantic markup
      • CSS and Flexbox for responsive layouts
      • Bootstrap components for UI elements
      • Video auto-play feature matching the original site
      
      This project showcases attention to detail and the ability to replicate complex 
      designs with clean, maintainable code for an optimal desktop experience.`,
      image: "./public/teslafrontend.png"
    }
  ];

  return (
    <section 
      id="portfolio" 
      ref={sectionRef}
      className="py-20 bg-gradient-to-tr from-cyan-500 to-blue-500"
    >
      <div className="container mx-auto px-4">
        <h2 className="section-title text-4xl font-bold mb-16 text-center text-white drop-shadow-md">
          Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              ref={addToRefs}
              className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300"
            >
              <div className="overflow-hidden h-56">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-800">{project.title}</h3>
                <div className="inline-block px-3 py-1 mb-4 text-sm font-medium text-white bg-pink-500 rounded-full">
                  {project.type}
                </div>
                <div className="text-gray-700 text-sm space-y-2 whitespace-pre-line">
                  {project.description}
                </div>
                
                <div className="mt-6">
                  <button className="px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors duration-300">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;