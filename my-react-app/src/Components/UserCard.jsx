// import React from "react";
// import { Link } from "react-router-dom";

// export default function UserCard({ user }) {
//   const company = user.company?.name || user.company || "—";
//   const phone = user.phone || "—";
//   const email = user.email || "—";

//   return (
//     <div className="userCard">
//       <div className="userCardMain">
//         <h3 className="userName">{user.name}</h3>
//         <p className="muted">{email}</p>
//         <p className="muted">{phone}</p>
//         <p className="muted">{company}</p>
//       </div>

//       <div className="userCardAction">
//         <Link to={`/users/${user.id}`} className="detailsLink" aria-label={`View ${user.name} details`}>
//           ▶
//         </Link>
//       </div>
//     </div>
//   );
// }


import React from "react";
import { Link } from "react-router-dom";

export default function UserCard({ user }) {
  return (
    <div className="user-card">
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Company: {user.company?.name}</p>
      <Link to={`/users/${user.id}`} className="details-btn">
        View Details
      </Link>
    </div>
  );
}
