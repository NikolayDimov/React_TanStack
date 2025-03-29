import { Route, Routes } from "react-router";
import { routes } from "./static/routes";
import GlobalStyles from "./utils/GlobalStyles";
import HomePage from "./components/HomePage/HomePage";
import HtmlTask from "./components/HtmlTask/HtmlTask";
import CssTask from "./components/CssTask/CssTask";
import ReactTask from "./components/ReactTask/ReactTask";

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path={routes.home} element={<HomePage />} />
        <Route path={routes.htmlTaks} element={<HtmlTask />} />
        <Route path={routes.cssTask} element={<CssTask />} />
        <Route path={routes.reactTask} element={<ReactTask />} />
      </Routes>
    </>
  );
}

export default App;
