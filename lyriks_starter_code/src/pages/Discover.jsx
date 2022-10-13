import { Error, Loader, SongCard } from "../components";
import { genres } from "../assets/constants";
import { useGetTopChartQuery } from "../redux/services/ShazamCore";
const Discover = () => {
  const { data, isFetching, error } = useGetTopChartQuery;
  if (isFetching) return <Loader title="Loading songs...." />;
  return (
    <div>
      <div className="flex flex-col">
        <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
          <h2 className="font-bold text-3xl text-white text-left">Discover</h2>
          <select
            name=""
            id=""
            className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5">
            {genres.map((genre, index) => {
              return <option>{genre.value}</option>;
            })}
          </select>
        </div>
      </div>
    </div>
  );
};
export default Discover;
