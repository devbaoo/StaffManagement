import { useState } from "react";
import axios from "axios";

function Add() {
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [createdAt, setCreatedAt] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.split(" ").length < 2) {
      alert("Name must be more than 2 words");
      return;
    }

    const newStaff = {
      name,
      avatar,
      age: Number(age),
      address,
      createdAt,
    };

    axios
      .post(
        "https://667abf15bd627f0dcc9051b5.mockapi.io/staffManagement",
        newStaff
      )
      .then(() => alert("Staff added successfully"))
      .catch((error) => console.error("Error adding staff:", error));
  };

  return (
    <div>
      <h1>Add Staff</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Avatar URL:</label>
          <input
            type="url"
            value={avatar}
            onChange={(e) => setAvatar(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Age:</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Created At:</label>
          <input
            type="date"
            value={createdAt}
            onChange={(e) => setCreatedAt(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Staff</button>
      </form>
    </div>
  );
}

export default Add;
