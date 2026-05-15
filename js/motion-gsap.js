import { gsap } from './gsap';

import { ScrollTrigger } from "./gsap/ScrollTrigger";
import {ScrollSmoother} from "./gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function animate() {
    gsap.from(".nav-franquia", {
        y:100,
        duration:1,
    })
}

export { animate }