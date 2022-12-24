// components/layout.js
import Navbar from './Navbar.js'
import PageHead from './Head.js'

import { Roboto } from '@next/font/google'
const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto', weight: ['300', '900'] })

export default function Layout({children}) {
  return (
    <>
      <PageHead />
      <Navbar />
      <main className={`bg-gray-900 min-h-screen flex flex-col items-center ${roboto.className} font-sans py-32`}>{children}</main>
    </>
  )
}
