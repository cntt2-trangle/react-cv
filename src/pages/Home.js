import React from 'react';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div className="home">
            <Navigation/>
            <div className="homeContent">
                <div className="content">
                    <h1>Le Nguyen Quyen Trang</h1>
                    <h2>Front-end Developer</h2>
                    <div className="pdf">
                        <a href="./media/myCV.pdf" target="_blank">Download CV</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;