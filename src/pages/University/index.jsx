import React from 'react'
import './styles.css'
import Navbar from '../../components/Navbar';
import Space from '../../components/common/Space';
import universityHead from '../img/universityhead.png';
import s1 from '../img/ideal school.png';  
import s2 from '../img/vn.png';
import s3 from '../img/rajuk_school.png';
import s4 from '../img/dr_school.png';
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
                <img src={s1} alt="university Image" />
              </div>
            <div class="university-title">
                <h2 class="university-name">Ideal university & College, Motijheel, Dhaka.</h2>
               <a href="https://iscm.edu.bd/" target="_blank"><button class="visit-btn">Visit</button></a>

               <div class="university-infos">
                <p class="university-info"><img src={map} alt="map"/>  Address:</p>
                <p class="university-info">Motijheel, Dhaka-1000</p>
                <p class="university-info">Call - 48310177</p>
                <p class="university-info">iscmdhaka@gmail.com</p>
            </div>
            </div>
           
        </div>
    
        <div class="university">
            <div class="university-img">
            <img src={s2} alt="university Image" />
              </div>
            <div class="university-title">
                <h2 class="university-name">Viqarunnisa Noon university and College.</h2>
                <a href="https://www.vnsc.edu.bd/" target="_blank"><button class="visit-btn">Visit</button></a>

               <div class="university-infos">
               <p class="university-info"><img src={map} alt="map"/>  Address:</p>
                <p class="university-info">1/A, New Bailey Road Dhaka , 1000 Bangladesh</p>
                <p class="university-info">Call - 01867268422</p>
                <p class="university-info">vnsc_bd@yahoo.com</p>
            </div>
            </div>
           
        </div>

        <div class="university">
            <div class="university-img">
            <img src={s3} alt="university Image" />
              </div>
            <div class="university-title">
                <h2 class="university-name">Rajuk Uttara Model College.</h2>
                <a href="http://www.rajukcollege.edu.bd/" target="_blank"><button class="visit-btn">Visit</button></a>

               <div class="university-infos">
               <p class="university-info"><img src={map} alt="map"/>  Address:</p>
                <p class="university-info">Sector#6, Uttara Model Town, Dhaka.</p>
                <p class="university-info">Call - +88-02-48957101-4</p>
                <p class="university-info">rajukcollege94@gmail.com</p>
            </div>
            </div>
          
        </div>

        <div class="university">
            <div class="university-img">
            <img src={s4} alt="university Image" />
              </div>
            <div class="university-title">
                <h2 class="university-name">Dhaka Residential Model College.</h2>
                <a href="http://www.drmc.edu.bd/" target="_blank"><button class="visit-btn">Visit</button></a>


               <div class="university-infos">
               <p class="university-info"><img src={map} alt="map"/>  Address:</p>
                <p class="university-info">Mohammadpur, Dhaka.</p>
                <p class="university-info">Call - +880258153774</p>
                <p class="university-info">drmc_bd@yahoo.com</p>
            </div>
            </div>
            
        </div>

    </section>


    </div>
    </>
  )
}

export default University