import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import {Categories, Header, HeroSection, FoodItems, Partners, Downloadapp, Footer  } from "@/components";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
      <Head>
        <title>Lagos Grocery Store | Affordable foodstuff Shopping at Pricepally</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

      </Head>
      <main className="container-fluid body">
          <Header />
          <HeroSection />
        <Categories />
          <FoodItems />
          <Partners />
          <Downloadapp />
          <Footer />
      </main>
    </>
  )
}
