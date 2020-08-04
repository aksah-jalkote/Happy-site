import React from 'react'
import Jumbotron from '../components/Jumbotron'
import Menu from '../core/Menu'
import Main from './Main'
import Social from '../components/Social'
import Footer from '../core/Footer'
import Newsletter from '../components/NewsLetter'




const Contact = () => {
    return (
        <div>
            <Menu/>
            {/* <Jumbotron 
            title="Contact Us"
            description="Contact us we are here for your security"
             />   */}
             <Main/>
             <Social/>
           
             <Footer/>
             
               
        </div>
    )
}

export default Contact
