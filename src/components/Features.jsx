import { DollarSign, FileCheck, Headphones } from "lucide-react"

const FeaturesSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-7xl flex flex-col items-center">
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center w-full mb-12">
          {/* 100% Free Feature */}
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-[#0047CC] rounded-full flex items-center justify-center mb-6">
              <DollarSign className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-[#2D3648]">100% Free</h3>
          </div>

          {/* 95% Success Rate Feature */}
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-[#0047CC] rounded-full flex items-center justify-center mb-6">
              <FileCheck className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-[#2D3648]">
              95% Application
              <br />
              Success Rate
            </h3>
          </div>

          {/* 24/7 Support Feature */}
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-[#0047CC] rounded-full flex items-center justify-center mb-6">
              <Headphones className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-[#2D3648]">
              24/7 Live Chat
              <br />
              Support
            </h3>
          </div>
        </div>

        {/* Sign Up Button */}
        <button className="bg-[#0047CC] text-white px-8 py-3 rounded-md hover:bg-[#0039A3] transition-colors">
          Sign Up for Free
        </button>
      </div>
    </section>
  )
}

export default FeaturesSection

