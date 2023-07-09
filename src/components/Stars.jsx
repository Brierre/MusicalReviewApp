import {FaStar} from 'react-icons/fa';
import {useState} from 'react';

const Stars = props => {
    const [rating, setRating] = useState(1);
    const [hover, setHover] = useState(1);

    return (
        <div>
            {[...Array(5)].map((_star, index) => {
                const ratingValue = index + 1;
                return (
                    <label key={index} for='radio'>
                        <input
                            type='radio'
                            class='radio-custom'
                            name='rating'
                            value={ratingValue}
                            onClick={() => {
                                setRating(ratingValue);
                                props.changeRating(ratingValue);
                            }}/> 
                        <FaStar
                            className='star'
                            color={ratingValue <= (hover || rating) ? '#ffc107' : 'gray'}
                            size={20}
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeave={() => setHover(null)}/>
                    </label>
                );
            })}
            {rating && <p>Your Rating: {rating} star(s).</p>}
        </div>
    );
};

export default Stars;