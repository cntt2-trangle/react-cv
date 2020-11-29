import React from 'react';

const Hobbies = () => {
    return (
        <div className="hobbies">
            <h3>Interests</h3>
            <ul>
                <li className="hobby">
                    <i className="fas fa-running"></i>
                    <span>Running</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-hiking"></i>
                    <span>Hiking</span>
                </li>
                <li className="hobby">
                    <i className="fab fa-bitcoin"></i>
                    <span>Crypto currency</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-rocket"></i>
                    <span>Space</span>
                </li>
            </ul>
        </div>
    );
};

export default Hobbies;