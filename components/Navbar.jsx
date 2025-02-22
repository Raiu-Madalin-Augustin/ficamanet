import React from 'react';
import Link from 'next/link';
import { useStateContext } from '../context/StateContext';

const Navbar = () => {
  const { totalQuantities } = useStateContext();

  return (
    <>
      <div className="navbar-container">
        <div className="nav-left">
          <p className="logo">
            <Link href="/">
              <a>FIC Amanet</a>
            </Link>
          </p>
        </div>
        <div className="nav-right">
        <p className="logo">

          <Link href="/despre">
            <a className="nav-link">Despre</a>
          </Link>
          </p>
        </div>
      </div>

      <style jsx>{`
        .navbar-container {
          width: 100%; /* Ensures full width */
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.5rem 1rem;
          background-color: #fff;
          border-bottom: 2px solid #ddd; /* Underborder */
        }

        .nav-left {
          /* Left side (logo) */
        }

        .nav-right {
          display: flex;
          align-items: center;
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

        .nav-link {
          font-size: 1.2rem;
          color: #000;
          text-decoration: none;
          margin-left: 1rem;
          padding: 0.5rem;
          transition: color 0.3s ease;
        }

        .nav-link:hover {
          color: #555;
        }
      `}</style>
    </>
  );
};

export default Navbar;
