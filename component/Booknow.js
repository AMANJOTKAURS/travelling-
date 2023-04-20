import React from "react";
import background from '../images/background.jpg'
import './Booknow.css'
function Booknow() {
  const myStyle={
//     backgroundImage: 
//  "url('https://media.geeksforgeeks.org/wp-content/uploads/rk.png')",
//         height:'100vh',
//         // marginTop:'-70px',
//         fontSize:'50px',
//         backgroundSize: 'cover',
//         backgroundRepeat: 'no-repeat',
    };
  return(
    <div className="form">
    
 
      <div className="f">
        <div className="row m-auto f1 ">
        <div className="col-md-12 head">
            <h1 className="hd text-center">Get a Free Quote</h1>
            <p className="p1 text-center">Just fill in the form here with all necessary details and we will provide you the perfect, tailor-made itinerary at the best possible prices, in no more than 24 hours.</p>
        </div>
        <div className="col-md-4 f ">
          <form>
          <div className="elem-group">
    <label >Your Name</label><br/>
    <input type="text" id="name"  placeholder="Name" />
  </div><br/>
  <div className="elem-group inlined">
    <label >Your Phone</label><br/>
    <input type="tel" id="phone" placeholder="123456789" />
  </div>
  <br/>
  <div className="elem-group inlined">
    <label >Adults</label>
    <br/>
    <input type="number" id="adult"placeholder="2" />
  </div>
  <br/>
  <div className="elem-group">
    <label >Accommodation Type</label>
    <br/>
    <select id="hotel-selection" name="hotel_preference">
        <option value="">Select Accommodation</option>
        <option value="">Luxry Hotel</option>
        <option value="">5Star Hotel</option>
        <option value="">4Star Hotel</option>
        <option value="">3Star Hotel</option>
    </select>
  </div>
  <br/>
  <div className="elem-group">
    <label >Car Rental</label>
    <br/>
    <select id="hotel-selection" name="hotel_preference">
        <option value="">Select </option>
        <option value="">Travel Tempo</option>
        <option value="">Luxry</option>
        <option value="">Intermediate</option>
        <option value="">Premium</option>
    </select>
  </div>
  <br/>
  <div className="elem-group">
    <label >Flight</label>
    <br/>
    <select id="hotel-selection" name="hotel_preference">
        <option value="">Yes</option>
        <option value="">No</option>
       
    </select>
  </div>
 
            </form>   
               
          </div>
          <div className="col-md-4 f">
            <form><div className="elem-group inlined">
    <label>Your E-mail</label>
    <br/>
    <input type="email" id="email"  placeholder="Email" />
  </div>
  <br/>
  <div className="elem-group inlined">
    <label>Destination</label>
    <br/>
    <input type="text" id="go"  placeholder="Where to go?"/>
  </div>
          
          <br/>
  <div class="elem-group inlined">
    <label>Children</label><br/>
    <input type="number" id="child" placeholder="2"/>
  </div>

  <hr/>
  <div className="elem-group">
    <label >Anything Else?</label><br/>
    <textarea id="message" name="visitor_message" placeholder="Tell us anything else that might be important." required></textarea>
  </div>
  <button className='btn '>BOOK </button>
            </form>
          </div>
</div>
</div>
</div>
  )
}
export default Booknow;