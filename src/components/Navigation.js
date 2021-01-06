import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="sidebar">
            <div className="id">
                <div className="idContent">
                    <img src="./media/profile-pic.jpg" alt="profile-pic"/>
                    <h3>Le Nguyen Quyen Trang</h3>
                </div>
            </div>

            <div className="navigation">
                <ul>
                    <li>
                        <NavLink exact to="/" activeClassName="navActive">
                            <i className="fas fa-home"></i>
                            <span>Home</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/knowledge" 
                                activeClassName="navActive">
                            <i className="fas fa-mountain"></i>
                            <span>Education</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/portfolio" activeClassName="navActive">
                            <i className="fas fa-images"></i>
                            <span>Projects</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/contact" activeClassName="navActive">
                            <i className="fas fa-address-book"></i>
                            <span>Contact</span>
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div className="socialNetwork">
                <ul>
                    <li>
                        <a href="https://www.facebook.com/gwiyeoun.kit/" target="_blank"
                            rel="noopener_noreferrer"><i className="fab fa-facebook"></i></a>
                    </li>
                    <li>
                        <a href="https://github.com/cntt2-trangle" target="_blank"
                            rel="noopener_noreferrer"><i className="fab fa-github"></i></a>
                    </li>
                    <li>
                        <a href="https://twitter.com/TrangLe78991583" target="_blank"
                            rel="noopener_noreferrer"><i className="fab fa-twitter"></i></a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/kitkit8246/" target="_blank"
                            rel="noopener_noreferrer"><i className="fab fa-instagram"></i></a>
                    </li>
                </ul>
                <div className="signature">
                    <p>Trang Le - 2020</p>
                </div>
            </div>
        </div>
    );
};

export default Navigation;