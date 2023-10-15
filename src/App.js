import Homepage from "./HomePage/HomePage.jsx";
import Header from "./Header/Header.jsx";
import Community from "./Community/Community.jsx";
import Watch from "./Watch/Watch.jsx";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Homepage />} />
          <Route path="community" element={<Community />} />
          <Route path="watch" element={<Watch />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
