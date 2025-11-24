import React from 'react';
import { useLoaderData } from 'react-router';

const PostDetails = () => {
    const post = useLoaderData();
    console.log(post)
    return (
        <div>
            post details
        </div>
    );
};

export default PostDetails;