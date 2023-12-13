import React from 'react'
import './styles.css'
import eventhead from '../img/hackhathonHead.png';
import e1 from '../img/iiuc copy.png';
import e2 from '../img/lab.jpeg';
import e3 from '../img/muslimh.jpeg';
import e4 from '../img/olym.png';
import e5 from '../img/ihs.png';

import Navbar from '../../components/Navbar';
import Space from '../../components/common/Space';





const Competition = () => {
  return (
    <>
    <Navbar/>
    <div>
    <Space/>

<div class="Eventhead">
    <img src={eventhead} alt="Competition"/>
</div>

    <section class="Eventmain">
        
       


        <div class="event">
            <div class="event-img">
                <img src={e1} alt="Competition"/>
            </div>
            <div class="event-title">
                <h2 class="event-name">আই-আই-ইউ-সি টেক ফেস্ট ২০২৩.</h2>
                <div class="event-infos">
                <p class="event-info">আন্তর্জাতিক ইসলামিক বিশ্ববিদ্যালয় এর বিজ্ঞান ও প্রকৌশল অনুষদ (FSE) ...</p>
                </div>
            </div>
            <div class="dateAndview">
              <p>২৩শে ডিসেম্বর, ২০২৩</p>
              <a href="https://iscm.edu.bd/" target="_blank"><button class="event-visit-btn" role="button">View</button></a>
            </div>
        </div>
        <div class="event">
            <div class="event-img">
                <img src={e2} alt="Competition"/>
            </div>
            <div class="event-title">
                <h2 class="event-name">লিবারেট ল্যাব'স এ-আই হ্যাকাথন</h2>
                <div class="event-infos">
                <p class="event-info">লিবারেট ল্যাবস - এ-আই হ্যাকাথন এ-আই উৎসাহীদের জন্য একটি প্ল্যাটফর্ম ...</p>
                </div>
            </div>
            <div class="dateAndview">
              <p>১৫ই জানুয়ারী, ২০২৪</p>
              <a href="https://liberate-labs.com/" target="_blank"><button class="event-visit-btn" role="button">View</button></a>
            </div>
        </div>
     
        <div class="event">
            <div class="event-img">
                <img src={e3} alt="Competition"/>
            </div>
            <div class="event-title">
                <h2 class="event-name">মুসলিম হাই স্কুল বিতর্ক প্রতিযোগিতা</h2>
                <div class="event-infos">
                <p class="event-info">মুসলিম হাই স্কুল, চট্টগ্রাম। আন্তঃস্কুল বিতর্ক প্রতিযোগিতা আয়োজন করছে ...</p>
                </div>
            </div>
            <div class="dateAndview">
              <p>১০ই জানুয়ারী, ২০২৪</p>
              <a href="https://liberate-labs.com/" target="_blank"><button class="event-visit-btn" role="button">View</button></a>
            </div>
        </div>
        <div class="event">
            <div class="event-img">
                <img src={e4} alt="Competition"/>
            </div>
            <div class="event-title">
                <h2 class="event-name">২২তম বাংলাদেশ গণিত উৎসব</h2>
                <div class="event-infos">
                <p class="event-info">ডাচ-বাংলা ব্যাংক - প্রথম আলো - বাংলাদেশ গণিত উৎসব ...</p>
                </div>
            </div>
            <div class="dateAndview">
              <p>৩১শে ডিসেম্বর, ২০২৩</p>
              <a href="https://liberate-labs.com/" target="_blank"><button class="event-visit-btn" role="button">View</button></a>
            </div>
        </div>

        <div class="event">
            <div class="event-img">
                <img src={e5} alt="Competition"/>
            </div>
            <div class="event-title">
                <h2 class="event-name">ইন্টারন্যাশনাল হোপ স্কুল বাংলাদেশ</h2>
                <div class="event-infos">
                <p class="event-info">ইন্টারন্যাশনাল হোপ স্কুল বাংলাদেশ তাদের ভর্তি কার্যক্রম ...</p>
                </div>
            </div>
            <div class="dateAndview">
              <p>২২শে ডিসেম্বর, ২০২৩</p>
              <a href="https://liberate-labs.com/" target="_blank"><button class="event-visit-btn" role="button">View</button></a>
            </div>
        </div>

    </section>
        
    </div>
    </>
  )
}

export default Competition