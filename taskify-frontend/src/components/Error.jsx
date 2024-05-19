import React from 'react'
import { useNavigate } from 'react-router-dom'

const Error = () => {
  const navigate = useNavigate();
  return (
    <>
      <div style={{textAlign:"center"}}>
        <h2>Error</h2>
        <button style={{cursor:"pointer"}} onClick={()=>navigate("/")}>Back To Home</button>
      </div>
    </>
  )
}

export default Error