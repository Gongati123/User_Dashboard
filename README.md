#  React User Dashboard

## Objective
To build a **User Dashboard** app using React that:
- Fetches and displays user data from a public API.
- Allows basic search and user creation (client-side only).
- Implements routing for user detail pages.
- Is responsive across devices.

## Features

### Dashboard Page

![Image_Alt](https://github.com/Gongati123/User_Dashboard/blob/eff38bc82b225ee1a61daaea0b8fa8085c36d718/dashboard.png)

- Fetches users from:  
  `https://jsonplaceholder.typicode.com/users`
- Displays user name, email, phone, and company name in a **card layout**.
- Includes:
  - **Search bar** to filter users by name.
  - **Create New User** form (adds users client-side).
- Uses **React Context** for global state management.

### User Details Page

![Image_Alt](https://github.com/Gongati123/User_Dashboard/blob/eff38bc82b225ee1a61daaea0b8fa8085c36d718/userdetails.png)

- Opens when you click “View Details” on any user card.
- Displays:
  - Full name, username, email, phone, and website.
  - Address (street, city, zipcode).
  - Geo-location (latitude & longitude).
  - Company info (name, catch phrase, business speciality).
 - Includes a **Back to Dashboard** button.

### Responsive Design

![Image_Alt](https://github.com/Gongati123/User_Dashboard/blob/eff38bc82b225ee1a61daaea0b8fa8085c36d718/responsive.png)

- Built using **plain CSS**
- Works seamlessly on desktops, tablets, and mobiles.

---

## Tech Stack

| Technology | Purpose |
|-------------|----------|
| **React.js** | Frontend framework |
| **Axios / Fetch API** | Data fetching |
| **React Router DOM** | Routing between pages |
| **React Context API** | Global state management |
| **Basic CSS** | Styling and responsiveness |
| **Vite / CRA** | Build tool and project setup |

## React Concepts Used
- Hooks
- Routing
- Context API
- Reusable Components

---

## Folder Structure

![Image_Alt](https://github.com/Gongati123/User_Dashboard/blob/eff38bc82b225ee1a61daaea0b8fa8085c36d718/user%20_structure.png)

##  GitHub Repository

 **Repository Link:** (https://github.com/Gongati123/User_Dashboard.git)


