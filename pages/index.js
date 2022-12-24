import Image from 'next/image'
import Link from 'next/link'

import aela from '../public/aela.jpg'
import mak from '../public/mak.jpg'
import roman from '../public/roman.jpg'

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="font-black text-white text-4xl mb-16">The Kids</h1>
      <div className="flex justify-center items-center">
        <Link href="/roman" className="group mx-8 transition-all duration-200 overflow-hidden relative cursor-pointer h-80 w-64 shadow-lg rounded hover:scale-105" >
          <div className="transition-all duration-200 opacity-0 group-hover:opacity-100 flex bg-black/50 absolute inset-0 justify-center items-center text-white font-normal text-2xl">Roman</div>
          <Image className="h-full object-cover" src={roman} alt="Picture of the author" />
        </Link>
        <Link href="/mak" className="group mx-8 transition-all duration-200 overflow-hidden relative cursor-pointer h-80 w-64 shadow-lg rounded hover:scale-105" >
          <div className="transition-all duration-200 opacity-0 group-hover:opacity-100 flex bg-black/50 absolute inset-0 justify-center items-center text-white font-normal text-2xl">Mak</div>
          <Image className="h-full object-cover" src={mak} alt="Picture of the author" />
        </Link>
        <Link href="/aela" className="group mx-8 transition-all duration-200 overflow-hidden relative cursor-pointer h-80 w-64 shadow-lg rounded hover:scale-105" >
          <div className="transition-all duration-200 opacity-0 group-hover:opacity-100 flex bg-black/50 absolute inset-0 justify-center items-center text-white font-normal text-2xl">Aela</div>
          <Image className="h-full object-cover" src={aela} alt="Picture of the author" />
        </Link>
      </div>
      <p className="text-white mt-16">Made with ❤️ by Uncle Alex</p>
    </div>
  )
}
