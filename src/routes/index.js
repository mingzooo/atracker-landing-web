import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/landing/main";

const RootRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RootRoute;
