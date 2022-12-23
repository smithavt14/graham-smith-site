import PageHead from '../components/Head';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <>
      <PageHead />
      <Navbar />
      <main className="bg-gray-900 h-screen flex items-center justify-center">
        <div className="text-white text-center">Hello World</div>
      </main>
    </>
  )
}
