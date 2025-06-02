import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Resources = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [email, setEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState('');

  const resources = [
    {
      category: "Application Guides",
      items: [
        {
          title: "Complete Guide to Study Abroad Applications",
          description: "Learn everything you need to know about applying to international universities.",
          link: "#"
        },
        {
          title: "Student Visa Requirements",
          description: "Comprehensive guide to student visa requirements for different countries.",
          link: "#"
        },
        {
          title: "Financial Planning Guide",
          description: "Understanding tuition fees, living costs, and financial aid options.",
          link: "#"
        }
      ]
    },
    {
      category: "Country Guides",
      items: [
        {
          title: "Study in the United Kingdom",
          description: "Everything you need to know about studying in the UK.",
          link: "/explore/destinations/uk"
        },
        {
          title: "Study in the United States",
          description: "Comprehensive guide to education in the USA.",
          link: "/explore/destinations/us"
        },
        {
          title: "Study in Australia",
          description: "Guide to Australian education system and student life.",
          link: "/explore/destinations/australia"
        }
      ]
    },
    {
      category: "Student Life",
      items: [
        {
          title: "Accommodation Guide",
          description: "Tips for finding and securing student accommodation abroad.",
          link: "#"
        },
        {
          title: "Cultural Adaptation",
          description: "Advice on adapting to life in a new country.",
          link: "#"
        },
        {
          title: "Student Success Stories",
          description: "Read about the experiences of international students.",
          link: "#"
        }
      ]
    }
  ];

  // Filter resources based on search query
  const filteredResources = resources.map(section => ({
    ...section,
    items: section.items.filter(item =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(section => section.items.length > 0);

  // Handle newsletter subscription
  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) {
      setSubscribeStatus('Please enter your email address');
      return;
    }
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setSubscribeStatus('Please enter a valid email address');
      return;
    }
    
    // Here you would typically make an API call to your backend
    // For now, we'll just show a success message
    setSubscribeStatus('Thank you for subscribing!');
    setEmail('');
    
    // Clear success message after 3 seconds
    setTimeout(() => {
      setSubscribeStatus('');
    }, 3000);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-green-600 to-green-800 py-16">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Student Resources
              </h1>
              <p className="text-xl max-w-2xl mx-auto">
                Everything you need to know about studying abroad, from application guides to student life tips
              </p>
            </div>
          </div>
        </div>

        {/* Search Section */}
        <div className="container mx-auto px-4 max-w-7xl py-8">
          <div className="bg-white rounded-lg shadow-sm p-6 -mt-12 relative z-10">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search resources..."
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
            />
          </div>
        </div>

        {/* Resources Grid */}
        <div className="container mx-auto px-4 max-w-7xl py-16">
          {filteredResources.length === 0 ? (
            <div className="text-center text-gray-600 py-8">
              No resources found matching your search criteria
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {filteredResources.map((section, index) => (
                <div key={index} className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-800">{section.category}</h2>
                  <div className="space-y-4">
                    {section.items.map((item, itemIndex) => (
                      <a
                        key={itemIndex}
                        href={item.link}
                        className="block bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                      >
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Newsletter Section */}
        <div className="bg-white py-16">
          <div className="container mx-auto px-4 max-w-7xl text-center">
            <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive the latest resources, guides, and tips for international education
            </p>
            <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
              <div className="flex gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                />
                <button 
                  type="submit"
                  className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors"
                >
                  Subscribe
                </button>
              </div>
              {subscribeStatus && (
                <p className={`mt-2 text-sm ${subscribeStatus.includes('Please') ? 'text-red-600' : 'text-green-600'}`}>
                  {subscribeStatus}
                </p>
              )}
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Resources; 