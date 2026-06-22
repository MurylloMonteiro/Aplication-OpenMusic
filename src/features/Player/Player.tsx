import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Header } from "@/shared/Header/Header";
import { Play, SkipBack, SkipForward, Heart, ListPlus, Repeat, Shuffle } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import './Style.css'

export function Player({ musicTitle, musicID }: { musicTitle: String, musicID: String }) {
    const videoRef = useRef<HTMLVideoElement>(null);

    const [value, setValue] = useState([0]);

    function handlePlay() {
        if (!videoRef.current) return;


        if (videoRef.current.paused) {
            videoRef.current.play()
        } else {
            videoRef.current.pause()
        }
    }


    useEffect(() => {
        const interval = setInterval(() => {
            if (!videoRef.current) return;

            setValue([videoRef.current.currentTime]);
        }, 100);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <Header />
            <div className="flex flex-col justify-center mt-[10%]">

                <Card className="mx-8 p-0 object-cover mb-[20%]" >
                    <CardContent className="bg-black p-0 flex h-[300px]">

                        <video ref={videoRef}  muted className="" src="https://rr1---sn-cgpn5oxu-w25l.googlevideo.com/videoplayback?expire=1782146362&ei=2hA5aqDbLoGX-LAPk_SKiAw&ip=2804%3A29b8%3A5083%3Ae5f0%3A653d%3A42f4%3A9a8f%3A320c&id=o-AAdh6-CJcE4W_JTSacFcSqCr3A1pB5x2lqbt2WI2-zM4&itag=18&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&cps=864&met=1782124762%2C&mh=Ov&mm=31%2C29&mn=sn-cgpn5oxu-w25l%2Csn-u1gpv5-5j&ms=au%2Crdu&mv=m&mvi=1&pl=48&rms=au%2Cau&initcwndbps=2020000&bui=ARmQxEXdlSm0kmFT4J_EwKw1EHcTrDOPOxQiY59CQgFsOLXX8TqM66vkcx7yAb4pr1Zz0nVi8JvTeyHC&spc=SQ-umv8iXsGsq8H5ztMuA8uf83WhKZVeWfVCTBdfAluV2NcFkZNa&vprv=1&svpuc=1&mime=video%2Fmp4&rqh=1&gir=yes&clen=31681883&ratebypass=yes&dur=349.413&lmt=1778013946276846&mt=1782124391&fvip=3&fexp=51565115%2C51565682%2C51946837%2C51987687&c=ANDROID_VR&txp=4538534&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Crqh%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AHEqNM4wRQIhAPaqlo9Q1FXniLb3OCIfhft0yGVqXac1PJMlOjX8G4HsAiA1VjevNBICRJzcofvZYo0-lwxhhAxXijjqtYaDhzZtbw%3D%3D&lsparams=cps%2Cmet%2Cmh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Crms%2Cinitcwndbps&lsig=APaTxxMwRQIhAN5h8-_B91ValV-HQ_EH1tNPlA590JHMwM8mWfpMliEDAiAqkkEqYKEuEAPxI_o0E44LTbHfcJgR0ZCcdUpthtdCrA%3D%3D" />

                        <img className="object-cover" src="https://static.poder360.com.br/uploads/2026/04/Manoel-Gomes-7-abr-2026-848x477.jpg" alt="" />



                    </CardContent>
                </Card>


                <div className="mx-10  overflow-hidden h-10">
                    <p className="text-2xl font-bold truncate animate-[moveX_5s_linear_infinite]" >{musicTitle}</p>
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