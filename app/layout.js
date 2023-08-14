
import NavBar from '../components/NavBar'
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
      <title>Julian Iocco - Portafolio</title>
      <meta name="description" content="Devouring details. Nourishing novelty. Deploying excellence."></meta>
    </head>
      <body className='bg-dark w-full h-full flex justify-center font-mplus scrollbar-thumb-FL scrollbar-track-boton scrollbar-thin scrollbar-thumb-rounded'>
      <NavBar/>
      {children}
      </body>
    </html>
  )
}
