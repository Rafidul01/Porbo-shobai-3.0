import React from 'react'
import './styles.css';
import aiHead from '../img/aihead.png';

import Navbar from '../../components/Navbar/index.jsx';
// import './Script.jsx';


const Challenge = () => {
          
          
  return (
    <>
    
    <Navbar/>
    <div>
    <body>

<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@700&family=Noto+Sans+JP:wght@500&family=Poppins:wght@300;400;600&display=swap" rel="stylesheet"/>

            
<div class="head">
    <img src={aiHead} alt="Challenge Header"/>
</div>


<div class="app_back">

<h1>Welcome to the Battle!</h1>

<div class="quiz">
<h2 id="question">Question goes here.</h2>
<div id="answer-option-btn" class="answerBackground">
<button class="btn">Answer 1</button>
<button class="btn">Answer 2</button>
<button class="btn">Answer 3</button>
<button class="btn">Answer 4</button>



</div>
<button id="next-btn">Next</button>
</div>
</div>

</body>
    </div>
    </>
  )
}

export default Challenge