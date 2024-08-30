import { useRef, useState } from "react";

export default function Player() {
  const [playerName, setPlayerName] = useState(null);
  const playerNameInput = useRef();

  const handleSetName = () => {
    setPlayerName(playerNameInput.current.value)
  }

  return (
    <section id="player">
      <h2>Welcome {playerName ?? 'unknown entity'}</h2>
      <p>
        <input ref={playerNameInput} type="text" />
        <button onClick={handleSetName}>Set Name</button>
      </p>
    </section>
  );
}
