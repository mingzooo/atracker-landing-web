import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/landing/main";
import Terms from "../pages/term/terms";
import UserTerm from "../pages/term/userTerm";

const RootRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/terms/user" element={<UserTerm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RootRoute;
