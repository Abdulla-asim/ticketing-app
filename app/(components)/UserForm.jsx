"use client";

import { useState } from "react";
import {createUser} from "@/app/actions"

const UserForm = () => {
  const userTemplate = {
    name: "",
    password: "",
    email: "",
    role: "user",
    active: false
  };

  const [user, setUser] = useState(userTemplate);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
    console.log("name", e.target.name, "value: ", e.target.value);

    console.log(user);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    await createUser(user);
    setUser(userTemplate)

  };

  return (
    <div>
      <form className="flex flex-col w-full" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={user.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="role">Role</label>
        <select id="role" value={user.role} onChange={handleChange} name="role">
          <option value="user">User</option>
          <option value="moderator">Moderator</option>
          <option value="admin">Admin</option>
        </select>

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          required
        />

        <input
          type="submit"
          className="text-foreground bg-primary mt-5 max-w-30"
          value="Create User"
        />
      </form>
    </div>
  );
};

export default UserForm;
