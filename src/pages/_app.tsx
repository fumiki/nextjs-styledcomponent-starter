import { NextPage } from 'next'
import { AppProps } from 'next/app'
import {Reset} from "styled-reset"

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  return <>
    <Reset />
    <Component />
  </>
}

export default App
