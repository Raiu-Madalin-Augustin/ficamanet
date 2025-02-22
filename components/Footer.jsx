import React from 'react';
import { AiFillHome, AiFillMail, AiFillPhone } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2025 Fic Amanet All rights reserved</p>
      <div className="icons">
        <span>
          <AiFillMail /> amanetfic@gmail.com
        </span>
        <span>
          <AiFillPhone /> +40 751 928 570
        </span>
        <span>
          <AiFillHome /> Arad, Calea Aurel Vlaicu nr.202
        </span>
      </div>

      <style jsx>{`
        .footer-container {
          text-align: center;
          padding: 20px;
          background-color: #f5f5f5;
          color: #324d67;
        }
        .icons {
          margin-top: 10px;
        }
        .icons span {
          display: inline-flex;
          align-items: center;
          margin-right: 1rem;
          font-size: 1rem;
        }
        .icons span svg {
          margin-right: 0.5rem;
          font-size: 1.2rem;
        }
        @media (max-width: 600px) {
          .icons {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .icons span {
            margin: 0.5rem 0; /* vertical spacing */
          }
        }
      `}</style>
    </div>
  );
};

export default Footer;
