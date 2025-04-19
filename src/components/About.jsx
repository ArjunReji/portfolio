import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

function About() {
  // Refs for animation targets
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger)
    
    // Animate heading
    gsap.fromTo(
      headingRef.current,
      { y: -50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%"
        }
      }
    )
    
    // Animate cards with stagger
    gsap.fromTo(
      cardsRef.current,
      { y: 100, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%"
        }
      }
    )
  }, [])

  // Function to add cards to refs array
  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el)
    }
  }

  return (
    <section 
      id="what-i-do" 
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-blue-600 to-indigo-800 text-white"
    >
      <div className="container mx-auto px-4">
        <h2 
          ref={headingRef}
          className="text-4xl font-bold mb-16 text-center"
        >
          What I Do
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {/* MongoDB Card */}
          <div 
            ref={addToRefs}
            className="bg-gray-900 p-8 rounded-xl shadow-lg transform hover:scale-105 transition duration-300"
          >
            <div className="bg-pink-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
              <span className="text-3xl font-bold">M</span>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-center">MongoDB</h3>
            <p className="text-gray-300 text-center">
              Database design, schema optimization, and data modeling for scalable applications. Expertise in aggregation pipelines and indexing.
            </p>
          </div>
          
          {/* Express Card */}
          <div 
            ref={addToRefs}
            className="bg-gray-900 p-8 rounded-xl shadow-lg transform hover:scale-105 transition duration-300"
          >
            <div className="bg-pink-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
              <span className="text-3xl font-bold">E</span>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-center">Express.js</h3>
            <p className="text-gray-300 text-center">
              Building robust APIs, middleware implementation, and server-side architecture for efficient backend solutions.
            </p>
          </div>
          
          {/* React Card */}
          <div 
            ref={addToRefs}
            className="bg-gray-900 p-8 rounded-xl shadow-lg transform hover:scale-105 transition duration-300"
          >
            <div className="bg-pink-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
              <span className="text-3xl font-bold">R</span>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-center">React</h3>
            <p className="text-gray-300 text-center">
              Creating interactive UIs with component-based architecture, state management with Redux, and responsive design implementation.
            </p>
          </div>
          
          {/* Node.js Card */}
          <div 
            ref={addToRefs}
            className="bg-gray-900 p-8 rounded-xl shadow-lg transform hover:scale-105 transition duration-300"
          >
            <div className="bg-pink-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
              <span className="text-3xl font-bold">N</span>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-center">Node.js</h3>
            <p className="text-gray-300 text-center">
              Server-side JavaScript development, asynchronous programming, and RESTful API development for seamless client-server interaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About