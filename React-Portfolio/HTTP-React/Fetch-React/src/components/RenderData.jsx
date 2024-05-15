/* eslint-disable react/prop-types */
function RenderData({ title, id, onDelete }) {
  return (
    <>
      <div style={{display : 'flex', justifyContent : 'center', alignItems: 'center'}}>
        <p style={{ marginTop: 50 }}>{title}</p>
        <button onClick={()=>onDelete(id)}>{id}</button>
      </div>
    </>
  );
}

export default RenderData;
