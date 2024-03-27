import imagesLoaded from 'imagesloaded';
import FontFaceObserver from 'fontfaceobserver';
import { gsap } from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
gsap.registerPlugin(CustomEase);

import { customScroll, buttonsAnimation } from './modules';

class App {
  constructor() {
    // Images preloader
    const preloadImages = new Promise((resolve) => {
      const images = document.querySelectorAll('img:not(.lazy-loaded-image)');
      new imagesLoaded(images, () => {
        document.documentElement.classList.add('images-loaded');
        resolve();
      });
    });
    // Fonts preloader
    const preloadFonts = new Promise((resolve) => {
      const Inter = new FontFaceObserver('Inter');

      Promise.all([Inter.load()]).then(function () {
        sessionStorage.foutFontsLoaded = true;
        document.documentElement.classList.add('fonts-loaded');
        resolve();
      });
    });

    // After preloading
    Promise.all([preloadImages, preloadFonts]).then(() => {
      this.init();
    });
  }

  introAnimation() {
    CustomEase.create('bezier', '.25,.1,.25,1');

    const imageMask = document.querySelector('.hero-section-media');
    const staggers = [
      ...document.querySelectorAll('.hero-section-text > *'),
      document.querySelector('.hero-section-bigtext'),
    ];

    gsap
      .timeline()
      .to(imageMask, {
        '--maskTransformY': '-100%',
        duration: 1.45,
        ease: 'bezier',
      })
      .fromTo(
        staggers,
        { y: 45, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.9, stagger: -0.085, ease: 'power2.out' },
        '-=1.15'
      );
  }

  init() {
    // Init modules
    customScroll();
    buttonsAnimation();

    // Intro animation
    this.introAnimation();

    document.documentElement.classList.add('all-loaded');
  }
}

new App();
