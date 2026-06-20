import { Search as SearchIcon, SlidersHorizontal, Clock3 } from "lucide-react";
import { useState } from "react";

import { CarouselChannel } from "@/shared/CarouselChannels/Carousel";
import { CarouselMusic } from "@/shared/CarouselMusics/Carousel";

export function Search() {
    const [search, setSearch] = useState("");

    const categories = [
        "Trap",
        "Rap",
        "Pop",
        "Rock",
        "Funk",
        "Sertanejo",
    ];

    return (
        <div className="min-h-screen bg-background p-4">
           
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-3xl font-bold">
                    Pesquisar
                </h1>

                <button className="h-11 w-11 rounded-full border flex items-center justify-center hover:bg-accent">
                    <SlidersHorizontal size={18} />
                </button>
            </div>

          
            <div className="relative mb-6">
                <SearchIcon className="absolute w-8 h-8 left-6 top-1/2 -translate-y-1/2 text-muted-foreground" size={20}/>

                <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Artistas, músicas ou playlists..." className=" w-full h-14 
                    rounded-2xl border bg-card pl-20  pr-4 text-2xl outline-none focus:ring-2"/>
            </div>

           
            <div className="mb-8">
                <h2 className="font-semibold text-lg mb-3">
                    Categorias
                </h2>

                <div className="flex gap-3 overflow-x-auto pb-2">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSearch(category)} 
                            className=" px-5 py-2 rounded-full bg-primary text-primary-foreground whitespace-nowrap border-1">
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            
            <div className="mb-8">
                <h2 className="font-semibold text-lg mb-3">
                    Recentes
                </h2>

                <div className="space-y-2">
                    {["Matuê", "Veigh", "Teto"].map((item) => (
                        <button
                            key={item}
                            onClick={() => setSearch(item)}
                            className="flex items-center gap-3 w-full p-3 rounded-xl hover:bg-accent text-left">
                            <Clock3 size={18} />
                            {item}
                        </button>
                    ))}
                </div>
            </div>

            
            <section className="mb-10">
                <div className="flex justify-between items-center mb-3">
                    <h2 className="text-xl font-bold">
                        Artistas em destaque
                    </h2>

                    <button className="text-sm text-primary">
                        Ver mais
                    </button>
                </div>

                <CarouselChannel
                    search={search || "Top Music"}
                />
            </section>

           
            <section className="mb-10">
                <div className="flex justify-between items-center mb-3">
                    <h2 className="text-xl font-bold">
                        Músicas populares
                    </h2>

                    <button className="text-sm text-primary">
                        Ver mais
                    </button>
                </div>

                <CarouselMusic
                    search={search || "Trap"}
                />
            </section>

            
            <section>
                <h2 className="text-xl font-bold mb-4">
                    Em alta agora 
                </h2>

                <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-2xl p-6 bg-purple-600 text-white">
                        <h3 className="font-bold text-lg">
                            Top Brasil
                        </h3>
                    </div>

                    <div className="rounded-2xl p-6 bg-green-600 text-white">
                        <h3 className="font-bold text-lg">
                            Funk Hits
                        </h3>
                    </div>

                    <div className="rounded-2xl p-6 bg-blue-600 text-white">
                        <h3 className="font-bold text-lg">
                            Trap 2026
                        </h3>
                    </div>

                    <div className="rounded-2xl p-6 bg-red-600 text-white">
                        <h3 className="font-bold text-lg">
                            Viral TikTok
                        </h3>
                    </div>
                </div>
            </section>
        </div>
    );
}