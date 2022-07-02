import "./../App.scss";

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';


export function Scroller(props) {
    gsap.registerPlugin(ScrollTrigger)

    const ref = useRef();
    const { spd, classs } = props

    useEffect(() => {
        gsap.to(ref.current, {
            yPercent: spd,
            scrollTrigger: {
                trigger: ref.current,
                markers: true,
                scrub: true,
                ease: 'none',
            }
        })
    })

    return <img className={props.classs} src={props.img} ref={ref} alt="background"></img>
}