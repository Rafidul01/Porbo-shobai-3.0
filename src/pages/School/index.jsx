import React from 'react';
import './styles.css';
import Navbar from '../../components/Navbar';
import Space from '../../components/common/Space';
import SchoolHead from 'F:/React/Porbo Shobai 3.0/porbo-shobai/src/img/schoolHead.png';
import s1 from 'F:/React/Porbo Shobai 3.0/porbo-shobai/src/img/ideal school.png';
import s2 from 'F:/React/Porbo Shobai 3.0/porbo-shobai/src/img/vn.png';
import s3 from 'F:/React/Porbo Shobai 3.0/porbo-shobai/src/img/rajuk_school.png';
import s4 from 'F:/React/Porbo Shobai 3.0/porbo-shobai/src/img/dr_school.png';
import map from 'F:/React/Porbo Shobai 3.0/porbo-shobai/src/img/map.png';





const School = () => {
  return (
    <>

    <Navbar/>
    <div>
    <Space />  
   
    <div className="Schoolhead">
      <img src={SchoolHead} alt="School Header" />
    </div>


    <section class="main">
        
       


        <div class="school">
            <div class="school-img">
                <img src={s1} alt="School Image" />
              </div>
            <div class="school-title">
                <h2 class="school-name">Ideal School & College, Motijheel, Dhaka.</h2>
               <a href="https://iscm.edu.bd/" target="_blank"><button class="visit-btn">Visit</button></a>

               <div class="school-infos">
                <p class="school-info"><img src={map} alt="map"/>  Address:</p>
                <p class="school-info">Motijheel, Dhaka-1000</p>
                <p class="school-info">Call - 48310177</p>
                <p class="school-info">iscmdhaka@gmail.com</p>
            </div>
            </div>
           
        </div>
    
        <div class="school">
            <div class="school-img">
            <img src={s2} alt="School Image" />
              </div>
            <div class="school-title">
                <h2 class="school-name">Viqarunnisa Noon School and College.</h2>
                <a href="https://www.vnsc.edu.bd/" target="_blank"><button class="visit-btn">Visit</button></a>

               <div class="school-infos">
               <p class="school-info"><img src={map} alt="map"/>  Address:</p>
                <p class="school-info">1/A, New Bailey Road Dhaka , 1000 Bangladesh</p>
                <p class="school-info">Call - 01867268422</p>
                <p class="school-info">vnsc_bd@yahoo.com</p>
            </div>
            </div>
           
        </div>

        <div class="school">
            <div class="school-img">
            <img src={s3} alt="School Image" />
              </div>
            <div class="school-title">
                <h2 class="school-name">Rajuk Uttara Model College.</h2>
                <a href="http://www.rajukcollege.edu.bd/" target="_blank"><button class="visit-btn">Visit</button></a>

               <div class="school-infos">
               <p class="school-info"><img src={map} alt="map"/>  Address:</p>
                <p class="school-info">Sector#6, Uttara Model Town, Dhaka.</p>
                <p class="school-info">Call - +88-02-48957101-4</p>
                <p class="school-info">rajukcollege94@gmail.com</p>
            </div>
            </div>
          
        </div>

        <div class="school">
            <div class="school-img">
            <img src={s4} alt="School Image" />
              </div>
            <div class="school-title">
                <h2 class="school-name">Dhaka Residential Model College.</h2>
                <a href="http://www.drmc.edu.bd/" target="_blank"><button class="visit-btn">Visit</button></a>


               <div class="school-infos">
               <p class="school-info"><img src={map} alt="map"/>  Address:</p>
                <p class="school-info">Mohammadpur, Dhaka.</p>
                <p class="school-info">Call - +880258153774</p>
                <p class="school-info">drmc_bd@yahoo.com</p>
            </div>
            </div>
            
        </div>

    </section>


    </div>
    </>
  );
};

export default School;
