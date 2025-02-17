import React, { useState, useEffect, useCallback } from "react";

const tabs = [
  {
    id: "students",
    label: "INTERNATIONAL STUDENTS",
    title: "Students",
    description:
      "We believe in your dreams and work hard to make them a reality. Get matched with and apply to programs and institutions that align with your background, skills, and interests.",
    images: [
      "https://s3-alpha-sig.figma.com/img/ca9a/a89c/c924aadd276b91455732e90d284e6e87?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=J34DzzHW7mbCxjXjn2qFVLfchPK7in-hCr6eUjtd9up6WgVTOjKn~UiiKRmMYnum2qheHjnBCGEvurbk305IGgQiUL~HyxO5-H1JWqdcSIzkWSWOk-oHdyvkO15Mv0FLjxSR7xySPhOUt-n-EdQqXBDrBhIm9DBIJcyy0oCY8IxPEBwsn76TpkKG4a4jqJCAqP8EESaIXDOCCyUGvOYlyCrlSrprEG4b0i7dYIPT2N6Y2OHTdtGDEIBmuB0~Js3F0JzNLnUesjJ4nC9YfocG08mpBAs7o6w6Emlh5yO7eLYA8R4z95rWhxkX~uSTaTBEPpd1C~6Cg9EsYpFFjuIh6w__",
      "https://s3-alpha-sig.figma.com/img/ca9a/a89c/c924aadd276b91455732e90d284e6e87?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=J34DzzHW7mbCxjXjn2qFVLfchPK7in-hCr6eUjtd9up6WgVTOjKn~UiiKRmMYnum2qheHjnBCGEvurbk305IGgQiUL~HyxO5-H1JWqdcSIzkWSWOk-oHdyvkO15Mv0FLjxSR7xySPhOUt-n-EdQqXBDrBhIm9DBIJcyy0oCY8IxPEBwsn76TpkKG4a4jqJCAqP8EESaIXDOCCyUGvOYlyCrlSrprEG4b0i7dYIPT2N6Y2OHTdtGDEIBmuB0~Js3F0JzNLnUesjJ4nC9YfocG08mpBAs7o6w6Emlh5yO7eLYA8R4z95rWhxkX~uSTaTBEPpd1C~6Cg9EsYpFFjuIh6w__",
    ],
  },
  {
    id: "recruitment",
    label: "RECRUITMENT PARTNERS",
    title: "Recruitment Partners",
    description:
      "Join our network of recruitment partners and help students achieve their international education dreams while growing your business.",
    images: [
      "https://s3-alpha-sig.figma.com/img/ca9a/a89c/c924aadd276b91455732e90d284e6e87?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=J34DzzHW7mbCxjXjn2qFVLfchPK7in-hCr6eUjtd9up6WgVTOjKn~UiiKRmMYnum2qheHjnBCGEvurbk305IGgQiUL~HyxO5-H1JWqdcSIzkWSWOk-oHdyvkO15Mv0FLjxSR7xySPhOUt-n-EdQqXBDrBhIm9DBIJcyy0oCY8IxPEBwsn76TpkKG4a4jqJCAqP8EESaIXDOCCyUGvOYlyCrlSrprEG4b0i7dYIPT2N6Y2OHTdtGDEIBmuB0~Js3F0JzNLnUesjJ4nC9YfocG08mpBAs7o6w6Emlh5yO7eLYA8R4z95rWhxkX~uSTaTBEPpd1C~6Cg9EsYpFFjuIh6w__",
      "https://s3-alpha-sig.figma.com/img/ca9a/a89c/c924aadd276b91455732e90d284e6e87?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=J34DzzHW7mbCxjXjn2qFVLfchPK7in-hCr6eUjtd9up6WgVTOjKn~UiiKRmMYnum2qheHjnBCGEvurbk305IGgQiUL~HyxO5-H1JWqdcSIzkWSWOk-oHdyvkO15Mv0FLjxSR7xySPhOUt-n-EdQqXBDrBhIm9DBIJcyy0oCY8IxPEBwsn76TpkKG4a4jqJCAqP8EESaIXDOCCyUGvOYlyCrlSrprEG4b0i7dYIPT2N6Y2OHTdtGDEIBmuB0~Js3F0JzNLnUesjJ4nC9YfocG08mpBAs7o6w6Emlh5yO7eLYA8R4z95rWhxkX~uSTaTBEPpd1C~6Cg9EsYpFFjuIh6w__",
      "https://s3-alpha-sig.figma.com/img/ca9a/a89c/c924aadd276b91455732e90d284e6e87?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=J34DzzHW7mbCxjXjn2qFVLfchPK7in-hCr6eUjtd9up6WgVTOjKn~UiiKRmMYnum2qheHjnBCGEvurbk305IGgQiUL~HyxO5-H1JWqdcSIzkWSWOk-oHdyvkO15Mv0FLjxSR7xySPhOUt-n-EdQqXBDrBhIm9DBIJcyy0oCY8IxPEBwsn76TpkKG4a4jqJCAqP8EESaIXDOCCyUGvOYlyCrlSrprEG4b0i7dYIPT2N6Y2OHTdtGDEIBmuB0~Js3F0JzNLnUesjJ4nC9YfocG08mpBAs7o6w6Emlh5yO7eLYA8R4z95rWhxkX~uSTaTBEPpd1C~6Cg9EsYpFFjuIh6w__",
    ],
  },
  {
    id: "institutions",
    label: "PARTNER INSTITUTIONS",
    title: "Partner Institutions",
    description:
      "Connect with qualified students from around the world and streamline your international enrollment process.",
    images: [
      "https://s3-alpha-sig.figma.com/img/ca9a/a89c/c924aadd276b91455732e90d284e6e87?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=J34DzzHW7mbCxjXjn2qFVLfchPK7in-hCr6eUjtd9up6WgVTOjKn~UiiKRmMYnum2qheHjnBCGEvurbk305IGgQiUL~HyxO5-H1JWqdcSIzkWSWOk-oHdyvkO15Mv0FLjxSR7xySPhOUt-n-EdQqXBDrBhIm9DBIJcyy0oCY8IxPEBwsn76TpkKG4a4jqJCAqP8EESaIXDOCCyUGvOYlyCrlSrprEG4b0i7dYIPT2N6Y2OHTdtGDEIBmuB0~Js3F0JzNLnUesjJ4nC9YfocG08mpBAs7o6w6Emlh5yO7eLYA8R4z95rWhxkX~uSTaTBEPpd1C~6Cg9EsYpFFjuIh6w__",
      "https://s3-alpha-sig.figma.com/img/ca9a/a89c/c924aadd276b91455732e90d284e6e87?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=J34DzzHW7mbCxjXjn2qFVLfchPK7in-hCr6eUjtd9up6WgVTOjKn~UiiKRmMYnum2qheHjnBCGEvurbk305IGgQiUL~HyxO5-H1JWqdcSIzkWSWOk-oHdyvkO15Mv0FLjxSR7xySPhOUt-n-EdQqXBDrBhIm9DBIJcyy0oCY8IxPEBwsn76TpkKG4a4jqJCAqP8EESaIXDOCCyUGvOYlyCrlSrprEG4b0i7dYIPT2N6Y2OHTdtGDEIBmuB0~Js3F0JzNLnUesjJ4nC9YfocG08mpBAs7o6w6Emlh5yO7eLYA8R4z95rWhxkX~uSTaTBEPpd1C~6Cg9EsYpFFjuIh6w__",
      "https://s3-alpha-sig.figma.com/img/ca9a/a89c/c924aadd276b91455732e90d284e6e87?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=J34DzzHW7mbCxjXjn2qFVLfchPK7in-hCr6eUjtd9up6WgVTOjKn~UiiKRmMYnum2qheHjnBCGEvurbk305IGgQiUL~HyxO5-H1JWqdcSIzkWSWOk-oHdyvkO15Mv0FLjxSR7xySPhOUt-n-EdQqXBDrBhIm9DBIJcyy0oCY8IxPEBwsn76TpkKG4a4jqJCAqP8EESaIXDOCCyUGvOYlyCrlSrprEG4b0i7dYIPT2N6Y2OHTdtGDEIBmuB0~Js3F0JzNLnUesjJ4nC9YfocG08mpBAs7o6w6Emlh5yO7eLYA8R4z95rWhxkX~uSTaTBEPpd1C~6Cg9EsYpFFjuIh6w__",
    ],
  },
];

