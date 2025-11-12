// // import React, { useState } from "react";
// // import { useUsers } from "../context/UserContext";

// // const initial = {
// //   name: "",
// //   email: "",
// //   phone: "",
// //   company: ""
// // };

// // export default function CreateUserForm() {
// //   const { addUser } = useUsers();
// //   const [form, setForm] = useState(initial);
// //   const [success, setSuccess] = useState("");

// //   const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

// //   const onSubmit = (e) => {
// //     e.preventDefault();
// //     if (!form.name.trim()) {
// //       alert("Name is required");
// //       return;
// //     }
// //     const payload = {
// //       name: form.name,
// //       email: form.email,
// //       phone: form.phone,
// //       company: { name: form.company }
// //     };
// //     addUser(payload);
// //     setSuccess(`Created ${form.name}`);
// //     setForm(initial);
// //     setTimeout(() => setSuccess(""), 2500);
// //   };

// //   return (
// //     <div className="createBox">
// //       <h2>Create New User</h2>
// //       <form onSubmit={onSubmit} className="createForm">
// //         <label>
// //           Name
// //           <input name="name" value={form.name} onChange={onChange} />
// //         </label>

// //         <label>
// //           Email
// //           <input name="email" value={form.email} onChange={onChange} />
// //         </label>

// //         <label>
// //           Phone
// //           <input name="phone" value={form.phone} onChange={onChange} />
// //         </label>

// //         <label>
// //           Company
// //           <input name="company" value={form.company} onChange={onChange} />
// //         </label>

// //         <div>
// //           <button type="submit" className="btn">Create User</button>
// //           {success && <span className="success">{success}</span>}
// //         </div>
// //       </form>
// //     </div>
// //   );
// // }


// import React, { useState } from "react";

// export default function CreateUserForm() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     company: "",
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("New user created:", form);
//     alert("User created successfully (client-side only)");
//     setForm({ name: "", email: "", phone: "", company: "" });
//   };

//   return (
//     <div className="createBox">
//       <h2>Create New User</h2>
//       <form className="createForm" onSubmit={handleSubmit}>
//         <label>
//           Name:
//           <input
//             type="text"
//             name="name"
//             value={form.name}
//             onChange={handleChange}
//             required
//           />
//         </label>

//         <label>
//           Email:
//           <input
//             type="email"
//             name="email"
//             value={form.email}
//             onChange={handleChange}
//             required
//           />
//         </label>

//         <label>
//           Phone:
//           <input
//             type="text"
//             name="phone"
//             value={form.phone}
//             onChange={handleChange}
//           />
//         </label>

//         <label>
//           Company:
//           <input
//             type="text"
//             name="company"
//             value={form.company}
//             onChange={handleChange}
//           />
//         </label>

//         <button type="submit" className="btn">
//           Create User
//         </button>
//       </form>
//     </div>
//   );
// }


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
