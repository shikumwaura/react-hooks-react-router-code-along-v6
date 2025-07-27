// UserProfile.js
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function UserCard() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4000/users/${id}`)
      .then(res => res.json())
      .then(data => setUser(data))
      .catch(console.error);
  }, [id]);

  if (!user) return <h1>Loading...</h1>;

  return <h1>{user.name}</h1>;
}

export default UserCard;
