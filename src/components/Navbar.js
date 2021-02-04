import React from 'react';
import { useHistory } from "react-router-dom";

const Navbar = () => {
  let history = useHistory();
  return (
    <nav className="container mx-auto pt-4 mb-5">
      <div className="flex px-7">
          <button className="mx-2 px-1 m-auto" onClick={() => history.goBack()}>
            Back
          </button>
        <input type="search" className="w-full bg-purple-white shadow rounded border-0 p-2" placeholder="Search by name..." />
      </div>
    </nav>
  )
}

export default Navbar;
