import React, { useState, useEffect, useReducer, useRef } from 'react';
import './Count.css';
import anime from 'animejs';
import { number, any } from 'prop-types';
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
        const wrapperEl: any = document.querySelector('.wrapper');
        const numberOfEls = 90;
        const duration = 6000;
        const delay: any = duration / numberOfEls;
    
        let tl = anime.timeline({
          duration: delay,
          complete: function() { tl.restart(); }
        } as any);
    
        function createEl(i: any) {
          let el = document.createElement('div');
          const rotate = (360 / numberOfEls) * i;
          const translateY = -50;
          const hue = Math.round(360 / numberOfEls * i);
          el.classList.add('el');
          el.style.backgroundColor = 'hsl(' + hue + ', 40%, 60%)';
          el.style.transform = 'rotate(' + rotate + 'deg) translateY(' + translateY + '%)';
          tl.add({
            begin: function() {
              anime({
                targets: el,
                backgroundColor: ['hsl(' + hue + ', 40%, 60%)', 'hsl(' + hue + ', 60%, 80%)'],
                rotate: [rotate + 'deg', rotate + 10 +'deg'],
                translateY: [translateY + '%', translateY + 10 + '%'],
                scale: [1, 1.25],
                easing: 'easeInOutSine',
                direction: 'alternate',
                duration: duration * .1
              });
            }
          } as any);
          wrapperEl.appendChild(el);
        };
    
        for (let i = 0; i < numberOfEls; i++) createEl(i);
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
            {/* <p>Count: {state.count}</p>
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
            <button onClick={stopAnimal}>暂停动画</button> */}

            <div className="wrapper"></div>
        </div>
    )
}

export default Count;