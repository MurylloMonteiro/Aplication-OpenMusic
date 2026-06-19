import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { useEffect, useState } from "react"
import { SearchMusic } from "./Service"

import "./Style.css"

export function CarouselMusic({search}: {search:string}) {

    const [musicArry, setMusicArray] = useState(Array)


    useEffect(() => {
        SearchMusic(search).then((data: any) => {
            setMusicArray(data.data)
        })
    
    },[])

    return (
        <div className="mx-4 py-1" >
            <Carousel className=" p-0">
                <CardHeader>
                    <h1 className="pl-2 font-bold text-gray-100" >{search}</h1>
                </CardHeader>
                <CarouselContent className="px-3">
                    {musicArry?.map((i: any, index) => (
                        <CarouselItem key={index} className=" basis-[35%] p-1 m-1 sm:basis-[15%]">
                            <Card className="bg-gray-950 overflow-hidden p-0 min-h-[180px] sm:min-h-[250px] ">
                                <CardContent className="flex flex-col p-0 gap-0 overflow-hidden">
                                    <img className="w-full h-[90px]  object-cover sm:h-[30%]" src={i.thumbnails[1]} alt="" />

                                        
                                    <div className="p-1 flex flex-col px-2">
                                        <p className="text-[90%] mt-auto line-clamp-3 font-bold m-0.5">{i.title}</p>
                                        <p className="text-[80%]  text-gray-400 truncate">{i.channel}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    )
}