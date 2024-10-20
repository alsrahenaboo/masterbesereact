import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
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
    return <div className="text-center mt-8 text-xl">Loading...</div>;
  if (error)
    return <div className="text-center text-red-500 mt-8">{error}</div>;

  return (
    <>
      <div className="flex min-h-screen">
        {/* Sidebar component (placed on the left) */}
        <div className="w-64 bg-white shadow-lg fixed left-0 top-0 h-full">
          <Sidebar />
        </div>

        {/* Main content area */}
        <div className="flex-grow p-8 bg-gray-100 ml-64">
          {" "}
          {/* Add margin-left to make space for the sidebar */}
          <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            User List
          </h1>
          <ul className="bg-white shadow-md rounded-lg p-4">
            {users.map((user) => (
              <li
                key={user._id}
                className="flex justify-between items-center py-3 px-4 mb-2 bg-gray-50 rounded-lg hover:bg-gray-100"
              >
                <div>
                  <span className="text-gray-700 font-medium">
                    {user.username}
                  </span>
                  <span className="text-gray-500 ml-4">{user.email}</span>
                </div>
                <div>
                  {user.isActive ? (
                    <button
                      onClick={() => handleDeactivateUser(user._id)}
                      className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 mr-2"
                    >
                      Deactivate
                    </button>
                  ) : (
                    <button
                      onClick={() => handleActivateUser(user._id)}
                      className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mr-2"
                    >
                      Activate
                    </button>
                  )}
                  <button
                    onClick={() => handleDeleteUser(user._id)}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default UserList;
