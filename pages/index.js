import { useState, useEffect } from "react";

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3004/users")
      .then((res) => res.json())
      .then(setUsers);
  }, []);

  return (
    <div>
      <h1>My User List App</h1>
      <ul>
        {users.map(({ username }) => (
          <li>{username}</li>
        ))}
      </ul>
    </div>
  );
}
