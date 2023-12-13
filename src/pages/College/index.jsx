import React from 'react'
import './styles.css';
import Navbar from '../../components/Navbar';
import Space from '../../components/common/Space';
import collegeHead from '../img/College head.png';
import c1 from '../img/dhaka_college.png';  
import c2 from '../img/adamjee_cantonment_college.png';
import c3 from '../img/rajshahi_college.png';
import c4 from '../img/notre_dame_college.png';
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
                <h2 class="college-name">Dhaka College.</h2>
               <a href="http://dhakacollege.edu.bd/" target="_blank"><button class="visit-btn">Visit</button></a>

               <div class="college-infos">
                <p class="college-info"><img src={cmap} alt="map"/>  Address:</p>
                <p class="college-info">New Market, Dhaka-1000</p>
                <p class="college-info">Call - 029666058</p>
                <p class="college-info">dhakacollegeprincipal@gmail.com</p>
            </div>
            </div>
           
        </div>
    
        <div class="college">
            <div class="college-img">
            <img src={c2} alt="college Image" />
              </div>
            <div class="college-title">
                <h2 class="college-name">Adamjee Cantonment College</h2>
                <a href="http://acc.edu.bd/" target="_blank"><button class="visit-btn">Visit</button></a>

               <div class="college-infos">
               <p class="college-info"><img src={cmap} alt="map"/>  Address:</p>
                <p class="college-info">Shaheed Sharani , Dhaka 1206</p>
                <p class="college-info">Call -028872446</p>
                <p class="college-info">info@acc.edu.bd</p>
            </div>
            </div>
           
        </div>

        <div class="college">
            <div class="college-img">
            <img src={c3} alt="college Image" />
              </div>
            <div class="college-title">
                <h2 class="college-name">Rajshahi College</h2>
                <a href="http://rc.edu.bd/" target="_blank"><button class="visit-btn">Visit</button></a>

               <div class="college-infos">
               <p class="college-info"><img src={cmap} alt="map"/>  Address:</p>
                <p class="college-info">Saheb Bazar Rd,Rajshahi 6100.</p>
                <p class="college-info">Call - 02588855475</p>
                <p class="college-info">rajshahicollegebd@gmail.com</p>
            </div>
            </div>
          </div>
        

        <div class="college">
            <div class="college-img">
            <img src={c4} alt="college Image" />
              </div>
            <div class="college-title">
                <h2 class="college-name">Notre Dame College.</h2>
                <a href="http://ndc.edu.bd/" target="_blank"><button class="visit-btn">Visit</button></a>


               <div class="college-infos">
               <p class="college-info"><img src={cmap} alt="map"/>  Address:</p>
                <p class="college-info">Toyenbee Circular Rd, Dhaka 1000.</p>
                <p class="college-info">Call - +880241070712</p>
                <p class="college-info">notredamecollege@ndc.edu.bd</p>
            </div>
            </div>
            
        </div>

    </section>


    </div>
    </>
  )
}

export default College