import React, { useState, useEffect, useReducer, useRef } from 'react';
import anime from 'animejs';
import './Animal.css';
import { bannerData, detailData, lineCount } from './AnimalConfig'

function Animal(){
    const [isSelect, setIsSelect] = useState(false)
    let animalObject: any = {};
    let innerGroup: any = {};
    
    function stop(id: any) {
        for(var k in animalObject) {
            animalObject[k].pause()
        }
        innerGroup[id].style.display = 'block'
    }
    function start(id: any){
        for(var k in animalObject) {
            animalObject[k].play()
        }
        innerGroup[id].style.display = 'none'
    }
    useEffect(() => {
        let tl = anime.timeline({
            duration: 1000,
            // complete: function() { tl.restart(); }
          } as any);

        let wordanime = anime({
            targets: '.word',
            translateY: -800,
            duration: 5000,
            opacity: [0.5, 1],
            // loop: true,
            easing: 'linear',
            delay: 100,
            autoplay: false
        });
        wordAnimal()
        wordanime.play()
        function wordAnimal() {
            let wordGroup: any = document.querySelectorAll('.word');
        
            for(var i = 0; i < wordGroup.length; i++) {
                wordGroup[i].style.left = anime.random(0, 600) + 'px';
                wordGroup[i].style.top = anime.random(0, 300) + 'px';
            }
            wordanime.play()
        }
       
      setInterval(wordAnimal, 5000)
        let path = anime.path('path');
        bannerData.forEach((item, index) => {
            let bb: any;
            bb = anime({
                targets: `#${item.id}`,
                translateX: {
                    value: path('x'),
                    duration: 7000,
                },
                translateY: {
                    value: path('y'),
                    duration: 7000,
                },
                scale: [
                    { value: 1.5, duration: 3500 },
                    { value: 1, duration: 3500 }
                  ],
                loop: true,
                easing: 'linear',
                autoplay: false
              });
              bb.seek(index*1000)
              bb.play()
              animalObject[item.id] = bb
        })


        // 这是光线动画
       
        let lightBox: any = document.querySelectorAll('.light')
        for(var j = 0; j < lightBox.length; j++) {
            lightBox[j].style.left = anime.random(0, 600) + 'px';
        }
        lightBox.forEach((item: any, index: any) => {
            anime({
                targets: item,
                translateY: '-500',
                duration: 3000,
                opacity: [0.1, 0.6],
                easing: 'linear',
                loop: true,
                delay: anime.random(1000, 5000),
            })
        });

    })
    return (
        <div className="animalBox">
            <div className="wordBox">
                {
                   detailData['one'].map((item, index) => {
                    return (
                        <div className="word" key={index}>
                            {item}
                        </div>
                    )
                   })
                }
            </div>
            <svg  x="0px" y="0px" viewBox="0 0 1920 1080" >
            <path className="st0" fill="none" d="M959.7,474.1c0,0,142.3,0.5,235.8,16s242.6,44.9,250.1,111.5c0,0,3,70.5-204.6,103.9
                C1053.7,735.7,960,729.1,960,729.1S779.8,728,691.8,708s-208.7-42.3-218.1-106.4c0,0-16.6-68,240.4-110
                C714.1,491.6,854.1,471.6,959.7,474.1z"/>
            </svg>
            {
                bannerData && bannerData.map((item, index) => {
                    return (
                        <div className="circleBanner" id={item.id} onMouseEnter={() => stop(item.id)} onMouseLeave={() => start(item.id)} key={item.id}>
                            {item.value}
                            <div className="boxGroup" ref = {(node) => innerGroup[item.id] = node }>
                                <div className="innerBox1">
                                </div>
                                <div className="innerBox2">
                                </div>
                                <div className="innerBox3">
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            <div className="lightBox">
                {
                    lineCount && lineCount.map((item, index) => {
                        return <div className="light" key={index}></div>
                    })
                }
            </div>
        </div>
    )
}

export default Animal;