import React from 'react';
import Review from './Review';

const ReviewList = ({ reviewList, musicalId }) => {
    return (
        <div>
            {reviewList
                .filter(musicalReview => musicalReview.musicalId === musicalId)
                .reverse()
                .map(musicalReview => (
                    <Review musicalReview={musicalReview} key={musicalReview.musicalId}/>
                ))}
        </div>
    );
};

export default ReviewList;