import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

export default function customScroll() {
  new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    lerp: 0.065,
    reloadOnContextChange: false,
    tablet: {
      smooth: true,
    },
    mobile: {
      smooth: false,
    },
  });
}
