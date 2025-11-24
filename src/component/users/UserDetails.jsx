import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetails = () => {

    const userDetails = useLoaderData();
    console.log(userDetails)
    return (
        <div>
            <h2>this is user details totalPage</h2>
        </div>
    );
};

export default UserDetails;