import React, { useContext } from 'react';  
import './ContactUs.css';
import p1 from '../assets/avatars/team_member_1.jpg';
import p2 from '../assets/avatars/team_member_2.jpg';
import p3 from '../assets/avatars/team_member_3.jpg';
import p4 from '../assets/avatars/team_member_4.jpg';
import TeamMember from '../TeamMember/TeamMember';
import Navbar from '../Navbar/Navbar';
import { ThemeContext } from '../Context/ThemeContext'; // Import ThemeContext

const teamMembers = [
  {
    name: 'Nidhi Kamath',
    role: 'Frontend Developer',
    avatar: p1,
    linkedin: 'https://www.linkedin.com/in/nidhikamath21',
    email: 'nidhikamath@vt.edu',
    phone: '+1 123 456 7890',
  },
  {
    name: 'Sanjeev P',
    role: 'Frontend Developer',
    avatar: p2,
    linkedin: 'https://www.linkedin.com/in/sanjeevp26',
    email: 'sanjeev26@vt.edu',
    phone: '+1 987 654 3210',
  },
  {
    name: 'Ruba Vignesh B',
    role: 'Backend Developer',
    avatar: p3,
    linkedin: 'https://www.linkedin.com/in/rubavignesh',
    email: 'rubavignesh@vt.edu',
    phone: '+1 555 123 4567',
  },
  {
    name: 'Kunal Mahato',
    role: 'Backend Developer',
    avatar: p4,
    linkedin: 'https://www.linkedin.com/in/kunalmahato',
    email: 'kunalmahato@vt.edu',
    phone: '+1 444 987 6543',
  },
];

function ContactUs() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext); // Use ThemeContext

  return (
    <div className={`contactus-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <div className="contact-content">
        <h1>Contact Us</h1>
        <p>
          We are a team of passionate developers, designers, and creators who believe in the power of technology to solve problems and inspire innovation. Our mission is to build amazing solutions with modern technology.
        </p>
        <div className="team-section">
          <h2>Meet Our Team</h2>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <TeamMember
                key={index}
                name={member.name}
                role={member.role}
                avatar={member.avatar}
                linkedin={member.linkedin}
                email={member.email}
                phone={member.phone}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
