import React from 'react'
import './styles.css'
import mainhead from '../img/mainHead.png'
import m1 from '../img/Competiton.png'
import m2 from '../img/leaderboard.png'
import m3 from '../img/aimaster.png'
import Navbar from '../../components/Navbar'

import t1 from '../img/img-1.png';
import t2 from '../img/img-2.png';
import t3 from '../img/img-3.png';
import t4 from '../img/img-4.png';
import t5 from '../img/img-5.png';
import t6 from '../img/img-6.png';


import b1 from '../img/blog-1.png'
import b2 from '../img/blog-2.png'
import b3 from '../img/blog-3.png'
import b4 from '../img/blog-4.png'



const Main = () => {
  return (
    <>
    <Navbar/>
    <div>
        <div class="mainhead">
    <img src={mainhead} alt="head"/>
</div>
<div class="event-message">
   <input type="text"/>
   <button type="button" class="button-a event-visit-btn">Message</button>
   <button type="button" role="button" class="button-a event-visit-btn">Sign up</button> 
   <button type="button" role="button" class="button-a event-visit-btn">Login</button> 
</div>

    <section class="homemain">

        <div class="main-event">
            <div class="home-content">
            <div class="main-event-img">
                <img src={m1} alt="img"/>
            </div>
            <button class="home-view">Perticipate</button>
            </div>
            <div class="home-content">
                <div class="main-event-img">
                <img src={m2} alt="img"/>

                </div>
                <button class="home-view">View</button>
                </div>
                <div class="home-content">
                    <div class="main-event-img">
                    <img src={m3} alt="img"/>

                    </div>
                    <button class="home-view">Challenge</button>
                    </div>
                     
         
            
        </div>
       
    </section>


    <section class="top-container toper-container">
            <div class="topperall">
            <h2 class="toper-heading">Top Contributors <i class="fa-solid fa-award" style={{color: '#e7d50d'}}></i></h2>
            <div class="topers">
                <div class="toper">
                    <img src={t1} alt="" class="img"/>
                    <h3>Nadia Islam</h3>
                </div>
                <div class="toper">
                    <img src={t2} alt="" class="img"/>
                    <h3>Abdur Rahman</h3>
                </div>
                <div class="toper">
                    <img src={t3} alt="" class="img"/>
                    <h3>Ishita Das</h3>
                </div>
                <div class="toper">
                    <img src={t4} alt="" class="img"/>
                    <h3>Golam Raisul</h3>
                </div>
                <div class="toper">
                    <img src={t5} alt="" class="img"/>
                    <h3>Rifat Uddin</h3>
                </div>
                <div class="toper">
                    <img src={t6} alt="" class="img"/>
                    <h3>Nazim Istiaque</h3>
                </div>
            </div>
        </div>
        {/* <hr/> */}
        <div class="topperall blogall">
            <h2 class="blog-heading">Top Blogs <i class="fa-brands fa-microblog" style={{color: '#08bf79'}}></i></h2>
            <div class="blogs">
               <article class="blog">
                <img src={b1} alt="" class=""/>
                <div class="blog-description">
                    <h2>Vector Physics 1st HSC</h2>
                    <p>Catagory: Hand Note.<br/>By <a class="author" href="">Nadia Islam</a></p>
                </div>
               </article>
               <article class="blog">
                <img src={b2} alt="" class=""/>
                <div class="blog-description">
                    <h2>About Artificial Intelligence</h2>
                   
                    <p>Catagory: Blog.<br/>By <a class="author" href="">Abdur Rahman</a></p>
                </div>
               </article>
               <article class="blog">
                <img src={b3} alt="" class=""/>
                <div class="blog-description">
                    <h2>My Favourite Places</h2>
                   
                    <p>Catagory: Blog.<br/>By <a class="author" href="">Ishita Das</a></p>
                </div>
               </article>
               <article class="blog">
                <img src={b4} alt="" class=""/>
                <div class="blog-description">
                    <h2>How I focus in my study?</h2>
                   
                    <p>Catagory: blog.<br/>By <a class="author" href="">Nazim Istiaque</a></p>
                </div>
               </article>
              
            </div>
        </div>
        </section>

        <section class="top-container toppers-all">
            <div class="topperall">
            <h2 class="toper-heading">Top Students <i class="fa-solid fa-award" style={{color: '#e7d50d'}}></i></h2>
            <div class="topStudentsEithButton">
            <div class="topers">
                <div class="toper">
                    <img src={t1} alt="" class="img"/>
                    <h3>Nadia Islam</h3>
                </div>
                <div class="toper">
                    <img src={t2} alt="" class="img"/>
                    <h3>Abdur Rahman</h3>
                </div>
                <div class="toper">
                    <img src={t3} alt="" class="img"/>
                    <h3>Ishita Das</h3>
                </div>
                <div class="toper">
                    <img src={t4} alt="" class="img"/>
                    <h3>Golam Raisul</h3>
                </div>
                <div class="toper">
                    <img src={t5} alt="" class="img"/>
                    <h3>Rifat Uddin</h3>
                </div>
                <div class="toper">
                    <img src={t6} alt="" class="img"/>
                    <h3>Nazim Istiaque</h3>
                </div>
            </div>
            <a href="./leaderBoard.html" target="_blank"><button class="btn-leaderboard">Leaderboard</button></a>
        </div>
    </div>
      
        </section>

    </div>
    </>
  )
}

export default Main