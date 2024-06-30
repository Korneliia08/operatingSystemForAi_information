import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowUp} from '@fortawesome/free-solid-svg-icons';
import {animateScroll as scroll} from 'react-scroll';
import './ScrollToTop.scss'; // Poniżej znajdziesz styl CSS

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Funkcja pokazująca lub ukrywająca przycisk w zależności od pozycji scrolla
    const toggleVisibility = () => {
        if (window.pageYOffset > 200) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Funkcja do płynnego przewijania do góry strony
    const scrollToTop = () => {
        scroll.scrollToTop({duration: 500, smooth: true});
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div className={`scroll-to-top ${isVisible ? 'visible' : ''}`} onClick={scrollToTop}>
            <FontAwesomeIcon icon={faArrowUp}/>
        </div>
    );
};

export default ScrollToTop;
