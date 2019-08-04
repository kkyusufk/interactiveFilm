export const videoLoder = (url) => {
  return new Promise((resolve) => {
    const video = document.getElementsByClassName('videoElement');
    video.addEventListener('canplay', resolve);
    video.src = url;
  });
};
