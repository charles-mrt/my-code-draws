import { ChevronsRight } from "lucide-react";
import Link from "next/link";


export default function Home() {

  const pages = [
    {
      title: "top gear... go go",
      url: "pages/top-gear"
    },
    {
      title: "mario... go go",
      url: "pages/top-gear"
    },
    {
      title: "cars... go go",
      url: "pages/top-gear"
    }
  ]

  return (

    <main className="relative">

      <audio src={"/assets/audio/city.mp3"} autoPlay loop />
      <audio src={"/assets/audio/skate.mp3"} autoPlay loop />

      <span className="text-6xl welcome-shadow" >bem vindo a </span>
      <h1 className="text-9xl  title-shadow" >My Code Draws </h1>

      <video autoPlay loop className="fixed top-0 left-0 -z-10">
        <source src="/assets/video/background.mp4" type="video/mp4" />
      </video>

      <div className="flex flex-col mt-6">
       
        <ul>

          {pages.map((page, index) => {
            return (
              <li className="flex gap-1 items-center capitalize group" key={index}>
                <ChevronsRight className="opacity-0 group-hover:opacity-100 " />
                <Link href={page.url} className="text-3xl hover:" >
                  {page.title}
                </Link>
              </li>
            )
          })
          }

        </ul>

      </div>
    </main>
  )
}
