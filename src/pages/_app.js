import '@/styles/swiper.css'
import '@/styles/globals.css'
import 'mapbox-gl/dist/mapbox-gl.css'


import { TiendaProvider } from '@/context/TiendaProvider'
export default function App({ Component, pageProps }) {
  return (
    <TiendaProvider>
      <Component {...pageProps} />
    </TiendaProvider>
  )
}