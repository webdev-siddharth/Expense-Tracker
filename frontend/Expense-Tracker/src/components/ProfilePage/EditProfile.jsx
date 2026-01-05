import React, { useState, useEffect, useContext } from "react";
import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPaths";
import { UserContext } from "../../context/UserContext";
import toast from "react-hot-toast";
import DashboardLayout from "../layouts/DashboardLayout";

const EditProfile = () => {
  const { user, updateUser: setUser } = useContext(UserContext);

  // Local states (initially empty because user may not be loaded yet)
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [profilePicFile, setProfilePicFile] = useState(null);
  const [preview, setPreview] = useState("");

  // 🔥 When UserContext loads user (after refresh), update local states
  useEffect(() => {
    if (user) {
      setFullName(user.fullName || "");
      setEmail(user.email || "");
      setPreview(user.profileImageUrl || "");
    }
  }, [user]);

  // 🔥 Update preview when selecting a new image
  useEffect(() => {
    if (profilePicFile) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(profilePicFile);
    }
  }, [profilePicFile]);

  // 🔥 If user not loaded, show loading
  if (!user) {
    return (
      <DashboardLayout activeMenu="">
        <div className="text-center py-10 text-gray-600 dark:text-gray-300">
          Loading...
        </div>
      </DashboardLayout>
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("fullName", fullName);
      formData.append("email", email);

      if (newPassword) formData.append("password", newPassword);
      if (profilePicFile) formData.append("profilePic", profilePicFile);

      const res = await axiosInstance.post(API_PATHS.AUTH.UPDATE_PROFILE, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setUser(res.data);
      toast.success("Profile updated!");
    } catch (err) {
      toast.error(err?.response?.data?.message || "Update failed");
    }
  };

  return (
    <DashboardLayout activeMenu="">
      <div className="w-full flex justify-center py-10 px-4">

        <div className="w-full max-w-xl">

          {/* Header Gradient */}
          <div className="
            w-full h-28 
            bg-gradient-to-r from-purple-600/70 to-purple-500/70
            rounded-2xl shadow-lg
          " />

          {/* Main Card */}
          <div
            className="
              -mt-16 p-8 rounded-3xl
              bg-white dark:bg-gradient-to-b dark:from-[#1c1c1c] dark:to-[#111]
              border border-gray-300 dark:border-white/10
              shadow-xl
            "
          >

            {/* Avatar */}
            <div className="flex justify-center -mt-20 mb-3">
              <div
                className="
                  w-32 h-32 rounded-full overflow-hidden 
                  border-4 border-white/40 dark:border-gray-700
                  shadow-2xl bg-white/10 backdrop-blur-xl
                "
              >
                <img
                  src={preview}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Change Photo */}
            <div className="flex justify-center mb-8">
              <label
                className="
                  cursor-pointer px-5 py-2 rounded-full
                  bg-gradient-to-r from-purple-500 to-purple-700
                  text-white shadow-md hover:opacity-90 transition
                "
              >
                Change Photo
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => setProfilePicFile(e.target.files[0])}
                />
              </label>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Full Name */}
              <div>
                <label className="text-gray-700 dark:text-gray-300 font-medium">
                  Full Name
                </label>
                <input
                  className="
                    w-full mt-1 px-4 py-2 rounded-xl
                    bg-gray-100 dark:bg-[#222]
                    border border-gray-300 dark:border-gray-700
                    text-gray-900 dark:text-white
                    focus:ring-2 focus:ring-purple-500 outline-none
                  "
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-gray-700 dark:text-gray-300 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  className="
                    w-full mt-1 px-4 py-2 rounded-xl
                    bg-gray-100 dark:bg-[#222]
                    border border-gray-300 dark:border-gray-700
                    text-gray-900 dark:text-white
                    focus:ring-2 focus:ring-purple-500 outline-none
                  "
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              {/* Password */}
              <div>
                <label className="text-gray-700 dark:text-gray-300 font-medium">
                  New Password
                </label>
                <input
                  type="password"
                  placeholder="Leave blank to keep current password"
                  className="
                    w-full mt-1 px-4 py-2 rounded-xl
                    bg-gray-100 dark:bg-[#222]
                    border border-gray-300 dark:border-gray-700
                    text-gray-900 dark:text-white
                    focus:ring-2 focus:ring-purple-500 outline-none
                  "
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </div>

              {/* Buttons */}
              <div className="flex justify-between pt-2">
                <button
                  type="button"
                  className="
                    px-5 py-2 rounded-xl border
                    text-gray-700 dark:text-gray-300
                    border-gray-400 dark:border-gray-700
                    hover:bg-gray-200 dark:hover:bg-[#222] transition
                  "
                  onClick={() => window.history.back()}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="
                    px-6 py-2 rounded-xl text-white
                    bg-gradient-to-r from-purple-500 to-purple-700
                    hover:opacity-90 transition shadow-lg
                  "
                >
                  Save Changes
                </button>
              </div>

            </form>

          </div>

        </div>

      </div>
    </DashboardLayout>
  );
};

export default EditProfile;
