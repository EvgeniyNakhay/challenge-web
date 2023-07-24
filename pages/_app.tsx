import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import Content from "@/layouts/content";

// Команда для сборки стелей тайвин
//npx tailwindcss -i ./styles/globals.css -o ./taiwin/globals.css --watch

export default function App({Component, pageProps, ...appProps}: AppProps) {
   if (['/create-challenge'].includes(appProps.router.pathname)){
        return <Component {...pageProps} />
   }
    return (
        <>
            <Content>
                <Component {...pageProps} />
            </Content>
        </>
    )
}
