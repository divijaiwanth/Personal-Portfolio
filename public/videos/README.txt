Hero background video: hero-bg.mp4  (+ hero-poster.jpg, its first frame)

The video is a full-bleed background behind a scrim and vignette, with text over
it, so it does NOT need full resolution or framerate. Keep it small - it is one
of the first things the browser downloads.

Current file: 1280x720, 30fps, ~1.7 MB.
(The source was 1920x1080 60fps at 10.3 MB, which was slow to start on deploy.)

To swap in a new clip, re-encode it the same way:

  ffmpeg -i your-clip.mp4 -vf "scale=1280:-2,fps=30" \
    -c:v libx264 -crf 30 -preset slow -profile:v high -pix_fmt yuv420p \
    -an -movflags +faststart hero-bg.mp4

  # then regenerate the poster (shown instantly while the video loads)
  ffmpeg -i hero-bg.mp4 -frames:v 1 -q:v 6 hero-poster.jpg

Flags that matter:
  -an                 strip audio (the video is muted anyway)
  -movflags +faststart  put the index at the front so playback can start
                        before the whole file has downloaded
  -crf                quality knob: lower = better + bigger. 30 is a good
                        starting point for a scrim-covered background; drop to
                        26-28 if it looks too soft.

If it is missing, the hero falls back to the plain dark background - nothing breaks.
