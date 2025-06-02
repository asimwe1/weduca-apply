import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h1 className="text-3xl font-bold mb-6">Welcome to Your Dashboard</h1>
            
            {/* Dashboard Content */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Application Status */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-xl font-semibold mb-4">Application Status</h2>
                <p className="text-gray-600">Track your application progress here</p>
              </div>

              {/* Documents */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-xl font-semibold mb-4">Documents</h2>
                <p className="text-gray-600">Manage your documents and uploads</p>
              </div>

              {/* Messages */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-xl font-semibold mb-4">Messages</h2>
                <p className="text-gray-600">View your communications</p>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">Recent Activity</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-600">No recent activity to display</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Dashboard; 