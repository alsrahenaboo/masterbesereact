// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Sidebar from "./Sidebar";

// const ContactComponent = () => {
//   const [contacts, setContacts] = useState([]);

//   // Fetch all contacts
//   const fetchContacts = async () => {
//     try {
//       const response = await axios.get("http://localhost:4000/api/contacts");
//       setContacts(response.data);
//     } catch (error) {
//       console.error("Error fetching contacts", error);
//     }
//   };

//   useEffect(() => {
//     fetchContacts(); // Fetch contacts when component mounts
//   }, []);

//   // Handle delete
//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:4000/api/contacts/${id}`);
//       alert("Contact deleted successfully");
//       fetchContacts(); // Refresh contacts after deletion
//     } catch (error) {
//       console.error("Error deleting contact", error);
//     }
//   };

//   // Handle toggle status
//   const handleToggleStatus = async (id) => {
//     try {
//       await axios.put(`http://localhost:4000/api/contacts/${id}/toggle-status`);
//       alert("Status toggled successfully");
//       fetchContacts(); // Refresh contacts after toggling status
//     } catch (error) {
//       console.error("Error toggling status", error);
//     }
//   };

//   return (
//     <div className="flex h-screen bg-gray-100">
//       <Sidebar />
//       <div className="flex-1 overflow-hidden">
//         <div className="p-6">
//           <h1 className="text-3xl font-semibold text-gray-800 mb-6">
//             Contact Management
//           </h1>
//           <div className="bg-white shadow-md rounded-lg overflow-hidden">
//             <table className="min-w-full divide-y divide-gray-200">
//               <thead className="bg-gray-50">
//                 <tr>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     First Name
//                   </th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Last Name
//                   </th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Email
//                   </th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Phone
//                   </th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Requirement
//                   </th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Status
//                   </th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Actions
//                   </th>
//                 </tr>
//               </thead>
//               <tbody className="bg-white divide-y divide-gray-200">
//                 {contacts.map((contact) => (
//                   <tr key={contact._id}>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       {contact.firstName}
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       {contact.lastName}
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       {contact.email}
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       {contact.phone}
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       {contact.requirement}
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <span
//                         className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
//                           contact.isActive
//                             ? "bg-green-100 text-green-800"
//                             : "bg-red-100 text-red-800"
//                         }`}
//                       >
//                         {contact.isActive ? "Active" : "Inactive"}
//                       </span>
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
//                       <button
//                         onClick={() => handleToggleStatus(contact._id)}
//                         className="text-indigo-600 hover:text-indigo-900 mr-2"
//                       >
//                         Toggle Status
//                       </button>
//                       <button
//                         onClick={() => handleDelete(contact._id)}
//                         className="text-red-600 hover:text-red-900"
//                       >
//                         Delete
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactComponent;






import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import { FaTrash, FaToggleOn, FaToggleOff, FaEnvelope } from 'react-icons/fa';

const ContactComponent = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchContacts = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:4000/api/contacts");
      setContacts(response.data);
      setError(null);
    } catch (error) {
      console.error("Error fetching contacts", error);
      setError("Failed to fetch contacts. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this contact?")) {
      try {
        await axios.delete(`http://localhost:4000/api/contacts/${id}`);
        fetchContacts();
      } catch (error) {
        console.error("Error deleting contact", error);
        alert("Failed to delete contact. Please try again.");
      }
    }
  };

  const handleToggleStatus = async (id, currentStatus) => {
    try {
      await axios.put(`http://localhost:4000/api/contacts/${id}/toggle-status`);
      setContacts(
        contacts.map((contact) =>
          contact._id === id
            ? { ...contact, isActive: !currentStatus }
            : contact
        )
      );
    } catch (error) {
      console.error("Error toggling status", error);
      alert("Failed to toggle status. Please try again.");
    }
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  if (error) return <div className="text-red-500 text-center">{error}</div>;

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 ml-64 p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Contact Management
        </h1>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Phone
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Requirement
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
              {contacts.map((contact) => (
                <tr key={contact._id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {contact.firstName} {contact.lastName}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{contact.email}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{contact.phone}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">
                      {contact.requirement}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        contact.isActive
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {contact.isActive ? "Active" : "Inactive"}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button
                      onClick={() =>
                        handleToggleStatus(contact._id, contact.isActive)
                      }
                      className="text-indigo-600 hover:text-indigo-900 mr-3"
                      title={contact.isActive ? "Deactivate" : "Activate"}
                    >
                      {contact.isActive ? (
                        <FaToggleOn size={20} />
                      ) : (
                        <FaToggleOff size={20} />
                      )}
                    </button>
                    <button
                      onClick={() => handleDelete(contact._id)}
                      className="text-red-600 hover:text-red-900 mr-3"
                      title="Delete"
                    >
                      <FaTrash size={20} />
                    </button>
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-green-600 hover:text-green-900"
                      title="Send Email"
                    >
                      <FaEnvelope size={20} />
                    </a>
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

export default ContactComponent;