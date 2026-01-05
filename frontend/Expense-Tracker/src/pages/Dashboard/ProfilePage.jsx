// // import React, { useContext } from "react";
// // import { UserContext } from "../../context/UserContext";
// // import { useNavigate } from "react-router-dom";
// // import DashboardLayout from "../../components/layouts/DashboardLayout";

// // const ProfilePage = () => {
// //   const { user } = useContext(UserContext);
// //   const navigate = useNavigate();

// //   return (
// //     <DashboardLayout activeMenu = "">
// //       <div className = "my-5 mx-auto">
// //     <div className="p-6 flex justify-center">
// //       <div className="w-full max-w-md text-center">

// //         {/* Page Title */}
// //         <h2 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-white">
// //           My Profile
// //         </h2>

// //         {/* Profile Photo Section */}
// //         <div className="flex flex-col items-center gap-2 mb-6">
// //           <img
// //             src={user?.profileImageUrl}
// //             alt="Profile"
// //             className="w-28 h-28 rounded-full object-cover bg-gray-300 dark:bg-gray-700 shadow"
// //           />

// //           <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
// //             {user?.fullName}
// //           </h3>

// //           <p className="text-gray-600 dark:text-gray-400">{user?.email}</p>
// //         </div>

// //         {/* Information Boxes */}
// //         <div className="space-y-4 mb-6">

// //           {/* Full Name Box */}
// //           <div
// //             className="
// //               p-4 rounded-xl shadow 
// //               border border-gray-200 
// //               dark:border-gray-700 
// //               bg-white 
// //               dark:bg-[#1e1e1e]
// //             "
// //           >
// //             <span className="text-sm text-gray-500 dark:text-gray-400">
// //               Full Name
// //             </span>
// //             <p className="font-medium text-gray-900 dark:text-white">
// //               {user?.fullName}
// //             </p>
// //           </div>

// //           {/* Email Box */}
// //           <div
// //             className="
// //               p-4 rounded-xl shadow 
// //               border border-gray-200 
// //               dark:border-gray-700 
// //               bg-white 
// //               dark:bg-[#1e1e1e]
// //             "
// //           >
// //             <span className="text-sm text-gray-500 dark:text-gray-400">
// //               Email
// //             </span>
// //             <p className="font-medium text-gray-900 dark:text-white">
// //               {user?.email}
// //             </p>
// //           </div>

// //         </div>

// //         {/* Edit Button */}
// //         <button
// //           onClick={() => navigate("/editProfile")}
// //           className="w-full py-3 rounded-lg bg-primary hover:bg-purple-700 
// //                      text-white text-lg transition"
// //         >
// //           Edit Profile
// //         </button>
// //       </div>
// //     </div>
// //     </div>
// //     </DashboardLayout>
// //   );
// // };

// // export default ProfilePage;











// import React, { useContext } from "react";
// import { UserContext } from "../../context/UserContext";
// import { useNavigate } from "react-router-dom";
// import DashboardLayout from "../../components/layouts/DashboardLayout";

// const ProfilePage = () => {
//   const { user } = useContext(UserContext);
//   const navigate = useNavigate();

//   return (
//     <DashboardLayout activeMenu="">
//       <div className="flex justify-center w-full py-10 px-4">

//         <div className="w-full max-w-xl">

//           {/* Soft Gradient Header */}
//           <div className="w-full h-28 bg-gradient-to-r from-purple-600/60 to-purple-400/60 
//                           rounded-2xl blur-[0.3px] shadow-lg" />

//           {/* Main Profile Card */}
//           <div className="
//               relative -mt-16 p-8 
//               rounded-3xl 
//               bg-gradient-to-b from-[#1c1c1c] to-[#111] 
//               border border-white/5
//               shadow-[0_0_40px_-10px_rgba(0,0,0,0.6)]
//           ">

