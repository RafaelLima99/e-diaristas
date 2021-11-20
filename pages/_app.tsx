import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {ThemeProvider, createTheme} from '@mui/material/styles'



function MyApp({ Component, pageProps }: AppProps) {

  const theme = createTheme({
    palette:{
      mode: "dark"
    }
  })

  return (

    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
  
}

export default MyApp
