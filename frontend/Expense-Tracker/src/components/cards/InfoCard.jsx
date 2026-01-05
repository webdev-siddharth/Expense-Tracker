import React from "react";

const InfoCard = ({ icon, label, value, color }) => {
  return <div className="
        flex gap-6 
        bg-white dark:bg-[#1b1b1d] 
        p-6 rounded-2xl 
        shadow-md shadow-gray-200/50 dark:shadow-gray-900/30 
        border border-gray-200/50 dark:border-gray-700/50
      ">
      <div className={`w-14 h-14 flex items-center justify-center text-[26px] text-white ${color} rounded-full drop-shadow-xl`}>
        {icon}
      </div>
      <div>
        <h6 className="text-sm text-gray-500 mb-1 dark:text-gray-400">{label}</h6>
        <span className="text-[22px] text-black dark:text-white">₹{value}</span>
      </div>
    </div>
};

export default InfoCard;
