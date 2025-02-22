import React from 'react';
import Link from 'next/link';

import { useStateContext} from '../context/StateContext';

const Navbar = () => {
  const {  totalQuantities } = useStateContext();

  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">FIC Amanet</Link>
      </p>

    </div>
  )
}

export default Navbar