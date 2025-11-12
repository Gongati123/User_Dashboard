// // import { StrictMode } from 'react'
// // import { createRoot } from 'react-dom/client'
// // import './index.css'
// // import App from './App.jsx'

// // createRoot(document.getElementById('root')).render(
// //   <StrictMode>
// //     <App />
// //   </StrictMode>,
// // )

// // import React from "react";
// // import { createRoot } from "react-dom/client";
// // import { BrowserRouter } from "react-router-dom";
// // import App from "./App";
// // import { UserProvider } from "./context/UserContext";
// // import "./styles.css";

// // const root = createRoot(document.getElementById("root"));
// // root.render(
// //   <React.StrictMode>
// //     <BrowserRouter>
// //       <UserProvider>
// //         <App />
// //       </UserProvider>
// //     </BrowserRouter>
// //   </React.StrictMode>
// // );

// import React from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";
// import App from "./App";
// import "./index.css";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>
// );


import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <App />
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
