import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Rating from 'react-rating';

const ReviewCard = props => {
  return (
    <div className="w-full p-3">
      <div className="bg-white border rounded shadow">
        <div className="border-b p-3">
          <h2 className="font-bold uppercase text-gray-600">{props.profileName}</h2>
        </div>
        <div className="p-5">
          <Rating
            initialRating={props.reviewRating}
            readonly
          />
          <p className="text-gray-600 clearfix">{props.reviewTitle}</p>
          <div className="flex mt-4">
            <Link to={`/reviews/${props.id}`}>
              <button className="bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded text-sm text-white mr-1">
                Show review details
              </button>
            </Link>
            <Link to={`/reviews/${props.id}`}>
              <button className="bg-gray-500 hover:bg-gray-700 px-4 py-2 rounded text-sm text-white">
                Show review text
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

ReviewCard.propTypes = {
  profileName: PropTypes.string,
  reviewRating: PropTypes.number,
  id: PropTypes.number,
  reviewTitle: PropTypes.string,
};

export default ReviewCard;
