import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Detail() {
  const { id } = useParams();
  const [staff, setStaff] = useState(null);

  useEffect(() => {
    axios
      .get(`https://667abf15bd627f0dcc9051b5.mockapi.io/staffManagement/${id}`)
      .then((response) => setStaff(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [id]);

  if (!staff) return <div>Loading...</div>;

  return (
    <div>
      <img src={staff.avatar} alt={`${staff.name}'s avatar`} />
      <h2>{staff.name}</h2>
      <p>{staff.address}</p>
      <p>{staff.age}</p>
      <p>{new Date(staff.createdAt).toLocaleDateString()}</p>
    </div>
  );
}

export default Detail;
