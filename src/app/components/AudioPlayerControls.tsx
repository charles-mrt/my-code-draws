import Image from "next/image"
import phone from '../../../public/image/phone.svg'
import { useState, useRef } from "react"



export const AudioPlayerControls = () => {
  const top_gear_audio = "public/assets/audio/top-gear-audio.mp3"
  
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)


  const togglePlay = () => {
    setIsPlaying(!isPlaying)
    isPlaying ? audioRef.current.pause() : audioRef.current.play()
  }


  return (
    <div className="flex items-center justify-around  w-auto ">
      <button onClick={togglePlay} className="bg-gray-400 px-1 m-1 rounded">
        {isPlaying ? (
          <Image src={phone} alt='phone icon' width={30} />
        ) : (
          <Image src={phone} alt='phone icon' width={30} className="opacity-50" />
        )}

      </button>
      <audio ref={audioRef} src={"/assets/audio/top-gear-audio.mp3"} />
    </div>
  )
}