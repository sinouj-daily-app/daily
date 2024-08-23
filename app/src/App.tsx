import { Home } from './pages/Home/Home';
import { CssVarsProvider } from "@mui/joy";
import CssBaseline from "@mui/joy/CssBaseline";

function App() {
  return (
    <CssVarsProvider defaultMode="dark">
      <CssBaseline/>
      <Home/>
    </CssVarsProvider>
  )
}

export default App
