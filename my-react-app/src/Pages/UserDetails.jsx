
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
