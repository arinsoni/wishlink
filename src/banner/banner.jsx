import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {  useNavigate } from "react-router-dom";




const Banner = () => {
  let navigate = useNavigate();
  const handleClick = () => {
    navigate(`/navpage`);
  };
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center', 
      backgroundColor: 'lightblue',
      height: '100px',
    }}>
      <img style={{
        height: '100%',
        marginRight: '20px', 
      }}
        src="https://images.unsplash.com/photo-1709433157272-18e3517fb36a?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="" />

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start', 
        flex: 1, 
      }}>
        <h3 style={{ margin: '0', textAlign: 'left', marginBottom: '5px' }}>We are changing our payouts and insights</h3>
        <h5 style={{ margin: '0', textAlign: 'left' }}>&#x2022; Brandwise payout</h5>
        <h5 style={{ margin: '0', textAlign: 'left' }}>&#x2022; Better visibility on your returns</h5>
      </div>

      <div style={{ marginLeft: 'auto', marginRight: '5px' }}>
        <ArrowForwardIcon onClick={handleClick}/>
      </div>
    </div>
  );
};

export default Banner;
