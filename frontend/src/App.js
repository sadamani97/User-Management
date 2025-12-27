import { useState, useEffect } from "react";
import api from "./api";
import UserForm from "./components/UserForm";
import"./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [editing, setEditing] = useState(null);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const res = await api.get("/users");
    setUsers(res.data);
  };

  const addUser = async (user) => {
    await api.post("/users", user);
    loadUsers();
  };

  const updateUser = async (user) => {
    await api.put(`/users/${editing.id}`, user);
    setEditing(null);
    loadUsers();
  };

  const deleteUser = async (id) => {
    await api.delete(`/users/${id}`);
    loadUsers();
  };

  return (
    <div>
      <h1>User Management CRUD</h1>

      <UserForm submit={editing ? updateUser : addUser} currentUser={editing} />

      <table border="4" cellPadding="20">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Age</th>
            <th>Actions</th>
            
          </tr>
        </thead>

        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.phone}</td>
              <td>{u.address}</td>
              <td>{u.age}</td>
              <td>
                <button onClick={() => setEditing(u)}>Edit</button>
                <button onClick={() => deleteUser(u.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
