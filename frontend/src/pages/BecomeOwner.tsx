import React from 'react'
import { Link } from 'react-router-dom';

const BecomeOwner = () => {
    return (
        <>
        
            <h1 className="text-2xl font-bold text-center">Become a Restaurant Owner</h1>
            <p className="text-center">Fill out the form below to start your journey as a restaurant owner.</p>
            <Link
                to="/manage-restaurant"
                className="font-bold hover:text-orange-500"
            >
                Manage Restaurant
            </Link>
        </>
    );
};

export default BecomeOwner