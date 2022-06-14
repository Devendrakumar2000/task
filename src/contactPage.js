import React from 'react';
import Contacts from './contacts';
import Footer from './footer';
import Header from './header';
import './styles.css'
function ContactPage (){
  return(
    <>
   <Header/>
   <Contacts/>
   <Footer/>
   </>
  );
}
export default ContactPage;