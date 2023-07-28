import BodyComponents from "./body/BodyComponents";
import Header from "./header/Header";
import NewsLetter from "./body/newslater/NewsLetter";
import UsefullLink from "./body/usefulllink/UsefullLink";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { checkLogin } from "../redux/authenicationSlice";

const MainComponents = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkLogin());
  }, []);
  return (
    <div className="bg-color-black text-color-white w-full h-full">
      <Header />
      <BodyComponents />
      <NewsLetter />
      <UsefullLink />
    </div>
  );
};

export default MainComponents;
