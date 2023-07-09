function Review({ musicalReview }) {
    const displayStars = stars => {
        let starsDisplay = '';
        for (let i = 0; i < stars; i++) {
            starsDisplay += '⭐';
        }
        return starsDisplay;
    };

    return (
        <div className="review">
            <p>
                {musicalReview.review}
                <br />
                {displayStars(musicalReview.stars)}
                <br />
                <span className="mt-1 fw-lighter fst-italic">
                    {musicalReview.author}
                </span>
            </p>
        </div>
    );
}

export default Review;