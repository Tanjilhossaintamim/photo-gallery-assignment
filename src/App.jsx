import { Provider } from "react-redux";
import "./App.css";
import MainComponents from "./components/MainComponents";
import store from "./redux/store";
import { BrowserRouter } from "react-router-dom";
import ErrorBoundary from "./components/errorboundary/ErrorBoundary";

function App() {
  return (
    <>
      <ErrorBoundary
        fallback={<p>Something wrong please try again letter !</p>}
      >
        <Provider store={store}>
          <BrowserRouter>
            <MainComponents />
          </BrowserRouter>
        </Provider>
      </ErrorBoundary>
    </>
  );
}

export default App;
