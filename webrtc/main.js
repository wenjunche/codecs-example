'use strict';

const leftVideo = document.getElementById('leftVideo');
const rightVideo = document.getElementById('rightVideo');

leftVideo.addEventListener('canplay', () => {
  let stream;
  const fps = 0;
  if (leftVideo.captureStream) {
    stream = leftVideo.captureStream(fps);
  } else {
    console.error('Stream capture is not supported');
    stream = null;
  }
  rightVideo.srcObject = stream;
});