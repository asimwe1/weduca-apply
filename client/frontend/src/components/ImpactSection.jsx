import ImpactCard from "./ImpactCard.jsx";

const ImpactSection = () => {
  const impactData = [
    {
      number: "1M+",
      description: "Students Helped",
      icon: "https://res.cloudinary.com/dhrhfjgqa/image/upload/v1741323045/Graduate01_yfb9us.svg",
    },
    {
      number: "150+",
      description: "Student Source Countries",
      icon: "https://res.cloudinary.com/dhrhfjgqa/image/upload/v1741323056/Globe-A-1-1_esgmii.svg",
    },
    {
      number: "1,500+",
      description: "Global Partner Institutions",
      icon: "https://res.cloudinary.com/dhrhfjgqa/image/upload/v1741323064/School01_uz8eta.svg",
    },
    {
      number: "6,500+",
      description: "Vetted Recruitment Partners",
      icon: "https://res.cloudinary.com/dhrhfjgqa/image/upload/v1741323125/Hand-Shake_i5w9vd.svg",
    },
    {
      number: "95%",
      description: "Offer of Admission Rate",
      icon: "https://res.cloudinary.com/dhrhfjgqa/image/upload/v1741323132/Acceptance-Letter04_xkgedx.svg",
    },
  ];

  return (
    <div 
      className="relative py-16 px-4 md:px-8 lg:px-16 bg-green-600"
      style={{
        backgroundImage: "url('https://res.cloudinary.com/dhrhfjgqa/image/upload/v1741442790/Group-4153_zavcfh_2_t5ckyo.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dots pattern on the left */}
      {/* <div className="absolute left-4 md:left-8 top-1/4 grid grid-cols-5 gap-2"> */}
        {/* {Array(25).fill(0).map((_, index) => ( */}
          {/* <div key={`left-dot-${index}`} className="w-1.5 h-1.5 bg-white opacity-70 rounded-full"></div> */}
        {/* ))} */}
      {/* </div> */}
      
      {/* Dots pattern on the right */}
      {/* <div className="absolute right-4 md:right-8 bottom-1/4 grid grid-cols-7 gap-2"> */}
        {/* {Array(49).fill(0).map((_, index) => ( */}
        {/* //   <div key={`right-dot-${index}`} className="w-1.5 h-1.5 bg-white opacity-70 rounded-full"></div> */}
        {/* // ))} */}
      {/* </div> */}
      
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">Our Impact</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[1rem] mb-6">
          {impactData.slice(0, 3).map((impact, index) => (
            <ImpactCard
              key={index}
              number={impact.number}
              description={impact.description}
              icon={impact.icon}
            />
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {impactData.slice(3, 5).map((impact, index) => (
            <ImpactCard
              key={index + 3}
              number={impact.number}
              description={impact.description}
              icon={impact.icon}
            />
          ))}
        </div>
        
        <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8">
          {/* <button className="bg-green-800 hover:bg-green-900 text-white font-semibold py-2 px-4 rounded-md transition-colors">
            Version Française
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default ImpactSection;