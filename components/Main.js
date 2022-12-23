import Image from 'next/image'

import aela from '../public/aela.jpg'
import mak from '../public/mak.jpg'
import roman from '../public/roman.jpg'

const Main = () => {

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="font-black text-white text-4xl mb-16">The Kids</h1>
      <div className="flex justify-center items-center">
        <div className="group mx-8 transition-all duration-200 overflow-hidden relative cursor-pointer h-80 w-64 shadow-lg rounded hover:scale-105">
        <div className="transition-all duration-200 opacity-0 group-hover:opacity-100 flex bg-black/50 absolute inset-0 justify-center items-center text-white font-normal text-2xl">Roman</div>
        <Image className="h-full" src={roman} object-fit="cover" alt="Picture of the author" />
        </div>
        <div className="group mx-8 transition-all duration-200 overflow-hidden relative cursor-pointer h-80 w-64 shadow-lg rounded bg-black hover:scale-105">
          <div className="transition-all duration-200 opacity-0 group-hover:opacity-100 flex bg-black/50 absolute inset-0 justify-center items-center text-white font-normal text-2xl">Mak</div>
          <Image className="h-full" src={mak} object-fit="cover" alt="Picture of the author" />
        </div>
        <div className="group mx-8 transition-all duration-200 overflow-hidden relative cursor-pointer h-80 w-64 shadow-lg rounded bg-black hover:scale-105">
          <div className="transition-all duration-200 opacity-0 group-hover:opacity-100 flex bg-black/50 absolute inset-0 justify-center items-center text-white font-normal text-2xl">Aela</div>
          <Image className="h-full" src={aela} object-fit="cover" alt="Picture of the author" />
        </div>
      </div>
    </div>
  );
}

export default Main;
