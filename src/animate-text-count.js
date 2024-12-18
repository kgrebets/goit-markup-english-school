export default function animateTextCount(element, finishNumber, speedProgress = 3, duration = 200) {
  let start = performance.now();

  function step(timestamp) {
    if (start === undefined) {
      start = timestamp;
    }

    const timeFraction = (timestamp - start) / duration;
    const quad = Math.pow(timeFraction, speedProgress);
    const shift = Math.abs(Math.min(quad, 1000)).toFixed();

    element.innerHTML = shift;

    if (shift < finishNumber) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}