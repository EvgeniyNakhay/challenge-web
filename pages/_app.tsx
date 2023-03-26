import '@/taiwin/globals.css'
import type { AppProps } from 'next/app'

// Команда для сборки стелей тайвин
//npx tailwindcss -i ./styles/globals.css -o ./taiwin/globals.css --watch


export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
