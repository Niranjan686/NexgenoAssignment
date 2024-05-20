import React from 'react';
import './Login.css';

function Login() {
  const loginWithGoogle = () => {
    window.open("https://taskify-backend-gules.vercel.app/auth/google/callback", "_self");
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add form submission logic here
    // e.g., validate inputs and send a request to the backend
  }

  return (
    <section className="vh-85">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card shadow-2-strong" style={{ borderRadius: '1rem' }}>
              <div className="card-body p-5 text-center">
                <h3 className="mb-5">Sign in</h3>
                <form onSubmit={handleSubmit}>
                  <div className="form-outline mb-3">
                    <label htmlFor="typeEmailX-2" className="form-label">Email</label>
                    <input type="email" id="typeEmailX-2" className="form-control form-control-lg" placeholder='Email' required />
                  </div>
      
                  <div className="form-check d-flex justify-content-start mb-3">
                    <input className="form-check-input" type="checkbox" value="" id="form1Example3" />
                    <label className="form-check-label" htmlFor="form1Example3"> Remember me </label>
                  </div>
                  <button className="btn btn-primary btn-lg btn-block" type="submit">Login</button>
                </form>
                <hr className="my-4" />
                <button className="btn btn-lg btn-block btn-primary" style={{ backgroundColor: '#dd4b39' }} type="button" onClick={loginWithGoogle}>
                  <i className="fab fa-google me-2"></i> Sign in with Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
