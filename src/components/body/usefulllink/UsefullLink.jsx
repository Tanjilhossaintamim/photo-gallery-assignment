import { FaGoogle, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import Link from "./Link";


const UsefullLink = () => {
  return (
    <section className="link-wrapper">
      <div className="main-container py-7">
        <div className="link-container ml-6 md:ml-0 flex flex-wrap justify-center md:justify-between items-center border-b border-gray-600 pb-8">
          <div className="flex flex-col gap-4 w-1/2 mb-6 md:mb-0">
            <h1 className="text-xl font-bold text-white">
              Contact information
            </h1>
            <p className="text-color-font">
              Lorem ipsum dolor sit amet, consectetur elit. <br /> Nihil sit
              dicta, commodi maxime provident quidem non, amet.
            </p>
            <div className="flex justify-start gap-3">
              <div className="icon">
                <a href="https://www.facebook.com/innosent.boy.Iam" target="_blank"><FaFacebookF /></a>
                
              </div>
              <div className="icon">
                <FaTwitter />
              </div>
              <div className="icon">
                <FaGoogle />{" "}
              </div>
              <div className="icon">
                <FaInstagram />
              </div>
            </div>
          </div>
          <Link
            heading={"Useful links"}
            link1={"About us"}
            link2={"Services"}
            link3={"Blog Posts"}
            link4={"Pricing plans"}
          />
          <Link
            heading={"Page links"}
            link1={"Why"}
            link2={"About us"}
            link3={"Photographers"}
            link4={"Pricing plans"}
          />
          <Link
            heading={"Help"}
            link1={"Privacy policy"}
            link2={"Support"}
            link3={"Terms & conditions"}
            link4={"License and uses"}
          />
          {/* .......... */}
        </div>
        <p className="text-center text-lg py-5">
          &copy; copyright by{" "}
          <a
          target="_blank"
            href="https://www.facebook.com/innosent.boy.Iam"
            className="text-color-red"
          >
            Tanjil Hossain
          </a>
        </p>
      </div>
    </section>
  );
};

export default UsefullLink;
