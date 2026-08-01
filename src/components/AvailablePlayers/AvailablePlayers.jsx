import { use } from "react";
import PlayerCard from "../PlayerCard/PlayerCard";

export default function AvailablePlayer({
  purchasedPlayers,
  setPurchasedPlayers,
  playerPromise,
  setAvailableBalance,
  availableBalance,
}) {
  const playerData = use(playerPromise);
  // console.log(playerData);

  return (
    <>
      <div className="max-w-300 mx-auto grid md:grid-cols-3 grid-cols-1 gap-5">
        {playerData.map((player) => (
          <PlayerCard
            purchasedPlayers={purchasedPlayers}
            setPurchasedPlayers={setPurchasedPlayers}
            availableBalance={availableBalance}
            setAvailableBalance={setAvailableBalance}
            player={player}
          ></PlayerCard>
        ))}

        {/* <div className="card bg-base-100 w-96 shadow-sm p-4">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
            />
          </figure>
          <div className="mt-5">
            <div className="flex">
              <img src={userImg} alt="#" />
              <h2 className="card-title ml-2">Viral Kohli</h2>
            </div>
            <div className="flex justify-between mt-5 border-b border-gray-300 pb-2">
              <div className="flex items-center gap-2">
                <img className="w-5 h-5" src={flagImg} alt="" />
                <span>India</span>
              </div>
              <button className="btn">All Rounder</button>
            </div>

            <div className="flex justify-between font-bold">
              <span>Rating</span>
              <span>5</span>
            </div>

            <div className="flex justify-between mt-5">
              <span className="font-bold">Left Hand Bat</span>
              <span>Right Hand Bowl</span>
            </div>

            <div className="card-actions mt-5 flex justify-between items-center">
              <p className="font-bold">Price: $1500000</p>
              <button className="btn btn-primary">Choose Player</button>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}
