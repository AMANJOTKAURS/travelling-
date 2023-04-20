
import { Route, BrowserRouter , Routes } from 'react-router-dom';
import Navbar from './component/Navbar'
import Service from './component/Services';
import Slide from './component/slide';
import Destination from './component/Destinations';
import Booknow from './component/Booknow'
import 'react-slideshow-image/dist/styles.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Contact from './component/Contact';
import Goa from './component/Goa'
import Rajasthan from './component/Rajasthan';
import Himachal from './component/Himachal';
import Kerala from './component/Kerala';
import Kashmir from './component/Kashmir';
import Uttrakhand from './component/Uttrakhand';
import Westbengal from './component/Westbengal'
import Karnatka from './component/Karnatka';
import Maharashtra from './component/Maharashtra'
import Punjab from './component/Punjab'
import Tourguide from './component/Tourguide';
import Family from './component/Family';
import Summer from './component/Summer'
import Winter from './component/Winter'
import Hillstation from './component/Hill station'
import Cultural from './component/Cultural'
import Honymoon from './component/Honymoon'
import Package from './component/Package';
import About from './component/Aboutus';
import Dam from './component/dam'
// import { Navbar } from 'react-bootstrap';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path='/' Component={Slide}/>
        <Route path='/slide' element={<Slide/>} />
          <Route path='/Destinations' element={<Destination/>} />
          <Route path='/Services' element={<Service/>} />
          <Route path='/Tourguide' element={<Tourguide/>} />
          <Route path='/Contact' element={<Contact/>} />
          <Route path='/Kashmir' element={<Kashmir/>} /> 
          <Route path='/Punjab' element={<Punjab/>} />
          <Route path='/Rajasthan' element={<Rajasthan/>} />
          <Route path='/Goa' element={<Goa/>} />
          <Route path='/Himachal' element={<Himachal/>} />
          <Route path='/Kerala' element={<Kerala/>} />
          <Route path='/Uttrakhand' element={<Uttrakhand/>} />
          <Route path='/Westbengal' element={<Westbengal/>} />
          <Route path='/Karnatka' element={<Karnatka/>} />
          <Route path='/Maharashtra' element={<Maharashtra/>} />
          <Route path='/Booknow' element={<Booknow/>} />
          <Route path='/Family' element={<Family/>} />
          <Route path='/Summer' element={<Summer/>} />
          <Route path='/Winter' element={<Winter/>} />
          <Route path='/Hill station' element={<Hillstation/>} />
          <Route path='/Cultural' element={<Cultural/>} />
          <Route path='/Honymoon' element={<Honymoon/>} />
          <Route path='/Package' element={<Package/>} />
          <Route path='/About' element={<About/>} />



        </Routes>
      </BrowserRouter>
    </>

  );
}
export default App;
