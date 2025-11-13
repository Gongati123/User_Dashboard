
import React, { useMemo, useState } from "react";
import { useUsers } from "../context/UserContext";
import UserCard from "../Components/UserCard";
import CreateUserForm from "../Components/CreateUserForm";

export default function Dashboard() {
  const { users, loading } = useUsers();
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    if (!query) return users;
    const q = query.toLowerCase();
    return users.filter((u) => (u.name || "").toLowerCase().includes(q));
  }, [users, query]);

  return (
    <div className="dashboard">
      <div className="left">
        <input
          type="text"
          placeholder="Search by name"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <div className="userList">
          {loading && <p>Loading users...</p>}
          {!loading && filtered.length === 0 && <p>No users found.</p>}
          {!loading && filtered.map((u) => <UserCard key={u.id} user={u} />)}
        </div>
      </div>

      <div className="right">
        <CreateUserForm />
      </div>
    </div>
  );
}
