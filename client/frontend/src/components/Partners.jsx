import React from "react";

export default function TrustedInstitutionsSection() {
  return (
    <div className="mt-24 flex flex-col items-center gap-[18px]">
      <div className="container-xs flex flex-col items-center px-14 m4:px-5">
        <h2 className="text-2xl md:text-5xl font-semibold text-center text-gray-800 mb-16">
          Trusted by 1,500+ universities, colleges, and schools
          <br />
          Worldwide!
        </h2>
      </div>
      <img
        src="/download.png"
        alt="Imagetwo"
        className="h-[300px] w-[95%] object-contain"
      />
    </div>
  );
}
