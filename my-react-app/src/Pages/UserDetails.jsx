// import React from "react";
// import { useParams, Link } from "react-router-dom";
// import { useUsers } from "../context/UserContext";

// export default function UserDetails() {
//   const { id } = useParams();
//   const { users } = useUsers();

//   const user = users.find((u) => String(u.id) === String(id));

//   if (!user) {
//     return (
//       <div className="detailsPage">
//         <p>User not found.</p>
//         <Link to="/">⟵ Back to Dashboard</Link>
//       </div>
//     );
//   }

//   const addr = user.address || {};
//   const geo = addr.geo || {};

//   return (
//     <div className="detailsPage">
//       <Link to="/">⟵ Back</Link>
//       <h2>{user.name}</h2>

//       <div className="detailsGrid">
//         <div>
//           <h4>Contact</h4>
//           <p><strong>Email:</strong> {user.email || "—"}</p>
//           <p><strong>Phone:</strong> {user.phone || "—"}</p>
//           <p><strong>Company:</strong> {user.company?.name || user.company || "—"}</p>
//         </div>

//         <div>
//           <h4>Address</h4>
//           <p>{addr.street || "—"} {addr.suite || ""}</p>
//           <p>{addr.city || "—"} - {addr.zipcode || "—"}</p>
//           <p><strong>Geo:</strong> lat {geo.lat || "—"}, lng {geo.lng || "—"}</p>
//         </div>
//       </div>
//     </div>
//   );
// }


import React from "react";
import { useParams, Link } from "react-router-dom";
import { useUsers } from "../context/UserContext";

export default function UserDetails() {
  const { id } = useParams();
  const { users } = useUsers();
  const user = users.find((u) => u.id === parseInt(id));

  if (!user) return <p>User not found.</p>;

  return (
    <div className="user-details">
      <h2>{user.name}</h2>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Company:</strong> {user.company?.name}</p>
      <p><strong>Address:</strong> {user.address?.street}, {user.address?.city}</p>
      <p><strong>Geo:</strong> {user.address?.geo?.lat}, {user.address?.geo?.lng}</p>
      <Link to="/">← Back to Dashboard</Link>
    </div>
  );
}
