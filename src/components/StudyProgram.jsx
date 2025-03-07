

import { useState } from "react"
<<<<<<< HEAD
=======
import VideoPlayer from "./VideoPlayer"
>>>>>>> 239fbe8 (service/student page added successfully)

const StudyProgramSearch = () => {
  const [activeTab, setActiveTab] = useState("students")

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2D3648] max-w-3xl mx-auto">
            Find Your Perfect Study Program from <span className="whitespace-nowrap">140,000+ Options</span>
          </h1>
        </div>

        {/* Toggle Buttons */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-full p-1 bg-gray-100">
            <button
              onClick={() => setActiveTab("students")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === "students" ? "bg-[#0047CC] text-white" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              INTERNATIONAL STUDENTS
            </button>
            <button
              onClick={() => setActiveTab("partners")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === "partners" ? "bg-[#0047CC] text-white" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              RECRUITMENT PARTNERS
            </button>
          </div>
        </div>

        {/* Laptop Mockup */}
        <div className="max-w-5xl mx-auto relative">
<<<<<<< HEAD
          <div className="bg-white rounded-2xl overflow-hidden aspect-[16/10] relative z-10">
            <img
              src="https://s3-alpha-sig.figma.com/img/3658/fc42/55dfc788ae1c2c489dd529eabff75c23?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=C8~w6-31qbPSrW9QmyzU~onC3yFqPHHDjc1P5jWl0BvG1FIHAJChnJywUcBDvLmNEe1-qGjb80OOMT9qM0wrW0IVgpxy73UeyOLcfjVytt~ePAkOUZEG88wnsu5QuF8lRGxf57kSVfZ3HfhlZuWx2guIrFA2CHxTJ3m2LYmr8aYG2FOSY4DgVJwEO1ee6CUk4hZxwVRH8f~gd7Nod2NzDC8JCFwY5j-W7nNFzSFSxy2OFe1qdYzXU25wKWxl8MDmCVMSjsHI~drL8KlH1FkW4voWeJMIkdMp-mkTkMv9qcOCjtKKSIZMmF8ZeJGDTZal4mHofY4tQhU-siRzL~P5yw__"
              alt="Study program search interface"
              className="w-full h-full object-contain"
            />
=======
          <div className="bg-white rounded-2xl overflow-hidden aspect-[16/9] relative z-10">
            <VideoPlayer />
>>>>>>> 239fbe8 (service/student page added successfully)
          </div>
          {/* Laptop Base */}
          <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 w-1/4 h-4 bg-gray-200 rounded-b-xl z-0"></div>
        </div>
      </div>
    </section>
  )
}

export default StudyProgramSearch

