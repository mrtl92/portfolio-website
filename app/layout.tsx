import Header from '@/components/header'
import './globals.css'
import { Inter } from 'next/font/google'
import ActiveSectionContextProvider from '@/context/active-section-context'
import Footer from '@/components/footer'
import ThemeSwitch from '@/components/theme-switch'
import ThemeContextProvider from '@/context/theme-context'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Aleksander | Personal Portfolio',
  description:
    'Aleksander is a full-stack developer with 8 years of experience.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gradient-to-br from-indigo-50 via-slate-50 to-white-100 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gradient-to-br dark:from-gray-700 dark:via-gray-900 dark:to-black dark:text-gray-50 dark:text-opacity-90`}
      >
        {/* <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[200px] "></div> */}
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />

            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  )
}
