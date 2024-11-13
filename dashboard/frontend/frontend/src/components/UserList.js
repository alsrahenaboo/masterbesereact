// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Sidebar from "./Sidebar";

// const UserList = () => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await axios.get("http://localhost:4000/api/users");
//         setUsers(response.data);
//         setLoading(false);
//       } catch (err) {
//         setError("Error fetching users");
//         setLoading(false);
//       }
//     };

//     fetchUsers();
//   }, []);

//   const handleDeleteUser = async (userId) => {
//     try {
//       await axios.delete(`http://localhost:4000/api/users/${userId}`);
//       setUsers(users.filter((user) => user._id !== userId));
//     } catch (err) {
//       setError("Error deleting user");
//     }
//   };

//   const handleActivateUser = async (userId) => {
//     try {
//       await axios.put(`http://localhost:4000/api/users/activate/${userId}`);
//       setUsers(
//         users.map((user) =>
//           user._id === userId ? { ...user, isActive: true } : user
//         )
//       );
//     } catch (err) {
//       setError("Error activating user");
//     }
//   };

//   const handleDeactivateUser = async (userId) => {
//     try {
//       await axios.put(`http://localhost:4000/api/users/deactivate/${userId}`);
//       setUsers(
//         users.map((user) =>
//           user._id === userId ? { ...user, isActive: false } : user
//         )
//       );
//     } catch (err) {
//       setError("Error deactivating user");
//     }
//   };

//   if (loading)
//     return <div className="text-center mt-8 text-xl">Loading...</div>;
//   if (error)
//     return <div className="text-center text-red-500 mt-8">{error}</div>;

//   return (
//     <>
//       <div className="flex min-h-screen">
//         {/* Sidebar component (placed on the left) */}
//         <div className="w-64 bg-white shadow-lg fixed left-0 top-0 h-full">
//           <Sidebar />
//         </div>

//         {/* Main content area */}
//         <div className="flex-grow p-8 bg-gray-100 ml-64">
//           {" "}
//           {/* Add margin-left to make space for the sidebar */}
//           <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
//             User List
//           </h1>
//           <ul className="bg-white shadow-md rounded-lg p-4">
//             {users.map((user) => (
//               <li
//                 key={user._id}
//                 className="flex justify-between items-center py-3 px-4 mb-2 bg-gray-50 rounded-lg hover:bg-gray-100"
//               >
//                 <div>
//                   <span className="text-gray-700 font-medium">
//                     {user.username}
//                   </span>
//                   <span className="text-gray-500 ml-4">{user.email}</span>
//                 </div>
//                 <div>
//                   {user.isActive ? (
//                     <button
//                       onClick={() => handleDeactivateUser(user._id)}
//                       className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 mr-2"
//                     >
//                       Deactivate
//                     </button>
//                   ) : (
//                     <button
//                       onClick={() => handleActivateUser(user._id)}
//                       className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mr-2"
//                     >
//                       Activate
//                     </button>
//                   )}
//                   <button
//                     onClick={() => handleDeleteUser(user._id)}
//                     className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// };

// export default UserList;




import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import { FaTrash, FaUserCheck, FaUserTimes } from 'react-icons/fa';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/users");
        setUsers(response.data);
        setLoading(false);
      } catch (err) {
        setError("Error fetching users");
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleDeleteUser = async (userId) => {
    try {
      await axios.delete(`http://localhost:4000/api/users/${userId}`);
      setUsers(users.filter((user) => user._id !== userId));
    } catch (err) {
      setError("Error deleting user");
    }
  };

  const handleActivateUser = async (userId) => {
    try {
      await axios.put(`http://localhost:4000/api/users/activate/${userId}`);
      setUsers(
        users.map((user) =>
          user._id === userId ? { ...user, isActive: true } : user
        )
      );
    } catch (err) {
      setError("Error activating user");
    }
  };

  const handleDeactivateUser = async (userId) => {
    try {
      await axios.put(`http://localhost:4000/api/users/deactivate/${userId}`);
      setUsers(
        users.map((user) =>
          user._id === userId ? { ...user, isActive: false } : user
        )
      );
    } catch (err) {
      setError("Error deactivating user");
    }
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );

  if (error)
    return <div className="text-center text-red-500 mt-8 text-xl">{error}</div>;

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="w-64 bg-white shadow-lg fixed left-0 top-0 h-full">
        <Sidebar />
      </div>

      <div className="flex-grow p-8 ml-64">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          User Management
        </h1>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  User
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {users.map((user) => (
                <tr key={user._id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img
                          className="h-10 w-10 rounded-full"
                          src={`https://ui-avatars.com/api/?name=${user.username}&background=random`}
                          alt=""
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {user.username}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{user.email}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        user.isActive
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {user.isActive ? "Active" : "Inactive"}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    {user.isActive ? (
                      <button
                        onClick={() => handleDeactivateUser(user._id)}
                        className="text-yellow-600 hover:text-yellow-900 mr-3"
                        title="Deactivate"
                      >
                        <FaUserTimes size={20} />
                      </button>
                    ) : (
                      <button
                        onClick={() => handleActivateUser(user._id)}
                        className="text-green-600 hover:text-green-900 mr-3"
                        title="Activate"
                      >
                        <FaUserCheck size={20} />
                      </button>
                    )}
                    <button
                      onClick={() => handleDeleteUser(user._id)}
                      className="text-red-600 hover:text-red-900"
                      title="Delete"
                    >
                      <FaTrash size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserList;