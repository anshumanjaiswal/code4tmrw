import React, { useState, useEffect } from "react";
import "./loader.css";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const fetchUserData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        console.log(data);
      });
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
    fetchUserData();
  }, []);

  return (
    <div className="container">
      {loading ? (
        <div className="loader-container">
          Loading...
          <div className="spinner"></div>
        </div>
      ) : (
        <div className="main-content">
          {users.length > 0 && (
            <ul>
              {users.map((user) => (
                <>
                  <li key={user.id}> {user.title} </li>
                  <li key={user.id}> {user.body} </li>
                  <li key={user.id}> {Date()} </li>
                  <li key={user.id}>
                    {" "}
                    {
                      <img
                        alt="pic"
                        src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80"
                      />
                    }{" "}
                  </li>
                </>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default App;
