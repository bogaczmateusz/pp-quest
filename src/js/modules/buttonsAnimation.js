import { gsap } from 'gsap';

// Function to make the circle follow the mouse
function followMouse(e, circle, button) {
  const buttonRect = button.getBoundingClientRect();
  const x = e.clientX - buttonRect.left - circle.offsetWidth / 2;
  const y = e.clientY - buttonRect.top - circle.offsetHeight / 2;

  gsap.set(circle, { x, y });
}

export default function buttonsAnimation() {
  const buttons = [...document.querySelectorAll('.button')];
  if (buttons.length < 1) return;

  buttons.forEach((button) => {
    const circle = document.createElement('div');
    circle.classList.add('button-gradient');
    button.appendChild(circle);

    const mouseMoveHandler = (e) => followMouse(e, circle, button);

    button.addEventListener('mouseover', () => {
      gsap.to(circle, { duration: 0.3, autoAlpha: 1 });
      button.addEventListener('mousemove', mouseMoveHandler);
    });

    button.addEventListener('mouseleave', () => {
      gsap.to(circle, { duration: 0.3, autoAlpha: 0 });
      button.removeEventListener('mousemove', mouseMoveHandler);
    });
  });
}
