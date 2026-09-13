import React, { useState } from "react";

function RegisterPage() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  const handleRegister = async (event) => {
    event.preventDefault();

    const response = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

    const data = await response.json();
    console.log(data);
  };

  return (
    <form onSubmit={handleRegister}>
      <input placeholder="Name" onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
      <input placeholder="Email" type="email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
      <input placeholder="Password" type="password" onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
      <button type="submit">Register</button>
    </form>
  );
}

export default RegisterPage;
