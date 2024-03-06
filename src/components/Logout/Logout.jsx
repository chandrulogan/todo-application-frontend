import React from 'react'
import './Logout.css'
import { RiLogoutCircleFill } from "react-icons/ri";
import { clearLocalStorage } from '../../utils/Localstorage';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate()

  const logout = (e) => {
    clearLocalStorage()

    window.location.reload();
    navigate('/')

    console.log("logout clicked");
  }
  
  return (
    <div className='Logout_Styles' onClick={logout}>
      <RiLogoutCircleFill size={60} />
    </div>
  )
}

export default Logout