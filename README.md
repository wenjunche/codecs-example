# codecs-example
Examples for checking codecs support.

Codecs support is checked with the following methods in index.html

1. window.MediaSource.isTypeSupported(mimeType) returns true or false
2. HTMLMediaElement.prototype.canPlayType(mimeType) returns probably or ''
3. Load mp4 in video element and listen to 'error' and 'play' events
4. Check list from RTCRtpSender.getCapabilities('video').codecs
5. Media Extension API in javascript


Since Media Extension requires fragmented mp4 (fMP4), chrome.mp4 is processed with the following command (based on [this](https://hlsbook.net/hls-fragmented-mp4/))

~~~
ffmpeg.exe  -y -i chrome2.mp4 -force_key_frames "expr:gte(t,n_forced*2)" -sc_threshold 0 -s 1280x720 -c:v libx264 -b:v 1500k -c:a copy -hls_time 6 -hls_playlist_type vod -hls_segment_type fmp4 -hls_segment_filename "fileSequence%d.m4s" prog_index.m3u8
~~~

which generates init.mp4 and fileSequence#.m4s.  Video duration seems to be off by 1 second, which should not matter for checking codecs support.  Hopefull someone can figure out the reason.