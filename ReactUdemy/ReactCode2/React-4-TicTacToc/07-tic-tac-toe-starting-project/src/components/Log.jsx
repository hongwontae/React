const Log = ({ turns }) => {
  return (
    <ol id="log">
      {turns.map((turn, idx) => {
        return (
          <li key={`${turn.square.row} ${turn.square.col}`}>
            {turn.player} {turn.square.row},{turn.square.col}
          </li>
        );
      })}
    </ol>
  );
};

export default Log;
