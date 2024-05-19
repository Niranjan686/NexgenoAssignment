import React from "react";
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/login');
  };

  return (
    <div className="home">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h1>
              Organize your <br /> work and life, finally.
            </h1>
            <p>
              Become focused, organized, and calm with <br />
              todo app. The World's #1 task manager app.
            </p>
            <button className="home-btn p-2" onClick={handleNavigation}>Login to Start</button>  
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
