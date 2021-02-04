import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ReviewItem = props => {

  return (
    <div className="lg:w-1/2 p-3 m-auto bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          "{props.reviewTitle}"
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          {props.profileName}
        </p>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Review Rating
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {props.reviewRating}
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Product
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {props.product}
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Helpful Count
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {props.helpfulCount}
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Total Comments
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {props.totalComments}
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Review Country
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {props.reviewCountry}
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Reviewed At
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {props.reviewedAt}
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Company
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {props.productCompany}
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              URL
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <a href={props.url} alt='product url'>
                {props.url}
              </a>
            </dd>
          </div>
          <Link to={`/`} className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <button className="bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded text-sm text-white mr-1">
              Go to Homepage
            </button>
          </Link>
        </dl>
      </div>
    </div>
  )
}

ReviewItem.propTypes = {
  profileName: PropTypes.string,
  reviewText: PropTypes.string,
  reviewRating: PropTypes.string,
  id: PropTypes.number,
  reviewTitle: PropTypes.string,
  product: PropTypes.string,
  helpfulCount: PropTypes.string,
  totalComments: PropTypes.string,
  url: PropTypes.string,
  reviewCountry: PropTypes.string,
  reviewedAt: PropTypes.string,
  productCompany: PropTypes.string
};

export default ReviewItem;
