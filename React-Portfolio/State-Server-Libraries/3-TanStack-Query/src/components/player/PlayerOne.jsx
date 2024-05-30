/* eslint-disable react/prop-types */
function PlayerOne({ title, email, body, id }) {
  return (
    <>
      <div>
        <h1>{title}</h1>
        <span>{id}</span>
        <div>{email}</div>
        <div>{body}</div>
      </div>
    </>
  );
}

export default PlayerOne;
