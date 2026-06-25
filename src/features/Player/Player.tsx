import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Header } from "@/shared/Header/Header";
import { Play, SkipBack, SkipForward, Heart, ListPlus, Repeat, Shuffle, Image, Video } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { GetVideoURL } from "./Service";

import './Style.css'
import { useParams, useSearchParams } from "react-router";

export function Player() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [hidenVideo, setHidenVideo] = useState(true)
    const [videoURL, setVideoURL] = useState("")
    const [value, setValue] = useState([0]);

    const [playParams] = useSearchParams()

    useEffect(() => {
        console.log(playParams.get("id"))
        GetVideoURL(playParams.get("id")!)
            .then((response) => {

                setVideoURL(response.data.musicId);
            })
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
            videoRef.current.play()
        } else {
            videoRef.current.pause()
        }
    }

    return (
        <>
            <div className="w-screen h-screen flex flex-col sm: items-center justify-center ">
                <Header />

                <Card className="mx-8  p-0 object-cover w-[90%] sm:w-[60%] h-[55%] mb-[10%]" >
                    <CardContent className="bg-black p-0 flex h-full justify-center  ">
                        <div className="bg-amber-500 fixed justify-between flex w-[10%] mt-5">
                            <button onClick={() => setHidenVideo(true)}>
                                <Image className="size-10  mx-5" />
                            </button>
                            <button onClick={() => setHidenVideo(false)}>
                                <Video  className="size-10  mx-5"/>
                            </button>
                        </div>

                        <video ref={videoRef} autoPlay muted className={hidenVideo ? "hidden" : " " } src={videoURL} />

                        <img className={hidenVideo ? "" : "hidden" } src={playParams.get("thumb")!} alt="" />

                    </CardContent>
                </Card>

                <div className="mx-10  overflow-hidden h-10">
                    <p className="text-2xl whitespace-nowrap font-bold  animate-[moveX_5s_linear_infinite]" >{playParams.get("title")}</p>
                </div>

                <div className=" flex justify-center flex-col w-full mb-[2%]  " >
                    <div className="flex mx-10 justify-between sm:mx-30" >
                        <div className="flex gap-5 sm:gap-20">
                            <button>
                                <Heart className="size-8 sm:size-12" />
                            </button>
                            <button>
                                <ListPlus className="size-8 sm:size-12" />
                            </button>
                        </div>
                        <div className="flex gap-5 sm:gap-20">

                            <button>
                                <Repeat className="size-8 sm:size-12" />
                            </button>
                            <button>
                                <Shuffle className="size-8 sm:size-12" />
                            </button>
                        </div>
                    </div>

                    <div className="flex justify-center items-center gap-8 my-6" >
                        <button>
                            <SkipBack className="size-10   sm: size-16" />
                        </button>
                        <button onClick={() => handlePlay()} className="bg-orange-500 flex shadow-lg justify-center items-center w-[75px] h-[75px] rounded-full sm:w-[100px] h-[100px] " >
                            <Play className=" size-8 sm:size-12" />
                        </button>
                        <button>
                            <SkipForward className="size-10  sm: size-16" />
                        </button>
                    </div>

                    <div className="bg-orange-300 shadow-ls rounded-full mx-10 mb-auto  sm:mx-30">
                        <Slider

                            className=""
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
        </>
    );
}