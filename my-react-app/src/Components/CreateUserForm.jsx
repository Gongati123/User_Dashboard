
import React, { useState } from "react";
import { useUsers } from "../context/UserContext";

export default function CreateUserForm() {
  const { addUser } = useUsers();
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email) return alert("Please fill name and email");
    addUser({ ...form, company: { name: form.company } });
    setForm({ name: "", email: "", phone: "", company: "" });
  };

  return (
    <div className="create-user-form">
      <h2>Create New User</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" value={form.name} onChange={handleChange} placeholder="Name" />
        <input name="email" value={form.email} onChange={handleChange} placeholder="Email" />
        <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" />
        <input name="company" value={form.company} onChange={handleChange} placeholder="Company" />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
}
