import React from "react";
import avatar1 from '../../assets/Images/ac1.png';
import avatar2 from '../../assets/Images/ac2.png';
import avatar3 from '../../assets/Images/ac3.png';
import avatar4 from '../../assets/Images/ac4.png';

const About3 = () => {
  const teamMembers = [
    { id: 1, name: "John Smith", role: "Travel Agent", avatar: avatar1 },
    { id: 2, name: "Olivia", role: "Travel Agent", avatar: avatar2 },
    { id: 3, name: "Henry", role: "Travel Agent", avatar: avatar3 },
    { id: 4, name: "Ava", role: "Travel Agent", avatar: avatar4 },
  ];

  return (
    <>
      <section className='sec-3'>
        <div className="container">
          <div className="main-sec-3">
            <div className="main-sec-3-heading">
              <h1>Our Team</h1>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              <p>Lorem Ipsum has been the industry's</p>
            </div>
            <div className="main-sec-3-card-sec">
              {teamMembers.map((member) => (
                <div className="main-sec-3-card-sec-card-1" key={member.id}>
                  <div className="main-sec-3-card-sec-card-1-img">
                    <img src={member.avatar} alt={member.name} />
                  </div>
                  <div className="main-sec-3-card-sec-card-1-name">
                    <h3>{member.name}</h3>
                    <p>{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About3;
