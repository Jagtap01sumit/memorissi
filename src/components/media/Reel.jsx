"use client";
import { useEffect, useRef } from "react";
import { FaInstagram } from "react-icons/fa";

export default function ReelsScroller({ reels = [] }) {
  if (!Array.isArray(reels)) return null;

  return (
    <>
      {reels.map((reel, idx) => (
        <ReelCard key={idx} reel={reel} />
      ))}
    </>
  );
}

function ReelCard({ reel }) {
  const videoRef = useRef(null);

  useEffect(() => {
    let hls;
    const video = videoRef.current;
    if (!video || !reel?.src) return;

    const isHls = /\.m3u8($|\?)/i.test(reel.src);

    async function setup() {
      // Autoplay-friendly defaults
      video.muted = true;
      video.playsInline = true;
      video.loop = true;
      video.controls = true; // set false if you want IG-style auto reels

      if (isHls) {
        // Safari (iOS/macOS) can play HLS natively
        if (video.canPlayType("application/vnd.apple.mpegurl")) {
          video.src = reel.src;
        } else {
          // Other browsers need hls.js
          const Hls = (await import("hls.js")).default;
          if (Hls.isSupported()) {
            hls = new Hls({ enableWorker: true });
            hls.loadSource(reel.src);
            hls.attachMedia(video);
            hls.on(Hls.Events.ERROR, (_, data) => {
              console.error("[HLS error]", data);
            });
          } else {
            console.warn("HLS not supported in this browser.");
          }
        }
      } else {
        // Plain MP4 or similar
        video.src = reel.src;
      }

      // Try to autoplay
      try {
        await video.play();
      } catch (e) {
        // If autoplay fails, leave controls on so the user can press play
        console.debug("Autoplay blocked; showing controls.", e);
      }
    }

    setup();

    return () => {
      if (hls) hls.destroy();
    };
  }, [reel?.src]);

  return (
    <div className="relative min-w-[250px] snap-center">
      {reel?.instaUrl && (
        <a
          href={reel.instaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-3 right-3 bg-white text-pink-600 p-2 rounded-full shadow-md hover:scale-110 transition-transform z-10"
        >
          <FaInstagram size={20} />
        </a>
      )}

      <video
        ref={videoRef}
        className="rounded-2xl shadow-lg w-[250px] h-[400px] object-cover"
        preload="metadata"
        crossOrigin="anonymous"
      />
    </div>
  );
}
