import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { useEffect, useState } from "react"
import { SearchMusic } from "./Service"

import "./Style.css"

export function CarouselChannel({search}: {search:string}) {

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
                        <CarouselItem key={index} className="flex flex-col items-center basis-[130px] p-1 m-1 sm:basis-[15%]">
                            <Card className="overflow-hidden rounded-full p-0   ">
                                <CardContent className="flex flex-col p-0 gap-0 overflow-hidden">
                                    <img className="w-full h-[120px]  object-cover sm:h-[30%]" src={i.thumbnails[1]} alt="" />
                                
                                </CardContent>
                            </Card>
                            <p className="max-w-[90%] text-[10px] truncate p-1" >{i.channel}</p>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    )
}