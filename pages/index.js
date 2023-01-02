import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Charmander and its evolution!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Charmander and its Evolution!" />
        <div>
            <img src={"images/home/charmander-4.png"} style={{width:"500px"}}/>
            <img src={"images/home/charmander-2.png"} style={{width:"500px"}}/>
            <img src={"images/home/charmander-5.png"} style={{width:"500px"}}/>
            <img src={"images/home/charmander-1.png"} style={{width:"500px"}}/>
            <img src={"images/home/charmander-7.jpg"} style={{width:"500px"}}/>
            <img src={"images/home/charmander-6.png"} style={{width:"500px"}}/>
            <img src={"images/home/charmander-3.png"} style={{width:"500px"}}/>
        </div>
      </main>

      <Footer />
    </div>
  )
}
