import React, { useRef, useState } from "react";
import { LuUser, LuUpload, LuTrash } from "react-icons/lu";

const ProfilePhotoSelector = ({ image, setImage }) => {
  const inputRef = useRef(null);

  const [previewUrl, setPreviewUrl] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Update the Image State
      setImage(file);

      // Generate preview URL from the File
      const preview = URL.createObjectURL(file);
      setPreviewUrl(preview);
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
    setPreviewUrl(null);
  };

  const onchoosefile = () => {
    inputRef.current.click();
  };

  return (
    <div className="flex justify-center mb-6">
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={handleImageChange}
        className="hidden"
      />

      {!image ? (
        <div className="w-20 h-20 flex items-center justify-center 
            bg-purple-100 dark:bg-purple-900/30 
            rounded-full relative">
          <LuUser className="text-4xl text-primary dark:text-purple-300" />

          <button
            type="button"
            className="w-8 h-8 flex items-center justify-center 
              bg-primary dark:bg-purple-700 
              text-white rounded-full 
              absolute -bottom-1 -right-1 
              shadow-md dark:shadow-none
              hover:bg-purple-600 dark:hover:bg-purple-600"
            onClick={onchoosefile}
          >
            <LuUpload />
          </button>
        </div>
      ) : (
        <div className="relative">
          <img
            src={previewUrl}
            alt="profile pic"
            className="w-20 h-20 rounded-full object-cover ring-2 ring-gray-200 dark:ring-gray-700"
          />
          <button
            type="button"
            className="w-8 h-8 flex items-center justify-center 
              bg-red-500 dark:bg-red-600 
              text-white rounded-full 
              absolute -bottom-1 -right-1
              shadow-md dark:shadow-none
              hover:bg-red-600 dark:hover:bg-red-500"
            onClick={handleRemoveImage}
          >
            <LuTrash />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfilePhotoSelector;
