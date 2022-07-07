import "./../App.scss";

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import background from "./../../static/images/background-min.png";



export function Background(props) {
    gsap.registerPlugin(ScrollTrigger)
    
    const ref = useRef();
    useEffect(() => {
        gsap.to(ref.current, {
            scrollTrigger: {
                pin: ref.current,
                trigger: ref.current,
                start: "top top",
                end: "+=2000",
                scrub: true,
                ease: 'none',
            }
        })
    })

    return <img className={props.classs} src={background} ref={ref} alt="background"></img>
}


export function Layer(props) {
    gsap.registerPlugin(ScrollTrigger)
    
    const ref = useRef();
    useEffect(() => {
        gsap.to(ref.current, {
            yPercent: props.percent,
            scrollTrigger: {
                trigger: ref.current,
                start: "top top",
                end: props.end,
                scrub: true,
                toggleActions: "restart pause pause reverse",
                ease: "none",
            }
        })
    })

    return <img className={props.classs} src={props.layer} ref={ref} alt="background"></img>
}
