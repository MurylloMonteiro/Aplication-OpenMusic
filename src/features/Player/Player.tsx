import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Header } from "@/shared/Header/Header";
import {
    Play,
    SkipBack,
    SkipForward,
    Heart,
    ListPlus,
    Repeat,
    Shuffle,
    Image,
    Video,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { GetVideoURL } from "./Service";

import "./Style.css";
import { useSearchParams } from "react-router";

export function Player() {
    const videoRef = useRef<HTMLVideoElement>(null);

    const [hidenVideo, setHidenVideo] = useState(true);
    const [videoURL, setVideoURL] = useState("");
    const [value, setValue] = useState([0]);

    const [playParams] = useSearchParams();

    useEffect(() => {
        GetVideoURL(playParams.get("id")!).then((response) => {
            setVideoURL(response.data.musicId);
        });
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            if (!videoRef.current) return;

            setValue([videoRef.current.currentTime]);
        }, 100);

        return () => clearInterval(interval);
    }, []);

    function handlePlay() {
        if (!videoRef.current) return;

        if (videoRef.current.paused) {
            videoRef.current.play();
        } else {
            videoRef.current.pause();
        }
    }

    return (
        <div
            className="
                min-h-screen
                w-full
                bg-gradient-to-b
                from-zinc-950
                via-black
                to-zinc-900
                text-white
                flex
                flex-col
                items-center
                pb-10
            "
        >
            <Header />

            <div
                className="
                    flex
                    flex-col
                    items-center
                    justify-center
                    w-full
                    flex-1
                    px-4
                "
            >
                <Card
                    className="
                    p-0
                        w-full
                        max-w-md
                        overflow-hidden
                        transition-all
                        duration-900
                        rounded-3xl
                        border-zinc-800
                        bg-zinc-900/80
                        backdrop-blur-md
                        shadow-2xl
                        shadow-orange-500/10
                    "
                >
                    <CardContent
                        className="
                            flex
                            w-full
                            h-full
                            relative
                            p-0
                            aspect-square
                            overflow-hidden
                            bg-black
                        "
                    >
                        <div
                            className="
                                absolute
                                
                                top-4
                                -translate-x-1/2
                                left-1/2
                                z-20
                                flex
                                gap-2
                                rounded-full
                                bg-black/50
                                backdrop-blur-md
                                p-2
                            "
                        >
                            <button
                                onClick={() => setHidenVideo(true)}
                                className="
                                    p-2
                                    rounded-full
                                    hover:bg-white/10
                                    transition-all
                                "
                            >
                                <Image className="size-5 text-white" />
                            </button>

                            <button
                                onClick={() => setHidenVideo(false)}
                                className="
                                    p-2
                                    rounded-full
                                    hover:bg-white/10
                                    transition-all
                                "
                            >
                                <Video className="size-5 size-5 text-white" />
                            </button>
                        </div>

                        <video
                            ref={videoRef}
                            autoPlay
                            className={`
                                
                                ${hidenVideo ? "hidden" : ""}
                            `}
                            src={videoURL}
                        />

                        <img
                            className={`
                                w-full
                                h-full
                                object-cover
                                transition-all
                                duration-500
                                ${hidenVideo ? "" : "hidden"}
                            `}
                            src={playParams.get("thumb")!}
                            alt=""
                        />

                        <div
                            className="
                                absolute
                                inset-0
                                bg-gradient-to-t
                                from-black/60
                                via-transparent
                                to-transparent
                                pointer-events-none
                            "
                        />
                    </CardContent>
                </Card>

                <div
                    className="
                        w-full
                        max-w-md
                        mt-6
                        overflow-hidden
                    "
                >
                    <p
                        className="
                            text-center
                            text-2xl
                            font-bold
                            tracking-tight
                            text-white
                        "
                    >
                        {playParams.get("title")}
                    </p>
                </div>

                <div
                    className="
                        w-full
                        max-w-md
                        flex
                        justify-between
                        items-center
                        mt-6
                    "
                >
                    <div className="flex gap-5">
                        <button>
                            <Heart
                                className="
                                    size-6
                                    text-zinc-400
                                    hover:text-red-500
                                    transition-all
                                "
                            />
                        </button>

                        <button>
                            <ListPlus
                                className="
                                    size-6
                                    text-zinc-400
                                    hover:text-orange-500
                                    transition-all
                                "
                            />
                        </button>
                    </div>

                    <div className="flex gap-5">
                        <button>
                            <Repeat
                                className="
                                    size-6
                                    text-zinc-400
                                    hover:text-orange-500
                                    transition-all
                                "
                            />
                        </button>

                        <button>
                            <Shuffle
                                className="
                                    size-6
                                    text-zinc-400
                                    hover:text-orange-500
                                    transition-all
                                "
                            />
                        </button>
                    </div>
                </div>

                <div
                    className="
                        flex
                        items-center
                        justify-center
                        gap-10
                        my-8
                    "
                >
                    <button
                        className="
                            hover:scale-110
                            transition-all
                        "
                    >
                        <SkipBack
                            className="
                                size-8
                                text-zinc-300
                                hover:text-white
                            "
                        />
                    </button>

                    <button
                        onClick={() => handlePlay()}
                        className="
                            flex
                            w-[80px]
                            h-[80px]
                            justify-center items-center
                            rounded-full
                            bg-orange-500
                            shadow-sm
                            shadow-orange-500/70
                            transition-all
                            duration-300
                            hover:scale-110
                            active:scale-95
                        "
                    >
                        <Play
                            className="
                                mr-auto
                                ml-auto
                                size-8
                                fill-zinc-900
                                text-zinc-900
                                ml-1
                            "
                        />
                    </button>

                    <button
                        className="
                            hover:scale-110
                            transition-all
                        "
                    >
                        <SkipForward
                            className="
                                size-8
                                text-zinc-300
                                hover:text-white
                            "
                        />
                    </button>
                </div>


                <div
                    className="
                        w-full
                        max-w-md
                        
                    "
                >
                    <Slider
                        className="
                            [&_[data-slot=slider-range]]:bg-orange-500
                            [&_[data-slot=slider-track]]:bg-zinc-700
                        "
                        min={0}
                        max={videoRef.current?.duration || 0}
                        step={1}
                        value={value}
                        onValueChange={(newValue) => {
                            setValue(newValue);

                            if (!videoRef.current) return;

                            videoRef.current.currentTime = newValue[0];
                        }}
                    />
                </div>
            </div>
        </div>
    );
}