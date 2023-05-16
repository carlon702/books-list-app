import '@/styles/index.css'
import type { AppProps } from 'next/app'
import {Provider} from './context/books'


export default function App({ Component, pageProps }: AppProps) {
  return(
  <Provider>
  <Component {...pageProps} />
  </Provider>
  )
}
