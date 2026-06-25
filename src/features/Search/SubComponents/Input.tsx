import { Search as SearchIcon } from "lucide-react";

import { InputGroupInput, InputGroup, InputGroupAddon } from "@/components/ui/input-group";


export function Input() {

    return (
        <>
            <div className="flex flex-col justify-center w-10/12 mt-6 mb-4">
                <InputGroup
                    className="
                    border-zinc-500 
                    mx-8
                    bg-zinc-400
                    transition-all
                    duration-300
                    " >

                    <InputGroupInput
                        className="
                        placeholder:text-zinc-950
                        transition-all
                        duration-300
                        focus:scale-[1.02]
                        focus:placeholder:text-zinc-500
  "
                        placeholder="Search"
                    />
                    <InputGroupAddon>
                        <SearchIcon className="text-black  focus:size-20" />
                    </InputGroupAddon>
                    <InputGroupAddon className="" align={"inline-end"}>

                    </InputGroupAddon>
                </InputGroup>

                
            </div>
        </>
    )

}