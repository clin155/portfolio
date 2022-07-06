import "./../App.scss";

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import background from "./../../static/images/background-min.png";
import layer1 from "./../../static/images/layer 1-min.png";
import layer2 from "./../../static/images/layer 2-min.png";
import layer3 from "./../../static/images/layer 3-min.png";
import layer4 from "./../../static/images/layer 4-min.png";
import moon from "./../../static/images/moon-min.png";


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

export function Layer1(props) {
    gsap.registerPlugin(ScrollTrigger)
    
    const ref = useRef();
    useEffect(() => {
        gsap.to(ref.current, {
            yPercent: 250,
            scrollTrigger: {
                trigger: ref.current,
                start: "top top",
                end: "+=8000",
                scrub: true,
                toggleActions: "restart none none reverse",
                ease: "none",
            }
        })
    })

    return <img className={props.classs} src={layer1} ref={ref} alt="background"></img>
}

export function Layer2(props) {
    gsap.registerPlugin(ScrollTrigger)
    
    const ref = useRef();
    useEffect(() => {
        gsap.to(ref.current, {
            yPercent: 150,
            scrollTrigger: {
                trigger: ref.current,
                start: "top top",
                end: "+=4000",
                scrub: true,
                toggleActions: "restart none none reverse",
                ease: "none",
            }
        })
    })

    return <img className={props.classs} src={layer2} ref={ref} alt="background"></img>
}


export function Layer3(props) {
    gsap.registerPlugin(ScrollTrigger)
    
    const ref = useRef();
    useEffect(() => {
        gsap.to(ref.current, {
            yPercent: 150,
            scrollTrigger: {
                trigger: ref.current,
                start: "top top",
                end: "+=3700",
                scrub: true,
                toggleActions: "restart none none reverse",
                ease: "none",
            }
        })
    })

    return <img className={props.classs} src={layer3} ref={ref} alt="background"></img>
}

export function Layer4(props) {
    gsap.registerPlugin(ScrollTrigger)
    
    const ref = useRef();
    useEffect(() => {
        gsap.to(ref.current, {
            yPercent: 150,
            scrollTrigger: {
                trigger: ref.current,
                start: "top top",
                end: "+=3700",
                scrub: true,
                toggleActions: "restart none none reverse",
                ease: "none",
            }
        })
    })

    return <img className={props.classs} src={layer4} ref={ref} alt="background"></img>
}

export function Moon(props) {
    gsap.registerPlugin(ScrollTrigger)
    
    const ref = useRef();
    useEffect(() => {
        gsap.to(ref.current, {
            yPercent: 100,
            scrollTrigger: {
                trigger: ref.current,
                start: "top top",
                end: "bottom bottom",
                scrub: true,
                toggleActions: "restart none none reverse",
                ease: "none",
            }
        })
    })
    return <img className={props.classs} src={moon} ref={ref} alt="background"></img>

}