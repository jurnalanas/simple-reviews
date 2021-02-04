import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ReviewCard from './ReviewCard';
import LoadingSpinner from '../shared/components/UIElements/LoadingSpinner';
import ErrorModal from '../shared/components/UIElements/ErrorModal';
import { useHttpClient } from '../shared/hooks/http-hook';

const Contents = props => {
  const [dataFetched, setFetchData] = useState(false);
  const [reviewsData, setReviewsData] = useState([]);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const responseData = await sendRequest(process.env.REACT_APP_API_HOST);
        const dataList = await responseData['data'];
        setFetchData(true);
        setReviewsData(dataList || null);
      } catch (err) {}
    };
    fetchReviews();
  }, [sendRequest]);

  const result = !props.searchTerm
    ? reviewsData
    : reviewsData.filter(item => {
      return item.profile_name.toLowerCase().includes(props.searchTerm.toLocaleLowerCase())
  });

  if (dataFetched) {
    return (
      <>
        {isLoading && <LoadingSpinner asOverlay />}
        {!isLoading && dataFetched &&
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {result.map((item, index) => {
              const reviewRating = parseFloat(item.review_rating.split(' ')[0]);
              return (
                <ReviewCard
                  key={index}
                  id={index}
                  profileName={item.profile_name}
                  reviewRating={reviewRating}
                  reviewTitle={item.review_title}
                  reviewText={item.review_text}
                />
              )
            })}
          </div>
        }
        {!isLoading && dataFetched && reviewsData.length < 1 &&
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            No Result
          </div>
        }
      </>
    );
  } else {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {isLoading && <LoadingSpinner asOverlay />}
        {!isLoading &&
          <div className="container max-w-xl mx-auto">
            <ErrorModal error={error} onClear={clearError} />
          </div>
        }
      </div>
    );
  }
}

Contents.propTypes = {
  searchTerm: PropTypes.string
};

export default Contents;
