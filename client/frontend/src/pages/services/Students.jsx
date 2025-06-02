import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Students = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <div className="relative h-[50vh] bg-gradient-to-r from-green-600 to-green-800">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Your International Education Journey Starts Here
              </h1>
              <p className="text-xl max-w-2xl mx-auto">
                Access world-class education opportunities and expert guidance throughout your application process
              </p>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose WEDUCA APPLY?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Personalized Guidance</h3>
                <p className="text-gray-600">
                  Get matched with programs that align with your academic background, career goals, and personal preferences.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Streamlined Applications</h3>
                <p className="text-gray-600">
                  Apply to multiple institutions through a single platform, with step-by-step guidance throughout the process.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Expert Support</h3>
                <p className="text-gray-600">
                  Connect with experienced advisors who can help you navigate visa requirements, housing, and more.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-50 py-16 px-4">
          <div className="container mx-auto max-w-7xl text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to Begin Your Journey?</h2>
            <a
              href="/international-students/signup"
              className="inline-block bg-green-600 text-white px-8 py-3 rounded-md font-medium hover:bg-green-700 transition-colors"
            >
              Start Your Application
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Students; 