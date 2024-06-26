import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Dashboard() {
  const [staff, setStaff] = useState([]);

  useEffect(() => {
    axios
      .get("https://667abf15bd627f0dcc9051b5.mockapi.io/staffManagement")
      .then((response) => setStaff(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this staff?")) {
      axios
        .delete(
          `https://667abf15bd627f0dcc9051b5.mockapi.io/staffManagement/${id}`
        )
        .then(() => {
          alert("Staff deleted successfully");
          setStaff(staff.filter((member) => member.id !== id));
        })
        .catch((error) => console.error("Error deleting staff:", error));
    }
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {staff.map((member) => (
            <tr key={member.id}>
              <td>{member.name}</td>
              <td>{member.address}</td>
              <td>{member.age}</td>
              <td>
                <Link to={`/detail/${member.id}`}>Detail</Link>
                <Link to={`/edit/${member.id}`}>Edit</Link>
                <button onClick={() => handleDelete(member.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
