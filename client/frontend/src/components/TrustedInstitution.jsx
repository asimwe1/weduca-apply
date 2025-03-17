const countries = [
    {
      name: "CANADA",
      flag: "https://res.cloudinary.com/dhrhfjgqa/image/upload/v1741419700/canada-flag_o1ug1r.png"
    },
    {
      name: "UNITED STATES",
      flag: "https://res.cloudinary.com/dhrhfjgqa/image/upload/v1741419700/us-flag_o9q7yo.png"
    },
    {
      name: "UNITED KINGDOM",
      flag: "https://res.cloudinary.com/dhrhfjgqa/image/upload/v1741419700/uk-flag_iamqsb.png"
    },
    {
      name: "AUSTRALIA",
      flag: "https://res.cloudinary.com/dhrhfjgqa/image/upload/v1741419700/australia-flag_qyqcpl.png"
    },
    {
      name: "IRELAND",
      flag: "https://res.cloudinary.com/dhrhfjgqa/image/upload/v1741419700/ireland-flag_e1ocki.png"
    }
  ];
  
  const institutions = [
    {
      name: "Conestoga College",
      logo: "https://res.cloudinary.com/dhrhfjgqa/image/upload/v1741323318/Conestoga_zmti2l.webp"
    },
    {
      name: "George Brown College",
      logo: "https://res.cloudinary.com/dhrhfjgqa/image/upload/v1741323328/George_Brown_a5reds.webp"
    },
    {
      name: "BCIT",
      logo: "https://res.cloudinary.com/dhrhfjgqa/image/upload/v1741323338/BC_Institute_of_Technology_hyrnq6.webp"
    },
    {
      name: "University of Waterloo",
      logo: "https://res.cloudinary.com/dhrhfjgqa/image/upload/v1741323363/UWaterloo_hgaak4.webp"
    },
    {
      name: "UNBC",
      logo: "https://res.cloudinary.com/dhrhfjgqa/image/upload/v1741323370/University_of_Northern_BC_fh7p0m.webp"
    },
    {
      name: "Memorial University",
      logo: "https://res.cloudinary.com/dhrhfjgqa/image/upload/v1741323402/Memorial_University_of_Newfoundland_gofl1e.webp"
    },
    {
      name: "University of Manitoba",
      logo: "https://res.cloudinary.com/dhrhfjgqa/image/upload/v1741323411/University_of_Manitoba_sqt4nf.webp"
    },
    {
      name: "SAIT",
      logo: "https://res.cloudinary.com/dhrhfjgqa/image/upload/v1741323418/Southern_Alberta_Institute_of_Technology_buqlb6.webp"
    }
  ];
  
  const TrustedInstitutions = () => {
    return (
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-emerald-900">
            Trusted by Leading Institutions
          </h2>
  
          {/* Countries section */}
          <div className="flex flex-wrap justify-center items-center gap-4 mb-16">
            {countries.map((country, index) => (
              <div 
                key={index} 
                className={`flex items-center gap-2 px-4 py-2 rounded-full ${index === 0 ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-800'}`}
              >
                <img 
                  src={country.flag} 
                  alt={`${country.name} flag`} 
                  className="w-6 h-6 rounded-full object-cover"
                />
                <span className="font-medium text-sm">{country.name}</span>
              </div>
            ))}
          </div>
  
          {/* Institutions logos - first row */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
            {institutions.slice(0, 4).map((institution, index) => (
              <div key={index} className="flex items-center justify-center">
                <img 
                  src={institution.logo} 
                  alt={institution.name} 
                  className="max-h-16 max-w-full object-contain" 
                />
              </div>
            ))}
          </div>
  
          {/* Institutions logos - second row */}
          <div className="grid grid-cols-1 md:grid-cols-4 mb-16">
            {institutions.slice(4).map((institution, index) => (
              <div key={index} className="flex items-center justify-center">
                <img 
                  src={institution.logo} 
                  alt={institution.name} 
                  className="max-h-16 max-w-full object-contain" 
                />
              </div>
            ))}
          </div>
  
          {/* Explore button */}
          <div className="flex justify-center">
            <button className="bg-green-600 text-white px-6 py-3 rounded-md font-medium hover:bg-green-600 transition-colors">
              Explore Institutions
            </button>
          </div>
        </div>
      </section>
    );
  };
  
  export default TrustedInstitutions;
  