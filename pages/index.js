import Head from 'next/head'
import SideBar from '../components/sideBar/index'
import Feed from '../components/feed/index'
import Widgets from '../components/widgets/index'

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black">
      <Head>
        <title>Latest Tweets / Twitter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto flex w-full flex-1 flex-row justify-between text-white 2xl:px-20">
        <SideBar />
        <Feed />
        <Widgets />
      </main>
    </div>
  )
}

export default Home
