import '@/taiwin/globals.css'
import type { AppProps } from 'next/app';
import {Container} from "@mui/material";
import Navbar from "@/components/NavBar/navbar";
import '../styles/globals.css';

// Команда для сборки стелей тайвин
//npx tailwindcss -i ./styles/globals.css -o ./taiwin/globals.css --watch


export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container sx={{ 
        height: '90vh',
        bgcolor: 'rgba(255, 255, 255, .25)', 
        borderRadius: '20px',
        border: '1px solid rgba(255, 255, 255, .4)',
        }}>
      <Navbar>
        <Component {...pageProps} />
        <div>main</div>
      </Navbar>
    </Container>
  )
}
