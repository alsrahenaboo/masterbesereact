// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// function Profile() {
//   const navigate = useNavigate();
//   const [user, setUser] = useState(null);
//   const [isEditing, setIsEditing] = useState(false);
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     currentPassword: "",
//     newPassword: "",
//     confirmNewPassword: "",
//   });

//   useEffect(() => {
//     fetchProfile();
//   }, []);

//   const fetchProfile = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const response = await axios.get("http://localhost:5000/api/profile", {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setUser(response.data);
//       setFormData({
//         username: response.data.username,
//         email: response.data.email,
//         currentPassword: "",
//         newPassword: "",
//         confirmNewPassword: "",
//       });
//     } catch (error) {
//       if (error.response?.status === 401) {
//         navigate("/login");
//       }
//       setError("Failed to fetch profile");
//     }
//   };

//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const validateForm = () => {
//     if (formData.newPassword !== formData.confirmNewPassword) {
//       setError("New passwords do not match");
//       return false;
//     }
//     return true;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validateForm()) return;

//     try {
//       const token = localStorage.getItem("token");
//       const updateData = {
//         username: formData.username,
//         email: formData.email,
//       };

//       if (formData.currentPassword) {
//         updateData.currentPassword = formData.currentPassword;
//         updateData.newPassword = formData.newPassword;
//       }

//       const response = await axios.put(
//         "http://localhost:5000/api/profile",
//         updateData,
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       );

//       setUser(response.data);
//       setIsEditing(false);
//       setSuccess("Profile updated successfully");
//       setError("");

//       setFormData((prev) => ({
//         ...prev,
//         currentPassword: "",
//         newPassword: "",
//         confirmNewPassword: "",
//       }));
//     } catch (error) {
//       setError(error.response?.data?.message || "Failed to update profile");
//     }
//   };

//   const handleDeleteAccount = async () => {
//     if (
//       window.confirm(
//         "Are you sure you want to delete your account? This action cannot be undone."
//       )
//     ) {
//       try {
//         const token = localStorage.getItem("token");
//         await axios.delete("http://localhost:5000/api/profile", {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         localStorage.removeItem("token");
//         navigate("/login");
//       } catch (error) {
//         setError("Failed to delete account");
//       }
//     }
//   };

//   if (!user) {
//     return (
//       <div className="flex justify-center items-center min-h-screen bg-gray-100">
//         <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 py-8">
//       <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="bg-white shadow rounded-lg overflow-hidden">
//           {/* Header */}
//           <div className="px-4 py-5 sm:px-6 bg-gray-50 border-b border-gray-200">
//             <h3 className="text-lg leading-6 font-medium text-gray-900">
//               User Profile
//             </h3>
//           </div>

//           {/* Error and Success Messages */}
//           {error && (
//             <div className="p-4 bg-red-50 border-l-4 border-red-500">
//               <p className="text-red-700">{error}</p>
//             </div>
//           )}
//           {success && (
//             <div className="p-4 bg-green-50 border-l-4 border-green-500">
//               <p className="text-green-700">{success}</p>
//             </div>
//           )}

//           {/* Profile Content */}
//           <div className="px-4 py-5 sm:p-6">
//             {!isEditing ? (
//               /* View Mode */
//               <div className="space-y-6">
//                 <div className="border-b border-gray-200 pb-4">
//                   <dl className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
//                     <div className="sm:col-span-1">
//                       <dt className="text-sm font-medium text-gray-500">
//                         Username
//                       </dt>
//                       <dd className="mt-1 text-sm text-gray-900">
//                         {user.username}
//                       </dd>
//                     </div>
//                     <div className="sm:col-span-1">
//                       <dt className="text-sm font-medium text-gray-500">
//                         Email
//                       </dt>
//                       <dd className="mt-1 text-sm text-gray-900">
//                         {user.email}
//                       </dd>
//                     </div>
//                     <div className="sm:col-span-1">
//                       <dt className="text-sm font-medium text-gray-500">
//                         Status
//                       </dt>
//                       <dd className="mt-1 text-sm text-gray-900">
//                         <span
//                           className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
//                             user.isActive
//                               ? "bg-green-100 text-green-800"
//                               : "bg-red-100 text-red-800"
//                           }`}
//                         >
//                           {user.isActive ? "Active" : "Inactive"}
//                         </span>
//                       </dd>
//                     </div>
//                   </dl>
//                 </div>

