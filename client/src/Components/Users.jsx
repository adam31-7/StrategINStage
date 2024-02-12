import { useEffect, useState } from "react";
import Axios from 'axios'
import "../Users.css"

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3000/users")
      .then((response) => setUsers(response.data)) // Correction ici
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="liste">
      <table className="content-table">
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user,index) => (
            <tr key={index}>
              <td>{user.username}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;