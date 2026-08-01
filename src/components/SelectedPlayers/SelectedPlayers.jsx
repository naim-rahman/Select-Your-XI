import SelectedCard from "../SelectedCard/SelectedCard";

export default function SelectedPlayers({ purchasedPlayers, removePlayer }) {
  console.log(purchasedPlayers);
  return (
    <>
      <div className="max-w-300 mx-auto">
       {
        purchasedPlayers.map(player =><SelectedCard removePlayer={removePlayer} player={player}></SelectedCard>)
       }
      </div>
    </>
  );
}
