import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/index";
import { ErrorFallback } from "./Components/ErrorBoundary/index";
import { ErrorBoundary } from "react-error-boundary";

import AppRoutes from "./Routes/AppRoutes/index";

function App() {
  return (
    <div className="min-h-screen  bg-blue-100 text-white font-serif">
      <Provider store={store}>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Router>
            <AppRoutes />
          </Router>
        </ErrorBoundary>
      </Provider>
    </div>
  );
}

export default App;
