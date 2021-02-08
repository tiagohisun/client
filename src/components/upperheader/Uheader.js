import React from 'react';

import './styles.css'
const Uheader = (props) => {
  
  return (
    <>
      <header className="col" style={{color:'white', backgroundColor:'#001f24'}}>
      <span className='pl-3'>  News & Media  </span>
      <span className='pr-3' style={{float:"right"}}>
      <span className='pr-5 '> contato@dental04.com  </span>
      <span className='pr-5 mobile-upperHead'> Mon-Sat: 09h-18h</span>
      <span className='pr-5 mobile-upperHead'> EN</span>
      </span>
      </header>
    </>
  );
};

export default Uheader;