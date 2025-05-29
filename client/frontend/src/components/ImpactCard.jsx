
import React from "react";

const ImpactCard = ({ number, description, icon }) => {
  return (
    <div className="bg-white rounded-lg shadow-md w-[355px] h-[375px] gap-y-6 p-8 flex flex-col items-center justify-center">
      <div className="w-24 h-24 mb-4">
        <img src={icon} alt={description} className="w-[160px] h-[160px] object-contain" />
      </div>
      <h3 className="text-4xl font-bold text-green-600 mb-2">{number}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

export default ImpactCard;