import { Routes, Route } from "react-router"
import { Home } from "./features/Home/Home"
import { Search } from "./features/Search/Search"
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/search" element={<Search/>} />
      </Routes>

    </>
  )
}

export default App
