import React from 'react';
import Navigation from '../components/Navigation';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Contact = () => {
    return (
        <div className='contact'>
            <Navigation />
            <div className="contactContent">
                <div className="header"></div>
                    <div className="contactBox">
                        <h1>Contactez-moi</h1>
                        <ul>
                            <li>
                                <i className='fas fa-map-marker-alt'></i>
                                <span>Nouméa, Nouvelle-Calédonie</span>
                            </li>
                            <li>
                                <i className="fas fa-mobile-alt"></i>
                                <CopyToClipboard text='+687.83.87.83'>
                                    <span className="clickInput"
                                     onClick={() => alert('Téléphone copié !')}>
                                    +687.83.87.83</span>
                                </CopyToClipboard>
                            </li>
                            <li>
                                <i className="far fa-envelope"></i>
                                <CopyToClipboard text='greg.saimoen.12@gmail.com'>
                                    <span className="clickInput"
                                     onClick={() => alert('E-mail copié !')}>
                                    greg.saimoen.12@gmail.com</span>
                                </CopyToClipboard>
                            </li>
                        </ul>
                    </div>
                    <div className="socialNetwork">
                        <ul>
                        <a href="https://www.linkedin.com/in/gr%C3%A9gory-sa%C3%AFmoen-665404183/" target="_blank" rel='noopener noreferrer'>
                        <h4>LinkedIn</h4>
                        <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://github.com/Saimoen" target="_blank" rel='noopener noreferrer'>
                        <h4>Github</h4>
                        <i className="fab fa-github"></i>
                        </a>
                        <a href="https://codepen.io/gr-g-saimoen" target="_blank" rel='noopener noreferrer'>
                        <h4>CodePen</h4>
                        <i className="fab fa-codepen"></i>
                        </a>
                            
                        </ul>
                    </div>
                
            </div>
        </div>
    );
};

export default Contact;