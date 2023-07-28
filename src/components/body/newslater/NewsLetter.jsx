const NewsLetter = () => {
  return (
    <section className="n-wrapper">
      <div className="main-container">
        <div className="flex flex-col md:flex-row justify-between items-center p-6 border border-gray-700">
          <div className="flex flex-col justify-start gap-1">
            <span className="text-2xl md:text-4xl text-white font-medium">
              Subscribe our newsletter
            </span>
            <span>We’re a team of non-cynics who truly care for our work.</span>
          </div>
          <div className="mt-5 md:mt-0 overflow-hidden md:overflow-visible">
            <div className="w-full h-12 relative flex justify-center">
              <input type="text" placeholder="Enter Your Email " className="text-xl text-grey-700 border-none outline-none py-3 px-2 bg-[#DDDDDD33]"/>
              <button className="button rounded-none hover:bg-yellow-600">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
