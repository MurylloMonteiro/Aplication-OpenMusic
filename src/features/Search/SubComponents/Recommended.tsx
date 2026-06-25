import { CarouselChannel } from "@/shared/CarouselChannels/Carousel";
import { CarouselMusic } from "@/shared/CarouselMusics/Carousel";

export function Recommended(){

    return(
        <>
            

            <CarouselMusic search="Matue" ></CarouselMusic>
            <CarouselChannel search="Hip Hop" ></CarouselChannel>
        </>
    )
}