import React, { useState } from 'react';

const tabContent = [
  {
    title: "International Students",
    description: "We believe in your dreams and work hard to make them a reality. Get matched with and apply to programs and institutions that align with your background, skills, and interests.",
    images: [
      "https://res.cloudinary.com/dhrhfjgqa/image/upload/v1741319045/slide1_bk8hf0.png",
      "https://res.cloudinary.com/dhrhfjgqa/image/upload/v1741319046/slide2_uxm8ap.png",
      "https://res.cloudinary.com/dhrhfjgqa/image/upload/v1741319047/slide3_phhlh6.png"
    ]
  },
  {
    title: "Recruitment Partners",
    description: "Join our network of trusted recruitment partners. Access a comprehensive platform to manage student applications, track progress, and collaborate with institutions worldwide.",
    images: [
      "https://res.cloudinary.com/dhrhfjgqa/image/upload/v1741319046/slide2_uxm8ap.png",
      "https://res.cloudinary.com/dhrhfjgqa/image/upload/v1741319047/slide3_phhlh6.png",
      "https://res.cloudinary.com/dhrhfjgqa/image/upload/v1741319045/slide1_bk8hf0.png"
    ]
  },
  {
    title: "Partner Institutions",
    description: "Expand your global reach and connect with qualified students worldwide. Our platform streamlines the recruitment process and helps you build diverse, talented student communities.",
    images: [
      "https://res.cloudinary.com/dhrhfjgqa/image/upload/v1741319047/slide3_phhlh6.png",
      "https://res.cloudinary.com/dhrhfjgqa/image/upload/v1741319045/slide1_bk8hf0.png",
      "https://res.cloudinary.com/dhrhfjgqa/image/upload/v1741319046/slide2_uxm8ap.png"
    ]
  }
];

const tabs = [
  "INTERNATIONAL STUDENTS",
  "RECRUITMENT PARTNERS",
  "PARTNER INSTITUTIONS"
];

const StudentPlatform = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleTabChange = (index) => {
    if (index === activeTab) return;
    setIsTransitioning(true);
    setActiveTab(index);
    setActiveSlide(0);
    // Reset transition state after animation completes
    setTimeout(() => setIsTransitioning(false), 300);
  };

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
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300
              ${activeTab === index 
                ? 'bg-green-600 text-white' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            onClick={() => handleTabChange(index)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className={`space-y-4 transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
          <h2 className="text-2xl font-semibold">{tabContent[activeTab].title}</h2>
          <p className="text-gray-600">
            {tabContent[activeTab].description}
          </p>
          <button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-600 transition-colors">
            Learn More
          </button>
        </div>

        {/* Right Content - Image Carousel */}
        <div className={`relative transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
          <div className="relative overflow-hidden rounded-lg w-full aspect-[4/3]">
            <div className="flex absolute w-full h-full transition-transform duration-500 ease-in-out" 
                 style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
              {tabContent[activeTab].images.map((image, index) => (
                <div key={index} className="w-full h-full flex-shrink-0">
                  <img 
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 mt-4">
            <div className="flex gap-2 transition-transform duration-500 ease-in-out">
              {tabContent[activeTab].images.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 transform
                    ${activeSlide === index 
                      ? 'bg-green-600 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'}`}
                  onClick={() => setActiveSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentPlatform;