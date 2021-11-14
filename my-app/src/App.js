import "./App.css";
import MainLayout from "./pages/main/MainLayout";
import Dashboard from "./pages/dashboard/Dashboard";
import Dashboard2 from "./pages/dashboard/Dashboard2";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <MainLayout>
        <BrowserRouter>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard2" element={<Dashboard2 />}></Route>
          </Routes>
        </BrowserRouter>
      </MainLayout>
    </div>
  );
}

export default App;
