import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router';
import styles from './Register.module.css';

function Register() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('token')) navigate('/dashboard/home');
  }, [navigate]);

  return (
    <div className={`${styles.container}`} id="register">
      <div className={`${styles.card}`}>
        <Outlet />
      </div>
    </div>
  );
}

export default Register;
