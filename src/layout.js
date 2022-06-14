import React from 'react';
import Banner from './banner';
import Footer from './footer';
import Header from './header';
import './styles.css'
function Layout (){
  return(
    <>
      <Header/>
       {this.props.children}
      <Footer/>
    </>
  );
}
export default Layout;