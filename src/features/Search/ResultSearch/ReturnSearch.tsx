import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Header } from "@/shared/Header/Header";
import { useEffect, useState } from "react";
import { SearchMusic } from "./Service";
import { useNavigate, useSearchParams } from "react-router";

export function ReturnSearch() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [musicArray, setMusicArray] = useState<any[]>([]);

  useEffect(() => {
    const loadMusics = async () => {
      try {
        const query = searchParams.get("q");

        if (!query) return;

        const response = await SearchMusic(query);
        setMusicArray(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    loadMusics();
  }, [searchParams]);

  return (
    <>
      <Header />

      {musicArray.map((music, index) => {
        const thumb = music.thumbnails?.[0] ?? "";

        return (
          <button
            key={music.id ?? index}
            className="w-full text-left"
            onClick={() =>
              navigate(
                `/play?id=${music.id}&title=${encodeURIComponent(
                  music.title
                )}&thumb=${encodeURIComponent(thumb)}`
              )
            }
          >
            <Card className="w-full p-0 rounded-none overflow-hidden border-zinc-800 bg-zinc-950 transition-all duration-300 hover:-translate-y-0.5 hover:border-zinc-700 hover:shadow-xl hover:shadow-black/40">
              <CardContent className="relative p-0">
                {thumb && (
                  <img
                    src={thumb}
                    alt={music.title}
                    className="aspect-video w-full rounded-none object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              </CardContent>

              <CardFooter className="relative flex items-start gap-4 border-0 bg-zinc-950 py-4">
                {thumb && (
                  <img
                    src={thumb}
                    alt={music.channel}
                    className="h-16 w-16 rounded-full border-4 border-zinc-950 object-cover shadow-lg"
                  />
                )}

                <div className="flex-1 overflow-hidden">
                  <h3 className="line-clamp-2 text-[95%] font-semibold leading-snug text-white">
                    {music.title}
                  </h3>

                  <p className="mt-1 text-[80%] font-medium text-zinc-400">
                    {music.channel}
                  </p>
                </div>
              </CardFooter>
            </Card>
          </button>
        );
      })}
    </>
  );
}