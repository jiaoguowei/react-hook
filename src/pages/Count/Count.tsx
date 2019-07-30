import React, { useState, useEffect, useReducer, useRef } from 'react';
import './Count.css';
import anime from 'animejs';
import { number } from 'prop-types';
// declare const anime:any;


// const initialState = {count: 0};

// function reducer(state:any, action:any) {
//     switch(action.type) {
//         case 'increment':
//             return {count: state.count + 1};
//         case 'decrement':
//             return {count: state.count - 1};
//         default:
//             throw new Error()
//     }
// }

// function Count(){
//     const [state, dispatch] = useReducer(reducer, initialState);
//     return (
//         <div>
//             <p>Count: {state.count}</p>
//             <button onClick={() => dispatch({type: 'increment'})}> + </button>
//             <button onClick={() => dispatch({type: 'decrement'})}> - </button>
//         </div>
//     )
// }

function init(initialCount: any) {
    return {count: 0}
}

function reducer(state:any, action:any) {
    switch(action.type) {
        case 'increment':
            return {count: state.count + 1};
        case 'decrement':
            return {count: state.count - 1};
        case 'reset':
            return init(action.payload)
        default:
            throw new Error()
    }
}

function Count(initialCount:any){
    const inputEl:any = useRef(null)
    const onButtonClick = () => {
        // `current` 指向已挂载到 DOM 上的文本输入元素
        inputEl.current.focus();
      };
    const [state, dispatch] = useReducer(reducer, initialCount, init);
    const box1 = document.querySelector('.box1');
    let myAnimation:any;
    let numAnimate:any;
    useEffect(() => {
        const box2 = document.querySelector('.box2');
        myAnimation = anime({
            targets: ['.box1', '.box2'],
            // translateX: 270,
            // scale: 2,
            width: '100%',
            easing: 'easeInOutQuad',
            delay: function(el, i, l) {
                return i * 100;
              },
            autoplay: false
          });
        const numberAnimate:any = document.querySelector('.numberAnimate')
        numAnimate = anime({
            targets: '.numberAnimate',
            innerHTML: [0, 10000],
            easing: 'linear',
            round: 10
        })
    })
    const startAnim = () => {
        myAnimation.play()
    }
    const stopAnimal = () => {
        myAnimation.pause()
    }
   
    return (
        <div id="count">
            <p>Count: {state.count}</p>
            <button
                onClick={() => dispatch({type: 'reset', payload: initialCount})}
            > Reset </button>
            <button onClick={() => dispatch({type: 'increment'})}> + </button>
            <button onClick={() => dispatch({type: 'decrement'})}> - </button>
            <input type="text" ref={inputEl}/>
            <button onClick={onButtonClick}>Focus the input</button>
            <br/>
            <div className="box1">
                盒子一
            </div>
            <div className="box2">
                盒子二
            </div>
            <div className="numberAnimate">

            </div>
            <svg className="svgAnmai">
                <path d="M250 150 L150 350 L350 350 Z" />
            </svg>
            <button onClick={startAnim}>开启盒子动画</button>
            <button onClick={stopAnimal}>暂停动画</button>
        </div>
    )
}

export default Count;