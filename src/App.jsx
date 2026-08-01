import { Suspense, useState } from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";
import Navbar from "./components/Navaber/Navbar";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";

const fetchPlayers = async () => {
  const res = await fetch("/player.json");
  return res.json(); 
};
const playerPromise = fetchPlayers();

// Main Function
function App() {
  const [toggle, setToggle] = useState(true);
  const [availableBalance, setAvailableBalance] = useState(100000000);
  const [purchasedPlayers, setPurchasedPlayers] = useState([]);

  // Remove Player
  const removePlayer = (p) => {
    const filteredData = purchasedPlayers.filter((ply) => ply.id !== p.id);
    console.log(filteredData);
    setPurchasedPlayers(filteredData);
    setAvailableBalance(
      availableBalance +
        parseInt(p.price.split("USD").join("").split(".").join("")),
    );
  

  return (
    <>
      <Navbar availableBalance={availableBalance}></Navbar>
      <div className="max-w-300 mx-auto flex justify-between items-center mb-5">
        <h1 className="text-2xl font-bold">
          {toggle
            ? "Available Players"
            : `Selected Players(${purchasedPlayers.length}/6)`}
        </h1>
        <div className="font-bold">
          <button
            onClick={() => setToggle(true)}
            className={`border-r-0 p-3 px-4 border border-gray-400 rounded-l-2xl 
              ${toggle === true ? "bg-[#E7FE29]" : ""}`}
          >
            Available
          </button>
          <button
            onClick={() => setToggle(false)}
            className={`border-l-0 p-3 px-4 border border-gray-400 rounded-r-2xl 
              ${toggle === false ? "bg-[#E7FE29]" : ""}`}
          >
            Selected <span>({purchasedPlayers.length})</span>
          </button>
        </div>
      </div>

      {toggle === true ? (
        <Suspense
          fallback={<span className="loading loading-dots loading-xl"></span>}
        >
          <AvailablePlayers
            purchasedPlayers={purchasedPlayers}
            setPurchasedPlayers={setPurchasedPlayers}
            availableBalance={availableBalance}
            setAvailableBalance={setAvailableBalance}
            playerPromise={playerPromise}
          ></AvailablePlayers>
        </Suspense>
      ) : (
        <SelectedPlayers
          removePlayer={removePlayer}
          purchasedPlayers={purchasedPlayers}
        ></SelectedPlayers>
      )}

      <ToastContainer/>
    </>
  );
}

export default App;
