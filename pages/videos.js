import YouTube from "react-youtube";
import Header from '@components/Header'
import Footer from '@components/Footer'
import Head from "next/head";


export default function videos() {
    const opts = {
        height: "390",
        width: "640",
        playerVars: {
            autoplay: 1,
        },
    };
    return  (
        <div className="container">
            <Head>
                <title>Charmander and its evolution!</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Header title="Charmander and its Evolution!" />
                <div>
                    <YouTube videoId="RwqIHwpHTys"
                             opts={opts} />
                </div>
            </main>

            <Footer />
        </div>
    )
}