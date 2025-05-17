import React from "react";

export default function DonghuaPage() {
  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h2 className="text-3xl font-bold mb-6">Donghua Tersedia</h2>
      <div className="aspect-video w-full bg-gray-800 rounded-xl overflow-hidden">
        <video
          className="w-full h-full"
          controls
          poster="https://via.placeholder.com/800x450.png?text=Donghua+Preview"
        >
          <source src="https://archive.org/download/donghua1/donghua1.mp4" type="video/mp4" />
          <track
            label="Indonesia"
            kind="subtitles"
            srcLang="id"
            src="https://example.com/sample-donghua-sub.vtt"
            default
          />
        </video>
      </div>
    </div>
  );
}
