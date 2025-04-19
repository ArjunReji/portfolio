import React, { useEffect, useRef } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function Contact() {
  // Register the ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);
  
  // Refs for animation targets
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);
  const contactItemsRef = useRef([]);
  
  useEffect(() => {
    // Initial fade-in animation for the section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { 
        opacity: 1, 
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom-=100",
        }
      }
    );
    
    // Heading animation
    gsap.fromTo(
      headingRef.current,
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8, 
        delay: 0.3,
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top bottom-=150",
        }
      }
    );
    
    // Form animation
    gsap.fromTo(
      formRef.current,
      { x: -50, opacity: 0 },
      { 
        x: 0, 
        opacity: 1, 
        duration: 0.8, 
        delay: 0.5,
        scrollTrigger: {
          trigger: formRef.current,
          start: "top bottom-=100",
        }
      }
    );
    
    // Info section animation
    gsap.fromTo(
      infoRef.current,
      { x: 50, opacity: 0 },
      { 
        x: 0, 
        opacity: 1, 
        duration: 0.8, 
        delay: 0.7,
        scrollTrigger: {
          trigger: infoRef.current,
          start: "top bottom-=100",
        }
      }
    );
    
    // Staggered animation for contact items
    gsap.fromTo(
      contactItemsRef.current,
      { y: 20, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        stagger: 0.2, 
        duration: 0.6, 
        delay: 0.9,
        scrollTrigger: {
          trigger: contactItemsRef.current[0],
          start: "top bottom-=50",
        }
      }
    );
    
  }, []);

  // Function to add contact items to refs array
  const addToContactRefs = (el) => {
    if (el && !contactItemsRef.current.includes(el)) {
      contactItemsRef.current.push(el);
    }
  };
  
  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="py-24 bg-gradient-to-tr from-cyan-500 to-blue-500 relative overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" ref={headingRef}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Get In Touch</h2>
          <p className="text-white text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how I can help bring your ideas to life with MERN stack development.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          {/* Contact Form */}
          <div className="md:w-1/2" ref={formRef}>
            <form className="border border-gray-200 rounded-lg p-6 bg-white shadow-xl">
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="john@example.com"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors transform hover:scale-105 transition-transform duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="md:w-1/2" ref={infoRef}>
            <div className="bg-white p-8 rounded-lg shadow-xl h-full">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start" ref={addToContactRefs}>
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Mail size={22} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Email</h4>
                    <p className="text-gray-600 hover:text-blue-600 transition-colors">
                      <a href="mailto:arjunreji364@gmail.com" className="hover:underline">arjunreji364@gmail.com</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start" ref={addToContactRefs}>
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Github size={22} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">GitHub</h4>
                    <p className="text-gray-600 hover:text-blue-600 transition-colors">
                      <a href="https://github.com/ArjunReji" className="hover:underline" target="_blank" rel="noopener noreferrer">
                        github.com/ArjunReji
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start" ref={addToContactRefs}>
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Linkedin size={22} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">LinkedIn</h4>
                    <p className="text-gray-600 hover:text-blue-600 transition-colors">
                      <a href="https://www.linkedin.com/in/arjun-reji/" className="hover:underline" target="_blank" rel="noopener noreferrer">
                        linkedin.com/in/arjun-reji
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8" ref={addToContactRefs}>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Available For</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Freelance Projects</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Contract Work</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Consultation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;