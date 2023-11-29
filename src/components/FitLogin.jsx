import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const FitLogin = () => {

    const [formData, setFormData] = useState({
        "email": "",
        "password": ""
      })
    
      const navigate = useNavigate()

      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
      }
    
      const handleSubmit = () => {
        console.log(formData)
        navigate("/")
        alert("Logged In Successfully.")
        
      }

  return (
    <div>
        
        <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Fitness App Login</h2>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="d-grid">
                  <button onClick={handleSubmit} type="submit" className="btn btn-primary">
                    Login
                  </button>
                </div>
              <div className="text-center mt-3">
                Don't have an account? <Link to="/register">Register</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    </div>
  )
}

export default FitLogin