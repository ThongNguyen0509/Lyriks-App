import { loader } from "../assets";

const Loader = ({ title }) => {
  return (
    <div className="w-full flex justify-center items-center flex-col">
      <img src={loader} alt=";oader" className="w-32 h-32 object-contain" />
      <h1>{title || "Loading..."}</h1>
    </div>
  );
};

export default Loader;
