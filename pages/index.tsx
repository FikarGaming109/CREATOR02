import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Selamat Datang di StreamFlix</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <Link href="/anime">
          <div className="bg-gray-800 rounded-xl hover:bg-gray-700 transition p-6 text-center cursor-pointer">
            <h2 className="text-2xl font-semibold mb-2">Anime</h2>
            <p className="text-sm text-gray-300">Lihat koleksi anime subtitle Indonesia.</p>
          </div>
        </Link>
        <Link href="/drakor">
          <div className="bg-gray-800 rounded-xl hover:bg-gray-700 transition p-6 text-center cursor-pointer">
            <h2 className="text-2xl font-semibold mb-2">Drakor</h2>
            <p className="text-sm text-gray-300">Streaming drama Korea favoritmu.</p>
          </div>
        </Link>
        <Link href="/donghua">
          <div className="bg-gray-800 rounded-xl hover:bg-gray-700 transition p-6 text-center cursor-pointer">
            <h2 className="text-2xl font-semibold mb-2">Donghua</h2>
            <p className="text-sm text-gray-300">Nikmati donghua China berkualitas tinggi.</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
