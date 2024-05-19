import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Dashboard.css';

const Dashboard = () => {
    const [userdata, setUserdata] = useState({});

    const getUser = async () => {
        try {
            const response = await axios.get("https://taskify-backend-gules.vercel.app/api/userdata", { withCredentials: true });
            setUserdata(response.data.user);
            console.log(response.data.users);
            console.log(userdata);
        } catch (error) {
            console.log("error", error);
        }
    };

    useEffect(() => {
        getUser();
    }, []);


        return (
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
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="card mb-4">
                                <div className="card-body profile-info">
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
        );
           
};

export default Dashboard;