export default function PlatformSection() {
  const [activeTab, setActiveTab] = useState("students");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const activeContent = tabs.find((tab) => tab.id === activeTab);
  const slideCount = activeContent?.images.length || 0;

  const nextSlide = useCallback(() => {
    setCurrentSlide((current) => (current + 1) % slideCount);
  }, [slideCount]);

  const goToSlide = useCallback((index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  }, []);

  // Auto-advance slides
  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 8000);

    return () => clearInterval(timer);
  }, [isAutoPlaying, nextSlide]);

  // Reset slide index when changing tabs
  useEffect(() => {
    setCurrentSlide(0);
    setIsAutoPlaying(true);
  }, [activeTab]);

  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
          A Platform That Supports You End-to-End
        </h2>

        {/* Tabs */}
        <div className="mt-12 flex justify-center space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        {activeContent && (
          <div className="mt-8">
            <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-20">
              {/* Text Content */}
              <div>
                <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                  {activeContent.title}
                </h3>
                <p className="mt-4 text-lg text-gray-600">
                  {activeContent.description}
                </p>
                <div className="mt-8">
                  <a
                    href="#"
                    className="inline-flex items-center rounded-md bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                  >
                    Learn More
                  </a>
                </div>
              </div>

              {/* Image Carousel */}
              <div className="relative mt-8" aria-label="Image carousel">
                <div className="relative h-[400px] w-full">
                  {activeContent.images.map((src, index) => {
                    const isActive = index === currentSlide;
                    const nextSlide = (currentSlide + 1) % slideCount;
                    const nextNextSlide = (currentSlide + 2) % slideCount;

                    return (
                      <div
                        key={index}
                        className={`absolute left-0 top-0 h-full w-full transition-all duration-500 ${
                          index === currentSlide
                            ? "z-30 translate-x-0 opacity-100"
                            : index === nextSlide
                            ? "z-20 translate-x-[calc(100%-80px)] opacity-80"
                            : index === nextNextSlide
                            ? "z-10 translate-x-[calc(200%-120px)] opacity-60"
                            : "translate-x-[300%] opacity-0"
                        }`}
                      >
                        <div
                          className={`relative h-full w-full overflow-hidden rounded-lg ${
                            !isActive ? "shadow-lg" : ""
                          }`}
                        >
                          <img
                            src={src || "/placeholder.svg"}
                            alt={`${activeContent.title} slide ${index + 1}`}
                            className="object-cover"
                            priority={index === 0}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Carousel Navigation Dots */}
                <div className="absolute -bottom-6 left-1/2 flex -translate-x-1/2 space-x-2">
                  {activeContent.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`h-2 w-2 rounded-full transition-colors ${
                        currentSlide === index
                          ? "bg-blue-600"
                          : "bg-gray-300 hover:bg-gray-400"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                      aria-current={currentSlide === index}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
