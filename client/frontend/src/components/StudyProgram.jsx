

import { useState } from "react"
import VideoPlayer from "./VideoPlayer"

const StudyProgramSearch = () => {
  const [activeTab, setActiveTab] = useState("students")

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2d4836] max-w-3xl mx-auto">
            Find Your Perfect Study Program from <span className="whitespace-nowrap">140,000+ Options</span>
          </h1>
        </div>

        {/* Toggle Buttons */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-full p-1 bg-gray-100">
            <button
              onClick={() => setActiveTab("students")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === "students" ? "bg-green-700 text-white" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              INTERNATIONAL STUDENTS
            </button>
            <button
              onClick={() => setActiveTab("partners")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === "partners" ? "bg-green-700 text-white" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              RECRUITMENT PARTNERS
            </button>
          </div>
        </div>

        {/* Laptop Mockup */}
        <div className="max-w-5xl mx-auto relative">
          <div className="bg-white rounded-2xl overflow-hidden aspect-[16/9] relative z-10">
            <VideoPlayer />
          </div>
          {/* Laptop Base */}
          <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 w-1/4 h-4 bg-gray-200 rounded-b-xl z-0"></div>
        </div>
      </div>
    </section>
  )
}

export default StudyProgramSearch

