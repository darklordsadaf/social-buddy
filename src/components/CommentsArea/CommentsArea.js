import React, { useState, useEffect } from 'react';
import Comments from '../Comments/Comments';
import { useParams } from 'react-router-dom';

const CommentsArea = () => {
    const [comments, setComments] = useState([]);

    const { postId } = useParams();
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
            .then(res => res.json())
            .then(data => setComments(data))
    }, [])
    return (
        <div>
            {
                comments.map(comment => <Comments key={comment.id} comment={comment}></Comments>)
            }

        </div>
    );
};

export default CommentsArea;