import { Routes, Route } from "react-router-dom";
import './App.scss'
import HomePage from './Pages/HomePage';
import LearnPage from "./Pages/LearnPage";
import { ProjectContextProvider } from "./Context/ProjectContext";
import UnitContentPage from "./Pages/UnitContentPage";
import { MathJaxContext } from "better-react-mathjax";
function App() {

  const config = {
    loader: { load: ["[tex]/html"] },
    tex: {
      packages: { "[+]": ["html"] },
      inlineMath: [
        ["$", "$"],
        ["\\(", "\\)"]
      ],
      displayMath: [
        ["$$", "$$"],
        ["\\[", "\\]"]
      ]
    }
  };
  return (
    <ProjectContextProvider>
      <MathJaxContext config={config}>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/learn' element={<LearnPage />} />
        <Route path='/unitContent/:id' element={<UnitContentPage/>} />
      </Routes>
      </MathJaxContext>
    </ProjectContextProvider>
  );
}

export default App;
