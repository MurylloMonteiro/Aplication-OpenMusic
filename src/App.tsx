import { Routes, Route } from "react-router"
import { Home } from "./features/Home/Home"
import { Search } from "./features/Search/Search"
import { Player } from "./features/Player/Player"
import { ReturnSearch } from "./features/ReturnSearch/ReturnSearch"
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/search" element={<Search/>} />
        <Route path="/play" element={<Player/>} />
        <Route path="/return" element={<ReturnSearch/>} />
        
      </Routes>

    </>
  )
}

export default App
