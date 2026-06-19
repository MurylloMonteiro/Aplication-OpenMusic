import { CarouselChannel } from "@/shared/CarouselChannels/Carousel";
import { CarouselMusic } from "@/shared/CarouselMusics/Carousel";

export function Home() {

    return (
        <div>
            <CarouselChannel search="Lo-fi" ></CarouselChannel>

            <CarouselMusic search="Funk" />

            <CarouselChannel search="Rock" ></CarouselChannel>
            <CarouselMusic search="Sertanejo"/>

            <CarouselMusic search="Jazz" />

            <CarouselChannel search="Samba" ></CarouselChannel>


        </div>
    )
}