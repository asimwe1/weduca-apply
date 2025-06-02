import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const RecruitmentPartners = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <div className="relative h-[50vh] bg-gradient-to-r from-green-700 to-green-900">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Partner With Us to Transform International Education
              </h1>
              <p className="text-xl max-w-2xl mx-auto">
                Join our network of trusted recruitment partners and help students achieve their international education goals
              </p>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-center mb-12">Partner Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Comprehensive Platform</h3>
                <p className="text-gray-600">
                  Access our state-of-the-art platform to manage applications, track student progress, and communicate with institutions.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Global Network</h3>
                <p className="text-gray-600">
                  Connect with over 1,500+ institutions worldwide and offer your students a wide range of educational opportunities.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Training & Support</h3>
                <p className="text-gray-600">
                  Receive comprehensive training and ongoing support to help you provide the best service to your students.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="bg-gray-50 py-16 px-4">
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">1</div>
                <h3 className="text-lg font-semibold mb-2">Register</h3>
                <p className="text-gray-600">Complete our partner registration process</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">2</div>
                <h3 className="text-lg font-semibold mb-2">Get Verified</h3>
                <p className="text-gray-600">Undergo our verification process</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">3</div>
                <h3 className="text-lg font-semibold mb-2">Access Platform</h3>
                <p className="text-gray-600">Get access to our comprehensive platform</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">4</div>
                <h3 className="text-lg font-semibold mb-2">Start Recruiting</h3>
                <p className="text-gray-600">Begin helping students achieve their dreams</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-7xl text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to Join Our Network?</h2>
            <a
              href="/recruitment-partners/signup"
              className="inline-block bg-green-600 text-white px-8 py-3 rounded-md font-medium hover:bg-green-700 transition-colors"
            >
              Become a Partner
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default RecruitmentPartners; 