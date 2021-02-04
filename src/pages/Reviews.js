import React from 'react';
import Navbar from "../components/Navbar";
import { useParams } from 'react-router-dom';
import Contents from "../components/Contents";

const Reviews = () => {
  const reviewId = useParams().reviewId;
  console.log({reviewId})
  return (
    <div className="bg-gray-200">
      <Navbar />
      <div className="container mx-auto">
        <div className="px-4 mb-16 text-gray-800 leading-normal">
          <Contents />
        </div>
      </div>
    </div>
  );
}

export default Reviews;
