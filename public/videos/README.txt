Drop your hero background video here as: hero-bg.mp4

Requirements / tips:
- Filename must be exactly hero-bg.mp4 (or update HERO_VIDEO_SRC in src/components/home/Hero.tsx if you want a different name/path).
- Format: .mp4, H.264 codec (most compatible, autoplays in all browsers).
- Keep it silent/no meaningful audio — the video is muted automatically for autoplay to work.
- Keep file size small (a few MB) for fast load: 1920x1080 or smaller, 10-20s loop, compressed (e.g. via HandBrake or `ffmpeg -i input.mov -vcodec libx264 -crf 28 -an hero-bg.mp4`).
- It loops infinitely and is covered by a dark overlay for text legibility (edit the "bg-dark-bg/60" class in Hero.tsx to lighten/darken the overlay).
- If this file is missing, the Hero section gracefully falls back to the plain dark background — no broken video icon.
