import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './contact.css'
const Contact=()=>{
  
  const myStyle={
    backgroundImage: 
    "url('https://www.esikkimtourism.in/kashmir-tour-packages/wp-content/uploads/2021/11/banner-package.jpg')",
    height:'40vh',
    fontSize:'50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
};
    return(
        <>
        <div className="container-fluid px-5 Contact ">
        <div className="row justify-content-center">
          <div style={myStyle}>
        <h1 className="cont-hd"> Contact Us </h1>
      </div>
            
          <div className="col-md-4   con">
          <h2 className='hd'>Contact Our Agency</h2>
            <p className="p2">At Travel Agency we want to make sure that your trip is everything you could possibly dream of 
            Whether you want inspiration and guidance in planning your next adventure or need help with an existing booking, our travel experts are here to help. 
            Send us an email or give our team a call to book your flights plan your adventure or get help with any problems you encounter along the way. You can visit us in store to speak face to face. Our assistance doesn't end when you take off either. 
            Our India Travel Help team are on hand to assist with any issues you may have.</p>
          </div>
          <div className="col-md-3  con">
          <h2 className='hd'>Our Contacts</h2>
            <p className='addrs'>123/21 First Street,Machhiwara Sahib,<br/>Distt.Ludhiana</p>
            <p className='addrs'>9865342675</p>        
            <p className='addrs'>9965352678</p>       
            <p className='addrs'>nk4578020@gmail.com</p>       
          </div>
          <div className="col-md-3  con">
          <h2 className='hd'>Any Questions?</h2>
            <form className='form text-center'>
            <input  type="text" className="lb" placeholder="Your Name"/>
            <input  type="text" className="lb" placeholder="Email"/>
            <input  type="text" className="lb3" placeholder="Message"/>
            <br></br>
            <button className='btn btn-primary  '>Send</button>
            </form>
          </div>
          </div>
          </div>
        </>
    )
}
export default Contact;