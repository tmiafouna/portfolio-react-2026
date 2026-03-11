import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { SailingLoc } from "./pages/SailingLoc"
import { Patinette } from "./pages/Patinette";
import { Salubrite } from "./pages/Salubrite";
import { Blog } from "./pages/Blog";
import { NotFound } from "./pages/NotFound"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/projects/sailingloc" element={<SailingLoc />} />
          <Route path="/projects/patinette" element={<Patinette />} />
          <Route path="/projects/salubrite" element={<Salubrite />} />
          <Route path="/projects/blog" element={<Blog />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
