import glyphs from '../images/GLYPHS.png';
import widgets from '../images/WIDGETS.png';
import camera from '../images/CAMERA.png';
import premium from '../images/PREMIUM.png'

const deviceInfo = [
    {
        key: 0,
        imgURL: `${glyphs}`,
        title: "GLYPHS",
        content: "Assign different light and sound sequences for each contact and notification type and be one step ahead of who’s getting in touch. Key information, in a flash.",
        animate: "flip-left"
    },
    {
        key: 1,
        imgURL: `${widgets}`,
        title: "WIDGETS",
        content: "Taking inspiration from the phone’s iconic hardware design, we’ve given our software a new visual identity that feels unmistakably Nothing.",
        animate: "flip-right"

    },
    {
        key: 2,
        imgURL: `${camera}`,
        title: "CAMERA",
        content: "Phone (2) effortlessly captures real life events. With an 18-bit Image Signal Processor, it is capable of capt-uring 4,000 times more camera data than Phone (1).",
        animate: "flip-left"

    },
    {
        key: 3,
        imgURL: `${premium}`,
        title: "PREMIUM",
        content: "With the Snapdragon® 8+ Gen 1 chipset, Phone (2) boasts an 80% improvement on performance over its predecessor.",
        animate: "flip-right"
    }
]

export default deviceInfo;