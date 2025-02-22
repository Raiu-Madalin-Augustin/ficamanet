import React from 'react';
import Link from 'next/link';
import { useStateContext } from '../context/StateContext';

const Navbar = () => {
  const { totalQuantities } = useStateContext();

  return (
    <>
      <div className="navbar-container">
        <p className="logo">
          <Link href="/">FIC Amanet</Link>
        </p>
      </div>

      <style jsx>{`
        .navbar-container {
          width: 100%; /* Ensures full width */
          display: flex;
          align-items: center;
          padding: 0.5rem 1rem;
          background-color: #fff;
          border-bottom: 2px solid #ddd; /* Underborder */
        }

        .logo {
          margin: 0;
        }

        .logo a {
          font-size: 1.5rem;
          font-weight: bold;
          color: #000;
          text-decoration: none;
        }

        .logo a:hover {
          color: #555;
        }
      `}</style>
    </>
  );
};

export default Navbar;
