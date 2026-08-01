import { useState } from "react";
import flagImg from "../../assets/report-1.svg";
import userImg from "../../assets/user-1.svg";
import { toast } from "react-toastify";

export default function PlayerCard({
  purchasedPlayers,
  setPurchasedPlayers,
  availableBalance,
  setAvailableBalance,
  player,
}) {
  const [isSelected, setIsSelected] = useState(false);

  const handleSelected = (playerData) => {
    const playerPrice = parseInt(
      playerData.price.split("USD").join("").split(".").join(""),
    );

    if (availableBalance < playerPrice) {
      toast("Not Enough Money!!");
      return;
    }

    if (purchasedPlayers.length === 6) {
      toast("6 Player already selected!!");
      return;
    }

    setIsSelected(true);
    setAvailableBalance(availableBalance - playerPrice);
    setPurchasedPlayers([...purchasedPlayers, playerData]);

    toast("Player purchased!");
  };

  return (
    <>
      <div className="card bg-base-100 w-96 shadow-sm p-4">
        <figure>
          <img
            className="w-full h-70 object-cover"
            src={player.playerImage}
            alt="Shoes"
          />
        </figure>
        <div className="mt-5">
          <div className="flex">
            <img src={userImg} alt="#" />
            <h2 className="card-title ml-2">{player.playerName}</h2>
          </div>
          <div className="flex justify-between mt-5 border-b border-gray-300 pb-2">
            <div className="flex items-center gap-2">
              <img className="w-5 h-5" src={flagImg} alt="" />
              <span>{player.playerCountry}</span>
            </div>
            <button className="btn">{player.playingRole}</button>
          </div>

          <div className="flex justify-between font-bold">
            <span>Rating</span>
            <span>{player.rating}</span>
          </div>

          <div className="flex justify-between mt-5">
            <span className="font-bold">{player.battingStyle}</span>
            <span>{player.bowlingStyle}</span>
          </div>

          <div className="card-actions mt-5 flex justify-between items-center">
            <p className="font-bold">Price: ${player.price}</p>
            <button
              onClick={() => {
                handleSelected(player);
              }}
              disabled={isSelected}
              className="btn btn-primary"
            >
              {isSelected ? "Selected" : "Choose Player"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
