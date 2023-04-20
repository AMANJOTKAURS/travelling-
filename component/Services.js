import React from 'react'
import Air from '../images/Air.jpg'
import Adv from '../images/Adve.jpg'
import Hotel from '../images/Hotel.jpg'
import Car from '../images/Car.jpg'
import background from '../images/bg.jpg'
import "./services.css"
function Service () {

  
 
  return(
    <>
     <div className="container">
        <div className="row m-auto">
        <div className='bg col-lg-12' style={{ backgroundImage: `url(${background})` }}>
          
          <h1 className="hd text-center">Our Services</h1>
    <p className="p1">With us you'll find a perfect destination among hundreds available</p>
  </div>
         <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 " >
        <div className="card">    
        <img src={Air} alt="" className="img4 w-100 img-fuild "/>
  <div className="card-body">
    <h5 className="card-title text-center">AIR TICKETS</h5>
    <p className="card-text">Customer Friendly Support. Book Online Today. Get to Where You're Going for Less and Have the Trip You've Always Wanted.
     Book Your Flight!</p>
  </div>
  </div>
  </div>
  {/*  */}
  <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 " >
  <div className="card">   
  <img src={Car} alt="" className="img4 w-100 img-fuild "/>
  <div className="card-body">
    <h5 className="card-title text-center">CAR RENTAL</h5>
    <p className="card-text">If you want to rent a car, we offer a large number of vehicles from a city car to a bus, for everyone's budget and your sense of style.
    Rent a car Now!</p>
  </div>
  </div>
  </div>
  {/*  */}
  <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 " >
  <div className="card">   
  <img src={Hotel} alt="" className="img4 w-100 img-fuild "/>
  <div className="card-body">
    <h5 className="card-title text-center">HOTEL BOOKING</h5>
    <p className="card-text">The Hotel Booking XML module allows travel agencies to give their customers the best choice of hotels and 
    apartments along with competitive prices</p>
  </div>
  </div>
  </div>
  <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 " >
  <div className="card">   
  <img src={Adv} alt="" className="img4 w-100 img-fuild "/>
  <div className="card-body">
    <h5 className="card-title text-center">ADVENTURE TRIPS</h5>
    <p className="card-text">This may include activities such as mountaining, trekking, bungee jumping, mountain biking, cycling, 
    Kayaking,scuba diving, rafting,zip-lining, paragliding.</p>
  </div>
  </div>
  </div>
          </div>
          </div>
          </>
  )
} 
export default Service;
