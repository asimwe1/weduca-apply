import React from 'react'


import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
// import { features, title } from 'process';

const Features = [
    {
      image: "https://res.cloudinary.com/dhrhfjgqa/image/upload/v1741322913/Hands-Globe-1_pdanyw.png",
      name: "REACH",
      title: "Quality Applications",
      description: "Improve your enrolment funnel and boost conversion by 10%.",
    },
    {
      image: "https://res.cloudinary.com/dhrhfjgqa/image/upload/v1741323125/Hand-Shake_i5w9vd.svg",
      name: "CONVERSION",
      title: "Unmatched Diversity",
      description: "Reach high-quality student talent from over 150 countries.",
    },
    {
      image: "https://res.cloudinary.com/dhrhfjgqa/image/upload/v1741322939/Email-02-1_gwzqy1.webp",
      name: "SPEED",
      title: "Automate Repetitive Tasks",
      description: "Leverage proven technology to reduce manual processing by 40%. ",
    },
  ];
  
  const HeroSection = () => (
  <div className="bg-cover bg-center h-[64vh] relative" style={{ backgroundImage: 'url(https://res.cloudinary.com/dhrhfjgqa/image/upload/v1741325967/Frame-31693-1_trodoz.png)' }}>
    {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
    <div className="container mx-auto px-10 flex items-center h-full">
      <div className="text-white gap-y-[5rem] text-left">
        <h1 className="text-[2.5rem] w-[40rem] font-semibold mb-4">One Global Platform—Millions of Student Searches</h1>
        <p className="text-l w-[48rem] mb-8">Revolutionize your international student enrolment with the smartest all-in-one platform for global student mobility, trusted by over 1,500 institutions worldwide.</p>
        <button className="text-blue-600 font-semibold bg-white px-8 py-4 rounded-[10px] hover:cursor-pointer transition duration-300">
          Open Your Campus To The World
        </button>
      </div>
      {/* <div className='w-[90rem]'></div> */}
    </div>
  </div>
);

const WhyChoose = () => (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">
          Enrol Top Student Talent in Less Time
        </h2>
        <div className='gap-x-20'>
        <div className="p-2 border  grid grid-cols-1 md:grid-cols-3 gap-12">
          {Features.map((item) => (
            <div key={item.title} className="text-center  bg-white py-10 px-6 w-[20rem] h-[26rem] border">
              <div className="w-32 h-32 rounded-full mx-auto mb-6 flex items-center justify-center">
                <img src={item.image} alt={`icon-${item.title}`} />
              </div>
              <p className='text-xl font-semibold mb-4 text-gray-700'>{item.name}</p>
              <h3 className="text-[1.5rem] font-semibold mb-4">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        </div>
      </div>
    </section>
  );
  
const TopCountries = () => (
  <section className="py-20">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-16">Top Countries</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {[1, 2, 3, 4].map((country) => (
          <div key={country} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <img src={`https://via.placeholder.com/400x300`} alt={`country-${country}`} className="w-full" />
            <div className="p-6">
              <h3 className="font-semibold mb-2">Country {country}</h3>
              <p className="text-gray-600">1,200+ schools</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const HowItWorks = () => (
  <section className="py-20 bg-gray-100">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-16">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {[1, 2, 3].map((step) => (
          <div key={step} className="text-center">
            <div className="flex justify-center items-center w-16 h-16 bg-blue-500 rounded-full mx-auto mb-6">
              <span className="text-white text-2xl font-bold">{step}</span>
            </div>
            <h3 className="text-xl font-semibold mb-4">Step {step}</h3>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

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
    <section className="py-20 bg-blue-600">
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
      <TopCountries />
      <HowItWorks />
      <FeaturedSchools />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Schools;