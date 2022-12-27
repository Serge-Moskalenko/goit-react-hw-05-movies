import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ApiServise } from "ApiServise"

const Api = new ApiServise();

export const Reviews = () => {
    const [reviews, setReviews] = useState(null);
    const { movieId } = useParams();

    useEffect(() => {
        Api.fetchReviews(movieId).then(({ data: { results } }) => { setReviews(results); })
    }, [movieId]);

    return (
        <>
            {reviews && (
                <ul>
                    {reviews.map(({ id, author, content }) => (
                        <li key={id}>
                            <b>Author: {author}</b>
                            <p>{content}</p>
                        </li>
                    ))}
                </ul>)};
        </>);
};

export default Reviews