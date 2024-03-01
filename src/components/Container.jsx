import User from "./User";

import { useState, useEffect } from "react";

function Container() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    fetchData();
    async function fetchData() {
      try {
        const res = await fetch("https://randomuser.me/api/?results=10", {
          signal: abortController.signal,
        });
        if (!res.ok) throw new Error("Request failed");
        const data = await res.json();
        setUsers(data.results);
      } catch (error) {
        console.log(error);
      }
    }
    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <div>
      {users.map((user) => (
        <User key={user.login.uuid} user={user} />
      ))}
    </div>
  );
}

export default Container;
