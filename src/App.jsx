import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;

// export default function App() {
//   return (
//     <ReactFlowProvider>
//       <BasicFlow />
//     </ReactFlowProvider>
//   );
// }