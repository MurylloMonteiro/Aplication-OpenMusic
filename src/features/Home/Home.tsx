import { CarouselChannel } from "@/shared/CarouselChannels/Carousel";
import { CarouselMusic } from "@/shared/CarouselMusics/Carousel";
import { Header } from "@/shared/Header/Header";

export function Home() {

    return (
        <div>
            <Header></Header>


            <CarouselChannel search="Lo-fi" ></CarouselChannel>

            <CarouselMusic search="Funk" />

            <CarouselChannel search="Rock" ></CarouselChannel>
            <CarouselMusic search="Sertanejo"/>

            <CarouselMusic search="Jazz" />

            <CarouselChannel search="Samba" ></CarouselChannel>

        </div>
    )
}