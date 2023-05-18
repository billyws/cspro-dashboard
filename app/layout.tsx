import SideNav from '../components/SideNav'
import TopNav from '../components/TopNav'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CSPro Dashboard',
  description: 'CAPI Monitoring dashboard',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopNav/>
        <div className='flex flex-row'>
        <SideNav/>
        {children}

        </div>
        
        </body>
    </html>
  )
}
