import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import tastie from "../../assets/Images/tastie.png";


const testimonials = [
  {
    
    img:tastie,
    name: "John Smith",

    message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },


  {
    img:tastie,
    name: "John Smith",

    message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },



  {
    img:tastie,
    name: "John Smith",

    message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },


  {
    img:tastie,
    name: "John Smith",

    message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },




 
];

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Show 2 cards by default
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600, // For screens 600px or smaller
        settings: {
          slidesToShow: 1, // Show only 1 card
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (

    <section className="Testimonial">
<div className="container">
    <div className="main-Testimonial">
        <div className="Testimonial-taital">
            <h2>Travellers Experiences</h2>
        </div>

        <div className="Testimonial-box">
        <div className="testimonial-slider">
      <Slider {...settings}  className="hello">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <div className="testimonial-name-tital">
            <svg xmlns="http://www.w3.org/2000/svg" width="82" height="66" viewBox="0 0 82 66" fill="none">
  <g clip-path="url(#clip0_90_1335)">
    <path d="M22.7073 36.0693C22.2887 36.0693 21.9387 36.0693 21.5951 36.0693C15.1465 36.0693 8.69176 36.0693 2.24324 36.0693C0.48114 36.0693 0 35.5971 0 33.8405C0 23.2949 0 12.7555 0 2.21616C0 0.497377 0.487389 0 2.16825 0C12.6659 0 23.1572 0 33.6548 0C35.3044 0 35.7918 0.484785 35.7918 2.12172C35.7918 13.1836 35.8543 24.2392 35.7668 35.3012C35.6481 50.0588 24.2882 63.2613 9.83525 65.553C8.16063 65.8174 6.45477 65.9056 4.76141 65.9937C3.54919 66.0567 2.99307 65.4774 2.98682 64.2434C2.96807 61.0766 2.96807 57.9035 2.98682 54.7366C2.99307 53.4963 3.52419 52.9927 4.75516 52.9486C13.9906 52.5897 21.0389 46.3882 22.6011 37.2214C22.6511 36.8751 22.6636 36.5289 22.7073 36.0693ZM3.16178 3.15425C3.16178 13.1081 3.16178 23.0115 3.16178 32.9654C3.62417 32.9654 4.00533 32.9654 4.3865 32.9654C10.9038 32.9654 17.4148 32.9654 23.932 32.9654C25.3754 32.9654 25.9066 33.5257 25.8691 34.9801C25.7816 38.191 25.1005 41.276 23.6134 44.1154C20.0517 50.9087 14.4904 54.8625 6.91092 55.9077C6.61099 55.9517 6.10485 56.2476 6.10485 56.4365C6.04237 58.5519 6.06111 60.6737 6.06111 62.9528C7.50453 62.7387 8.81048 62.6254 10.0852 62.3484C23.4759 59.4837 32.6613 48.1007 32.6988 34.319C32.7238 24.2644 32.705 14.2036 32.705 4.149C32.705 3.83421 32.68 3.51941 32.6613 3.15425C22.801 3.15425 13.0033 3.15425 3.16178 3.15425Z" fill="#FF7F47"/>
    <path d="M68.9904 36.0693C68.4968 36.0693 68.1531 36.0693 67.8094 36.0693C61.3609 36.0693 54.9061 36.0693 48.4576 36.0693C46.6955 36.0693 46.2081 35.5908 46.2081 33.8405C46.2081 23.3012 46.2081 12.7555 46.2081 2.21616C46.2081 0.497377 46.6955 0 48.3701 0C58.8615 0 69.3591 0 79.8504 0C81.5188 0 81.9937 0.491081 81.9937 2.21616C81.9937 12.8562 82 23.4963 81.9937 34.1364C81.9812 50.1343 70.9525 63.1731 55.2748 65.6852C53.8251 65.9182 52.338 65.9496 50.8633 65.9937C49.7698 66.0315 49.1949 65.4586 49.1825 64.3316C49.1575 61.0955 49.1512 57.8657 49.1825 54.6296C49.1949 53.4334 49.7511 52.9738 51.0508 52.936C59.3739 52.6716 66.3098 47.1564 68.4031 39.1039C68.653 38.1532 68.778 37.1647 68.9904 36.0693ZM49.3699 3.16055C49.3699 13.1144 49.3699 23.0178 49.3699 32.9654C49.8323 32.9654 50.2197 32.9654 50.6009 32.9654C57.1181 32.9654 63.6292 32.9654 70.1464 32.9654C71.5461 32.9654 72.071 33.5068 72.0585 34.8982C71.9522 44.9402 64.6039 53.7733 54.7999 55.6495C53.9689 55.8069 52.8066 55.7314 52.4005 56.2476C51.9693 56.7954 52.2568 57.9161 52.2505 58.7849C52.238 60.1259 52.2505 61.4732 52.2505 62.9654C53.7189 62.745 55.0311 62.6254 56.3058 62.3484C69.7278 59.4649 78.9007 48.0441 78.9194 34.2057C78.9319 24.2141 78.9194 14.2225 78.9194 4.22455C78.9194 3.87828 78.9194 3.532 78.9194 3.16055C69.0029 3.16055 59.1989 3.16055 49.3699 3.16055Z" fill="#FF7F47"/>
  </g>
  <defs>
    <clipPath id="clip0_90_1335">
      <rect width="82" height="66" fill="white"/>
    </clipPath>
  </defs>
</svg>
                
                <p>{testimonial.message}</p>
             
                <div className="testimonial-dp">
                    <img src={testimonial.img} alt="" />
                </div>
                <h2>{testimonial.name}</h2>
            </div>
        
          </div>
        ))}
      </Slider>
    </div>
        </div>
    </div>
</div>


    </section>
 
  );
};

export default TestimonialSlider;
