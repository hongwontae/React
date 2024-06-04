/* eslint-disable react/prop-types */
function HomeTropies({ toggle }) {
  return (
    <>
      <div className="mb-20">{toggle && <h1>Hello world</h1>}</div>
    </>
  );
}

export default HomeTropies;
