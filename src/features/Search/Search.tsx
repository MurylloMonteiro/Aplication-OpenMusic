import { Search as SearchIcon, SlidersHorizontal, Clock3 } from "lucide-react";
import { useState } from "react";

import { InputGroupInput, InputGroup, InputGroupAddon } from "@/components/ui/input-group";

import { CarouselChannel } from "@/shared/CarouselChannels/Carousel";
import { CarouselMusic } from "@/shared/CarouselMusics/Carousel";
import { Input } from "./SubComponents/Input";
import { Recommended } from "./SubComponents/Recommended";
export function Search() {
    const [search, setSearch] = useState("");



    return (
        <>
            <Input></Input>

            <Recommended></Recommended>

        </>
    );
}