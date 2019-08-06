import React, { useState, useEffect, useReducer, useRef } from 'react';
import anime from 'animejs';
import './Animal.css';


function Animal(){
    useEffect(() => {
        var path = anime.path('path');
        console.log('-------', path);
        // let greenbox = document.querySelector('.green')

        anime({
        targets: '.green',
        translateX: path('x'),
        translateY: path('y'),
        rotate: path('angle'),
        easing: 'linear',
        duration: 5000,
        loop: true
        });

        anime({
        targets: 'path',
        // opacity: 0,
        duration: 3000,
        // loop: true,
        // direction: 'alternate',
        easing: 'easeInOutExpo',
        strokeDashoffset: [anime.setDashoffset, 0],
        });
    })
    return (
        <div className="animalBox">
            <svg width="256" height="112" viewBox="0 0 256 112" className="svgBox">
                <path fill="none" stroke="#FFF" d="M8,56 C8,33.90861 25.90861,16 48,16 C70.09139,16 88,33.90861 88,56 C88,78.09139 105.90861,92 128,92 C150.09139,92 160,72 160,56 C160,40 148,24 128,24 C108,24 96,40 96,56 C96,72 105.90861,92 128,92 C154,93 168,78 168,56 C168,33.90861 185.90861,16 208,16 C230.09139,16 248,33.90861 248,56 C248,78.09139 230.09139,96 208,96 L48,96 C25.90861,96 8,78.09139 8,56 Z"/>
            </svg>
            <div className="green"></div>
        </div>
    )
}

export default Animal;