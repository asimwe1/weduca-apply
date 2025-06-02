import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <div className="relative h-[40vh] bg-gradient-to-r from-green-600 to-green-800">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About WEDUCA APPLY
              </h1>
              <p className="text-xl max-w-2xl mx-auto">
                Transforming international education through innovation and collaboration
              </p>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-gray-600 mb-4">
                  At WEDUCA APPLY, we're dedicated to making international education accessible to students worldwide. We believe that education knows no borders, and every student deserves the opportunity to pursue their academic dreams globally.
                </p>
                <p className="text-gray-600">
                  Through our innovative platform and network of partners, we're breaking down barriers and simplifying the complex process of international education applications.
                </p>
              </div>
              <div className="relative h-[400px]">
                <img
                  src="https://res.cloudinary.com/dhrhfjgqa/image/upload/v1741319047/student_byddxv.png"
                  alt="Students collaborating"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-gray-50 py-16 px-4">
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Innovation</h3>
                <p className="text-gray-600">
                  We continuously innovate to provide the best solutions for international education management.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Integrity</h3>
                <p className="text-gray-600">
                  We maintain the highest standards of integrity in all our interactions and services.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Impact</h3>
                <p className="text-gray-600">
                  We measure our success by the positive impact we create in students' lives.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-7xl text-center">
            <h2 className="text-3xl font-bold mb-12">Our Leadership Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-4">
                  <img
                    src="https://res.cloudinary.com/dhrhfjgqa/image/upload/v1741319046/team1_qqvyxp.png"
                    alt="Team member"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold">John Doe</h3>
                <p className="text-gray-600">CEO & Founder</p>
              </div>
              <div>
                <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-4">
                  <img
                    src="https://res.cloudinary.com/dhrhfjgqa/image/upload/v1741319046/team2_kxwvxp.png"
                    alt="Team member"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold">Jane Smith</h3>
                <p className="text-gray-600">COO</p>
              </div>
              <div>
                <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-4">
                  <img
                    src="https://res.cloudinary.com/dhrhfjgqa/image/upload/v1741319046/team3_lxwvxp.png"
                    alt="Team member"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold">Mike Johnson</h3>
                <p className="text-gray-600">CTO</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About; 