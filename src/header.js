import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'
function Header (){
  return(
    <header className="navbar">
   <section className="logo">
     <h1>DEV</h1>
     </section>
     <section className="navs">
     <Link  to="/genral">  General </Link>
      <Link  to="/contacts"> contacts </Link>
     </section>
    </header>
  );
}
export default Header;