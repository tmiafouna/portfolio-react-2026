import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { SailingLoc } from "./components/projects/SailingLoc"
import { Patinette } from "./components/projects/Patinette"
import { Salubrite } from "./components/projects/Salubrite"
import { Blog } from "./components/projects/Blog"
import { NotFound } from "./pages/NotFound"
import { useEffect } from 'react'

function App() {
  useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (!storedTheme || storedTheme !== "light") {
            localStorage.setItem("theme", "dark");
            document.documentElement.classList.add("dark");
        }
    }, []);
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
