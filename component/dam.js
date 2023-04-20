import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './contact.css'
const Dam=()=>{
  
  const myStyle={
    // backgroundImage: 
    // "url('https://www.esikkimtourism.in/kashmir-tour-packages/wp-content/uploads/2021/11/banner-package.jpg')",
    // height:'40vh',
    // fontSize:'50px',
    // backgroundSize: 'cover',
    // backgroundRepeat: 'no-repeat',
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
          <form>
          <div className="elem-group">
    <label for="name">Your Name</label>
    <input type="text" id="name" name="visitor_name" placeholder="Name"  required/>
  </div><br/>
  <div className="elem-group inlined">
    <label for="email">Your E-mail</label>
    <input type="email" id="email" name="visitor_email" placeholder="email" required/>
  </div>
  <br/>
  <div className="elem-group inlined">
    <label for="phone">Your Phone</label>
    <input type="tel" id="phone" name="visitor_phone" placeholder="123456789"  required/>
  </div>
  <br/>
  <div className="elem-group inlined">
    <label for="go">Destination</label>
    <input type="text" id="go" name="visitor_go" placeholder="Where to go?"  required/>
  </div>
  <br/>
            </form>      
          </div>
          <div className="col-md-3  con">
            <form>
          <div className="elem-group inlined">
    <label for="adult">Adults</label>
    <input type="number" id="adult" name="total_adults" placeholder="2" min="1" required/>
  </div>
  <div class="elem-group inlined">
    <label for="child">Children</label>
    <input type="number" id="child" name="total_children" placeholder="2" min="0" required/>
  </div>
  <div className="elem-group">
    <label for="Accommodation-type">Accommodation Type</label>
    <select id="hotel-selection" name="hotel_preference" required>
        <option value="">Select Accommodation</option>
        <option value="">Luxry Hotel</option>
        <option value="">5Star Hotel</option>
        <option value="">4Star Hotel</option>
        <option value="">3Star Hotel</option>
    </select>
  </div>
  <hr/>
  <div className="elem-group">
    <label for="message">Anything Else?</label>
    <textarea id="message" name="visitor_message" placeholder="Tell us anything else that might be important." required></textarea>
  </div>
            <button className='btn btn-primary  '>Send</button>
            </form>
          </div>
          </div>
          </div>
        </>
    )
}
export default Dam;