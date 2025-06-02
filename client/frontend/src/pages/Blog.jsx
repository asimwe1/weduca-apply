import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Blog = () => {
  const featuredPosts = [
    {
      title: "Top 10 Universities in the UK for International Students",
      excerpt: "Discover the best universities in the UK for international students, including admission requirements and student life.",
      image: "https://res.cloudinary.com/dhrhfjgqa/image/upload/v1741319047/uk_avwejq.png",
      category: "Study Destinations",
      date: "March 15, 2024",
      author: "Sarah Johnson"
    },
    {
      title: "How to Finance Your International Education",
      excerpt: "Learn about scholarships, grants, and other funding options available for international students.",
      image: "https://res.cloudinary.com/dhrhfjgqa/image/upload/v1741319047/student_byddxv.png",
      category: "Financial Aid",
      date: "March 12, 2024",
      author: "Michael Brown"
    }
  ];

  const recentPosts = [
    {
      title: "5 Tips for a Successful Student Visa Interview",
      excerpt: "Expert advice on preparing for and acing your student visa interview.",
      category: "Visa Guide",
      date: "March 10, 2024",
      author: "David Wilson"
    },
    {
      title: "Student Life in Australia: What to Expect",
      excerpt: "A comprehensive guide to living and studying in Australia.",
      category: "Student Life",
      date: "March 8, 2024",
      author: "Emma Thompson"
    },
    {
      title: "Choosing the Right Study Program Abroad",
      excerpt: "Factors to consider when selecting your international study program.",
      category: "Academic Advice",
      date: "March 5, 2024",
      author: "James Anderson"
    }
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-green-600 to-green-800 py-16">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                WEDUCA APPLY Blog
              </h1>
              <p className="text-xl max-w-2xl mx-auto">
                Insights, tips, and guides for international education
              </p>
            </div>
          </div>
        </div>

        {/* Featured Posts */}
        <div className="container mx-auto px-4 max-w-7xl py-16">
          <h2 className="text-3xl font-bold mb-8">Featured Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-600 mb-2">
                    <span>{post.category}</span>
                    <span className="mx-2">•</span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">By {post.author}</span>
                    <a
                      href="#"
                      className="text-green-600 font-medium hover:text-green-700"
                    >
                      Read More →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Posts */}
        <div className="container mx-auto px-4 max-w-7xl pb-16">
          <h2 className="text-3xl font-bold mb-8">Recent Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentPosts.map((post, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <span>{post.category}</span>
                  <span className="mx-2">•</span>
                  <span>{post.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">By {post.author}</span>
                  <a
                    href="#"
                    className="text-green-600 font-medium hover:text-green-700"
                  >
                    Read More →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Categories Section */}
        <div className="bg-white py-16">
          <div className="container mx-auto px-4 max-w-7xl">
            <h2 className="text-3xl font-bold mb-8">Categories</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Study Destinations', 'Student Life', 'Visa Guide', 'Financial Aid', 'Academic Advice', 'Culture & Travel', 'Success Stories', 'Tips & Tricks'].map((category, index) => (
                <a
                  key={index}
                  href="#"
                  className="bg-gray-50 rounded-lg p-4 text-center hover:bg-gray-100 transition-colors"
                >
                  {category}
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Blog; 