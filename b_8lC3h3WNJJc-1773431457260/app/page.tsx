"use client"

import { useState, useEffect, useRef } from "react"
import { Youtube, Volume2 } from "lucide-react"

const DEFAULT_CURSOR = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jujutsu%20Kaisen%20Chibi%20Satoru%20Gojo--cursor--SweezyCursors-OJuRxL2bQlqCExDYGLeuRkfenF6LMX.png"
const DEFAULT_PFP = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xnbHJlyjlhCu1C5Ha1ET4u7Agxb8f0.png"
const DEFAULT_AUDIO = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/YTDown.com_YouTube_Media_eupZ0R-uXPc_009_128k-2Yb3Xjf51GTzFJdxkSKJpUjSJyKICM.mp3"

export default function VerifyPage() {
  const [entered, setEntered] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    if (entered && audioRef.current) {
      audioRef.current.play()
    }
  }, [entered])

  if (!entered) {
    return (
      <div
        className="min-h-screen w-full flex items-center justify-center bg-slate-900"
        style={{ cursor: `url(${DEFAULT_CURSOR}), auto` }}
      >
        <button
          onClick={() => setEntered(true)}
          className="flex flex-col items-center gap-4 p-8 bg-slate-800/80 backdrop-blur-md rounded-2xl border border-cyan-500/30 hover:border-cyan-400/50 transition-all hover:scale-105"
        >
          <Volume2 size={48} className="text-cyan-400" />
          <span className="text-cyan-300 text-xl font-semibold">Click to Enter</span>
          <span className="text-cyan-400/60 text-sm">Audio will play</span>
        </button>
      </div>
    )
  }

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center relative overflow-hidden"
      style={{ cursor: `url(${DEFAULT_CURSOR}), auto` }}
    >
      {/* Background Video with Audio */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <iframe
          src="https://streamable.com/e/0yngkq?quality=highest&autoplay=1&muted=0&loop=1"
          frameBorder="0"
          allowFullScreen
          allow="autoplay"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-auto h-auto scale-150"
          style={{ pointerEvents: "none" }}
        />
      </div>

      {/* Main Card */}
      <div className="relative z-10 bg-slate-800/70 backdrop-blur-md rounded-2xl p-8 w-[90%] max-w-md text-center border border-slate-600/30">
        {/* Profile Picture */}
        <div className="relative -mt-20 mb-4 flex justify-center">
          <div className="w-28 h-28 rounded-full border-4 border-slate-600/50 overflow-hidden bg-slate-700 shadow-lg shadow-cyan-500/20">
            <img 
              src={DEFAULT_PFP} 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-bold mb-2 text-cyan-400 drop-shadow-[0_0_20px_rgba(34,211,238,0.6)]">
          Zornatalus&apos;s Test For Bot Verify
        </h1>

        {/* Subtitle */}
        <p className="text-cyan-200/80 mb-6">Zornatalus</p>

        {/* Verify Button */}
        <button className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/30">
          Verify
        </button>

        {/* YouTube Button */}
        <div className="mt-6 flex justify-center">
          <a
            href="https://www.youtube.com/@Zornurcreator/videos"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-red-500/20 hover:bg-red-500/30 rounded-lg border border-red-500/40 text-red-400 hover:text-red-300 transition-colors"
          >
            <Youtube size={20} />
          </a>
        </div>
      </div>
    </div>
  )
}
