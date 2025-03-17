const steps = [
    {
      icon: "https://res.cloudinary.com/dhrhfjgqa/image/upload/v1741418655/stuudents_check_eligibility_108_jriev5.webp",
      stepNumber: 1,
      title: "Eligibility Check",
      description: "Guided by their advisor, the student gets matched to best-fit study opportunities."
    },
    {
      icon: "https://res.cloudinary.com/dhrhfjgqa/image/upload/v1741323064/School01_uz8eta.svg",
      stepNumber: 2,
      title: "Student Applies",
      description: "The student selects an institution and program, pays their fees, and submits the proper documentation."
    },
    {
      icon: "https://res.cloudinary.com/dhrhfjgqa/image/upload/v1741323181/students_get_accepted_dximvk.webp",
      stepNumber: 3,
      title: "Application Pre-Screening",
      description: "ApplyBoard pre-screens every submission, flagging any missing requirements and filtering out low-quality applications."
    },
    {
      icon: "https://res.cloudinary.com/dhrhfjgqa/image/upload/v1741323265/Group-6274_mg3agb.svg",
      stepNumber: 4,
      title: "Application Review",
      description: "The institution reviews the application and issues an acceptance letter if the student is qualified."
    },
    {
      icon: "https://res.cloudinary.com/dhrhfjgqa/image/upload/v1741323251/4_vnscmm.svg",
      stepNumber: 4,
      title: "Visa Application",
      description: "The student applies for their visa or study permit and confirms with us once approved."
    },
    {
      icon: "https://res.cloudinary.com/dhrhfjgqa/image/upload/v1741323235/students_start_journey_108_tjdjv5.webp",
      stepNumber: 5,
      title: "The Journey Begins",
      description: "The student sets off with bags packed, ready to start their adventure on your campus!"
    }
  ];
  
  const HowItWorks = () => {
    return (
      <section className="py-20 px-6" >
        <div className="container cone mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-emerald-900 text-emerald-900
">
            How It Works
          </h2>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16 max-w-7xl mx-auto">
            {steps.map((step, index) => (
                <div 
  key={index} 
  className="flex flex-col w-[20rem] items-center text-center mx-auto"
>
  <div className="w-32 h-32 mb-6 flex items-center justify-center">
    <img
      src={step.icon}
      alt={`Step ${step.stepNumber}: ${step.title}`}
      className="max-w-full max-h-full object-contain"
    />
  </div>
  
  <p className="text-green-600 font-medium mb-2">
    STEP {step.stepNumber}
  </p>
  
  <h3 className="text-xl font-semibold mb-4 text-green-900">
    {step.title}
  </h3>
  
  <p className="text-gray-600 leading-relaxed">
    {step.description}
  </p>
</div>
            ))}
          </div>
  
          <div className="flex justify-center mt-16">
            {/* <button className="bg-green-600 text-white px-6 py-3 rounded-md font-medium">
              Version Française
            </button> */}
          </div>
        </div>
      </section>
    );
  };
  
  export default HowItWorks;
  