export default function SelectedCard({ player, removePlayer }) {
  console.log(player);
  
  const handleRemove = () => {
    removePlayer(player);
  };

  return (
    <>
      <div className="border border-gray-300 p-2 flex justify-between items-center rounded-xl mb-4">
        <div className="flex items-center">
          <img
            src={player.playerImage}
            alt="#"
            className="h-12 w-12 rounded-xl object-cover"
          />
          <div className="ml-3">
            <h1 className="font-bold">{player.playerName}</h1>
            <p className="text-xs text-gray-500">{player.battingStyle}</p>
          </div>
        </div>
        <div>
          <img
            onClick={handleRemove}
            className="bg-amber-50 rounded-xl"
            src="https://i.ibb.co/d0hXhwY5/Frame-1.jpg"
            alt="#"
          />
        </div>
      </div>
    </>
  );
}
