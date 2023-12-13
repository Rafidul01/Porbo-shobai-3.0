import React from 'react'
import './styles.css'
import Navbar from '../../components/Navbar';
import Space from '../../components/common/Space';
import universityHead from '../img/universityhead.png';
import u1 from '../img/DU.png';  
import u2 from '../img/BUET.png';
import u3 from '../img/CU.png';
import u4 from '../img/IIUC.png';
import map from '../img/map.png';
const University = () => {
  return (
    <>

    <Navbar/>
    <div>
    <Space />  
   
    <div className="universityhead">
      <img src={universityHead} alt="university Header" />
    </div>


    <section class="main">
        
       


        <div class="university">
            <div class="university-img">
              
                <img src={u1} alt="university Image" />
              </div>
            <div class="university-title">
                <h2 class="university-name">Dhaka University.</h2>
               <a href="http://www.du.ac.bd/" target="_blank"><button class="visit-btn">Visit</button></a>

               <div class="university-infos">
                <p class="university-info"><img src={map} alt="map"/>  Address:</p>
                <p class="university-info">Nilkhet Rd, Dhaka-1000</p>
                <p class="university-info">Call - 029667222</p>
                <p class="university-info">vcoffice@du.ac.bd</p>
            </div>
            </div>
           
        </div>
    
        <div class="university">
            <div class="university-img">
            <img src={u3} alt="university Image" />
              </div>
            <div class="university-title">
                <h2 class="university-name">University of Chittagong</h2>
                <a href="http://cu.ac.bd/" target="_blank"><button class="visit-btn">Visit</button></a>

               <div class="university-infos">
               <p class="university-info"><img src={map} alt="map"/>  Address:</p>
                <p class="university-info">Chittagong University, Chittagong-4331</p>
                <p class="university-info">Call - 02606915-27</p>
                <p class="university-info">registrarcu66@cu.ac.bd</p>
            </div>
            </div>
           
        </div>

        <div class="university">
            <div class="university-img">
            <img src={u2} alt="university Image" />
              </div>
            <div class="university-title">
                <h2 class="university-name">Bangladesh University of Engineering and Technology</h2>
                <a href="http://www.buet.ac.bd/web/#/" target="_blank"><button class="visit-btn">Visit</button></a>

               <div class="university-infos">
               <p class="university-info"><img src={map} alt="map"/>  Address:</p>
                <p class="university-info">Dhaka,Bangladesh</p>
                <p class="university-info">Call - 029665602</p>
                <p class="university-info">support@iict.buet.ac.bd</p>
            </div>
            </div>
          
        </div>

        <div class="university">
            <div class="university-img">
            <img src={u4} alt="university Image" />
              </div>
            <div class="university-title">
                <h2 class="university-name">International Islamic University Chittagong</h2>
                <a href="http://www.iiuc.ac.bd/" target="_blank"><button class="visit-btn">Visit</button></a>


               <div class="university-infos">
               <p class="university-info"><img src={map} alt="map"/>  Address:</p>
                <p class="university-info">Kumira, Chattogram-4318</p>
                <p class="university-info">Call -+8802334461900-7</p>
                <p class="university-info">acad@iiuc.ac.bd </p>
            </div>
            </div>
            
        </div>

    </section>


    </div>
    </>
  )
}

export default University