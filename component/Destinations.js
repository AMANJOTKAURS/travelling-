import { Link } from 'react-router-dom'
import kerala1 from '../images/kerala1.jpg'
import kashmir1 from '../images/kashmir1.jpg'
import rajasthan1 from '../images/rajasthan1.jpg'
import goa1 from '../images/goa1.jpg'
import himachal1 from '../images/himachal1.jpg'
import uttrakhand1 from '../images/uttrakhand1.jpg'
import punjab from '../images/Pun1.jpg'
import maharashtra from '../images/maharashtra.jpg'
import westbengal from '../images/westbengal.jpg'
import Karnatka from '../images/karnataka.jpg'
import './destination.css'
// import Karnatka from './Maharashtra'
const Destinations=()=>{
    return(
        <>
       
          <div className="container-fluid px-5  destination">
        <div className="row justify-content-center">
      
            
          <div className="col-md-3  dest">
          <Link class="nav-link" to="/Kashmir">
            <img src={kashmir1} alt="" className="img4 w-100 img-fuild "/>
            <h3 className='dest-hd'>KASHMIR</h3>
            </Link>
           
          </div>
          <div className="col-md-3 dest">
          <Link class="nav-link" to="/Kerala">
            <img src={kerala1} alt="" className="img4 w-100 img-fuild "/>
            <h3 className='dest-hd'>KERALA</h3>
            </Link>
          </div>
          <div className="col-md-3 dest">
          <Link class="nav-link" to="/Rajasthan">
            <img src={rajasthan1} alt="" className="img4 w-100 img-fuild "/>
            <h3 className='dest-hd'>RAJASTHAN</h3>
            </Link>
          </div>
          <div className="col-md-3 dest">
          <Link class="nav-link" to="/Goa">
            <img src={goa1} alt="" className="img4 w-100 img-fuild "/>
            <h3 className='dest-hd'>GOA</h3>
            </Link>
          </div>
          <div className="col-md-3 dest">
            <Link class="nav-link" to="/Himachal">
            <img src={himachal1} alt="" className="img4 w-100 img-fuild "/>
            <h3 className='dest-hd'>HIMACHAL</h3>
            </Link>
          </div>
          <div className="col-md-3 dest">
            <Link class="nav-link" to="/Uttrakhand">
            <img src={uttrakhand1} alt="" className="img4 w-100 img-fuild "/>
            <h3 className='dest-hd'>UTTRAKHAND</h3>
            </Link>
          </div>
          <div className="col-md-3 dest">
          <Link class="nav-link" to="/Westbengal">
            <img src={westbengal} alt="" className="img4 w-100 img-fuild "/>
            <h3 className='dest-hd'>West Bengal</h3>
            </Link>
          </div>
          <div className="col-md-3 dest">
          <Link class="nav-link" to="/Maharashtra">
            <img src={maharashtra} alt="" className="img4 w-100 img-fuild "/>
            <h3 className='dest-hd'>Maharashtra</h3>
            </Link>
          </div>
          <div className="col-md-3 dest">
          <Link class="nav-link" to="/Karnatka">
            <img src={Karnatka} alt="" className="img4 w-100 img-fuild "/>
            <h3 className='dest-hd'>Karnatka</h3>
            </Link>
          </div>
          <div className="col-md-3 dest">
          <Link class="nav-link" to="/Punjab">
            <img src={punjab} alt="" className="img4 w-100 img-fuild "/>
            <h3 className='dest-hd'>Punjab</h3>
            </Link>
          </div>
          </div>
          </div>
          
        </>
    );
}
export default Destinations;