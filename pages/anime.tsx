import React, { useEffect, useState } from "react";

export default function AnimePage() {
  const [videoUrl, setVideoUrl] = useState("");

  useEffect(() => {
    fetch("https://api.consumet.org/anime/gogoanime/watch?episodeId=naruto-episode-1")
      .then((res) => res.json())
      .then((data) => {
        const source = data.sources.find((src: any) => src.quality === "720p");
        if (source) setVideoUrl(source.url);
      });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h2 className="text-3xl font-bold mb-6">Anime Populer</h2>
      <div className="aspect-video w-full bg-gray-800 rounded-xl overflow-hidden">
        {videoUrl ? (
          <video className="w-full h-full" controls>
            <source src={videoUrl} type="application/x-mpegURL" />
            <track
              label="Indonesia"
              kind="subtitles"
              srcLang="id"
              src="https://raw.githubusercontent.com/zeinlol/Anime-Stream-API/main/subs/naruto-1.vtt"
              default
            />
          </video>
        ) : (
          <p className="text-center">Memuat video...</p>
        )}
      </div>
    </div>
  );
}
