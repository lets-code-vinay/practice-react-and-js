// import React from "react";
// import Carousel from "react-material-ui-carousel";
// import { Paper, Buton } from "@material-ui/core";

// const About = () => {
//   return (
//     <>
//       {/* // <!-- about --> */}
//       <div id="about" className="container about">
//         <div className="col-md-6 about-left">
//           <div id="owl-demo1" className="owl-carousel owl-carousel2">
//             <div className="item">
//               <div className="about-left-grid">
//                 <h2>
//                   Hi! I'm <span>Vinay</span>
//                 </h2>
//                 <p>
//                   Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
//                   do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//                   Ut enim ad minim veniam, quis nostrud exercitation ullamco
//                   laboris nisi ut aliquip ex ea commodo consequat. Duis aute
//                   irure dolor in reprehenderit in voluptate velit esse cillum
//                   dolore eu fugiat nulla pariatur. Excepteur sint occaecat
//                   cupidatat non proident, sunt in culpa qui officia deserunt
//                   mollit anim id est laborum. Sed ut perspiciatis.
//                 </p>
//                 <ul>
//                   <li>
//                     <a className="a-btn-a scroll" href="#port">
//                       My Work
//                     </a>
//                   </li>
//                   <li>
//                     <a className="a-btn-h scroll" href="#contact">
//                       Hire Me
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//             <div className="item">
//               <div className="about-left-grid">
//                 <h2>
//                   Hi! I'm <span>Rob Lee</span>
//                 </h2>
//                 <p>
//                   Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
//                   do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//                   Ut enim ad minim veniam, quis nostrud exercitation ullamco
//                   laboris nisi ut aliquip ex ea commodo consequat. Duis aute
//                   irure dolor in reprehenderit in voluptate velit esse cillum
//                   dolore eu fugiat nulla pariatur. Excepteur sint occaecat
//                   cupidatat non proident, sunt in culpa qui officia deserunt
//                   mollit anim id est laborum. Sed ut perspiciatis.
//                 </p>
//                 <ul>
//                   <li>
//                     <a className="a-btn-a scroll" href="#port">
//                       My Work
//                     </a>
//                   </li>
//                   <li>
//                     <a className="a-btn-h scroll" href="#contact">
//                       Hire Me
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//             <div className="item">
//               <div className="about-left-grid">
//                 <h2>
//                   Hi! I'm <span>ROB LEE</span>
//                 </h2>
//                 <p>
//                   Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
//                   do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//                   Ut enim ad minim veniam, quis nostrud exercitation ullamco
//                   laboris nisi ut aliquip ex ea commodo consequat. Duis aute
//                   irure dolor in reprehenderit in voluptate velit esse cillum
//                   dolore eu fugiat nulla pariatur. Excepteur sint occaecat
//                   cupidatat non proident, sunt in culpa qui officia deserunt
//                   mollit anim id est laborum. Sed ut perspiciatis.
//                 </p>
//                 <ul>
//                   <li>
//                     <a className="a-btn-a scroll" href="#port">
//                       My Work
//                     </a>
//                   </li>
//                   <li>
//                     <a className="a-btn-h scroll" href="#contact">
//                       Hire Me
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="col-md-6 about-right"></div>
//         <div className="clearfix"></div>
//         {/*
//           <script src="js/owl.carousel.js"></script>
//           <script>
//             $(document).ready(function () {
//               $("#owl-demo1").owlCarousel({
//                 items: 1,
//                 lazyLoad: false,
//                 autoPlay: true,
//                 navigation: false,
//                 navigationText: false,
//                 pagination: true,
//               });
//             });
//           </script>
//            <!-- Feedback -->
//            <script>
//             $(document).ready(function () {
//               $("#owl-demo3").owlCarousel({
//                 items: 1,
//                 lazyLoad: false,
//                 autoPlay: true,
//                 navigation: false,
//                 navigationText: true,
//                 pagination: true,
//               });
//             });
//           </script> */}
//       </div>
//       {/* <!-- /about --> */}
//     </>
//   );
// };
// export default About;

import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@material-ui/core";
import ImgRender from "../../Component/ImgRender";
import { Images } from "../../Constants/ImgContainer";

export default function About(props) {
  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
      src: Images.VinayImage,
      alt: "alt1",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
      src: Images.BackgroundImage,
      alt: "img",
    },
  ];

  return (
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <Paper style={{ width: "80%", justifyContent: "center" }}>
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>
      <img src={props.src} alt={props.alt} />

      <Button className="CheckButton">Check it out!</Button>
    </Paper>
  );
}
