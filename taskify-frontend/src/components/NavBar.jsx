import React, { useEffect, useState } from 'react'
import "./NavBar.css"
import { NavLink } from "react-router-dom"
import axios from "axios"

const Headers = () => {
    const [userdata, setUserdata] = useState({});
    console.log("response", userdata)


    const getUser = async () => {
        try {
            const response = await axios.get("http://localhost:1000/login/sucess", { withCredentials: true });

            setUserdata(response.data.user)
        } catch (error) {
            console.log("error", error)
        }
    }

    // logoout
    const logout = () => {
        window.open("http://localhost:1000/logout", "_self")
    }

    useEffect(() => {
        getUser()
    }, [])
    return (
        <>
            <header>
                <nav>
                    <div className="left">
                        
                            <img src='../Taskify.jpg' alt='Img not Found' style={{ height: "4em" }}  ></img>
                        

                    </div>
                    <div className="right">
                        <ul>
                            
                            {
                                Object?.keys(userdata)?.length > 0 ? (
                                    <>
                                        <li>
                                <NavLink to="/todo">
                                    Home
                                </NavLink>
                            </li>
                                        <li>
                                            <NavLink to="/dashboard">
                                                Profile
                                            </NavLink>
                                        </li>
                                        
                                        
                                        <li onClick={logout}>Logout</li>
                                    </>
                                ) : <p></p>
                            }



                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Headers