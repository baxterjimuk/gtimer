import ToggleTheme from "./ToggleTheme";
import Defaults from "./Defaults";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <HelmetProvider>
      <ToggleTheme />
      <Defaults />
    </HelmetProvider>
  );
}

export default App;