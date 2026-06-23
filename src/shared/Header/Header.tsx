import { Search, User } from "lucide-react"
import { useNavigate } from "react-router"

export function Header() {

    const navigate = useNavigate()

    return (
        <div className="flex justify-between  items-center bg-gray-950 p-1 shadow-sm" >
            <button  onClick={() => navigate("/")}>
                <h1 className="mx-3 text-3xl font-bold text-orange-600 sm:text-5xl" >OpenMusic</h1>
            </button>


            <div className="mx-5 flex items-center ">

                <button onClick={() => navigate("/search")} className="mx-10 sm:mx-20">
                    <Search className="sm:w-10 h-10" ></Search>
                </button>

                <button className="sm:mx-20">
                    <User className="sm:w-10 h-10"></User>
                </button>



            </div>


        </div>
    )
}