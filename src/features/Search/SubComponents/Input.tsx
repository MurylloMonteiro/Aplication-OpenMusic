import { Search as SearchIcon } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

export function Input() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    const query = search.trim();

    if (!query) return;

    navigate(`/result?q=${encodeURIComponent(query)}`);
  };

  return (
    <div className="flex flex-col justify-center w-10/12 mt-6 mb-4">
      <InputGroup className="border-zinc-500 mx-8 bg-zinc-400 transition-all duration-300">
        <InputGroupInput
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
          className="
            placeholder:text-zinc-950
            transition-all
            duration-300
            focus:scale-[1.02]
            focus:placeholder:text-zinc-500
          "
          placeholder="Search"
        />

        <InputGroupAddon
          onClick={handleSearch}
          className="cursor-pointer"
        >
          <SearchIcon className="text-black" />
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
}