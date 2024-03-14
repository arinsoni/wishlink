import React, { useState } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './navpage.css';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';



const NavPage = () => {
  const [language, setLanguage] = useState('English');
  let navigate = useNavigate();
  const handleClose = () => {
    navigate(`/`);
  };

  return (
    <div className="container" style={{
      padding: '10px',
      position: 'relative',
      minHeight: '100vh'
    }}>
      <CloseIcon onClick={handleClose} />
      <div className="header">
        <h1>Making your Payouts and Insights work better for you</h1>
        <div className="language-switcher" style={{
          width: '50%',
          marginBottom: '40px',
        }}>
          <button
            className={`language-button ${language === 'English' ? 'active' : ''}`}
            onClick={() => setLanguage('English')}
          >
            English
          </button>
          <button
            className={`language-button ${language === 'Hindi' ? 'active' : ''}`}
            onClick={() => setLanguage('Hindi')}
          >
            Hindi
          </button>
        </div>
      </div>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        height: '400px',
        border: '1px solid black',
        borderRadius: '5px',
        backgroundColor: 'lightblue'
      }}>


        <img src="https://images.unsplash.com/photo-1709433157272-18e3517fb36a?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" style={{
          width: '100%', height: '70%',
        }} />

        <div style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: 'lightblue',
          height: '100px',
        }}>
          <img
            style={{
              padding: '10px',
              height: '80%',
              width: '20%',
              marginTop: '20px',
              borderRadius: '50%',
              objectFit: 'cover'
            }}
            src="https://images.unsplash.com/photo-1709433157272-18e3517fb36a?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Descriptive text for the image"
          />


          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            flex: 1,
          }}>
            <h3 style={{ margin: '0', textAlign: 'left', marginBottom: '5px' }}>What has changed insights</h3>
            <h5 style={{ margin: '0', textAlign: 'left' }}>&#x2022; Brandwise payout</h5>

          </div>

          <div style={{ marginLeft: 'auto', marginRight: '5px' }}>
            <ArrowForwardIcon />
          </div>
        </div>
      </div>

      <div>
        <h3>
          Whats chaning
        </h3>
        All poiunter
      </div>

      <div className='footer' style={{
       position: 'absolute', 
       bottom: '0',
       left: '0',
       right: '0', 
       display: 'flex',
       flexDirection: 'row',
       justifyContent: 'center',
       alignItems: 'center',

       padding: '10px 0', 
      }}>

        <h4 style={{
          paddingRight: '10px'
        }} >Powered by Wishlonk</h4>
        &#x7c;
        <h4 style={{
          paddingLeft: '10px'
        }}>Help and Support</h4>
      </div>

    </div>
  );

};

export default NavPage;
