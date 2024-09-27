import { ChevronsRight } from "lucide-react";
import Link from "next/link";
import { About } from "./components/About";


export default function Home() {

  const pages = [
    {
      title: "top gear... go go",
      url: "pages/top-gear"
    },

  ]

  return (

    <main className="relative">

      <audio src={"/assets/audio/city.mp3"} autoPlay loop muted />
      <audio src={"/assets/audio/skate.mp3"} autoPlay loop muted />

      <span className="text-6xl welcome-shadow" >bem vindo a </span>
      <h1 className="text-9xl  title-shadow" >My Code Draws </h1>

      <video autoPlay loop muted className="fixed top-0 left-0 -z-10">
        <source src="/assets/video/background.mp4" type="video/mp4" />
      </video>

      <div className="mt-6 max-w-2xl flex flex-col justify-center">

        <ul>

          {pages.map((page, index) => {
            return (
              <li className="flex gap-1 items-center capitalize group" key={index}>
                <ChevronsRight className="opacity-0 group-hover:opacity-100 " />
                <Link href={page.url} className="text-3xl" >
                  <span className="text-base">go to </span>
                  {page.title}
                </Link>
              </li>
            )
          })
          }

        </ul>
        <div className="mt-10">
          <About />
        </div>
      </div>
    </main>
  )
}
