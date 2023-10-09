import MainRoutes from './Routes/MainRoutes';
import React, { useRef } from 'react';
import { BiMoon } from "react-icons/bi";

function App() {
  const divLayout = useRef(null);
  const handleDarkMode = () => {
    if (divLayout.current) {
      divLayout.current.parentNode.classList.toggle('dark');
    }
  };

  return (
    <div className='layout' ref={divLayout}>
      <BiMoon className='dark-mode' onClick={handleDarkMode}/>
      <MainRoutes/>
    </div>
  );
}

export default App;
