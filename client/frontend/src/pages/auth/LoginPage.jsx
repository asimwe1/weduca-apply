import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LoginForm from '../../components/auth/LoginForm';

const LoginPage = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <LoginForm />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default LoginPage;

