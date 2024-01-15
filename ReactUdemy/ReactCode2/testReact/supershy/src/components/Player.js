const Player = ({ data, onChangeState }) => {
  console.log(data);

  return (
    <>
      <ul>
        {data.items.map((ele, idx, arr) => {
          return (
            <>
              <div key={idx}>
                <li>{ele.name}</li>
                <button onClick={()=>onChangeState(idx)}>Click Me!</button>
              </div>
              {data.name}
            </>
          );
        })}
      </ul>
    </>
  );
};

export default Player;
