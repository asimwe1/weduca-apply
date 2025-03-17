const GetStarted = () => {
    return (
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-16">Get Started with WEDUCA APPLY LTD</h1>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Student Card */}
            <div className="bg-white rounded-lg p-8 shadow-sm flex flex-col items-center text-center">
              <div className="mb-6 relative w-64 h-48">
                <img
                  src="https://res.cloudinary.com/dhrhfjgqa/image/upload/v1741319047/student_byddxv.png"
                  alt="Student with tablet and graduation caps"
                  className="w-full h-full object-contain"
                />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Student</h2>
              <p className="text-gray-600 mb-8">
                Are you a student looking to study in Canada, the US, the UK, Australia, or Ireland? Register to launch
                your journey now!
              </p>
              <button className="mt-auto bg-green-700 text-white px-8 py-3 rounded-md hover:bg-teal-800 transition-colors">
                Sign Up for Free
              </button>
            </div>
  
            {/* Partner Institutions Card */}
            <div className="bg-white rounded-lg p-8 shadow-sm flex flex-col items-center text-center">
              <div className="mb-6 relative w-64 h-48">
                <img
                  src="https://res.cloudinary.com/dhrhfjgqa/image/upload/v1741319046/school_q63kpq.png"
                  alt="Partner with institution building icon"
                  className="w-full h-full object-contain"
                />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Partner Institutions</h2>
              <p className="text-gray-600 mb-8">
                Join 1,500+ global institutions on the WEDUCA APPLY LTD platform! Complete this form, and our Partner Relations
                team will be in touch soon.
              </p>
              <button className="mt-auto bg-green-700 text-white px-8 py-3 rounded-md hover:bg-teal-800 transition-colors">
                Become a Recruitment Partner
              </button>
            </div>
  
            {/* Recruitment Partners Card */}
            <div className="bg-white rounded-lg p-8 shadow-sm flex flex-col items-center text-center">
              <div className="mb-6 relative w-64 h-48">
                <img
                  src="https://res.cloudinary.com/dhrhfjgqa/image/upload/v1741319046/RP_grlnq3.png"
                  alt="Recruitment partner with handshake icon"
                  className="w-full h-full object-contain"
                />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Recruitment Partners</h2>
              <p className="text-gray-600 mb-8">
                Do you recruit and guide international students? Join our partner network and revolutionize your process!
              </p>
              <button className="mt-auto bg-green-700 text-white px-8 py-3 rounded-md hover:bg-teal-800 transition-colors">
                Recruiter Registration
              </button>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default GetStarted
  
  