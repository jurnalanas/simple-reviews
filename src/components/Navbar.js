import React from 'react';

const Navbar = () => {
  return (
    <nav className="container mx-auto pt-4">
      <div className="flex px-7">
        <input type="search" className="w-full bg-purple-white shadow rounded border-0 p-2" placeholder="Search by name..." />
      </div>
    </nav>
  )
}

export default Navbar;
