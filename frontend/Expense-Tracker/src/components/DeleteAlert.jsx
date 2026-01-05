import React from "react";

const DeleteAlert = ({ content, onDelete }) => {
  return (
    <div>
      <p className="text-sm text-gray-700 dark:text-gray-300">{content}</p>

      <div className="flex justify-end mt-6">
        <button
          type="button"
          className="px-4 py-2 text-sm font-medium
            bg-red-600 hover:bg-red-700
            dark:bg-red-500 dark:hover:bg-red-600
            text-white rounded-lg
            shadow-sm"
          onClick={onDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default DeleteAlert;
