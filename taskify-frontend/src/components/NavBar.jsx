import React, { useEffect, useState } from 'react';
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import axios from "axios";

const Headers = () => {
    const [userdata, setUserdata] = useState({});
    
    const getUser = async () => {
        try {
            const response = await axios.get("https://taskify-backend-gules.vercel.app/login/sucess", { withCredentials: true });
            setUserdata(response.data); // Assuming that response.data directly contains the user data object
        } catch (error) {
            console.log("error", error);
        }
    };

    useEffect(() => {
        getUser();
    }, []);

    console.log("userdata", userdata);

    const logout = () => {
        window.open("https://taskify-backend-gules.vercel.app/logout", "_self");
    };



    return (
        <>
            <header>
                <nav>
                    <div className="left">
                        <img src='../Taskify.jpg' alt='Img not Found' style={{ height: "4em" }}></img>
                    </div>
                    <div className="right">
                        <ul>
                            {Object.keys(userdata).length  >6 ? (
                                <>
                                    <li>
                                        <NavLink to="/todo">Home</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard">Profile</NavLink>
                                    </li>
                                    <li onClick={logout}>Logout</li>
                                </>
                            ) : <p></p>}
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default Headers;
