import { Routes, Route } from "react-router"
import { Home } from "./features/Home/Home"
import { Search } from "./features/Search/Search"
import { Player } from "./features/Player/Player"
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/search" element={<Search/>} />
        <Route path="/play" element={<Player/>} />
      </Routes>

    </>
  )
}

export default App
