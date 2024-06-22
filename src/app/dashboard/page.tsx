import Hero from "../_components/hero";

const players = [
  { name: "Kalle", points: 10 },
  { name: "Pelle", points: 20 },
  { name: "Olle", points: 30 },
  { name: "Nisse", points: 40 },
  { name: "Bosse", points: 50 },
];

export default function Dashboard() {
  return (
    <>
      <Hero />

      <div className=" grid grid-cols-1 gap-4 py-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="grid grid-cols-1 border p-4">
          <h2 className="text-2xl font-bold text-white">Topplista</h2>
          <ol className="grid w-full gap-y-4">
            {players.map((player, index) => (
              <li key={index} className="rounded-lg bg-input p-4">
                <h3>{player.name}</h3>
                <p>{player.points}</p>
              </li>
            ))}
          </ol>
        </div>
        <div className="rounded-lg border p-4 ">
          <h2 className="text-2xl font-bold text-white">Skapa nytt tips</h2>
          <form>
            <div className="grid grid-cols-1 gap-4">
              <label className="text-white">Titel</label>
              <input
                type="text"
                className="w-full rounded-lg bg-input p-2"
                placeholder="Titel"
              />
              <label className="text-white">Beskrivning</label>
              <textarea
                className="w-full rounded-lg bg-input p-2"
                placeholder="Beskrivning"
              />
              <label className="text-white">Bild</label>
              <input
                type="file"
                className="w-full rounded-lg bg-input p-2"
                placeholder="Bild"
              />
              <button className="w-full rounded-lg bg-secondary p-2 text-white">
                Skapa
              </button>
            </div>
          </form>
        </div>
        <div className="rounded-lg border p-4 ">
          <h2 className="text-2xl font-bold text-white">Ditt senaste tips</h2>
          <div className="grid grid-cols-1 gap-4">
            <div className="rounded-lg bg-input p-4">
              <h3 className="text-white">Titel</h3>
              <p className="text-white">Beskrivning</p>

              <button className="rounded-lg bg-secondary p-2 text-white">
                Redigera
              </button>

              <button className="rounded-lg bg-red-500 p-2 text-white">
                Radera
              </button>

              <button className="rounded-lg bg-secondary p-2 text-white">
                Publicera
              </button>
            </div>
          </div>
        </div>
        <div className="rounded-lg border p-4 ">
          <h2 className="text-2xl font-bold text-white">Dina senaste tips</h2>
          <div className="grid grid-cols-1 gap-4">
            <div className="rounded-lg bg-input p-4">
              <h3 className="text-white">Titel</h3>
              <p className="text-white">Beskrivning</p>
            </div>
            <div className="rounded-lg bg-input p-4">
              <h3 className="text-white">Titel</h3>
              <p className="text-white">Beskrivning</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
