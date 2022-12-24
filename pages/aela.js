import Image from 'next/image'

const imageArray = [...Array(22).keys()]

export default function Aela() {
  return (
    <>
      <h1 className="text-4xl text-white font-black">Aela</h1>
      <div className="mt-16 mb-32 grid grid-cols-1 md:grid-cols-3 gap-16">
        {imageArray.map((i, index) => (
          <div key={index} className="flex h-80 w-64 rounded overflow-hidden">
            <Image className="h-full object-cover" width="500" height="500" alt="This is Aela" src={`/aela/aela-${i + 1}.jpg`} />
          </div>
        ))}
      </div>
    </>
  )
}
