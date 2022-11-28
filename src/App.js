import React, {useState } from 'react';
import LoginForm from './componants/LoginForm';

function App() {
  const admin = {
    email:"admin@admin.com",
    password: "admin"
  }


  const [user, setUser]=useState({name: "", email: ""});
  const [error, setError]=useState("");


  const Login = details => {
    console.log(details);
  
    if (details.email ==admin.email && details.password == admin.password)
    {
      console.log("Logged in");
      setUser({
        name: details.name,
        email: details.email
      });
    } else {
    console.log("details do no match");
    setError("Details do not match")
    }
  }
  const Logout = () => {
    console.log("Logout");
  }

  return (
    <div className='App'>
      {(user.email != "") ? (
        <div className="welcome">
          <h2>Welcome,<span>{user.name}</span></h2>
          <button>Logout</button>
        </div>
      ) : (
        <LoginForm  Login={Login} error={error}/>
      )}
    
    </div>
  );
      }


export default App 