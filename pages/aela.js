import Image from 'next/image'

import aela1 from '../public/aela/aela-1.jpg'

export default function Aela() {
  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="group mx-8 transition-all duration-200 overflow-hidden relative cursor-pointer h-80 w-64 shadow-lg rounded hover:scale-105">
        <Image alt="This is Aela" src={aela1} />
      </div>
    </div>
  )
}
