import React from 'react';
import Banner from './banner';
import Footer from './footer';
import Header from './header';
import './styles.css'
function GenralPage (){
  return(
    <React.Fragment>
   <Header/>
   <Banner/>
   <Footer/>
   </React.Fragment>
  );
}
export default GenralPage;