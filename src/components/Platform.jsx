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
                ? 'bg-blue-600 text-white' 
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
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
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
                  src="https://s3-alpha-sig.figma.com/img/ca9a/a89c/c924aadd276b91455732e90d284e6e87?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=J34DzzHW7mbCxjXjn2qFVLfchPK7in-hCr6eUjtd9up6WgVTOjKn~UiiKRmMYnum2qheHjnBCGEvurbk305IGgQiUL~HyxO5-H1JWqdcSIzkWSWOk-oHdyvkO15Mv0FLjxSR7xySPhOUt-n-EdQqXBDrBhIm9DBIJcyy0oCY8IxPEBwsn76TpkKG4a4jqJCAqP8EESaIXDOCCyUGvOYlyCrlSrprEG4b0i7dYIPT2N6Y2OHTdtGDEIBmuB0~Js3F0JzNLnUesjJ4nC9YfocG08mpBAs7o6w6Emlh5yO7eLYA8R4z95rWhxkX~uSTaTBEPpd1C~6Cg9EsYpFFjuIh6w__" 
                  alt="Student with backpack"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full h-full flex-shrink-0">
                <img 
                  src="https://s3-alpha-sig.figma.com/img/ca9a/a89c/c924aadd276b91455732e90d284e6e87?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=J34DzzHW7mbCxjXjn2qFVLfchPK7in-hCr6eUjtd9up6WgVTOjKn~UiiKRmMYnum2qheHjnBCGEvurbk305IGgQiUL~HyxO5-H1JWqdcSIzkWSWOk-oHdyvkO15Mv0FLjxSR7xySPhOUt-n-EdQqXBDrBhIm9DBIJcyy0oCY8IxPEBwsn76TpkKG4a4jqJCAqP8EESaIXDOCCyUGvOYlyCrlSrprEG4b0i7dYIPT2N6Y2OHTdtGDEIBmuB0~Js3F0JzNLnUesjJ4nC9YfocG08mpBAs7o6w6Emlh5yO7eLYA8R4z95rWhxkX~uSTaTBEPpd1C~6Cg9EsYpFFjuIh6w__" 
                  alt="Students studying"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full h-full flex-shrink-0">
                <img 
                  src="https://s3-alpha-sig.figma.com/img/ca9a/a89c/c924aadd276b91455732e90d284e6e87?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=J34DzzHW7mbCxjXjn2qFVLfchPK7in-hCr6eUjtd9up6WgVTOjKn~UiiKRmMYnum2qheHjnBCGEvurbk305IGgQiUL~HyxO5-H1JWqdcSIzkWSWOk-oHdyvkO15Mv0FLjxSR7xySPhOUt-n-EdQqXBDrBhIm9DBIJcyy0oCY8IxPEBwsn76TpkKG4a4jqJCAqP8EESaIXDOCCyUGvOYlyCrlSrprEG4b0i7dYIPT2N6Y2OHTdtGDEIBmuB0~Js3F0JzNLnUesjJ4nC9YfocG08mpBAs7o6w6Emlh5yO7eLYA8R4z95rWhxkX~uSTaTBEPpd1C~6Cg9EsYpFFjuIh6w__" 
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
                  ${activeSlide === index ? 'bg-blue-600' : 'bg-gray-300'}`}
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