import React from 'react'


import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import HeroSection from '../../components/SchoolsHero';
import WhyChoose from '../../components/WhyChoose';
import TopCountries from '../../components/TopCountries';
import HowItWorks from '../../components/HowItWorks';
import { Section } from 'lucide-react';
import ImpactSection from '../../components/ImpactSection';
import TrustedInstitutions from '../../components/TrustedInstitution';
import ContactForm from '../../components/ContactForm';


const FeaturedSchools = () => (
  <section className="py-20">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-16">Featured Schools</h2>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
        {[1, 2, 3, 4, 5, 6].map((school) => (
          <div key={school} className="flex justify-center">
            <img src={`https://via.placeholder.com/200x100`} alt={`school-${school}`} />
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const testimonials = [
    { quote: "Testimonial 1", author: "Student 1" },
    { quote: "Testimonial 2", author: "Student 2" },
    { quote: "Testimonial 3", author: "Student 3" },
  ];

  return (
    <section className="py-20 bg-green-600">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-white text-center mb-16">What Our Students Say</h2>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-white text-xl mb-8">{testimonials[current].quote}</p>
          <div className="flex justify-center space-x-4">
            {testimonials.map((_, index) => (
              <button 
                key={index}
                className={`w-4 h-4 rounded-full ${index === current ? 'bg-white' : 'bg-white opacity-50'}`}
                onClick={() => setCurrent(index)}
                ></button>
              ))}
          </div>
          <p className="text-white mt-4">- {testimonials[current].author}</p>
        </div>
      </div>
    </section>
  );
};


const Schools = () => {
  return (
    <div>
        <Navbar />
      <HeroSection />
      <WhyChoose />
      <ImpactSection />
      <TopCountries />
      <HowItWorks />
      <TrustedInstitutions />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Schools;