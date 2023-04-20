import React from 'react';
import './slide.css'
import './home.css'
// import { Slide,Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import amritsar from '../images/amritsar.jpg'
import kashmir from '../images/kashmir.jpg'
import rajasthan from '../images/rajasthan'
import kerala1 from '../images/kerala1.jpg'
import kashmir1 from '../images/kashmir1.jpg'
import rajasthan1 from '../images/rajasthan1.jpg'
import goa1 from '../images/goa1.jpg'
import himachal1 from '../images/himachal1.jpg'
import uttrakhand1 from '../images/uttrakhand1.jpg'
import family from '../images/family.jpg'
import summer from '../images/summer.jpg'
import winter from '../images/winter.jpg'
import hillstation from '../images/hillstation.jpg'
import culture from '../images/culture.jpg'
import honymoon from '../images/honymoon.png'



const Slideshow = () => {
    // const images = [
    //     "https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20200819131211/iStock-535570117-scaled.jpg",
    //     "https://www.travellersofindia.com/wp-content/uploads/2021/02/30_Remarkably_Fascinating_Places_To_Visit_In_Kashmir_One_Cannot_Miss_In_2021_TravellersofIndia.jpg",
    //     "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2020/09/Feature-image-Rajasthan-tourism.jpg",
    // ];

    return (
        <>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active pic">
                        <img src={kashmir} class="d-block  w-100" alt="..."/>
                            <div className="carousel-caption d-none d-md-block">
                               
                            </div>
                    </div>
                    <div className="carousel-item pic">
                        <img src={amritsar} class="d-block w-100" alt="..."/>
                            <div className="carousel-caption d-none d-md-block">
                                
                            </div>
                    </div>
                    <div className="carousel-item pic">
                        <img src={rajasthan} class="d-block w-100" alt="..."/>
                            <div className="carousel-caption d-none d-md-block">
                                
                            </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            {/* <Slide className="slide">
           <div id="SimpleCarouselExample" class="carousel slide" data-ride="carousel"> */}

            {/* <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[0]})`,backgroundRepeat:'no-repeat' }}>
    
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[1]})`}}>
                <h1 className='qoute'>Travel is an investment in yourself.</h1>
                {/* <span>2</span> */}
            {/* </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                <span>3</span>
                <h1></h1>    
                </div>
            </div> */}
            {/* */}
            {/* </Slide> */}
            <div className="home-page">
                <h1>India Tours and Travel</h1>
                <p>
                    India has a rich cultural heritage history and it is a traveler's paradise. India tours are a perfect blend of spirituality, modernity, age-old traditions, and customs. It is a vast country and it stretches from the snow-clad high mountain peaks to the glistening backwaters and from the salt marsh in the Thar Desert to the world's largest delta in the world. India is a place for which is a heaven for every kind of traveler. It is home to nature's bounty with great scenic beauty and it consists of unexplored biodiversity. India vacation are incomplete without the exploration tour of the national parks, ancient palaces, exquisite forts, enchanting lakes, golden dunes, snowy peaks, and several architectural wonders.

                    India tour takes you through the centuries-old ancient ruins, beautiful temples, white-sand beaches, and wildlife sanctuaries. India is a dreamland from where you will never wish to leave. The paradisiacal beauty of this country lures a large number of tourists from all over the world. India is a land of diverse culture and innumerable festivities. If you have not attended any festival of India on your visit then you will surely miss the intermingling of cultural, spiritual, and traditional vibes of this glorious country. India trip also includes some of the most cherished festivals and carnivals namely Rann Utsav, Hornbill festival, Ziro Festival, Pushkar Fair, and many more famous fiestas take place throughout the year.</p>
            </div>
            <div className='Pop-dest'><h1>Popular Destinations</h1></div>
            
      <div className="container-fluid px-5  destination">
        <div className="row justify-content-center">
            
          <div className="col-md-3  dest">
          <Link class="nav-link" to="/Kashmir">
            <img src={kashmir1} alt="" className="img4 w-100 img-fuild "/>
            <h3 className='dest-hd'>KASHMIR</h3></Link>
          </div>
          <div className="col-md-3 dest">
          <Link class="nav-link" to="/Kerala">
            <img src={kerala1} alt="" className="img4 w-100 img-fuild "/>
            <h3 className='dest-hd'>KERALA</h3></Link>
          </div>
          <div className="col-md-3 dest">
          <Link class="nav-link" to="/Rajasthan">
            <img src={rajasthan1} alt="" className="img4 w-100 img-fuild "/>
            <h3 className='dest-hd'>RAJASTHAN</h3></Link>
          </div>
          <div className="col-md-3 dest">
          <Link class="nav-link" to="/Goa">
            <img src={goa1} alt="" className="img4 w-100 img-fuild "/>
            <h3 className='dest-hd'>GOA</h3></Link>
          </div>
          <div className="col-md-3 dest">
          <Link class="nav-link" to="/Himachal">
            <img src={himachal1} alt="" className="img4 w-100 img-fuild "/>
            <h3 className='dest-hd'>HIMACHAL</h3></Link>
          </div>
          <div className="col-md-3 dest">
          <Link class="nav-link" to="/Uttrakhand">
            <img src={uttrakhand1} alt="" className="img4 w-100 img-fuild "/>
            <h3 className='dest-hd'>UTTRAKHAND</h3></Link>
          </div>
          <div class="col-lg-12 text-center" ><button className='btn btn-info'><Link className='abc' to="/Destinations">View All</Link></button></div>
          </div>
          </div>


          {/* package */}
          
          <div className='Pop-pack'><h1>India Tour Packages by Interest</h1></div>
          <div className="container-fluid px-5  destination">
        <div className="row justify-content-center">
            
          <div className="col-md-3  dest">
          <Link class="nav-link" to="/Family">
            <img src={family} alt="" className="img4 w-100 img-fuild "/>
            <h3 className='dest-hd'>FAMILY</h3></Link>
          </div>
          <div className="col-md-3 dest">
          <Link class="nav-link" to="/Summer">
            <img src={summer} alt="" className="img4 w-100 img-fuild "/>
            <h3 className='dest-hd'>SUMMER</h3></Link>
          </div>
          <div className="col-md-3 dest">
          <Link class="nav-link" to="/Winter">
            <img src={winter} alt="" className="img4 w-100 img-fuild "/>
            <h3 className='dest-hd'>WINTER</h3></Link>
          </div>
          <div className="col-md-3 dest">
          <Link class="nav-link" to="/Hill station">
            <img src={hillstation} alt="" className="img4 w-100 img-fuild "/>
            <h3 className='dest-hd'>HILL STATION</h3></Link>
          </div>
          <div className="col-md-3 dest">
          <Link class="nav-link" to="/Cultural">
            <img src={culture} alt="" className="img4 w-100 img-fuild "/>
            <h3 className='dest-hd'>CULTURAL</h3></Link>
          </div>
          <div className="col-md-3 dest">
          <Link class="nav-link" to="/Honymoon">
            <img src={honymoon} alt="" className="img4 w-100 img-fuild "/>
            <h3 className='dest-hd'>HONYMOON</h3></Link>
          </div>
          {/* <div class="col-lg-12 text-center" ><button className='btn btn-primary'>View all</button></div> */}
          </div>
          </div>
          {/* <div className="mon"><h1>Places to Visit in India by Month</h1>
          <p className='p2 text-center'>India holds a number of surprises in store for you! Choose from a number of places to visit in India by month and you will something special everywhere to delight in. Treat yourself at Auli in January with skiing, make your February special with houseboat tour in Kerala, get smeared in colors during Holi in Mathura, get drenched in rain at Udaipur or head to Goa for Christmas.</p>
          <div className='month text-center'>
            <button className='btn btn-primary'>Jan</button>
            <button className='btn btn-primary'>Feb</button>
            <button className='btn btn-primary'>Mar</button>
            <button className='btn btn-primary'>Apr</button>
            <button className='btn btn-primary'>May</button>
            <button className='btn btn-primary'>Jun</button>
            <button className='btn btn-primary'>Jul</button>
            <button className='btn btn-primary'>Aug</button>
            <button className='btn btn-primary'>Sep</button>
            <button className='btn btn-primary'>Oct</button>
            <button className='btn btn-primary'>Nov</button>
            <button className='btn btn-primary'>Dec</button>
          </div>
          </div> */}

          {/* Footer */}

          <footer class="bg-light text-center text-lg-start">

  <div class="text-center p-3 " style={{ background: "black", color: "white"}}>

  <h3 className='footer1' style={{ background: "black", color: "white"}}> 
<Link class="Foot-link" to="/Contact">Cotact us</Link> |<Link class="Foot-link" to="/About"> About us</Link> | <Link class="Foot-link" to="/Tourguide"> Travel-Guide</Link> | <Link class="Foot-link" to="/Services">Services</Link></h3>
  </div>

</footer>
        </>

    );
};

export default Slideshow;