import { useState, useEffect } from "react";

const App = () => {
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
        {users.map(({ id, username }) => (
          <li key={id}>{username}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
