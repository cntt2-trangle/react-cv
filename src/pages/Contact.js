import React from 'react';
import Navigation from '../components/Navigation';
import { CopyToClipboard } from 'react-copy-to-clipboard'

const Contact = () => {
    return (
        <div className="contact">
            <Navigation/>
            <div className="contactContent">
                <div className="header"></div>
                <div className="contactBox">
                    <h1>Contact Me</h1>
                    <ul>
                        <li>
                            <i className="fas fa-map-marker-alt"></i>
                            <span>Da Nang</span>
                        </li>
                        <li>
                            <i className="fas fa-mobile-alt"></i>
                            <CopyToClipboard text="(+84)34 7867 897">
                                <span 
                                    className="clickInput" 
                                    onClick={() => {
                                    alert("The phone number has been copied !");}
                                    }>(+84)34 7867 897
                                </span>
                            </CopyToClipboard>
                        </li>
                        <li>
                            <i className="far fa-envelope"></i>
                            <CopyToClipboard text="le7207902@gmail.com">
                                <span 
                                    className="clickInput" 
                                    onClick={() => {
                                    alert("The e-mail has been copied !");
                                    }}
                                >le7207902@gmail.com
                                </span>
                            </CopyToClipboard>
                        </li>
                    </ul>
                </div>
                <div className="socialNetwork">
                    <ul>
                        <a href="https://www.facebook.com/gwiyeoun.kit/" target="_blank"
                            rel="noopener noreferrer">
                            <h4>Facebook</h4>    
                            <i className="fab fa-facebook"></i>
                        </a>
                    
                        <a href="https://github.com/cntt2-trangle" target="_blank"
                            rel="noopener noreferrer">
                            <h4>Github</h4>
                            <i className="fab fa-github"></i>
                        </a>
                    
                        <a href="https://twitter.com/TrangLe78991583" target="_blank"
                            rel="noopener noreferrer">
                            <h4>Twitter</h4>
                            <i className="fab fa-twitter"></i>
                        </a>
                    
                        <a href="https://www.instagram.com/kitkit8246/" target="_blank"
                            rel="noopener noreferrer">
                            <h4>Instagram</h4>
                            <i className="fab fa-instagram"></i>
                        </a>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Contact;