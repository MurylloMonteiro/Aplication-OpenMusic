import {
  Card,
  CardContent,
} from "@/components/ui/card"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { Play } from "lucide-react"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router"

import { SearchMusic } from "./Service"

export function CarouselMusic({ search }: { search: string }) {
  const [musicArray, setMusicArray] = useState<any[]>([])
  const navigate = useNavigate()

  useEffect(() => {
    SearchMusic(search).then((data: any) => {
      setMusicArray(data.data || [])
    })
  }, [search])

  return (
    <section className="w-full py-2">
      <div className="flex items-center justify-between px-4 mb-4">
        <div>
          <h2 className="text-xl md:text-2xl font-extrabold text-white">
            {search}
          </h2>
          <p className="text-xs text-zinc-400 mt-1">
            {musicArray.length} músicas
          </p>
        </div>
      </div>

      <Carousel
        opts={{
          align: "start",
          dragFree: true,
        }}
        className="w-full px-4"
      >
        <CarouselContent className="-ml-4">
          {musicArray.map((music, index) => {
            const thumb =
              music.thumbnails?.[1] ||
              music.thumbnails?.[0] ||
              "/placeholder.jpg"

            return (
              <CarouselItem
                key={index}
                className="
                my-6
                  pl-4
                  basis-[45%]
                  sm:basis-[45%]
                  md:basis-[30%]
                  lg:basis-[22%]
                  xl:basis-[18%]
                  2xl:basis-[15%]
                "
              >
                <button
                  className="w-full text-left group"
                  onClick={() =>
                    navigate(
                      `/play?id=${music.id}&title=${encodeURIComponent(
                        music.title
                      )}&thumb=${encodeURIComponent(thumb)}`
                    )
                  }
                >
                  <Card
                    className="
                      dark
                      p-0
                      h-full
                      overflow-hidden
                      rounded-3xl
                      border
                      border-zinc-800
                      bg-zinc-900/80
                      backdrop-blur-md
                      transition-all
                      duration-300
                      hover:-translate-y-2
                      hover:bg-orange-500/20
                      hover:shadow-sm
                      hover:shadow-orange-500/20
                    "
                  >
                    <CardContent className="p-0">
                      <div className="relative overflow-hidden">
                        <img
                          src={thumb}
                          alt={music.title}
                          className="
                            w-full
                            aspect-square
                            object-cover
                            transition-transform
                            duration-500
                            group-hover:scale-105
                          "
                        />

                        <div
                          className="
                            absolute inset-0
                            bg-gradient-to-t
                            from-black/80
                            via-black/20
                            to-transparent
                          "
                        />

                        <div
                          className="
                            absolute
                            bottom-[45%]
                            right-[45%]
                            opacity-0
                            translate-y-3
                            transition-all
                            duration-300
                            group-hover:opacity-100
                            group-hover:translate-y-0
                          "
                        >
                          <div
                            className="
                              flex
                              items-center
                              justify-center
                              rounded-full
                              
                              shadow-lg
                              
                            "
                          >
                            <Play className="text-white size-[50px]"/>
                          </div>
                        </div>
                      </div>

                      {/* Info */}
                      <div className="p-4">
                        <h3
                          className="
                            text-sm
                            md:text-base
                            font-semibold
                            text-white
                            leading-5
                            line-clamp-2
                            min-h-[40px]
                          "
                        >
                          {music.title}
                        </h3>

                        <p
                          className="
                            mt-2
                            text-xs
                            md:text-sm
                            text-zinc-400
                            truncate
                          "
                        >
                          {music.channel}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </button>
              </CarouselItem>
            )
          })}
        </CarouselContent>

        {/* Navegação Desktop */}
        <CarouselPrevious
          className="
            hidden
            md:flex
            border-zinc-700
            bg-zinc-900/90
            text-white
          "
        />

        <CarouselNext
          className="
            hidden
            md:flex
            border-zinc-700
            bg-zinc-900/90
            text-white
          "
        />
      </Carousel>
    </section>
  )
}