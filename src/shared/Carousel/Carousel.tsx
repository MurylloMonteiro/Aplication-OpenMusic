import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
export function CarouselComponente() {




    return (
        <div className="mx-4 py-2" >
            <Carousel className="p-0">
                <CarouselContent className="px-3">

                    {Array.from({ length: 5 }).map((i, index) => (

                        <CarouselItem key={index} className="basis-[40%] m-1">
                            <Card className="overflow-hidden p-0">
                                <CardContent className="p-0 gap-0 overflow-hidden">
                                    <img className="w-full h-24  object-cover" src="https://i.ytimg.com/vi/fziPacnpQQc/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBBNczCWK9pp3lyfOFpex6DsIOrqw" alt="" />
                                    
                                    <div className="p-1 px-2">
                                        <p className="text-[85%] line-clamp-3 font-bold m-0.5">Melhores momentos manoel gomes official</p>
                                        <p className="text-[80%] text-gray-400 truncate">Maneol Gomes official</p>
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