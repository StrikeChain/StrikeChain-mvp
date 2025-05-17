import Image from "next/image"

export const TournamentIcon1 = () => {
  return (
    <div className="relative w-10 h-10 flex items-center justify-center">
      <div className="absolute inset-0 rounded-full bg-[#2A2F33]"></div>
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ti8HOSIazII6tIoRskuCNDWQGr9hnb.png"
        alt="Tournament Icon"
        width={24}
        height={24}
        className="relative z-10"
      />
    </div>
  )
}

export const TournamentIcon2 = () => {
  return (
    <div className="relative w-10 h-10 flex items-center justify-center">
      <div className="absolute inset-0 rounded-full bg-[#2A2F33]"></div>
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-eaWdzuoS97sWhFs2wQsbiIWXFrBvUv.png"
        alt="Tournament Icon"
        width={24}
        height={24}
        className="relative z-10"
      />
    </div>
  )
}
