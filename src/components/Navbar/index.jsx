import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import './styles.css';
import lg from '../images/logo.png';
import { auth } from "../../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



function Navbar() {
	const [user, setUser] = useState(null);
	const navigate = useNavigate("");

  	useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    // Cleanup the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("signout succesfully");
		navigate("/")
      })
      .catch((Error) => console.log(Error));
  };
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header className="navheader">
			<div className="logo"><img src={lg} alt="LOGO"/></div>
			<nav ref={navRef}>
				<a href="/Main">Home</a>
				<a href="./School">School</a>
				<a href="/College">College</a>
				<a href="/University">University</a>
                <a href="/home">Blog</a>
                <a href="/LeaderBoard">LeaderBoard</a>
                <a href="/Challenge">Challenge</a>
                <a href="/Competition">Events</a>
				
				{user && (
					<div>
					<p class="text-black">{`Welcome ${user.email}`}</p>	
				</div>	
				
              )}
			   <a
                  class="text-violet-600"
                  onClick={userSignOut}
                  to="/"
                >
                  Log Out
                </a>
		
			 
				
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;



// import React, { useState } from "react";
// import "./styles.css";
// import {
//   FaFacebookSquare,
//   FaInstagramSquare,
//   FaSignInAlt,
//   FaSignOutAlt,
//   FaUserAlt,
//   FaYoutubeSquare,
// } from "react-icons/fa";
// import { GiHamburgerMenu } from "react-icons/gi";

// import { NavLink } from "react-router-dom";

// const Navbar = () => {
//   const [showMediaIcons, setShowMediaIcons] = useState(false);
//   return (
//     <>
//       <nav className="main-nav">
//         {/* 1st logo part  */}
//         <div className="logo">
//           {/* <h2>
//             <span>T</span>hapa
//             <span>T</span>echnical
//           </h2> */}
//           <img src="./assets/images/log.png" alt="Porbo Shobai"></img>
//         </div>

//         {/* 2nd menu part  */}
//         <div
//           className={
//             showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
//           }>
//           <ul>
//             <li>
//               <NavLink to="/">Home</NavLink>
//             </li>
//             <li>
//               <NavLink to="/school">School</NavLink>
//             </li>
//             <li>
//               <NavLink to="/service">College</NavLink>
//             </li>
//             <li>
//               <NavLink to="/contact">University</NavLink>
//             </li>
//             <li>
//               <NavLink to="/contact">Quiz</NavLink>
//             </li>
//             <li>
//               <NavLink to="/">Blog</NavLink>
//             </li>
//             <li>
//               <NavLink to="/contact">LeaderBoard</NavLink>
//             </li>
//           </ul>
//         </div>

//         {/* 3rd social media links */}
//         <div className="social-media">
//           <ul className="social-media-desktop">
//             <li>
//               <a
//                 href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
//                 target="_thapa">
//                 <FaUserAlt className="facebook" />
//               </a>
//             </li>
//             <li>
//               <a
//                 href="https://www.instagram.com/thapatechnical/"
//                 target="_thapa">
//                 <FaSignOutAlt className="instagram" />
//               </a>
//             </li>
//             {/* <li>
//               <a
//                 href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
//                 target="_thapa">
//                 <FaSignOutAlt className="youtube" />
//               </a>
//             </li> */}
//           </ul>

//           {/* hamburget menu start  */}
//           <div className="hamburger-menu">
//             <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
//               <GiHamburgerMenu />
//             </a>
//           </div>
//         </div>
//       </nav>

//       {/* hero section  */}
//       {/* <section className="hero-section">
//         <p>Welcome to </p>
//         <h1>Thapa Technical</h1>
//       </section> */}
//     </>
//   );
// };

// export default Navbar;
