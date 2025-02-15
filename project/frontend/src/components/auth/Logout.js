import React, { useState } from 'react';

const Logout = () => {
    const logoutUser = () => {
      localStorage.removeItem('access');
      localStorage.removeItem('refresh');
    };
  
    return (
      <button onClick={logoutUser}>Выход</button>
    );
  };
  
  export default Logout;