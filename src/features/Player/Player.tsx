import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Header } from "@/shared/Header/Header";
import { Play, SkipBack, SkipForward, Heart, ListPlus, Repeat, Shuffle } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { GetVideoURL } from "./Service";

import './Style.css'
import { useParams, useSearchParams } from "react-router";

export function Player({ musicTitle, musicID }: { musicTitle: String, musicID: any }) {
    const videoRef = useRef<HTMLVideoElement>(null);
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
            <Header />
            <div className="flex flex-col justify-center mt-[10%]">

                <Card className="mx-8 p-0 object-cover mb-[20%]" >
                    <CardContent className="bg-black p-0 flex h-[300px]">

                        <video ref={videoRef} autoPlay muted className="" src={videoURL} />

                        <img className="object-cover hidden" src="https://static.poder360.com.br/uploads/2026/04/Manoel-Gomes-7-abr-2026-848x477.jpg" alt="" />

                    </CardContent>
                </Card>

                <div className="mx-10  overflow-hidden h-10">
                    <p className="text-2xl whitespace-nowrap font-bold  animate-[moveX_5s_linear_infinite]" >{playParams.get("title")}</p>
                </div>

                <div className=" flex justify-center flex-col h-[200px]  " >
                    <div className="flex mx-10 justify-between" >
                        <div className="flex gap-5">
                            <button>
                                <Heart className="size-8" />
                            </button>
                            <button>
                                <ListPlus className="size-8" />
                            </button>
                        </div>
                        <div className="flex gap-5">

                            <button>
                                <Repeat className="size-8" />
                            </button>
                            <button>
                                <Shuffle className="size-8" />
                            </button>
                        </div>
                    </div>

                    <div className="flex justify-center items-center gap-8 my-6" >
                        <button>
                            <SkipBack className="size-10 " />
                        </button>
                        <button onClick={() => handlePlay()} className="bg-orange-500 flex shadow-lg justify-center items-center w-[75px] h-[75px] rounded-full " >
                            <Play className=" size-8 " />
                        </button>
                        <button>
                            <SkipForward className="size-10  " />
                        </button>
                    </div>

                    <div className="bg-orange-300 shadow-ls rounded-full mx-10">
                        <Slider
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