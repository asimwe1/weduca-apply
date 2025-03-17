import React, { useState } from 'react';

const tabs = [
  "INTERNATIONAL STUDENTS",
  "RECRUITMENT PARTNERS",
  "PARTNER INSTITUTIONS"
];

const StudentPlatform = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Main Heading */}
      <h1 className="text-3xl font-bold text-center mb-8">
        A Platform That Supports You End-to-End
      </h1>

      {/* Tab Navigation */}
      <div className="flex justify-center gap-4 mb-12">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors
              ${activeTab === index 
                ? 'bg-green-600 text-white' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            onClick={() => setActiveTab(index)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Students</h2>
          <p className="text-gray-600">
            We believe in your dreams and work hard to make them a reality. 
            Get matched with and apply to programs and institutions that align 
            with your background, skills, and interests.
          </p>
          <button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-600 transition-colors">
            Learn More
          </button>
        </div>

        {/* Right Content - Image Carousel */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-lg w-full aspect-[4/3]">
            <div className="flex absolute w-full h-full transition-transform duration-300" 
                 style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
              {/* Images with consistent dimensions */}
              <div className="w-full h-full flex-shrink-0">
                <img 
                  src="https://res.cloudinary.com/dhrhfjgqa/image/upload/v1741319045/slide1_bk8hf0.png" 
                  alt="Student with backpack"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full h-full flex-shrink-0">
                <img 
                  src="https://res.cloudinary.com/dhrhfjgqa/image/upload/v1741319046/slide2_uxm8ap.png" 
                  alt="Students studying"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full h-full flex-shrink-0">
                <img 
                  src="https://res.cloudinary.com/dhrhfjgqa/image/upload/v1741319047/slide3_phhlh6.png" 
                  alt="Campus life"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {[0, 1, 2].map((index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors
                  ${activeSlide === index ? 'bg-green-600' : 'bg-gray-300'}`}
                onClick={() => setActiveSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentPlatform;