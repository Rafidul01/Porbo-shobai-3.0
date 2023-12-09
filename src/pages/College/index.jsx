import React from 'react'
import './styles.css';
import Navbar from '../../components/Navbar';
import Space from '../../components/common/Space';
import collegeHead from '../img/College head.png';
import c1 from '../img/rajuk_college.png';  
import c2 from '../img/vn.png';
import c3 from '../img/rajuk_college.png';
import c4 from '../img/dhaka_college.png';
import cmap from '../img/map.png';

const College = () => {
  return (
    <>

    <Navbar/>
    <div>
    <Space />  
   
    <div className="collegehead">
      <img src={collegeHead} alt="college Header" />
    </div>


    <section class="main">
        
       


        <div class="college">
            <div class="college-img">
                <img src={c1} alt="college Image" />
              </div>
            <div class="college-title">
                <h2 class="college-name">Ideal college & College, Motijheel, Dhaka.</h2>
               <a href="https://iscm.edu.bd/" target="_blank"><button class="visit-btn">Visit</button></a>

               <div class="college-infos">
                <p class="college-info"><img src={cmap} alt="map"/>  Address:</p>
                <p class="college-info">Motijheel, Dhaka-1000</p>
                <p class="college-info">Call - 48310177</p>
                <p class="college-info">iscmdhaka@gmail.com</p>
            </div>
            </div>
           
        </div>
    
        <div class="college">
            <div class="college-img">
            <img src={c2} alt="college Image" />
              </div>
            <div class="college-title">
                <h2 class="college-name">Viqarunnisa Noon college and College.</h2>
                <a href="https://www.vnsc.edu.bd/" target="_blank"><button class="visit-btn">Visit</button></a>

               <div class="college-infos">
               <p class="college-info"><img src={cmap} alt="map"/>  Address:</p>
                <p class="college-info">1/A, New Bailey Road Dhaka , 1000 Bangladesh</p>
                <p class="college-info">Call - 01867268422</p>
                <p class="college-info">vnsc_bd@yahoo.com</p>
            </div>
            </div>
           
        </div>

        <div class="college">
            <div class="college-img">
            <img src={c3} alt="college Image" />
              </div>
            <div class="college-title">
                <h2 class="college-name">Rajuk Uttara Model College.</h2>
                <a href="http://www.rajukcollege.edu.bd/" target="_blank"><button class="visit-btn">Visit</button></a>

               <div class="college-infos">
               <p class="college-info"><img src={cmap} alt="map"/>  Address:</p>
                <p class="college-info">Sector#6, Uttara Model Town, Dhaka.</p>
                <p class="college-info">Call - +88-02-48957101-4</p>
                <p class="college-info">rajukcollege94@gmail.com</p>
            </div>
            </div>
          </div>
        

        <div class="college">
            <div class="college-img">
            <img src={c4} alt="college Image" />
              </div>
            <div class="college-title">
                <h2 class="college-name">Dhaka Residential Model College.</h2>
                <a href="http://www.drmc.edu.bd/" target="_blank"><button class="visit-btn">Visit</button></a>


               <div class="college-infos">
               <p class="college-info"><img src={cmap} alt="map"/>  Address:</p>
                <p class="college-info">Mohammadpur, Dhaka.</p>
                <p class="college-info">Call - +880258153774</p>
                <p class="college-info">drmc_bd@yahoo.com</p>
            </div>
            </div>
            
        </div>

    </section>


    </div>
    </>
  )
}

export default College