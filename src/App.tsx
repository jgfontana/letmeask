import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";

import { 
  BrowserRouter as Router,
  Routes,
  Route 
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms/new" element={<NewRoom />} />
      </Routes>
    </Router>
  );
}

export default App;
