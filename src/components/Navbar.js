import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from "react-router-dom";

const Navbar = props => {
  let history = useHistory();
  return (
    <nav className="container mx-auto pt-4 mb-5">
      <div className="flex px-7">
          <button className="mx-2 px-1 m-auto" onClick={() => history.goBack()}>
            Back
          </button>
        <input
          type="search"
          className="w-full bg-purple-white shadow rounded border-0 p-2"
          placeholder="Search by name..."
          value={props.searchTerm}
          onChange={props.onSearch}
        />
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  onSearch: PropTypes.func,
  searchTerm: PropTypes.string,
};


export default Navbar;
