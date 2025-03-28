import { HtmlTask } from "./components/HtmlTask";
import { CssTask } from "./components/CssTask";
import { ReactTask } from "./components/ReactTask";
import { Route, Routes } from "react-router";
import { routes } from "./static/routes";
import HomePage from "./components/HomePage";
import GlobalStyles from "./utils/GlobalStyles";



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
