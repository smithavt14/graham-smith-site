import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="font-black text-white text-4xl">The Kids</h1>
      <div className="my-16 grid grid-cols-1 md:grid-cols-3 gap-16">
        <Link href="/roman" className="group transition-all duration-200 overflow-hidden relative cursor-pointer h-80 w-64 shadow-lg rounded md:hover:shadow-slate-800 md:hover:scale-105" >
          <div className="transition-all duration-200 opacity-0 group-hover:opacity-100 flex bg-black/50 absolute inset-0 justify-center items-center text-white font-normal text-2xl">Roman</div>
          <Image className="h-full object-cover" height="500" width="500" src="/images/roman.jpg" alt="This is Roman" />
        </Link>
        <Link href="/mak" className="group transition-all duration-200 overflow-hidden relative cursor-pointer h-80 w-64 shadow-lg rounded md:hover:shadow-slate-800 md:hover:scale-105" >
          <div className="transition-all duration-200 opacity-0 group-hover:opacity-100 flex bg-black/50 absolute inset-0 justify-center items-center text-white font-normal text-2xl">Mak</div>
          <Image className="h-full object-cover" height="500" width="500" src="/images/mak.jpg" alt="This is Mak" />
        </Link>
        <Link href="/aela" className="group transition-all duration-200 overflow-hidden relative cursor-pointer h-80 w-64 shadow-lg rounded md:hover:shadow-slate-800 md:hover:scale-105" >
          <div className="transition-all duration-200 opacity-0 group-hover:opacity-100 flex bg-black/50 absolute inset-0 justify-center items-center text-white font-normal text-2xl">Aela</div>
          <Image className="h-full object-cover" height="500" width="500" src="/images/aela.jpg" alt="This is Aela" />
        </Link>
      </div>
      <p className="text-white">Made with ❤️ by Uncle Alex</p>
    </div>
  )
}
