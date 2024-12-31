let scrollAmount = 0;
let isScrolling = false;
let velocity = 0;
const friction = 0.95; // Controls how quickly the scroll slows down
const acceleration = 0.3; // Controls how much scroll input affects velocity

function smoothScroll(delta) {
  // Add to velocity instead of directly to scrollAmount
  velocity += delta * acceleration;

  if (!isScrolling) {
    isScrolling = true;
    requestAnimationFrame(smoothStep);
  }
}

function smoothStep() {
  if (Math.abs(velocity) > 0.1) {
    // Apply velocity to scrollAmount
    scrollAmount = velocity;

    // Ease in-out effect using cubic bezier-like curve
    const easing = 0.2 * (1 - Math.pow(0.95, Math.abs(scrollAmount)));
    const direction = Math.sign(scrollAmount);

    window.scrollBy(0, direction * Math.abs(scrollAmount) * easing);

    // Apply friction to velocity
    velocity *= friction;

    requestAnimationFrame(smoothStep);
  } else {
    scrollAmount = 0;
    velocity = 0;
    isScrolling = false;
  }
}

window.addEventListener(
  "wheel",
  (event) => {
    event.preventDefault();
    smoothScroll(event.deltaY);
  },
  { passive: false }
);
