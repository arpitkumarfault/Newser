import React, { useEffect, useState } from 'react';
import Welcome from './Components/Welcome';
import Main from './Components/Main';
import { Outlet, useNavigate } from 'react-router-dom';

const Layout = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    // Use setTimeout to set showWelcome to false after 5000 milliseconds (5 seconds)
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 8000);

    // Clear the timer when the component is unmounted
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {showWelcome ? (
        <Welcome />
      ) : (
        <>
          {/* Render your main page content here */}
          <Main />
          {/* Add any other main page components */}
        </>
      )}
    </div>
  );
};

export default Layout;
