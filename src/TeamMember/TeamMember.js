import React from 'react';
import './TeamMember.css';
import { FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

function TeamMember({ name, role, avatar, linkedin, email, phone }) {
  return (
    <div className="team-member">
      <img src={avatar} alt={`${name}'s avatar`} className="avatar" />
      <h3>{name}</h3>
      <p>{role}</p>
      <div className="contact-icons">
        <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${name}'s LinkedIn`}>
          <FaLinkedin />
        </a>
        <a href={`mailto:${email}`} aria-label={`Email ${name}`}>
          <FaEnvelope />
        </a>
        <a href={`tel:${phone}`} aria-label={`Call ${name}`}>
          <FaPhone />
        </a>
      </div>
    </div>
  );
}

export default TeamMember;
