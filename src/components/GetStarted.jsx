const GetStarted = () => {
    return (
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-16">Get Started with ApplyBoard</h1>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Student Card */}
            <div className="bg-white rounded-lg p-8 shadow-sm flex flex-col items-center text-center">
              <div className="mb-6 relative w-64 h-48">
                <img
                  src="https://s3-alpha-sig.figma.com/img/8f7d/314c/99e4b99f4a02d33a1cd1a88b0ec332d6?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=j18NNNTIBhMrnJBaAcbCDC4Hi3u8gGi85~otw~Yb9x6au~7glIgTwkt3Cd2pxxQPzdrFeuTQxHdHzVKj88wQLBLEt2zzHeU4RzW6QAM0ueZ9r~Zm4MRQ6D1Tb9DUMdj9NqRbdJD2z3JjlL7LF-xRrbyLLGZPdRA0TofC7e3IiO~jcpTVFOSjRJmTcfYepb6PF20mIZNYzznU-t7EZHPgbX-Qg1pmS5Oo1DAY4UnCqzbaRixz6y-ZwVJZLmh6Mg-~z72-y4Pb0WwkE0CL7ZmTj1MdiAOrryR0swgof~LFSmiPK~Jd3PkHR3JENCqfmSj2MlcYGVgh~GxWS234xfbjgQ__"
                  alt="Student with tablet and graduation caps"
                  className="w-full h-full object-contain"
                />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Student</h2>
              <p className="text-gray-600 mb-8">
                Are you a student looking to study in Canada, the US, the UK, Australia, or Ireland? Register to launch
                your journey now!
              </p>
              <button className="mt-auto bg-[#0047CC] text-white px-8 py-3 rounded-md hover:bg-[#0039A3] transition-colors">
                Sign Up for Free
              </button>
            </div>
  
            {/* Partner Institutions Card */}
            <div className="bg-white rounded-lg p-8 shadow-sm flex flex-col items-center text-center">
              <div className="mb-6 relative w-64 h-48">
                <img
                  src="https://s3-alpha-sig.figma.com/img/aaf3/7bcf/392c62ff34d303ac964e2f590b1f1391?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=klnkE-SqWjk5m1sv7fDS6VlCcDtKELF9Kr-Hrs7Cla3-NALCnfL2dLbBCtypnRzEDhDe8zkDv74ExIkTAQs9c1ft4cLp87LkdJysVw0GftkKgVxRgg3Y4CsS1FIEQVpagcyiOVNCx3Zis~If-Epg9mnId8zobpoA-YKLNiHg8qw8-Wkaw-F2Y4YMPq4I8CKoE6sYqFmZZmiah7uEn-Qdm1rWfDV7DKBAJ91WSMSWnhiTNegtUJti4q9j46fWLIZK11PpiVEd9PPbMJHBx-awccCfxhbRUsGye-tczrvA1rWRF~iLSdX49KV9TwXWNgwmfZcXx59r6GBLLRFjPbj6ZQ__"
                  alt="Partner with institution building icon"
                  className="w-full h-full object-contain"
                />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Partner Institutions</h2>
              <p className="text-gray-600 mb-8">
                Join 1,500+ global institutions on the ApplyBoard platform! Complete this form, and our Partner Relations
                team will be in touch soon.
              </p>
              <button className="mt-auto bg-[#0047CC] text-white px-8 py-3 rounded-md hover:bg-[#0039A3] transition-colors">
                Become a Recruitment Partner
              </button>
            </div>
  
            {/* Recruitment Partners Card */}
            <div className="bg-white rounded-lg p-8 shadow-sm flex flex-col items-center text-center">
              <div className="mb-6 relative w-64 h-48">
                <img
                  src="https://s3-alpha-sig.figma.com/img/f5ce/c8a6/56db687c15666f413f86218804cd1f14?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=N1jdrQP-E-N0Tr~qWxb~yb06eBfQAAP5ehNl0waub4exlGFLARXG0E9lhsHKZjxymAeSKmiu6I0OaUwdNhuhLnZPeK3O5HH9MvsSM8Ggn4bT6z5srNwNnmZCvqXBIDn7rMfWgJaQsIJSBv3BpWByibRN0k5vuLUTkJGnfOiEDjBxbZRYOim~iOmF8YLS7Ct7ocdcW7cJpd9ho8Q0da~JfXi-TZuzhSTc~Gg5eeXSSXJYQMH-w4GXpbE7gd5Px-SLT1FcjW7eGnKaLsupPDRuqgrYo3r8uPPTkrkose0zrgHev749hpWrEomdjB89tVtQnIQjB5r~wSAzwTvF60hAZQ__"
                  alt="Recruitment partner with handshake icon"
                  className="w-full h-full object-contain"
                />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Recruitment Partners</h2>
              <p className="text-gray-600 mb-8">
                Do you recruit and guide international students? Join our partner network and revolutionize your process!
              </p>
              <button className="mt-auto bg-[#0047CC] text-white px-8 py-3 rounded-md hover:bg-[#0039A3] transition-colors">
                Recruiter Registration
              </button>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default GetStarted
  
  