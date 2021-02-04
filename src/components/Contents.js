import React from 'react';
import ReviewCard from './ReviewCard';

const Contents = props => {
  // if (props.items.length === 0) {
  //   return (
  //     <div>
  //       <h2>No Reviews found</h2>
  //     </div>
  //   )
  // }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <ReviewCard
        profileName='profileName'
        reviewRating='5'
        reviewTitle='Title'
      />
    </div>
  )
}

export default Contents;
