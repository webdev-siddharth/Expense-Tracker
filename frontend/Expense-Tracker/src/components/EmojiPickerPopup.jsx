import React, { useState } from "react";
import EmojiPicker from "emoji-picker-react";
import { LuImage, LuX } from "react-icons/lu";

const EmojiPickerPopup = ({ icon, onSelect }) => {
  const [isOpen, setisOpen] = useState(false);
  return (
    <div className="flex flex-col md:flex-row items-start gap-5 mb-6">
      <div
        className="flex items-center gap-4 cursor-pointer"
        onClick={() => setisOpen(true)}
      >
        <div className="w-12 h-12 flex items-center justify-center text-2xl bg-purple-50 text-primary rounded-lg dark:bg-purple-900/30">
          {icon ? (
            <img src={icon} alt="Icon" className="w-12 h-12" />
          ) : (
            <LuImage />
          )}
        </div>

        <p className="text-black dark:text-white">
          {icon ? "Change Icon" : "Pick Icon"}
        </p>
      </div>
      {isOpen && (
        <div className="relative">
          <button
            className="w-7 h-7 flex items-center justify-center
             bg-white dark:bg-[#2a2a2c]
             border border-gray-300 dark:border-gray-600
             shadow-sm dark:shadow-none
             rounded-full absolute -top-3 -right-3 z-10 cursor-pointer
             hover:bg-gray-100 dark:hover:bg-[#38383a]"
            onClick={() => setisOpen(false)}
          >
            <LuX className="text-gray-700 dark:text-gray-200 w-3.5 h-3.5" />
          </button>

          {/* <EmojiPicker
            open={isOpen}
            onEmojiClick={(emoji) => onSelect(emoji?.imageUrl || "")}
          /> */}

          <div className="bg-white dark:bg-[#1b1b1d] shadow-lg rounded-lg p-1">
            <EmojiPicker
              open={isOpen}
              theme="dark"
              onEmojiClick={(emoji) => {
                onSelect(emoji?.imageUrl || "");
                setIsOpen(false);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default EmojiPickerPopup;
