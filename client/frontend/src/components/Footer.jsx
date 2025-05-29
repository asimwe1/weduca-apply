const Footer = () => {
    return (
      <footer className="bg-green-600 text-white py-16">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-8">
            {/* Company Info - Column 1 */}
            <div className="lg:col-span-3">
              <h2 className="font-semibold text-xl mb-6">WEDUCA APPLY LTD</h2>
              <div className="mb-8">
                <p className="text-sm leading-relaxed">
                  Kigali, Rwanda
                  <br />
                  Kagarama,
                  <br />
                  KK 61 st
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-4">Get Social</h3>
                <div className="flex gap-5">
                  <a href="#" className="hover:opacity-80 transition-opacity">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a href="#" className="hover:opacity-80 transition-opacity">
                    <span className="sr-only">Facebook</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </a>
                  <a href="#" className="hover:opacity-80 transition-opacity">
                    <span className="sr-only">Instagram</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a href="#" className="hover:opacity-80 transition-opacity">
                    <span className="sr-only">TikTok</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                    </svg>
                  </a>
                  <a href="#" className="hover:opacity-80 transition-opacity">
                    <span className="sr-only">YouTube</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
  
            {/* Navigation Links - Columns 2-5 */}
            <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Column 2 */}
              <div>
                <h3 className="font-semibold text-xl mb-4">Students</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="hover:underline text-sm">
                      Institutions
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline text-sm">
                      Recruiters
                    </a>
                  </li>
                </ul>
                <div className="mt-8">
                  <h3 className="font-semibold text-xl mb-4">Explore</h3>
                  <ul className="space-y-3">
                    <li>
                      <a href="#" className="hover:underline text-sm">
                        Explore Schools and Programs
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:underline text-sm">
                        Register
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
  
              {/* Column 3 */}
              <div>
                <h3 className="font-semibold text-xl mb-4">Discover</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="hover:underline text-sm">
                      Our Story
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline text-sm">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline text-sm">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline text-sm">
                      Press
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline text-sm">
                      Life at WEDUCA APPLY LTD
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline text-sm">
                      Leadership
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline text-sm">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
  
              {/* Column 4 */}
              <div>
                <h3 className="font-semibold text-xl mb-4">Resources</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="hover:underline text-sm">
                      Study in the US
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline text-sm">
                      Study in the UK
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline text-sm">
                      Study in Canada
                    </a>
                  </li>
                </ul>
              </div>
  
              {/* Column 5 */}
              <div>
                <h3 className="font-semibold text-xl mb-4">Legal</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="hover:underline text-sm">
                      Privacy & Cookies Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline text-sm">
                      Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline text-sm">
                      Accessibility
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline text-sm">
                      Modern Slavery Statement
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline text-sm">
                      WEDUCA APPLY LTD Fees
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
  
          {/* Copyright */}
          <div className="mt-16 text-center">
            <p className="text-sm">© 2025 WEDUCA APPLY LTD</p>
          </div>
        </div>
      </footer>
    )
  }
  
  export default Footer
  
  