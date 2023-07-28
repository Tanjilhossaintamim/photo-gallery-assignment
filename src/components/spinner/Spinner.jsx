import "./spinner.css";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center w-96 h-96 mx-auto">
      <div className="lds-hourglass"></div>
    </div>
  );
};

export default Spinner;
