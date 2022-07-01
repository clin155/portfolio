import "./../App.scss";

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import scrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(scrollTrigger)

export function Scroller(props) {

    const ref = useRef();

    useEffect(() => {
        const { spd, classs } = props
        gsap.to(ref.current, {
            yPercent: spd,
            scrub: true,
            ease: 'none',
            scrollTrigger: {
                trigger: classs
            }
        })
    })

    return <img className={props.classs} src={props.img}  alt="background"></img>
}