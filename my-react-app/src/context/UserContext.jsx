// import React, { createContext, useContext, useEffect, useState } from "react";

// const UserContext = createContext();

// export function UserProvider({ children }) {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Fetch from JSONPlaceholder (demo API)
//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         setLoading(true);
//         const res = await fetch("https://jsonplaceholder.typicode.com/users");
//         const data = await res.json();
//         setUsers(data);
//       } catch (err) {
//         console.error("Failed to fetch users", err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchUsers();
//   }, []);

//   // Add user client-side
//   const addUser = (newUser) => {
//     // Create a unique id (max existing id + 1)
//     const maxId = users.reduce((m, u) => Math.max(m, u.id || 0), 0);
//     const userToAdd = { ...newUser, id: maxId + 1 };
//     setUsers((prev) => [userToAdd, ...prev]);
//   };

//   return (
//     <UserContext.Provider value={{ users, setUsers, addUser, loading }}>
//       {children}
//     </UserContext.Provider>
//   );
// }

// export function useUsers() {
//   return useContext(UserContext);
// }


import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const addUser = (newUser) => {
    setUsers((prev) => [...prev, { ...newUser, id: prev.length + 1 }]);
  };

  return (
    <UserContext.Provider value={{ users, setUsers, addUser, loading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUsers = () => useContext(UserContext);

