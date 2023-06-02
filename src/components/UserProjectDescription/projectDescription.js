import React from 'react'
import { useLocation } from 'react-router-dom';

const projectDescription = () => {
    const location = useLocation();
    const { data } = location.state;

    return (
        <div>
            <div>
                <h2>Row Data</h2>
                <p>ID: {data.id}</p>
                <p>Name: {data.title}</p>
            </div>
        </div>
    )
}

export default projectDescription