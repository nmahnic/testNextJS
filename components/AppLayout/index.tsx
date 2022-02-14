import { NextPage } from "next"
import Head from "next/head"

const AppLayout: NextPage = ({children}) =>  {
  return (
    <div>
      <Head>
        <title>Devter</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {children}
      </main>
    </div>
  )
}

export default AppLayout