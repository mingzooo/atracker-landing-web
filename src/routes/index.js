import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/landing/main";
import Terms from "../pages/term/terms";

const RootRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RootRoute;
