import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./homepage/HomePage";
import PhotoDetail from "./homepage/photo/PhotoDetail";
import AuthForm from "../auth/AuthForm";
import { useSelector } from "react-redux";

const BodyComponents = () => {
  const token = useSelector((state) => state.authenication.token);

  let route = null;
  if (token == null) {
    route = (
      <Routes>
        <Route path="/authenication" element={<AuthForm />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/photo-details" element={<PhotoDetail />} />
        <Route path="*" element={<Navigate to={"/"} />}></Route>
      </Routes>
    );
  } else {
    route = (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/photo-details" element={<PhotoDetail />} />
        <Route path="*" element={<Navigate to={"/"} />}></Route>
      </Routes>
    );
  }
  return <>{route}</>;
};

export default BodyComponents;
