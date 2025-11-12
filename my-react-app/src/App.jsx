// // // import React from "react";
// // // import { Routes, Route, Link } from "react-router-dom";
// // // import Dashboard from "./Pages/Dashboard";
// // // import UserDetails from "./Pages/UserDetails";

// // // export default function App() {
// // //   return (
// // //     <div className="app">
// // //       <header className="header">
// // //         <Link to="/" className="logo">User Dashboard</Link>
// // //       </header>

// // //       <main className="main">
// // //         <Routes>
// // //           <Route path="/" element={<Dashboard />} />
// // //           <Route path="/users/:id" element={<UserDetails />} />
// // //         </Routes>
// // //       </main>

// // //       <footer className="footer">
// // //         <small>React Frontend Intern Assignment — Demo</small>
// // //       </footer>
// // //     </div>
// // //   );
// // // }

// // import React from "react";
// // import { Routes, Route, Link } from "react-router-dom";
// // import Dashboard from "./Pages/Dashboard";
// // import UserDetails from "./Pages/UserDetails";
// // import Navbar from "./Components/Navbar";

// // export default function App() {
// //   return (
// //     <div className="app">
// //       {/* Navbar */}
// //       <header className="header">
// //         <div className="nav-container">
// //           <Link to="/" className="logo">
// //             User Dashboard
// //           </Link>

// //           <nav className="nav-links">
// //             <Link to="/">Home</Link>
// //             <Link to="/create">Create User</Link>
// //             <Link to="/about">About</Link>
// //           </nav>
// //         </div>
// //       </header>

// //       {/* Main Content */}
// //       <main className="main">
// //         <Routes>
// //           <Route path="/" element={<Dashboard />} />
// //           <Route path="/users/:id" element={<UserDetails />} />
// //         </Routes>
// //       </main>

// //       {/* Footer */}
// //       <footer className="footer">
// //         <small>React Frontend Intern Assignment — Demo</small>
// //       </footer>
// //     </div>
// //   );
// // }



// import React from "react";
// import { Routes, Route, Link } from "react-router-dom";
// import Dashboard from "./Pages/Dashboard";
// import UserDetails from "./Pages/UserDetails";
// import CreateUserForm from "./Pages/CreateUserForm"; // optional if you have a create form
// // import About from "./Pages/About"; // optional if you added an About page

// export default function App() {
//   return (
//     <div className="app">
//       {/* Navbar */}
//       <header className="header">
//         <div className="nav-container">
//           <Link to="/" className="logo">
//             User Dashboard
//           </Link>

//           <nav className="nav-links">
//             <Link to="/">Home</Link>
//             <Link to="/create">Create User</Link>
//             <Link to="/about">About</Link>
//           </nav>
//         </div>
//       </header>

//       {/* Main content */}
//       <main className="main">
//         <Routes>
//           {/* Home (Dashboard) */}
//           <Route path="/" element={<Dashboard />} />

//           {/* Dynamic route for viewing user details */}
//           <Route path="/users/:id" element={<UserDetails />} />

//           {/* Create User Page (optional) */}
//           <Route path="/create" element={<CreateUserForm />} />

//           {/* About Page (optional) */}
//           <Route path="/about" element={<About />} />
//         </Routes>
//       </main>

//       {/* Footer */}
//       <footer className="footer">
//         <small>React Frontend Intern Assignment — Demo</small>
//       </footer>
//     </div>
//   );
// }


// import React from "react";
// import { Routes, Route, Link } from "react-router-dom";
// import Dashboard from "./Pages/Dashboard";
// import UserDetails from "./Pages/UserDetails";

// export default function App() {
//   return (
//     <div className="app">
//       <header className="header">
//         <div className="nav-container">
//           <Link to="/" className="logo">User Dashboard</Link>
//           <nav className="nav-links">
//             <Link to="/">Home</Link>
//             <Link to="/create">Create User</Link>
//           </nav>
//         </div>
//       </header>

//       <main className="main">
//         <Routes>
//           <Route path="/" element={<Dashboard />} />
//           <Route path="/users/:id" element={<UserDetails />} />
//         </Routes>
//       </main>

//       <footer className="footer">
//         <small>React Frontend Intern Assignment — Demo</small>
//       </footer>
//     </div>
//   );
// }

import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import UserDetails from "./Pages/UserDetails";

export default function App() {
  return (
    <div className="app">
      {/* Header / Navbar */}
      <header className="header">
        <div className="nav-container">
          <span className="logo">User Dashboard</span>
        </div>
      </header>

      {/* Main content area */}
      <main className="main">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users/:id" element={<UserDetails />} />
        </Routes>
      </main>
    </div>
  );
}
