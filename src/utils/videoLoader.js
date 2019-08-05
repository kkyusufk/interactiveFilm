
export const videoLoader = (url) => {
  return new Promise((resolve) => {
    const video = document.createElement('video');
    video.addEventListener('onload', (resolve) => {
      return video;
    });
    video.src = url;
  });
};
