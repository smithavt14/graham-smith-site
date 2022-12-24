import Image from 'next/image'

const imageArray = [...Array(19).keys()]

export default function Roman() {
  return (
    <>
      <h1 className="text-4xl text-white font-black">Roman</h1>
      <div className="mt-16 mb-32 grid grid-cols-1 md:grid-cols-3 gap-16">
        {imageArray.map((i, index) => (
          <div key={index} className="transition-all duration-200 flex h-80 w-64 rounded overflow-hidden shadow-lg md:hover:shadow-slate-800 md:hover:scale-105">
            <Image className="h-full object-cover" width="500" height="500" alt="This is Roman" src={`/roman/roman-${i + 1}.jpg`} />
          </div>
        ))}
      </div>
    </>
  )
}
