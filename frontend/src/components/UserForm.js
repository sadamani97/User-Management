import { useState, useEffect } from "react";

export default function UserForm({ submit, currentUser }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    age: "",
  });

  const [errors, setErrors] = useState({});

  // If editing, load user's values
  useEffect(() => {
    if (currentUser) {
      setForm(currentUser);
    }
  }, [currentUser]);

  // VALIDATION FUNCTION
  const validate = () => {
    let err = {};

    if (!form.name.trim()) err.name = "Name is required";
    else if (form.name.length < 3)
      err.name = "Name must be at least 3 characters";

    if (!form.email.trim()) err.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(form.email))
      err.email = "Enter a valid email";

    if (!form.phone.trim()) err.phone = "Phone number is required";
    else if (!/^[0-9]{10}$/.test(form.phone))
      err.phone = "Phone must be 10 digits";

    if (!form.age.trim()) err.age = "age is required";
    else if (!/^[0-9]{2}$/.test(form.age))
      err.age = "Enter a valid age";

    return err;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length !== 0) return;

    submit(form);

    setForm({
      name: "",
      email: "",
      phone: "",
      address: "",
      age: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <div>
        <label>Name:</label>
        <br />
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
      </div>

      <div>
        <label>Email:</label>
        <br />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      </div>

      <div>
        <label>Phone:</label>
        <br />
        <input
          type="number"
          name="phone"
          value={form.phone}
          onChange={handleChange}
        />
        {errors.phone && <p style={{ color: "red" }}>{errors.phone}</p>}
      </div>

      <div>
        <label>Address:</label>
        <br />
        <textarea name="address" value={form.address} onChange={handleChange} />
      </div>

      <div>
        <label>Age:</label>
        <br />
        <input
          type="number"
          name="age"
          value={form.age}
          onChange={handleChange}
        />
        {errors.age && <p style={{ color: "red" }}>{errors.age}</p>}
      </div>
      <br />


      <button type="submit" disabled={Object.keys(errors).length > 0}>
        {currentUser ? "Update User" : "Add User"}
      </button>
    </form>
  );
}
