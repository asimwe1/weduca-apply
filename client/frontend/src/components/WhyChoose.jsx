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
    description: "Leverage proven technology to reduce manual processing by 40%.",
  },
];

const WhyChoose = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
        Enrol Top Student Talent in Less Time
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {Features.map((item) => (
          <div 
            key={item.title} 
            className="flex flex-col items-center text-center p-8 rounded-lg shadow-sm border border-gray-100"
          >
            <div className="w-28 h-28 mb-6 flex items-center justify-center">
              <img 
                src={item.image} 
                alt={`icon-${item.title}`} 
                className="max-w-full max-h-full object-contain"
              />
            </div>
            
            <p className="text-green-600 font-medium mb-2">{item.name}</p>
            
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              {item.title}
            </h3>
            
            <p className="text-gray-600 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChoose;