//             {/* Avatar */}
//             <div className="flex justify-center -mt-20">
//               <div className="
//                 w-32 h-32 rounded-full overflow-hidden 
//                 border-4 border-white/20 shadow-2xl
//                 bg-black/20 backdrop-blur-xl
//               ">
//                 <img
//                   src={user?.profileImageUrl}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             </div>

//             {/* Name */}
//             <h2 className="mt-6 text-2xl font-bold text-white text-center">
//               {user?.fullName}
//             </h2>

//             <p className="text-gray-400 text-center mb-6">
//               {user?.email}
//             </p>

//             {/* Info Rows */}
//             <div className="space-y-5">

//               <div>
//                 <p className="text-gray-500 text-sm">Full Name</p>
//                 <p className="text-white text-lg font-medium">{user?.fullName}</p>
//                 <div className="w-full border-b border-white/10 mt-2" />
//               </div>

//               <div>
//                 <p className="text-gray-500 text-sm">Email</p>
//                 <p className="text-white text-lg font-medium">{user?.email}</p>
//                 <div className="w-full border-b border-white/10 mt-2" />
//               </div>

//             </div>

//             {/* Edit Button */}
//             <button
//               onClick={() => navigate("/editProfile")}
//               className="
//                 w-full mt-8 py-3 
//                 bg-gradient-to-r from-purple-500 to-purple-700
//                 hover:opacity-90 
//                 text-white text-lg font-medium 
//                 rounded-full shadow-lg transition
//               "
//             >
//               Edit Profile
//             </button>

//           </div>

//         </div>

//       </div>
//     </DashboardLayout>
//   );
// };

// export default ProfilePage;






import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../../components/layouts/DashboardLayout";

const ProfilePage = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <DashboardLayout activeMenu="">
      <div className="flex justify-center w-full py-10 px-4">

        <div className="w-full max-w-xl">

          {/* Subtle Gradient Header */}
          <div className="
            w-full h-28 
            bg-gradient-to-r from-purple-500/70 to-purple-400/70 
            rounded-2xl shadow-lg
          " />

          {/* Main Profile Card */}
          <div
            className="
              relative -mt-16 p-8 rounded-3xl border
              shadow-[0_0_40px_-10px_rgba(0,0,0,0.3)]
              
              /* LIGHT MODE */
              bg-white border-gray-200

              /* DARK MODE */
              dark:bg-gradient-to-b 
              dark:from-[#1c1c1c] 
              dark:to-[#111] 
              dark:border-white/10
            "
          >

            {/* Avatar */}
            <div className="flex justify-center -mt-20">
              <div
                className="
                  w-32 h-32 rounded-full overflow-hidden 
                  border-4 bg-white/20 backdrop-blur-xl
                  border-white/40 shadow-2xl
                  dark:border-white/20
                "
              >
                <img
                  src={user?.profileImageUrl}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Name */}
            <h2 className="mt-6 text-2xl font-bold text-center text-gray-900 dark:text-white">
              {user?.fullName}
            </h2>

            <p className="text-gray-600 dark:text-gray-400 text-center mb-6">
              {user?.email}
            </p>

            {/* Info Rows */}
            <div className="space-y-6">

              {/* Full Name Row */}
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Full Name
                </p>
                <p className="text-lg font-medium text-gray-900 dark:text-white">
                  {user?.fullName}
                </p>
                <div className="border-b mt-2 border-gray-300 dark:border-white/10" />
              </div>

              {/* Email Row */}
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Email
                </p>
                <p className="text-lg font-medium text-gray-900 dark:text-white">
                  {user?.email}
                </p>
                <div className="border-b mt-2 border-gray-300 dark:border-white/10" />
              </div>

            </div>

            {/* Edit Button */}
            <button
              onClick={() => navigate("/editProfile")}
              className="
                w-full mt-8 py-3 rounded-full text-white text-lg font-medium
                bg-gradient-to-r from-purple-500 to-purple-700
                hover:opacity-90 transition shadow-lg
              "
            >
              Edit Profile
            </button>

          </div>

        </div>

      </div>
    </DashboardLayout>
  );
};

export default ProfilePage;
