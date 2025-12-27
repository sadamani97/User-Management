# User Management CRUD Application

A full-stack User Management CRUD application built using React, Node.js, Express, and MySQL.

## 🚀 Features
- Add new users
- View user list
- Update user details
- Delete users
- Form validation
- REST API integration

## 🛠️ Tech Stack
**Frontend:**
- React
- JavaScript
- CSS
- Axios

**Backend:**
- Node.js
- Express.js

**Database:**
- MySQL

## 📂 Project Structure
frontend/
├── src/
│ ├── App.js
│ ├── api.js
│ ├── components/
│ │ └── UserForm.js
│ ├── index.css
│ └── App.css

backend/
├── server.js
├── db.js
└── package.json


## 🔗 API Endpoints
| Method | Endpoint | Description |
|------|---------|------------|
| GET | /users | Get all users |
| POST | /users | Add new user |
| PUT | /users/:id | Update user |
| DELETE | /users/:id | Delete user |

## ▶️ How to Run
1. Clone the repository
```bash
git clone https://github.com/your-username/user-management-crud.git
##Install backend dependencies
cd backend
npm install
npm start

##Install frontend dependencies
cd frontend
npm install
npm start dev

