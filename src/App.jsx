import { HashRouter as Router, Routes, Route } from "react-router-dom";
import HOMEPAGE from "./pages/homepage/HOMEPAGE";
import Dashboard from "./pages/Dashboard/Dashboard";
import { DataContext } from "./context/DataContextProvider";
import { useContext } from "react";

function App() {
  const { trackData } = useContext(DataContext);
  console.log("trackData is =>", trackData);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HOMEPAGE />} />
          <Route
            path="/dashboard"
            element={trackData ? <Dashboard /> : <HOMEPAGE />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
