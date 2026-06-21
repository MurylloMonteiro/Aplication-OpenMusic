import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Header } from "@/shared/Header/Header";
import { Play, SkipBack, SkipForward, Heart, ListPlus, Repeat, Shuffle } from "lucide-react";
import { useEffect, useState } from "react";

export function Player() {
    const [value, setValue] = useState([0]);

    useEffect(() => {
        const interval = setInterval(() => {
            setValue(prev => [Math.min(prev[0] + 1, 100)]);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <Header />
            <div className="flex flex-col justify-center mt-[20%]">

                <Card className="mx-10 p-0 object-cover mb-[30%]" >
                    <CardContent className="p-0">
                        <img className="w-[900px] h-[200px]" src="https://static.poder360.com.br/uploads/2026/04/Manoel-Gomes-7-abr-2026-848x477.jpg" alt="" />
                    </CardContent>
                </Card>


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
                        <button className="bg-orange-500 flex shadow-lg justify-center items-center w-[75px] h-[75px] rounded-full " >
                            <Play className="text-black size-8 " />
                        </button>
                        <button>
                            <SkipForward className="size-10  " />
                        </button>


                    </div>


                    <div className="bg-orange-300 shadow-ls rounded-full mx-10">
                        <Slider
                            min={0}
                            max={100}
                            step={1}
                            value={value}
                            onValueChange={setValue}
                            className="w-full"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}