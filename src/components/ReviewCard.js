import React from 'react';
import PropTypes from 'prop-types';

const ReviewCard = props => {
  return (
    <div className="w-full p-3">
      <div className="bg-white border rounded shadow">
        <div className="border-b p-3">
          <h5 className="font-bold uppercase text-gray-600">{props.profileName}</h5>
        </div>
        <div className="p-5">
          <canvas id="chartjs-0" className="chartjs" width="undefined" height="undefined" />
        </div>
      </div>
    </div>
  )
}

ReviewCard.propTypes = {
  profileName: PropTypes.string,
  reviewRating: PropTypes.number,
  reviewTitle: PropTypes.string,
};

export default ReviewCard;