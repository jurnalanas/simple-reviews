import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import Contents from "../components/Contents";

const Home = () => {
 const [searchTerm, setSearchTerm] = useState("");
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="bg-gray-200">
      <Navbar onSearch={handleChange} searchTerm={searchTerm} />
      <div className="container mx-auto">
        <div className="px-4 mb-16 text-gray-800 leading-normal">
          <Contents searchTerm={searchTerm} />
        </div>
      </div>
    </div>
  );
}

export default Home;
