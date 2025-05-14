import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/index";
import { Dashboard } from "./Components/Dashboard/index";
import { MainHeaderBackground } from "./Components/Background";
import { MainHeader } from "./Components/MainHeader";

function App() {
  return (
    <div className="min-h-screen  bg-blue-100 text-white font-serif">
      <MainHeaderBackground />
      <MainHeader />
      <div className="relative mt-40">
        <Provider store={store}>
          <Router>
            <Routes>
              <Route path="/" element={<Dashboard />} />
            </Routes>
          </Router>
        </Provider>
      </div>
    </div>
  );
}

export default App;
