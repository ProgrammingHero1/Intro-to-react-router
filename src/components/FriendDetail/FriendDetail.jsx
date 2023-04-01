import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetail = () => {
    const friend = useLoaderData();
    console.log(friend)
    return (
        <div>
            <h3>Everything about this person is here </h3>
            <h4>Name: {friend.name}</h4>
            <p>PHone: {friend.phone}</p>
        </div>
    );
};

export default FriendDetail;