import { Card, CardContent, CardHeader } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { useEffect, useState } from "react"
import { SearchMusic } from "./Service"

export function CarouselChannel({ search }: { search: string }) {
  const [musicArray, setMusicArray] = useState<any[]>([])

  useEffect(() => {
    SearchMusic(search).then((data: any) => {
      setMusicArray(data.data || [])
    })
  }, [search])

  return (
    <section className="w-full py-2 bg-">
      <CardHeader className="pb-4">
        <h2 className="mx-5 text-xl md:text-2xl font-bold text-white">
          {search}
        </h2>
      </CardHeader>

      <Carousel
        opts={{
          align: "start",
          dragFree: true,
        }}
        className="w-full px-4"
      >
        <CarouselContent className="-ml-4">
          {musicArray.map((item: any, index) => {
            const thumb =
              item.thumbnails?.[1] ||
              item.thumbnails?.[0] ||
              "/placeholder.jpg"

            return (
              <CarouselItem
                key={index}
                className="
                  pl-4
                  basis-[45%]
                  sm:basis-[28%]
                  md:basis-[22%]
                  lg:basis-[16%]
                  xl:basis-[11%]
                "
              >
                <button className="w-full group">
                  <div className="flex flex-col items-center">
                    <Card
                      className="
                        p-0
                        w-full
                        aspect-square
                        rounded-full
                        overflow-hidden
                        border
                        border-zinc-800
                        bg-zinc-900
                        transition-all
                        duration-300
                        hover:-translate-y-2
                        hover:border-orange-500/50
                        hover:shadow-xl
                        hover:shadow-orange-500/20
                      "
                    >
                      <CardContent className="p-0 overflow-hidden h-full ">
                        <img
                          src={thumb}
                          alt={item.channel}
                          className="
                            h-[1000px]
                            w-full
                            h-full
                            object-cover
                            transition-transform
                            duration-500
                            group-hover:scale-110
                          "
                        />
                      </CardContent>
                    </Card>

                    <div className="mt-3 w-full text-center">
                      <p
                        className="
                          text-white
                          text-sm
                          font-medium
                          truncate
                          px-2
                        "
                      >
                        {item.channel}
                      </p>

                      <p
                        className="
                          text-zinc-500
                          text-xs
                          mt-1
                        "
                      >
                        Artista
                      </p>
                    </div>
                  </div>
                </button>
              </CarouselItem>
            )
          })}
        </CarouselContent>

        <CarouselPrevious
          className="
            hidden
            md:flex
            bg-zinc-900
            border-zinc-700
            text-white
          "
        />

        <CarouselNext
          className="
            hidden
            md:flex
            bg-zinc-900
            border-zinc-700
            text-white
          "
        />
      </Carousel>
    </section>
  )
}