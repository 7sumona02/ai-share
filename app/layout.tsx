import { IBM_Plex_Sans, VT323 } from 'next/font/google'
import './globals.css'
 
const vt = VT323({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-vt',
})

const ibm = IBM_Plex_Sans({
  weight: '300',
  subsets: ['latin'],
  variable: '--font-ibm',
})
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${vt.variable} ${ibm.variable}`}>
      <body>{children}</body>
    </html>
  )
}