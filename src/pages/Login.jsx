import React, { useState, useEffect } from 'react';
import users from '../loginData.json';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  });

  const history = useNavigate();
  const loginData =  users;

  useEffect(() => {
    if(localStorage.getItem("email")){
        history("/dashbord");
    }
},[])

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const storeData = (email, password) => {
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    // localStorage.setItem("patient", "false");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let user = users.find((user) => formValues.email === user.email && formValues.password === user.password);

    if(user !== undefined){
        storeData(user.email, user.password);
        history("/dashbord");
    }
    else{
        alert("Wrong email and password");
    }

    console.log(user);
  };

  return (
    <div className="container">
      <h2 className="login-title">Log in</h2>

      <form className="login-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="me@example.com"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="password"
            name="password"
            value={formValues.password}
            onChange={handleChange}
            required
          />
        </div>

        <button className="btn btn--form" type="submit">
          Log in
        </button>
      </form>

      <style jsx>{`
        .container {
          width: 400px;
          margin: auto;
          padding: 36px 48px 48px 48px;
          background-color: #f2efee;
          border-radius: 11px;
        }

        .login-title {
          padding: 15px;
          font-size: 22px;
          font-weight: 600;
          text-align: center;
        }

        .login-form {
          display: grid;
          grid-template-columns: 1fr;
          row-gap: 16px;
        }

        .login-form label {
          display: block;
          margin-bottom: 8px;
        }

        .login-form input {
          width: 100%;
          padding: 1.2rem;
          border-radius: 9px;
          border: none;
        }

        .login-form input:focus {
          outline: none;
          box-shadow: 0 0 0 4px rgba(253, 242, 233, 0.5);
        }

        .btn--form {
          background-color: #f48982;
          color: #fdf2e9;
          align-self: end;
          padding: 8px;
        }

        .btn,
        .btn:link,
        .btn:visited {
          display: inline-block;
          text-decoration: none;
          font-size: 20px;
          font-weight: 600;
          border-radius: 9px;
          border: none;
          cursor: pointer;
          font-family: inherit;
          transition: all 0.3s;
        }

        button {
          outline: 1px solid #f48982;
        }

        .btn--form:hover {
          background-color: #fdf2e9;
          color: #f48982;
        }
      `}</style>
    </div>
  );
};

export default Login;
