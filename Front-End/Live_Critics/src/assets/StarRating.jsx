
import {React,useState} from 'react';
import {StarRating,} from 'react-star-rating-element';

function Star() {
    const [rating, setRating] = useState(0);

    return(
        <div>
            <StarRating 
                ratingValue={rating}
                changeRating={setRating}
                starEmptyColor="#999999"
                starSpacing={10}
                starDimension={20}
            />
        </div>
    )
}

export default Star