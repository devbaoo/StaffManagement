import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Home() {
  const [staffs, setStaffs] = useState([]);

  useEffect(() => {
    axios
      .get("https://667abf15bd627f0dcc9051b5.mockapi.io/staffManagement")
      .then((response) => {
        const sortedStaffs = response.data.sort((a, b) => b.age - a.age);
        setStaffs(sortedStaffs);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1>Home</h1>
      {staffs.map((staff) => (
        <div key={staff.id} className="staff">
          <h2>
            <Link to={`/detail/${staff.id}`}>{staff.name}</Link>
          </h2>
          <p>Address: {staff.address}</p>
          <p>Age: {staff.age}</p>
          <img
            src={staff.avatar}
            alt={staff.name}
            style={{ width: "100px", height: "100px" }}
          />
          <br />
          <Link to={`/detail/${staff.id}`}>
            <button>Detail</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Home;
