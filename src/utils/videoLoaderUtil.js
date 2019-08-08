const videoLoader = (path) => {
    return new Promise((resolve,reject),() => {
        var video = document.createElement('video');
        video.onload = resolve;
        video.onerror = reject;
        video.src = path;
    });
};