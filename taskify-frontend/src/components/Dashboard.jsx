import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Dashboard.css'; // Ensure this file has relevant styles
import NavBar from './NavBar';

const Dashboard = () => {
    const [userdata, setUserdata] = useState(null); // Initialize userdata as null
    console.log("response", userdata);

    const getUser = async () => {
        try {
            const response = await axios.get("http://localhost:1000/login/success", { withCredentials: true });
            setUserdata(response.data.user);
        } catch (error) {
            console.log("error", error);
        }
    };

    const deleteUser = async () => {
        try {
            const response = await axios.delete("http://localhost:1000/api/user", {
                data: { email: userdata?.email },
                withCredentials: true
            });
            if (response.status === 200) {
                setUserdata(null);
                window.open("http://localhost:1000/logout", "_self");
            }
        } catch (error) {
            console.log("error", error);
        }
    };

    useEffect(() => {
        getUser();
    }, []);

    if (!userdata) {
        return <div>Loading...</div>; // Add a loading state while fetching user data
    }

    return (
        <>
            <NavBar />
            <section style={{ backgroundColor: '#eee' }}>
                <div className="container py-5">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card mb-4">
                                <div className="card-body text-center">
                                    <img 
                                        src={userdata?.image ?? 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp'} 
                                        alt="avatar" 
                                        className="rounded-circle img-fluid" 
                                        style={{ width: '150px' }} 
                                    />
                                    <h5 className="my-3">{userdata?.displayName ?? 'John Smith'}</h5>
                                    <p className="text-muted mb-1">Full Stack Developer</p>
                                    <p className="text-muted mb-4">Mumbai, Maharashtra</p>
                                    <div className="d-flex justify-content-center mb-2">
                                        <button type="button" className="btn btn-primary">Edit</button>
                                        <button type="button" className="btn btn-danger ms-2" onClick={deleteUser}>Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Full Name</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">{userdata?.displayName ?? 'Johnatan Smith'}</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Email</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">{userdata?.email ?? 'example@example.com'}</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Mobile</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">970--**884</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Address</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">Mumbai, Maharashtra</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Dashboard;
