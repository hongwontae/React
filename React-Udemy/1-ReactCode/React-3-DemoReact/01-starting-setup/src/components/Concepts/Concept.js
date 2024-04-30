function Concept(props) {

    console.log(props);

  return (
    <li className="concept">
      <img src={props.cp.image} alt={props.cp.title} />
      <h2>{props.cp.title}</h2>
      <p>{props.cp.description}</p>
    </li>
  );
}

export default Concept;
