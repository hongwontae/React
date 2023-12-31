const Cool = (props)=>{
  console.log(props)
  return (
    <div>
      {props.title}
    </div>
  )
}
const CORE_CONCEPTS = [
  {
    title: 'Components',
    description:
      'The core UI building block - compose the user interface by combining multiple components.',
  },
  {
    title: 'JSX',
    description:
      'Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.',
  },
  {
    title: 'Props',
    description:
      'Make components configurable (and therefore reusable) by passing input data to them.',
  },
  {
    title: 'State',
    description:
      'React-managed data which, when changed, causes the component to re-render & the UI to update.',
  },
];

function App() {

  return (
    <div>
      <Cool {...CORE_CONCEPTS[0]}></Cool>
      <Cool {...CORE_CONCEPTS[1]}></Cool>
      <Cool {...CORE_CONCEPTS[2]}></Cool>
      <Cool {...CORE_CONCEPTS[3]}></Cool>
    </div>
  );
}

export default App;
