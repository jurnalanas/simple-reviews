import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../shared/components/UIElements/LoadingSpinner';
import ErrorModal from '../shared/components/UIElements/ErrorModal';
import { useHttpClient } from '../shared/hooks/http-hook';

const Reviews = () => {
  const reviewId = useParams().reviewId;
  const [dataFetched, setFetchData] = useState(false);
  const [reviewItem, setReviewItem] = useState({});
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const responseData = await sendRequest(process.env.REACT_APP_API_HOST);
        const dataList = await responseData['data'];
        setFetchData(true);
        setReviewItem(dataList[reviewId]);
      } catch (err) {}
    };
    fetchProducts();
  }, [reviewId, sendRequest]);

  if (dataFetched) {
    console.log({reviewItem})
    return (
      <>
        {isLoading && <LoadingSpinner asOverlay />}
        {!isLoading && dataFetched &&
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {reviewItem.product}
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

export default Reviews;
