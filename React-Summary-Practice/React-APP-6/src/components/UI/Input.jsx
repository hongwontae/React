function Input({label, id, ...props}) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input name={id} id={id} required {...props}></input>
    </>
  );
}

export default Input;