//                 <div className="flex space-x-4">
//                   <button
//                     onClick={() => setIsEditing(true)}
//                     className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//                   >
//                     Edit Profile
//                   </button>
//                   <button
//                     onClick={handleDeleteAccount}
//                     className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
//                   >
//                     Delete Account
//                   </button>
//                 </div>
//               </div>
//             ) : (
//               /* Edit Mode */
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div className="space-y-6">
//                   <div>
//                     <label
//                       htmlFor="username"
//                       className="block text-sm font-medium text-gray-700"
//                     >
//                       Username
//                     </label>
//                     <input
//                       type="text"
//                       name="username"
//                       id="username"
//                       value={formData.username}
//                       onChange={handleInputChange}
//                       required
//                       className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                     />
//                   </div>

//                   <div>
//                     <label
//                       htmlFor="email"
//                       className="block text-sm font-medium text-gray-700"
//                     >
//                       Email
//                     </label>
//                     <input
//                       type="email"
//                       name="email"
//                       id="email"
//                       value={formData.email}
//                       onChange={handleInputChange}
//                       required
//                       className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                     />
//                   </div>

//                   <div className="bg-gray-50 p-4 rounded-md">
//                     <h4 className="text-sm font-medium text-gray-900 mb-4">
//                       Change Password (Optional)
//                     </h4>
//                     <div className="space-y-4">
//                       <div>
//                         <label
//                           htmlFor="currentPassword"
//                           className="block text-sm font-medium text-gray-700"
//                         >
//                           Current Password
//                         </label>
//                         <input
//                           type="password"
//                           name="currentPassword"
//                           id="currentPassword"
//                           value={formData.currentPassword}
//                           onChange={handleInputChange}
//                           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                         />
//                       </div>

//                       <div>
//                         <label
//                           htmlFor="newPassword"
//                           className="block text-sm font-medium text-gray-700"
//                         >
//                           New Password
//                         </label>
//                         <input
//                           type="password"
//                           name="newPassword"
//                           id="newPassword"
//                           value={formData.newPassword}
//                           onChange={handleInputChange}
//                           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                         />
//                       </div>

//                       <div>
//                         <label
//                           htmlFor="confirmNewPassword"
//                           className="block text-sm font-medium text-gray-700"
//                         >
//                           Confirm New Password
//                         </label>
//                         <input
//                           type="password"
//                           name="confirmNewPassword"
//                           id="confirmNewPassword"
//                           value={formData.confirmNewPassword}
//                           onChange={handleInputChange}
//                           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="flex space-x-4">
//                   <button
//                     type="submit"
//                     className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//                   >
//                     Save Changes
//                   </button>
//                   <button
//                     type="button"
//                     onClick={() => {
//                       setIsEditing(false);
//                       setError("");
//                       setSuccess("");
//                     }}
//                     className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//                   >
//                     Cancel
//                   </button>
//                 </div>
//               </form>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Profile;




import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Star } from "lucide-react";

