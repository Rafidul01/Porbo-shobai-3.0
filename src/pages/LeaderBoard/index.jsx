import React from 'react'
import './styles.css';
import l1 from 'F:/React/Porbo Shobai 3.0/porbo-shobai/src/img/img-1.png';
import l2 from 'F:/React/Porbo Shobai 3.0/porbo-shobai/src/img/img-2.png';
import l3 from 'F:/React/Porbo Shobai 3.0/porbo-shobai/src/img/img-3.png';
import l4 from 'F:/React/Porbo Shobai 3.0/porbo-shobai/src/img/img-4.png';
import l5 from 'F:/React/Porbo Shobai 3.0/porbo-shobai/src/img/img-5.png';
import l6 from 'F:/React/Porbo Shobai 3.0/porbo-shobai/src/img/img-6.png';
import Navbar from '../../components/Navbar';
<script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"></script>




const LeaderBoard = () => {
  return (
        <>
        <Navbar />
       
    <body className="fullbody">
    <main className='leadermain'>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />

        
        <div class="leader-title">
        <h2>Leader Board</h2>
        <hr/>
        </div>
        <section class="leadercontainer">
            <div class="table">
               <div class="rank-title rank">
               <h2><i class="fa-solid fa-ranking-star" style={{ color: '#f5c000' }} ></i> Rank</h2>
               </div>
               <div class="points-title points">
                <h2><i class="fa-solid fa-star" style={{ color: '#f5c000' }}></i> Points</h2>
               </div>
               <div class="name-title name">
                <h2><i class="fa-solid fa-user" style={{ color: '#df073d' }}></i> Name</h2>
               </div>
               <div class="badge">
                <h2><i class="fa-solid fa-trophy" style={{ color: '#f5c000' }}></i> Milestone</h2>
               </div>
               <div class="book">
                <h2><i class="fa-solid fa-book" style={{ color: '#df073d' }}></i> Book Read</h2>
               </div>
               <div class="task">
                <h2><i class="fa-solid fa-list-check" style={{ color: '#059931' }}></i> Total Task</h2>
               </div>

               <div class="rank ">
                <h2> 01</h2>
               </div>
               <div class="points">
                <h2> 2200</h2>
               </div>
               <div class="name">
                <img src={l1} alt="Students" />
                <h2> Nadiya Islam</h2>
               </div>
               <div class="badge">
                       <div class="icn"><i class="fa-solid fa-award fa-2xl"style={{ color: '#df073d' }}></i></div>
                       <div class="icn"><i class="fa-solid fa-crown fa-2xl" style={{ color: '#f5c000' }}></i></div>
                       <div class="icn"><i class="fa-solid fa-medal fa-2xl" style={{ color: '#b30083' }}></i></div>
               </div>
               <div class="book">
                <h2> 12</h2>
               </div>
               <div class="task">
                <h2> 50</h2>
               </div>


               <div class="rank ">
                <h2> 02</h2>
               </div>
               <div class="points">
                <h2> 2100</h2>
               </div>
               <div class="name">
               <img src={l2} alt="Students" />

                <h2> Abdur Rahman</h2>
               </div>
               <div class="badge">
                       <div class="icn"><i class="fa-solid fa-award fa-2xl"  style={{ color: '#a80000' }}></i></div>
                       <div class="icn"><i class="fa-solid fa-bookmark fa-2xl" style={{ color: ' #06933c' }}></i></div>
                       <div class="icn"><i class="fa-solid fa-medal fa-2xl" style={{ color: ' #b30083' }} ></i></div>
               </div>
               <div class="book">
                <h2> 15</h2>
               </div>
               <div class="task">
                <h2> 45</h2>
               </div>


               <div class="rank ">
                <h2> 03</h2>
               </div>
               <div class="points">
                <h2> 1800</h2>
               </div>
               <div class="name">
               <img src={l3} alt="Students" />

                <h2> Ishita Das</h2>
               </div>
               <div class="badge">
                       <div class="icn"><i class="fa-solid fa-award fa-2xl"  style={{ color: '#a80000' }}></i></div>
                     
                       <div class="icn"><i class="fa-solid fa-medal fa-2xl"  style={{ color: ' #b30083' }}></i></div>
               </div>
               <div class="book">
                <h2> 09</h2>
               </div>
               <div class="task">
                <h2> 39</h2>
               </div>


               <div class="rank ">
                <h2> 04</h2>
               </div>
               <div class="points">
                <h2> 1600</h2>
               </div>
               <div class="name">
               <img src={l4} alt="Students" />

                <h2> Golam Raisul</h2>
               </div>
               <div class="badge">
                      
                       <div class="icn"><i class="fa-solid fa-star fa-2xl"  style={{ color: ' #0d8c62' }} ></i></div>
                      
               </div>
               <div class="book">
                <h2> 09</h2>
               </div>
               <div class="task">
                <h2> 30</h2>
               </div>



               <div class="rank ">
                <h2> 05</h2>
               </div>
               <div class="points">
                <h2> 1600</h2>
               </div>
               <div class="name">
               <img src={l5} alt="Students" />

                <h2> Rifat Uddin</h2>
               </div>
               <div class="badge">
                <div class="icn"><i class="fa-solid fa-star fa-2xl" style={{ color: ' #0d8c62' }}></i></div>
               </div>
               <div class="book">
                <h2> 02</h2>
               </div>
               <div class="task">
                <h2> 30</h2>
               </div>



               <div class="rank ">
                <h2> 06</h2>
               </div>
               <div class="points">
                <h2> 1000</h2>
               </div>
               <div class="name">
               <img src={l6} alt="Students" />

                <h2> Nazim Istiaque</h2>
               </div>
               <div class="badge">
                <div class="icn"><i class="fa-solid fa-star fa-2xl" style={{ color: ' #0d8c62' }}></i></div>
               </div>
               <div class="book">
                <h2> 01</h2>
               </div>
               <div class="task">
                <h2> 20</h2>
               </div>






             
               
            </div>
        </section>

    </main>
    </body>
    </>
  )
}

export default LeaderBoard;