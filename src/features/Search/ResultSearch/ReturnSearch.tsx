import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Header } from "@/shared/Header/Header"
import { useEffect, useState } from "react"
import { SearchMusic } from "./Service"


export function ReturnSearch({ search }: { search: string }) {

    const [musicArray, setMusicArray] = useState([])

    useEffect(() => {
        const loadMusics = async () => {
            try {
                const response = await SearchMusic("matue");
                setMusicArray(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        loadMusics();
    }, []);

    return (
        <>
            <Header />



            {musicArray?.map((i, index) => (
                <Card key={index} className="w-full p-0 rounded-none overflow-hidden  border-zinc-800 bg-zinc-950 transition-all  duration-300 hover:-translate-y-0.5 hover:border-zinc-700 hover:shadow-xl hover:shadow-black/40">
                    <CardContent className="relative p-0">
                        <img
                            src={i.thumbnails[0]}
                            alt="Capa"
                            className="rounded-none aspect-video w-full object-cover transition-transform duration-300 shadow-2xl  group-hover:scale-105"
                        />

                        <div className="absolute  inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    </CardContent>

                    <CardFooter className="relative border-0 flex items-start gap-4 bg-zinc-950 py-4">
                        <img
                            src="https://imgs.search.brave.com/ICKrOw9aXJlTDM4arK-iyitJ9ysd-H-O6LTWHiEsm9U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yb2xs/aW5nc3RvbmUuY29t/LmJyL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDI2LzA2L01hdHVl/LXNlLXRvcm5hLW8t/cHJpbWVpcm8tcmFw/cGVyLWJyYXNpbGVp/cm8tYS10b2Nhci1u/by1wYWxjby1wcmlu/Y2lwYWwtZG8tUm9j/ay1pbi1SaW8tTGlz/Ym9hLURpdnVsZ2Fj/YW9BbmRyZS1TYXVk/YWRlLTgwMHg0NTAu/anBn"
                            alt="Artista"
                            className=" h-16 w-16 rounded-full border-4 border-zinc-950 object-cover shadow-lg"
                        />

                        <div className="flex-1 overflow-hidden">
                            <h3 className="line-clamp-2 text-[95%] font-semibold leading-snug text-white">
                                {i.title}
                            </h3>

                            <p className="mt-1 text-[80%] font-medium text-zinc-400">
                                {i.channel}
                            </p>
                        </div>
                    </CardFooter>
                </Card>

            ))}

        </>)


}