function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
   const [profile, setProfile] = useState(null);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://localhost:5000/api/profile", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(response.data);
      setFormData({
        username: response.data.username,
        email: response.data.email,
        currentPassword: "",
        newPassword: "",
        confirmNewPassword: "",
      });
    } catch (error) {
      if (error.response?.status === 401) {
        navigate("/login");
      }
      setError("Failed to fetch profile");
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    if (formData.newPassword !== formData.confirmNewPassword) {
      setError("New passwords do not match");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const token = localStorage.getItem("token");
      const updateData = {
        username: formData.username,
        email: formData.email,
      };

      if (formData.currentPassword) {
        updateData.currentPassword = formData.currentPassword;
        updateData.newPassword = formData.newPassword;
      }

      const response = await axios.put(
        "http://localhost:5000/api/profile",
        updateData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setUser(response.data);
      setIsEditing(false);
      setSuccess("Profile updated successfully");
      setError("");

      setFormData((prev) => ({
        ...prev,
        currentPassword: "",
        newPassword: "",
        confirmNewPassword: "",
      }));
    } catch (error) {
      setError(error.response?.data?.message || "Failed to update profile");
    }
  };

  const handleDeleteAccount = async () => {
    if (
      window.confirm(
        "Are you sure you want to delete your account? This action cannot be undone."
      )
    ) {
      try {
        const token = localStorage.getItem("token");
        await axios.delete("http://localhost:5000/api/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });
        localStorage.removeItem("token");
        navigate("/login");
      } catch (error) {
        setError("Failed to delete account");
      }
    }
  };

  const renderStars = (rating) => {
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={16}
            className={`${
              star <= rating
                ? "text-yellow-400 fill-yellow-400"
                : "text-gray-300"
            }`}
          />
        ))}
      </div>
    );
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("ar-EG", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (!user) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }
  const handleDeleteReview = async (reviewId) => {
    try {
      await axios.delete(
        `http://localhost:5000/api/profile/reviews/${reviewId}`,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      setProfile((prevProfile) => ({
        ...prevProfile,
        reviews: prevProfile.reviews.filter(
          (review) => review._id !== reviewId
        ),
      }));
    } catch (error) {
      console.error("Error deleting review:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Personal Information Card */}
        <div className="bg-white shadow rounded-lg overflow-hidden mb-8">
          <div className="px-4 py-5 sm:px-6 bg-gray-50 border-b border-gray-200">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              User Profile
            </h3>
          </div>

          {/* Error and Success Messages */}
          {error && (
            <div className="p-4 bg-red-50 border-l-4 border-red-500">
              <p className="text-red-700">{error}</p>
            </div>
          )}
          {success && (
            <div className="p-4 bg-green-50 border-l-4 border-green-500">
              <p className="text-green-700">{success}</p>
            </div>
          )}

          {/* Profile Content */}
          <div className="px-4 py-5 sm:p-6">
            {!isEditing ? (
              /* View Mode */
              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-4">
                  <dl className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
                    <div className="sm:col-span-1">
                      <dt className="text-sm font-medium text-gray-500">
                        Username
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900">
                        {user.username}
                      </dd>
                    </div>
                    <div className="sm:col-span-1">
                      <dt className="text-sm font-medium text-gray-500">
                        Email
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900">
                        {user.email}
                      </dd>
                    </div>
                    <div className="sm:col-span-1">
                      <dt className="text-sm font-medium text-gray-500">
                        Status
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900">
                        <span
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            user.isActive
                              ? "bg-green-100 text-green-800"
                              : "bg-red-100 text-red-800"
                          }`}
                        >
                          {user.isActive ? "Active" : "Inactive"}
                        </span>
                      </dd>
                    </div>
                  </dl>
                </div>

                <div className="flex space-x-4">
                  <button
                    onClick={() => setIsEditing(true)}
                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Edit Profile
                  </button>
                  <button
                    onClick={handleDeleteAccount}
                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  >
                    Delete Account
                  </button>
                </div>
              </div>
            ) : (
              /* Edit Mode */
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-6">
                  <div>
                    <label
                      htmlFor="username"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Username
                    </label>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      value={formData.username}
                      onChange={handleInputChange}
                      required
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>

                  <div className="bg-gray-50 p-4 rounded-md">
                    <h4 className="text-sm font-medium text-gray-900 mb-4">
                      Change Password (Optional)
                    </h4>
                    <div className="space-y-4">
                      <div>
                        <label
                          htmlFor="currentPassword"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Current Password
                        </label>
                        <input
                          type="password"
                          name="currentPassword"
                          id="currentPassword"
                          value={formData.currentPassword}
                          onChange={handleInputChange}
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="newPassword"
                          className="block text-sm font-medium text-gray-700"
                        >
                          New Password
                        </label>
                        <input
                          type="password"
                          name="newPassword"
                          id="newPassword"
                          value={formData.newPassword}
                          onChange={handleInputChange}
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="confirmNewPassword"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Confirm New Password
                        </label>
                        <input
                          type="password"
                          name="confirmNewPassword"
                          id="confirmNewPassword"
                          value={formData.confirmNewPassword}
                          onChange={handleInputChange}
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button
                    type="submit"
                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Save Changes
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setIsEditing(false);
                      setError("");
                      setSuccess("");
                    }}
                    className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Reviews Section */}
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="px-4 py-5 sm:px-6 bg-gray-50 border-b border-gray-200">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Reviews
            </h3>
          </div>

          <div className="px-4 py-5 sm:p-6">
            {user.reviews && user.reviews.length > 0 ? (
              <div className="space-y-6">
                {user.reviews.map((review) => (
                  <div
                    key={review._id}
                    className="border-b border-gray-200 pb-4 last:border-0 last:pb-0"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        {renderStars(review.rating)}
                        <span className="text-sm text-gray-600 mr-2">
                          {review.rating} out of 5
                        </span>
                      </div>
                      <span className="text-sm text-gray-500">
                        {formatDate(review.createdAt)}
                      </span>
                    </div>
                    {review.comment && (
                      <p className="text-gray-700 text-sm">{review.comment}</p>
                    )}
                    {/* Delete Button */}
                    <button
                      onClick={() => handleDeleteReview(review._id)}
                      className="text-red-600 hover:text-red-800 text-sm"
                    >
                      Delete
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-center py-4">No reviews yet</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;