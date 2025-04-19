import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function Skills() {
  // Register the ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);
  
  // Refs for animation targets
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const skillsRef = useRef([]);
  
  // Skills data
  const skills = [
    { name: 'MongoDB', color: 'text-blue-500', icon: '📊' },
    { name: 'Express', color: 'text-green-500', icon: '🔌' },
    { name: 'React', color: 'text-blue-400', icon: '⚛️' },
    { name: 'Node.js', color: 'text-green-400', icon: '🔧' },
    { name: 'JavaScript', color: 'text-yellow-500', icon: '📜' },
    { name: 'Tailwind', color: 'text-blue-300', icon: '🎨' },
    { name: 'Redux', color: 'text-purple-500', icon: '🔄' },
    { name: 'Git', color: 'text-orange-500', icon: '📚' }
  ];
  
  // Reset skillsRef array on component mount
  useEffect(() => {
    skillsRef.current = [];
  }, []);
  
  // Add skill elements to refs array
  const addToSkillsRef = (el) => {
    if (el && !skillsRef.current.includes(el)) {
      skillsRef.current.push(el);
    }
  };
  
  useEffect(() => {
    // Main section fade in
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { 
        opacity: 1, 
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom-=100"
        }
      }
    );
    
    // Title slide down and fade in
    gsap.fromTo(
      titleRef.current,
      { y: -50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top bottom-=50"
        }
      }
    );
    
    // Description slide in from left
    gsap.fromTo(
      descriptionRef.current,
      { x: -50, opacity: 0 },
      { 
        x: 0, 
        opacity: 1, 
        duration: 0.8,
        delay: 0.3,
        scrollTrigger: {
          trigger: descriptionRef.current,
          start: "top bottom-=50"
        }
      }
    );
    
    // Staggered skill boxes animation
    gsap.fromTo(
      skillsRef.current,
      { y: 30, opacity: 0, scale: 0.9 },
      { 
        y: 0, 
        opacity: 1, 
        scale: 1,
        stagger: 0.1, 
        duration: 0.5,
        ease: "back.out(1.5)",
        scrollTrigger: {
          trigger: skillsRef.current[0],
          start: "top bottom-=50"
        }
      }
    );
    
  }, []);

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="py-20 bg-gradient-to-tr from-cyan-500 to-blue-500"
    >
      <div className="container mx-auto px-6">
        <h2 
          ref={titleRef}
          className="text-4xl font-bold mb-16 text-center text-white"
        >
          My Technical Skills
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="mb-10" ref={descriptionRef}>
            <h3 className="text-2xl font-semibold mb-4 text-white">MERN Stack Developer</h3>
            <p className="text-white mb-6 text-lg leading-relaxed">
              Expert in building full-stack web applications using MongoDB, Express.js, React, and Node.js.
              Experienced in developing RESTful APIs, implementing authentication systems, and deploying
              scalable applications with modern web technologies.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                ref={addToSkillsRef}
                className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <div className="flex flex-col items-center justify-center text-center">
                  <div className="text-3xl mb-2">{skill.icon}</div>
                  <span className={`${skill.color} font-bold text-lg`}>{skill.name}</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-white text-lg">
              Constantly learning and adapting to new technologies to deliver the best solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;