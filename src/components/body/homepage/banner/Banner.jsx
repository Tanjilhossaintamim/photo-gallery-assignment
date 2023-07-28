import { BsCamera, BsSearch } from "react-icons/bs";

const Banner = () => {
  return (
    <section className="b-wrapper">
      <div className="main-container flex justify-center  items-center relative">
        <div className="text-center mt-24 flex flex-col gap-5 ">
          <span className="flex justify-center text-3xl">
            <BsCamera />
          </span>
          <span className="text-2xl md:text-5xl leading-relaxed font-bold">
            Capturing the moments that <br /> captivate your heart.
          </span>
          <div className="flex flex-col md:flex-row justify-center md:space-x-7 flex-wrap">
            <input
              type="text"
              placeholder="Search here ...."
              className="py-2 px-3 w-full md:w-96 text-black border-none outline-none rounded"
            />
            <button className="button w-28 mt-6  md:mt-0 text-center flex justify-center">
              <BsSearch />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
