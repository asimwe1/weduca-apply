import { useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const countryInfo = {
  'uk': {
    name: 'United Kingdom',
    description: 'Study in the UK and benefit from world-renowned universities, diverse culture, and rich history.',
    image: 'https://res.cloudinary.com/dhrhfjgqa/image/upload/v1741319047/uk_avwejq.png',
    benefits: [
      'World-class education system',
      'Multicultural environment',
      'Rich history and culture',
      'Career opportunities',
      'English language development'
    ]
  },
  'us': {
    name: 'United States',
    description: 'Experience American education with cutting-edge research facilities and diverse campus life.',
    image: 'https://res.cloudinary.com/dhrhfjgqa/image/upload/v1741319047/us_v5rjwb.png',
    benefits: [
      'Top-ranked universities',
      'Research opportunities',
      'Diverse campus culture',
      'Optional Practical Training (OPT)',
      'Flexible education system'
    ]
  },
  'australia': {
    name: 'Australia',
    description: 'Study in Australia for high-quality education and an amazing lifestyle.',
    image: 'https://res.cloudinary.com/dhrhfjgqa/image/upload/v1741319045/australia_jcrv7c.png',
    benefits: [
      'High quality of life',
      'Post-study work options',
      'Beautiful environment',
      'Safe and welcoming',
      'Strong support for international students'
    ]
  },
  'ireland': {
    name: 'Ireland',
    description: 'Choose Ireland for excellent education in a friendly, English-speaking environment.',
    image: 'https://res.cloudinary.com/dhrhfjgqa/image/upload/v1741319045/ireland_ky1dvj.png',
    benefits: [
      'English-speaking country',
      'Welcoming culture',
      'Strong tech industry',
      'Post-study stay options',
      'Rich cultural heritage'
    ]
  }
};

const StudyDestination = () => {
  const { country } = useParams();
  const info = countryInfo[country.toLowerCase()];

  if (!info) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <h1 className="text-2xl">Country information not found</h1>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <div className="relative h-[50vh]">
          <img
            src={info.image}
            alt={`Study in ${info.name}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl text-white font-bold text-center">
              Study in {info.name}
            </h1>
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-700 mb-12">{info.description}</p>

            <h2 className="text-3xl font-bold mb-8">Why Study in {info.name}?</h2>
            <ul className="grid gap-6 md:grid-cols-2">
              {info.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="h-6 w-6 text-green-600 mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-lg text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="mt-12 text-center">
              <a
                href="/international-students/signup"
                className="inline-block bg-green-600 text-white px-8 py-3 rounded-md font-medium hover:bg-green-700 transition-colors"
              >
                Start Your Application
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default StudyDestination; 