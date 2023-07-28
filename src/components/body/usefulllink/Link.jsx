import { useNavigate } from "react-router-dom";

const Link = ({ heading, link1, link2, link3, link4 }) => {
  const navigate = useNavigate();
  const handelClick = (link) => {
    navigate(`/${link}`);
  };
  return (
    <div className="flex flex-col gap-2 justify-start w-1/2 md:w-auto">
      <h1 className="text-xl font-bold text-white pb-3">{heading}</h1>
      <span
        className="cursor-pointer hover:text-white"
        onClick={() => handelClick(link1)}
      >
        {link1}
      </span>
      <span
        className="cursor-pointer hover:text-white"
        onClick={() => handelClick(link2)}
      >
        {link2}
      </span>
      <span
        className="cursor-pointer hover:text-white"
        onClick={() => handelClick(link3)}
      >
        {link3}
      </span>
      <span
        className="cursor-pointer hover:text-white"
        onClick={() => handelClick(link4)}
      >
        {link4}
      </span>
    </div>
  );
};

export default Link;
