"use client";

import { useRef, useState, useEffect, useCallback } from "react";

const videos = [
  { src: "/videos/01.mp4" },
  { src: "/videos/02.mp4" },
  { src: "/videos/03.mp4" },
];

function VideoCard({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Lazy load + autoplay when visible, pause when not
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting) {
          videoRef.current?.play().catch(() => {});
        } else {
          videoRef.current?.pause();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Track play state
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);
    return () => {
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPause);
    };
  }, []);

  const handleTap = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    if (isPlaying) {
      video.pause();
    } else {
      video.play().catch(() => {});
    }
  }, [isPlaying]);

  return (
    <div
      ref={containerRef}
      className="relative aspect-[3/4] w-[280px] shrink-0 overflow-hidden rounded-[20px] sm:shrink sm:w-auto sm:min-w-0 sm:flex-1 sm:rounded-[24px]"
    >
      <video
        ref={videoRef}
        src={isVisible ? src : undefined}
        muted
        loop
        playsInline
        preload="metadata"
        className="pointer-events-none absolute inset-0 size-full object-cover"
      />

      {/* Play button — shown when paused */}
      <button
        type="button"
        onClick={handleTap}
        className="absolute inset-0 z-10 flex items-center justify-center"
        aria-label={isPlaying ? "Pause" : "Play"}
      >
        {!isPlaying && (
          <div className="flex size-[56px] items-center justify-center rounded-full bg-white/20 backdrop-blur-[8px] transition-transform hover:scale-110">
            <svg width={24} height={24} viewBox="0 0 24 24" fill="white">
              <path d="M8 5.14v13.72a1 1 0 001.5.86l11.04-6.86a1 1 0 000-1.72L9.5 4.28A1 1 0 008 5.14z" />
            </svg>
          </div>
        )}
      </button>
    </div>
  );
}

export default function ShortVideos() {
  return (
    <section className="py-[60px] sm:flex sm:items-center sm:justify-center sm:px-6 lg:px-[58px] lg:py-[100px]">
      <div className="flex w-full max-w-[1200px] gap-[8px] overflow-x-auto pl-4 pr-4 scrollbar-hide sm:gap-[12px] sm:pl-0 sm:pr-0">
        {videos.map((video) => (
          <VideoCard key={video.src} src={video.src} />
        ))}
      </div>
    </section>
  );
}
