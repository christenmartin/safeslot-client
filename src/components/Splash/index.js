import React, { useEffect } from 'react';
import { Button } from 'reactstrap';
import { Link, useHistory } from 'react-router-dom';
import useCurrentUser from '../../hooks/useCurrentUser';
const logo = require('../../assets/logo.png')

export default function Splash() {
  const [loading, user, error] = useCurrentUser();
  const history = useHistory();
  useEffect(() => {
    if (user) {
      if (user.isStoreOwner) {
        history.replace('/owners');
      } else {
        history.replace('/map');
      }
    }
  }, [user]);
  return (
      <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
        <img src={logo} style={{marginTop: '5rem'}} />
        <span style={{marginBottom: '3rem'}}>getting essentials safely during crisis</span>
        <h5>Buy Essentials</h5>
        <Link style={{marginBottom: '2rem'}} to={'/login'}>
          <Button> Login/Register</Button>
        </Link>
        <h5>I'm a Store Owner</h5>
        <Link style={{marginBottom: '2rem'}} to={'/registermystore'}>
          <Button> Login/Register</Button>
        </Link>
        <Link to={'/map'}> SKIP</Link>
      </div>
  );
}
