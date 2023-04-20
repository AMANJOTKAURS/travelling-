import family from '../images/family.jpg'
import summer from '../images/summer.jpg'
import winter from '../images/winter.jpg'
import hillstation from '../images/hillstation.jpg'
import culture from '../images/culture.jpg'
import honymoon from '../images/honymoon.png'
import { Link } from 'react-router-dom'
const Package=()=>{
    return(
        <>
       
          <div className="container-fluid px-5  destination">
        <div className="row justify-content-center">
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
      </div>
      </div>
          
        </>
    );
}
export default Package;