
console.log('overwriting MediaSource.isTypeSupported ');

window.MediaSource.isTypeSupported = function(mimeCodec) {
    console.log(`MediaSource checking mime ${mimeCodec}`);
    return false;
}

console.log('overwriting canPlayType.isTypeSupported ');

HTMLMediaElement.prototype.canPlayType = function(mimeCodec) {
    console.log(`HTMLMediaElement checking mime ${mimeCodec}`);
    return '';
}

console.log(`h264 ${window.MediaSource.isTypeSupported('video/mp4; codecs="avc1.4d002a')}`);