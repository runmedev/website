import Image from 'next/image'
import React from 'react'

const RoadshowAfterPictureCard = ({ imageSrc, text, rotation }) => {
  return (
    <div
      className="z-[999] p-2  border border-purpledk hidden lg:block bg-white"
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <Image
        src={imageSrc}
        className="object-cover w-full h-full lg:w-[346px] max-h-[300px]"
        width={346}
        height={346}
        alt={text}
      />
      <div className="py-8 text-black">
        <p className="text-center text-lg uppercase">{text}</p>
      </div>
    </div>
  )
}

export default RoadshowAfterPictureCard
