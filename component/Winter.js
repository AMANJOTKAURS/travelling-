import Goa1 from '../images/G1.jpg'
import Mah1 from '../images/Mah1.jpg'
import Mah2 from '../images/Mah2.jpeg';
import './dest.css';
const Family=()=>
{
    return(
     <>
     <div className="container-fluid px-5  Goa">
     <div className='main'>
        <div className="row m-auto  dest ">
        <div className='col-lg-12'><h1 className='h1'>Winter Tour Package</h1></div>
        <br/>
        <div className="D1 col-lg-5">
        <img src={Mah1} alt="" className="img4 w-100 img-fuild "/>
        </div>
        <div className='D2 col-lg-5'>
            <h2>Amazing Maharashtra</h2>
          <c> Mumbai - Khandala - Lonavala - Mahabaleshwar - Alibaug - Mumbai</c>
          <p>Take a tour of some of the most popular destinations of Maharashtra including hill stations, beaches, gardens, viewpoints, etc. Spanning for 6 days, the meticulously-designed itinerary offers matchless experiences. The tour helps you spend your holidays like never before.</p>
         <h3>TRIP HIGHLIGHTS</h3>
         <ul>
         <li>Excursion to attractions in Mumbai</li>
         <li>Rejuvenate yourself at Lonavala</li>
         <li>Soak in the fascinating exquisiteness of Mahabaleshwar</li>
         <li>Indulge in enjoyable activities at the famous beaches in Alibaug</li>
         </ul>
         <c>Activities :</c>
         <p>Visit Gateway of India, Explore Prince of Wales Museum, Visit Hanging Gardens and Haji-Ali-Dargah, Enjoy sunset atJuhu Beach, Explore Rajmachi Fort and Sunset Point, Visit Bhaja and Karla Caves, Visit popular Arthur's Seat, Get panoramic view from Babington Point, Picnic at Bombay Point, Visit Khanderi, Fort Kolaba Fort and Undheri Fort. Enjoy at Khihim Beach and akshi Beach.</p>
          </div>
        </div>
        <div className="row m-auto  dest ">
        <div className="D1 col-lg-5">
        <img src={Mah2} alt="" className="img4 w-100 img-fuild "/>
        </div>
        <div className='D2 col-lg-5'>
        <h2>Ajanta Ellora Caves Tour</h2>
          <c>  Mumbai - Aurangabad - Nashik - Mumbai</c>
          <p>Brace yourself to unveil the mysteries of the Ajanta and Ellora Caves! This well-planned tour helps you discover the secrets related to these caves and also helps you to understand what makes them a UNESCO World Heritage Site.</p> 
           <h3>TRIP HIGHLIGHTS</h3>
         <ul>
         <li>Explore Ajanta Caves</li>
         <li>Unveil the mysteries of Ellora Caves</li>
         <li>Enjoy Mumbai sightseeing tour</li>
         <li>Worship at the Trimbakeshwar Temple</li>
         </ul>
         <c>Activities :</c>
         <p>Mumbai visit the Gateway of India board a ferry to visit the Elephant Caves, Shree Siddhivinayak Temple and Prince of Wales Museum. In the evening, visit Juhu Beach enjoy street foods or opt for theatre performance at Prithvi Café, In Aurangabad visit Ajanta Caves, next day visit Ellora Caves and Daulatabad Fort, Opt to explore local markets, In Nashik visit Trimbakeshwar Jyotirlinga Temple and Pandavleni Caves.</p>
               </div>
        </div>
        <div className="row m-auto  dest ">
     
        <br/>
        <div className="D1 col-lg-5">
        <img src={Goa1} alt="" className="img4 w-100 img-fuild "/>
        </div>
        <div className='D2 col-lg-5'>
            <h2>Fun-Filled Week in Goa</h2>
          <c>Goa</c>
          <p>Set the party mode ON as you are going to have a delightful experience at the ‘Party Capital of India’. The fun-filled week in Goa tour helps you create memories of a lifetime while making the most of your holidays.</p>
         <h3>TRIP HIGHLIGHTS</h3>
         <ul>
         <li>Enjoy at the beaches in Goa</li>
         <li>Go for wildlife safari</li>
         <li>Guided tour of popular churches</li>
         <li>Shopping at the local markets</li>
         </ul>
         <c>Activities :</c>
         <p>Visit popular Churches, North Goa popular Beaches, Pray at Shri Bodgeshwar Temple, Enjoy at Mapusa Street Market, Admire beauty of Palolem Beach, Jeep safari at Dudhsagar, Elephant Ride, Visit Mahavir Wildlife Sanctuary. Try Water Sports, Relish Goan Cuisine, Enjoy Night Life in Goa</p>
        </div>
        </div>
     </div>
     </div>
     </>

    );
}
export default Family;