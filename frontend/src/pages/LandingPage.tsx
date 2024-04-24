import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center">
      <div className="pt-8 max-w-screen-lg">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex justify-center">
            <img
              src={"/chessboard.jpeg"}
              alt="Chess Board"
              className="max-w-96"
            />
          </div>
          <div className="pt-16">
            <div className="flex justify-center">
              <h1 className="text-4xl font-bold text-white">
                Play chess online on the #1 Site!
              </h1>
            </div>
            <div className="mt-4 flex justify-center">
              <button
                className="px-8 py-4 text-2xl bg-green-500 hover:bg-green-700 text-white font-bold  rounded"
                onClick={() => navigate("/game")}
              >
                Play Online
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
