import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [staff, setStaff] = useState(null);
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [createdAt, setCreatedAt] = useState("");

  useEffect(() => {
    axios
      .get(`https://667abf15bd627f0dcc9051b5.mockapi.io/staffManagement/${id}`)
      .then((response) => {
        setStaff(response.data);
        setName(response.data.name);
        setAvatar(response.data.avatar);
        setAge(response.data.age);
        setAddress(response.data.address);
        setCreatedAt(response.data.createdAt);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.split(" ").length < 2) {
      alert("Name must be more than 2 words");
      return;
    }

    const updatedStaff = {
      name,
      avatar,
      age: Number(age),
      address,
      createdAt,
    };

    axios
      .put(
        `https://667abf15bd627f0dcc9051b5.mockapi.io/staffManagement/${id}`,
        updatedStaff
      )
      .then(() => {
        alert("Staff updated successfully");
        navigate("/dashboard");
      })
      .catch((error) => console.error("Error updating staff:", error));
  };

  if (!staff) return <div>Loading...</div>;

  return (
    <div>
      <h1>Edit Staff</h1>
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
        <button type="submit">Update Staff</button>
      </form>
    </div>
  );
}

export default Edit;
