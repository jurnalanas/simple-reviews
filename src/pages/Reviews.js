import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReviewItem from '../components/ReviewItem';
import LoadingSpinner from '../shared/components/UIElements/LoadingSpinner';
import ErrorModal from '../shared/components/UIElements/ErrorModal';
import { useHttpClient } from '../shared/hooks/http-hook';

const Reviews = () => {
  const reviewId = useParams().reviewId;
  const [dataFetched, setFetchData] = useState(false);
  const [reviewItem, setReviewItem] = useState({});
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  useEffect(() => {
    // we use array index as id because there is a unique id property on Review Item response API
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
    return (
    <div className="bg-gray-200 pt-10 h-screen">
      <div className="container mx-auto">
        <div className="px-4 mb-16 text-gray-800 leading-normal">
          <div className="px-4 mb-16 text-gray-800 leading-normal">
            {isLoading && <LoadingSpinner asOverlay />}
            {!isLoading && dataFetched &&
              <ReviewItem
                profileName={reviewItem.profile_name}
                reviewText={reviewItem.review_text}
                reviewRating={reviewItem.review_rating}
                reviewTitle={reviewItem.review_title}
                product={reviewItem.product}
                helpfulCount={reviewItem.helpful_count}
                totalComments={reviewItem.total_comments}
                url={reviewItem.url}
                reviewCountry={reviewItem.review_country}
                reviewedAt={reviewItem.reviewed_at}
                productCompany={reviewItem.product_company}
              />
            }
          </div>
        </div>
      </div>
    </div>
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
