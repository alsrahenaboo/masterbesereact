import React, { useState, useEffect } from "react";
import axios from "axios";

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  // Fetch all users when the component is mounted
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("/api/users");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  // Soft delete a user
  const handleSoftDelete = async (id) => {
    try {
      await axios.patch(`/api/users/soft-delete/${id}`);
      fetchUsers(); // Refresh user list after soft deletion
    } catch (error) {
      console.error("Error soft deleting user:", error);
    }
  };

  // Toggle user active/inactive status
  const handleToggleActive = async (id) => {
    try {
      await axios.patch(`/api/users/toggle-active/${id}`);
      fetchUsers(); // Refresh user list after toggling active status
    } catch (error) {
      console.error("Error toggling user active status:", error);
    }
  };

  // Permanently delete a user
  const handlePermanentDelete = async (id) => {
    if (
      window.confirm("Are you sure you want to permanently delete this user?")
    ) {
      try {
        await axios.delete(`/api/users/${id}`);
        fetchUsers(); // Refresh user list after permanent deletion
      } catch (error) {
        console.error("Error permanently deleting user:", error);
      }
    }
  };

  // Handle input change for the new user form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  // Add a new user
  const handleAddUser = async (e) => {
    e.preventDefault();
    setError("");

    // Validate that all fields are filled
    if (!newUser.username || !newUser.email || !newUser.password) {
      setError("All fields are required!");
      return;
    }

    try {
      await axios.post("/api/users", newUser);
      setNewUser({ username: "", email: "", password: "" }); // Reset form
      fetchUsers(); // Refresh the user list
    } catch (error) {
      setError(
        "Error adding user: " + error.response?.data?.message || error.message
      );
      console.error("Error adding user:", error);
    }
  };

  return (
    <div className="container">
      <h2>User Management</h2>

      {/* Add New User Form */}
      <div className="my-4">
        <h4>Add New User</h4>
        <form onSubmit={handleAddUser}>
          <div className="mb-3">
            <label>Username</label>
            <input
              type="text"
              name="username"
              className="form-control"
              value={newUser.username}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label>Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={newUser.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              value={newUser.password}
              onChange={handleInputChange}
            />
          </div>
          {error && <div className="alert alert-danger">{error}</div>}
          <button type="submit" className="btn btn-primary">
            Add User
          </button>
        </form>
      </div>

      {/* Display User List */}
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Active</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.isActive ? "Yes" : "No"}</td>
              <td>
                {!user.isDeleted ? (
                  <>
                    <button
                      className="btn btn-warning mx-1"
                      onClick={() => handleSoftDelete(user._id)}
                    >
                      Soft Delete
                    </button>
                    <button
                      className={`btn ${
                        user.isActive ? "btn-danger" : "btn-success"
                      } mx-1`}
                      onClick={() => handleToggleActive(user._id)}
                    >
                      {user.isActive ? "Deactivate" : "Activate"}
                    </button>
                  </>
                ) : (
                  <span className="text-muted">Soft Deleted</span>
                )}
                <button
                  className="btn btn-danger mx-1"
                  onClick={() => handlePermanentDelete(user._id)}
                >
                  Permanent Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;
